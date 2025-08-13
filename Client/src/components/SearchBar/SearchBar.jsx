
const SearchBar = ({ placeholder }) => {
  return (
    <div className="flex mx-auto bg-[#f4f2f2] border-1 hover:border-1 border-transparent hover:border-gray-400 w-[90%] rounded-3xl py-0 px-2">
      <div className="flex justify-start items-center gap-2">
        <span className="ms-1 ">
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
          placeholder={placeholder}
          className="border-0 outline-none w-[340px] bg-[#f4f2f2] focus:bg-[#f4f2f2] py-2 text-baseline"
          type="text"
        />
      </div>
    </div>
  );
};

export default SearchBar;
