import { useEffect, useRef } from "react";

const StartChat = ({ selectedUsers, messages, fetchUserMessages }) => {
  const messagesEndRef = useRef(null);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (!selectedUsers) return;
    fetchUserMessages(selectedUsers.wa_id);
  }, [selectedUsers]);

  return (
    <div
      style={{
        backgroundImage: `url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png")`,
        backgroundSize: "contain",
        backgroundAttachment: "fixed",
      }}
      className="h-screen flex flex-col md:left-[465px] sm:z-0"
    >
      {/* HEADER */}
      <div className="bg-white shadow-sm fixed lg:left-[515px] md:left-[465px] left-0 lg:w-[64%] md:w-[40%] ">
        <div className="py-3 px-4 flex gap-4 items-center">
          <span className="h-11 w-12 bg-green-500 text-white flex justify-center items-center rounded-full">
            {selectedUsers.name.slice(0, 1)}
          </span>
          <div className="flex-1">
            <span className="block font-normal text-md">
              {selectedUsers.name}
            </span>
            <span className="text-xs text-gray-600">{selectedUsers.from}</span>
          </div>
          <span className="material-symbols-outlined">search</span>
          <span className="material-symbols-outlined">more_vert</span>
        </div>
      </div>

      {/* MESSAGES */}
      <div className="p-4 space-y-2">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${
              msg.from === selectedUsers.wa_id ? "justify-start" : "justify-end"
            }`}
          >
            <div
              className={`px-3 py-2 rounded-lg max-w-xs break-words ${
                msg.from === selectedUsers.wa_id
                  ? "bg-gray-300 text-black"
                  : "bg-green-500 text-white"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* Send message */}
      <div className="fixed bottom-3 lg:left-[515px] md:left-[465px] left-0 lg:mx-2 lg:w-[64%] md:w-[38%] ">
        <div className="flex mx-auto bg-white shadow-md rounded-3xl py-1 px-2 lg:w-[98%] md:w-[100%] lg:ms-0 ms-1 ">
          <div className="bg-transparent hover:bg-gray-200 h-9 w-9 flex justify-center items-center my-auto p-1 rounded-full cursor-pointer">
            <span className="material-symbols-outlined text-gray-500">add</span>
          </div>

          <div className="bg-transparent hover:bg-gray-200 h-9 w-9 flex justify-center items-center my-auto p-1 rounded-full cursor-pointer">
            <span className="material-symbols-outlined text-gray-500">
              add_reaction
            </span>
          </div>

          <input
            placeholder="Type a message"
            className="flex-1 border-0 outline-none py-2 lg:px-3 "
          />
          <div className="bg-transparent hover:bg-gray-200 h-9 w-9 flex justify-center items-center my-auto p-1 rounded-full cursor-pointer">
            <span className="material-symbols-outlined text-gray-500">mic</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartChat;
