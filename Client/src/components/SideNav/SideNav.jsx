import React from "react";

const SideNav = () => {
  return (
    <nav className="bg-[#f4f2f2] h-screen w-[65px] fixed ">
      <div className="flex flex-col">
        <div className="p-2 m-2">
          <ul className="flex justify-center mb-4 pb-4 border-b-1 border-gray-400 text-lg space-y-2 items-center flex-col ">
            <li className="bg-transparent hover:bg-gray-200  h-9 w-9 flex justify-center items-center p-1 rounded-full cursor-pointer">
              <span class="material-symbols-outlined text-gray-500">chat</span>
            </li>

            <li className="bg-transparent hover:bg-gray-200  h-9 w-9 flex justify-center items-center p-1 rounded-full cursor-pointer">
              <span class="material-symbols-outlined text-gray-500">
                nest_thermostat_gen_3
              </span>
            </li>

            <li className="bg-transparent hover:bg-gray-200  h-9 w-9 flex justify-center items-center p-1 rounded-full cursor-pointer">
              <i className="fa-brands fa-whatsapp text-gray-500 text-2xl"></i>
            </li>

            <li className="bg-transparent hover:bg-gray-200  h-9 w-9 text-center p-1 rounded-full cursor-pointer">
              <i className="fa-solid fa-users text-gray-500"></i>
            </li>
          </ul>

          <div className="bg-transparent text-lg hover:bg-gray-200  h-9 w-9 p-1 rounded-full flex justify-center items-center cursor-pointer">
            <span class="material-symbols-outlined text-gray-500">circle</span>
          </div>
        </div>

        <div className="fixed bottom-3 left-[1%] space-y-3 text-lg">
          <div className="bg-transparent hover:bg-gray-200  h-9 w-9 text-center p-1 rounded-full cursor-pointer">
            <i class="fa-solid fa-gear text-gray-500"></i>
          </div>
          <div className="h-6 w-6 border-0 rounded-full mx-auto bg-gray-400 cursor-pointer"></div>
        </div>
      </div>
    </nav>
  );
};

export default SideNav;
