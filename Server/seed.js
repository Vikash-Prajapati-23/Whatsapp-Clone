import dotenv from "dotenv";
import path from "path";
import fs from "fs";
import { ConnectToMongoURL } from "./connectToMongoDB/connectToMongoDB.js"; 
import { messageModel } from "./models/messageModel.js";

dotenv.config();

async function seedMessages() {
  try {
    await ConnectToMongoURL(process.env.mongoURL);

    const dataDir = path.join(process.cwd(), "Data");
    const files = fs.readdirSync(dataDir).filter(file => file.endsWith(".json"));

    for (const file of files) {
      const filePath = path.join(dataDir, file);
      const rawData = fs.readFileSync(filePath);
      const jsonData = JSON.parse(rawData);

      const change = jsonData?.metaData?.entry?.[0]?.changes?.[0]?.value;
      if (!change) {
        console.warn(`Skipping file ${file} — invalid structure`);
        continue;
      }

      const contact = change?.contacts?.[0] || {};
      const msg = change?.messages?.[0] || {};
      const metadata = change?.metadata || {};

      if (!msg.id) {
        console.warn(`Skipping file ${file} — missing message ID`);
        continue;
      }

      // Avoid duplicates
      const exists = await messageModel.findOne({ messageId: msg.id });
      if (exists) {
        console.log(`Skipping duplicate message: ${msg.id}`);
        continue;
      }

      const direction = msg.from === contact.wa_id ? "inbound" : "outbound";

      const processedMsg = {
        wa_id: contact.wa_id,
        name: contact.profile?.name || "",
        from: msg.from,
        messageId: msg.id,
        timestamp: new Date(Number(msg.timestamp) * 1000),
        text: msg.text?.body || "",
        type: msg.type,
        displayPhoneNumber: metadata.display_phone_number,
        phoneNumberId: metadata.phone_number_id,
        status: "sent",
        direction
      };

      await messageModel.create(processedMsg);
      console.log(`Inserted message: ${msg.id}`);
    }

    console.log("✅ All files inserted successfully");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

seedMessages();
