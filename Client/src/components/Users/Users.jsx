import { useState } from "react";
import SideNav from "../SideNav/SideNav";
import NewChat from "./NewChat/NewChat";
import Chat from "./Chat/Chat";
import Peoples from "./Peoples/Peoples";
import StartChat from "./Chat/StartChat";
import axios from "axios";

const baseUrl = "http://localhost:3100";

const Users = () => {
  const [newChat, setNewChat] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [users, setUsers] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState(null);
  const [messages, setMessages] = useState([]);

  const fetchMessages = async () => {
    try {
      const res = await axios.get(`${baseUrl}/api/get-messages/user-data`, {
        credentials: "include",
      });
      setUsers(Array.isArray(res.data) ? res.data : []);
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

 const fetchUserMessages = async (wa_id) => {
  try {
    const res = await axios.get(
      `${baseUrl}/api/get-messages/user-data/${wa_id}`,
      { withCredentials: true }
    );

    // If the backend already returns an array of payloads
    const allMessages = res.data.flatMap(payload => formatMessages(payload));
    setMessages(allMessages);
  } catch (error) {
    console.error("Error fetching user messages:", error);
  }
};

  return (
    <section className="">
      <SideNav />

      <Peoples
        setNewChat={setNewChat}
        setShowChat={setShowChat}
        fetchMessages={fetchMessages}
        users={users}
        setSelectedUsers={(user) => {
          setSelectedUsers(user);
          fetchUserMessages(user.wa_id);
        }}
      />

      {newChat && <NewChat newChat={newChat} setNewChat={setNewChat} />}

      {!showChat ? (
        <Chat />
      ) : (
        <StartChat
          selectedUsers={selectedUsers}
          fetchUserMessages={fetchUserMessages}
          messages={messages}
          setMessages={setMessages}
        />
      )}
    </section>
  );
};

export default Users;
