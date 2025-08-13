import { useState } from "react";
import SearchBar from "../../SearchBar/SearchBar";

const NewChat = ({ placeholder, newChat, setNewChat }) => {
  const [newChatGroup, setNewChatGroup] = useState([
    {
      iconNAme: "group_add",
      name: "New group",
    },
    {
      iconNAme: "person_add",
      name: "Add contact",
    },
    {
      iconNAme: "groups",
      name: "New community",
    },
  ]);

  return (
    <div
      className={`fixed ${
        newChat ? "left-[65px]" : "left-[0px]"
      } transition-all ease-in-out duration-200 bg-white h-screen w-[450px] border-1 border-gray-300`}
    >
      <div className=" pt-5 px-4">
        <div className="flex items-center gap-5">
          <span
            onClick={() => setNewChat(false)}
            className="material-symbols-outlined cursor-pointer"
          >
            arrow_back
          </span>
          <span className="text-sm cursor-default ">New chat</span>
        </div>
      </div>

      <div className="mt-5 mb-2">
        <SearchBar placeholder={"Search name or number"} />
      </div>

      <div className="px-3 w-full cursor-pointer ">
        {newChatGroup.map((data, index) => (
          <div
            key={index}
            className="flex gap-4 hover:bg-[#f4f2f2] py-3 px-4 rounded-xl "
          >
            <div className="bg-green-500 h-12 w-12 flex justify-center items-center p-1 rounded-full cursor-pointer">
              <span className="material-symbols-outlined"> {data.iconNAme} </span>
            </div>
            <span className="flex items-center"> {data.name} </span>
          </div>
        ))}
      </div>

      <div className="my-7">
        <span className="cursor-default font-semibold text-gray-500 ms-7">
          Contacts on WhatsApp
        </span>
      </div>

      <div className="cursor-pointer mb-7 py-3 px-4 hover:bg-[#f4f2f2] border-none rounded-xl mx-3 group">
        <div className="flex justify-center items-center gap-4">
          <img src="" className="h-9 w-10 rounded-full " alt="" />

          <div className="flex justify-between w-full">
            <div className="flex flex-col">
              <span className="font-semibold text-md ">User Name</span>
              <span className="text-sm text-gray-600">User Message</span>
            </div>
          </div>
        </div>
      </div>

      <span className="ms-7 cursor-default">#</span>
    </div>
  );
};

export default NewChat;
