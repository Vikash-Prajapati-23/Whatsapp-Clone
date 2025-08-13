import { useState } from "react";
import SideNav from "../SideNav/SideNav";
import NewChat from "./NewChat/NewChat";
import Chat from "./Chat/Chat";
import Peoples from "./Peoples/Peoples";
import StartChat from "./Chat/StartChat";

const Users = ({ placeholder }) => {
  const [newChat, setNewChat] = useState(false);
  const [showChat, setShowChat] = useState(false);

  return (
    <section className="">
      <SideNav />

      <Peoples setNewChat={setNewChat} setShowChat={setShowChat} />

      {newChat && <NewChat newChat={newChat} setNewChat={setNewChat} />}

      {!showChat ? (<Chat />) : ( <StartChat /> )}
    </section>
  );
};

export default Users;
