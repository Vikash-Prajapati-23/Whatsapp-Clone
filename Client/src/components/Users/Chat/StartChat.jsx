const StartChat = () => {
  return (
    <div
      style={{
        backgroundImage: `url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png")`,
        backgroundSize: "contain", // Makes it fill the container
        backgroundAttachment: "fixed", // stays fixed while scrolling
        overflowY: "scroll"
      }}
      className="h-screen"
    >
      {/* Head User chat section.  */}
      <div className="fixed left-[515px] bg-white w-[973px] shadow-sm ">
        <div className="relative py-3 px-4 border-none rounded-xl group">
          <div className="flex justify-center items-center gap-4">
            <img src="image" className="h-9 w-10 rounded-full " alt="" />

            <div className="flex justify-between w-full">
              <div className="flex flex-col">
                <span className="font-normal text-md ">User Name</span>
                <span className="text-xs text-gray-600">User Message</span>
              </div>

              <div className="flex justify-center items-center gap-3 me-1">
                <div className="bg-transparent hover:bg-gray-100 h-9 w-9 flex justify-center items-center p-1 rounded-full cursor-pointer">
                  <span
                    className="material-symbols-outlined relative"
                  >
                    search
                  </span>
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
            </div>
          </div>
        </div>
      </div>

      {/* Message section.  */}
      <div></div>

      {/* Bottom Search bar section.  */}
      <div className="fixed bottom-3 left-[515px] w-[957px] ">
        <div className="flex mx-auto bg-white border-1 hover:border-1 border-transparent hover:border-gray-400 w-[98%] rounded-3xl py-1 px-2">
          <div className="flex justify-start items-center">
            <div className="bg-transparent hover:bg-gray-100 h-9 w-9 flex justify-center items-center p-1 rounded-full cursor-pointer">
              <span
                className="material-symbols-outlined relative"
              >
                add
              </span>
            </div>
            <div className="bg-transparent hover:bg-gray-100 h-9 w-9 flex justify-center items-center p-1 rounded-full cursor-pointer me-2">
              <span
                className="material-symbols-outlined relative"
              >
                add_reaction
              </span>
            </div>

            <input
              placeholder="Type a message"
              className="border-0 outline-none w-[800px] bg-white focus:bg-[#f4f2f2] py-2 text-baseline"
              type="text"
            />

            <div className="bg-transparent hover:bg-gray-100 h-9 w-9 flex justify-center items-center p-1 rounded-full cursor-pointer ms-1">
              <span
                onClick={() => setShowCard((show) => !show)}
                className="material-symbols-outlined relative"
              >
                mic
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartChat;
