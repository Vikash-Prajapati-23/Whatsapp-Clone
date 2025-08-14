import { useEffect, useRef, useState } from "react";
import SearchBar from "../../SearchBar/SearchBar";

const Peoples = ({
  setNewChat,
  setShowChat,
  fetchMessages,
  users,
  setSelectedUsers,
}) => {
  const [showCard, setShowCard] = useState(false);
  const cardRef = useRef(null);

  const uniqueUsers = Array.from(
    new Map(users.map((msg) => [msg.name, msg])).values()
  );

  useEffect(() => {
    function handleCardRef(event) {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        setShowCard(false);
      }
    }
    window.addEventListener("mousedown", handleCardRef);
    return () => window.removeEventListener("mousedown", handleCardRef);
  }, []);

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <div className="bg-white fixed md:left-[65px] h-screen lg:w-[450px] md:w-[90wv] w-full border-1 border-gray-300">
      {/* HEADER */}
      <div className="fixed top-0 lg:w-[450px] md:w-[400px] w-full z-10">
        <div className="flex justify-between py-4 lg:px-5 px-3">
          <span className="text-green-600 font-semibold text-[22px] cursor-default">
            WhatsApp
          </span>
          <div className="flex justify-center items-center cursor-pointer lg:gap-5 gap-2">
            <div
              onClick={() => setNewChat(true)}
              className="bg-transparent hover:bg-gray-100 h-9 w-9 flex justify-center items-center p-1 rounded-full cursor-pointer"
            >
              <span className="material-symbols-outlined">chat_add_on</span>
            </div>
            <div className="bg-transparent hover:bg-gray-100 h-9 w-9 flex justify-center items-center p-1 rounded-full cursor-pointer">
              <span
                onClick={() => setShowCard((show) => !show)}
                className="material-symbols-outlined relative"
              >
                more_vert
              </span>
            </div>
          </div>

          {showCard && (
            <div
              ref={cardRef}
              style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
              className="absolute md:bottom-[-42%] bottom-[-115%] lg:right-[-26%] md:right-6 right-4 bg-white p-2 rounded-xl z-50"
            >
              <div className="border-b-1 pb-1 mb-1 border-gray-200">
                <div
                  onClick={() => setShowCard(false)}
                  className="flex gap-2 py-2 px-3 hover:bg-gray-100 rounded-md text-gray-600 cursor-pointer"
                >
                  <span class="material-symbols-outlined">group_add</span>
                  <div>New group</div>
                </div>

                <div
                  onClick={() => setShowCard(false)}
                  className="flex gap-2 py-2 px-3 hover:bg-gray-100 rounded-md text-gray-600 cursor-pointer"
                >
                  <span class="material-symbols-outlined">star</span>
                  <div>Starred messages</div>
                </div>

                <div
                  onClick={() => setShowCard(false)}
                  className="flex gap-2 py-2 px-3 hover:bg-gray-100 rounded-md text-gray-600 cursor-pointer"
                >
                  <span class="material-symbols-outlined">check_box</span>
                  <div>Select chats</div>
                </div>
              </div>

              <div
                onClick={() => setShowCard(false)}
                className="flex gap-2 py-2 px-3 hover:bg-red-50 hover:text-red-800 rounded-md text-gray-600 cursor-pointer"
              >
                <span class="material-symbols-outlined">logout</span>
                <div>Log out</div>
              </div>
            </div>
          )}
        </div>

        <SearchBar placeholder={"Search or start a new chat"} />

        <div className="md:flex gap-2 my-3 mx-auto hidden bg-transparent w-[90%]">
          <span className="border-1 border-gray-300 hover:bg-gray-100 text-gray-600 flex justify-center items-center py-1 px-3 rounded-2xl ">
            All
          </span>
          <span className="border-1 border-gray-300 hover:bg-gray-100 text-gray-600 flex justify-center items-center py-1 px-3 rounded-2xl ">
            Unread
          </span>
          <span className="border-1 border-gray-300 hover:bg-gray-100 text-gray-600 flex justify-center items-center py-1 px-3 rounded-2xl ">
            Favourites
          </span>
          <span className="border-1 border-gray-300 hover:bg-gray-100 text-gray-600 flex justify-center items-center py-1 px-3 rounded-2xl ">
            Groups
          </span>
        </div>
      </div>

      {/* CONTACT LIST */}
      <div className="md:mt-40 mt-30">
        {uniqueUsers.map((user, index) => (
          <div
            key={`${index}`}
            onClick={() => {
              setShowChat(true);
              setSelectedUsers(user);
            }}
            className="relative cursor-pointer py-3 md:px-4 px-2 hover:bg-[#f4f2f2] border-none rounded-xl md:mx-5 group"
          >
            <div className="flex justify-center items-center md:gap-4 gap-2">
              <span className="h-11 w-13 bg-green-500 text-white flex justify-center items-center rounded-full">
                {" "}
                {user.name.slice(0, 1)}{" "}
              </span>
              <div className="flex justify-between w-full">
                <div className="flex flex-col">
                  <span className="font-normal md:text-md text-sm">
                    {user.name}
                  </span>
                  <span className="md:text-sm text-gray-600 md:text-md text-xs truncate max-w-[200px]">
                    {user.text}
                  </span>
                </div>
                <div className="flex flex-col items-end">
                  <span className="md:text-sm text-xs text-gray-600">
                    {new Date(user.timestamp).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                  <span className="material-symbols-outlined absolute bottom-2 hidden group-hover:block right-[-10px] text-white group-hover:right-3 group-hover:text-gray-500 transition-all duration-200">
                    keyboard_arrow_down
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Peoples;
