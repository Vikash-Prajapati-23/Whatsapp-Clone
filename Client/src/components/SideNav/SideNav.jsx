const SideNav = () => {
  return (
    <nav className="bg-[#f4f2f2] md:h-screen h-12 md:w-[65px] w-full fixed bottom-0 z-50">
      <div className="flex flex-col md:mt-0 mt-2">
        <div className="md:p-2 md:m-2">
          <ul className="flex md:flex-col justify-center md:mb-4 md:pb-4 md:border-b-1 border-gray-400 md:text-lg text-xl md:space-y-2 md:space-x-0 space-x-12 items-center ">
            <li className="bg-transparent hover:bg-gray-200 h-9 w-9 flex justify-center items-center p-1 rounded-full cursor-pointer">
              <span className="material-symbols-outlined text-gray-500">
                chat
              </span>
            </li>

            <li className="bg-transparent hover:bg-gray-200 h-9 w-9 flex justify-center items-center p-1 rounded-full cursor-pointer">
              <span className="material-symbols-outlined text-gray-500">
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

          <div className="bg-transparent md:flex hidden text-lg hover:bg-gray-200  h-9 w-9 p-1 rounded-full  justify-center items-center cursor-pointer">
            <span className="material-symbols-outlined text-gray-500">
              circle
            </span>
          </div>
        </div>

        <div className="fixed bottom-3 md:block hidden left-[1%] space-y-3 text-lg">
          <div className="bg-transparent hover:bg-gray-200  h-9 w-9 text-center p-1 rounded-full cursor-pointer">
            <i className="fa-solid fa-gear text-gray-500"></i>
          </div>
          <div className="h-6 w-6 border-0 rounded-full mx-auto bg-gray-400 cursor-pointer"></div>
        </div>
      </div>
    </nav>
  );
};

export default SideNav;
