import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav>
      <div className="flex mt-5 ml-5 mr-5 items-center justify-between">
        {/* logo */}
        <div className="ml-12 pt-2">
          <Link
            href="/"
            passHref
           
          >
            <Image src="/logo.png" alt="logo" width={150} height={10} />{" "}
          </Link>
        </div>
        {/* navbar menus */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-blue-300">
            Home
          </Link>
          <Link href="/weather" className="hover:text-blue-300">
            Weather
          </Link>
          <Link href="/soil" className="hover:text-blue-300">
            Soil
          </Link>
          <Link href="/pests" className="hover:text-blue-300">
            Pests
          </Link>
          <Link href="/diseases" className="hover:text-blue-300">
            Diseases
          </Link>
        </div>

        {/* Button */}
        <div className="flex mr-12">
          <Link
            href="/Login"
            className="hidden md:block py-2 px-4 text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300"
          >
            Login
          </Link>
        </div>
        <button
          id="menu-btn"
          className="block hamburger md:hidden focus:outline-none"
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>

      {/* mobile menu */}
      {/* <div className="md:hidden">
        <div
          id="menu"
          className="absolute flex flex-col items-center self-end hidden py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
        >
          <a href="" className="hover:text-brightRed">
            Home
          </a>
          <a href="" className="hover:text-brightRed">
            Events
          </a>
          <a href="" className="hover:text-brightRed">
            Services
          </a>
          <a href="" className="hover:text-brightRed">
            About Us
          </a>
          <a href="" className="hover:text-brightRed">
            Careers
          </a>
        </div>
      </div> */}
    </nav>
  );
};

export default NavBar;