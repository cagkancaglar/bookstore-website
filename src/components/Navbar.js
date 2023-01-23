import { CiUser } from "react-icons/ci";
import { AiOutlineHeart } from "react-icons/ai";
import { SlBasket } from "react-icons/sl";

const Navbar = ()  => {
  return (
    <>
      <div className="bg-black shadow-md">
        <div className="p-10 h-16 md:h-11 flex items-center justify-center md:justify-between gap-x-11 ">
          <a href="/">
            <img src="assets/images/logo.png" alt="piton-logo" />
          </a>

          <div className="relative md:w-[700px] h-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="gray"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search"
              className="border-none bg-formInputBackground rounded h-12 w-full py-3 pl-12 pr-4"
            />
          </div>

          <nav className="flex gap-x-3 text-sm font-semibold">
            <a
              href="/"
              className="flex justify-center items-center gap-x-2 w-12 h-12 rounded-sm bg-formInputBackground"
            >
              <CiUser size={20} />
            </a>
            <a
              href="/"
              className="flex justify-center items-center gap-x-2 w-12 h-12 bg-formInputBackground"
            >
              <AiOutlineHeart size={20} />
            </a>
            <a
              href="/"
              className="flex justify-center items-center gap-x-2 w-12 h-12 bg-formInputBackground"
            >
              <SlBasket size={20} />
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Navbar;
