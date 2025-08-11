import SideNav from "../SideNav/SideNav";

const Users = () => {
  return (
    <section className="">
      <SideNav />

      <div className="bg-white fixed left-[65px] h-screen w-[450px] border-1 border-gray-300">
        {/* head. where all the list of peoples will be shown to chat with. */}
        <div className="fixed top-0 w-[450px] z-10">
          {/* First quarter. */}
          <div className="flex justify-between py-4 px-5">
            <span className="text-green-600 font-semibold text-[22px] ">
              WhatsApp
            </span>

            <div className="flex justify-center items-center gap-5 me-4">
              <span className="material-symbols-outlined">chat_add_on</span>
              <span className="material-symbols-outlined">more_vert</span>
            </div>
          </div>

          {/* Second Quarter. */}
          <div className="flex mx-auto bg-[#f4f2f2] border-1 hover:border-1 border-transparent hover:border-gray-400 w-[90%] rounded-3xl py-0 px-2">
            <div className="flex justify-start items-center gap-3">
              <span className="ms-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20px"
                  viewBox="0 -960 960 960"
                  width="20px"
                  fill="#434343"
                >
                  <path d="M765-144 526-383q-30 22-65.79 34.5-35.79 12.5-76.18 12.5Q284-336 214-406t-70-170q0-100 70-170t170-70q100 0 170 70t70 170.03q0 40.39-12.5 76.18Q599-464 577-434l239 239-51 51ZM384-408q70 0 119-49t49-119q0-70-49-119t-119-49q-70 0-119 49t-49 119q0 70 49 119t119 49Z" />
                </svg>
              </span>
              <input
                placeholder="Search or start a new chat"
                className="border-0 outline-none bg-[#f4f2f2] focus:bg-[#f4f2f2] py-2 text-baseline"
                type="text"
              />
            </div>
          </div>

          {/* Third Quarter. */}
          <div className="flex gap-3 my-3 mx-auto bg-transparent w-[90%]">
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
              groups
            </span>
          </div>
        </div>

        {/* Middle.  */}
        <div className="relative cursor-pointer mt-40 py-3 px-4 hover:bg-[#f4f2f2] border-none rounded-xl mx-5 group">
          <div className="flex justify-center items-center gap-4">
            <img src="" className="h-9 w-10 rounded-full " alt="" />

            <div className="flex justify-between w-full">
              <div className="flex flex-col">
                <span className="font-semibold text-md ">User Name</span>
                <span className="text-sm text-gray-600">User Message</span>
              </div>

              <div className="flex flex-col">
                <span className="text-sm text-gray-600">Time</span>
                <span className="material-symbols-outlined absolute bottom-2 hidden group-hover:block right-[-10px] text-white group-hover:right-3 group-hover:text-gray-500 transition-all duration-200">
                  keyboard_arrow_down
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* bottom.  */}
        <div className=""></div>
      </div>
    </section>
  );
};

export default Users;
