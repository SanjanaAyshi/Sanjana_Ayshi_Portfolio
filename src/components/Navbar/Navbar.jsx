import logo from "../../assets/LogoBlack.svg";

const Navbar = () => {
  return (
    <div className="container mx-auto mt-4 navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="navbar-start flex items-center gap-2">
          {/* Logo and Name in One Line */}
          <img
            src={logo}
            alt="Logo"
            className="lg:w-[32px] h-[32px] md:w-[24px] md:h-[24px] sm:w-[24px] sm:h-[24px]"
          />
          <a className="Logo lg:text-[24px] sm:text-[16px] font-semibold">
            Sanjana Ayshi
          </a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className=" menu-horizontal px-1 space-x-9 text-[18px]">
          <li>
            <a href="/projects" className="hover:text-gray-500 transition">
              Projects
            </a>
          </li>
          <li>
            <a href="/about_me" className="hover:text-gray-500">
              About Me
            </a>
          </li>
        </ul>
      </div>
      {/* Right Side */}
      <div className="navbar-end">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow-lg absolute top-[100%] right-0 max-h-[80vh] overflow-visible"
          >
            <li>
              <a>Projects</a>
            </li>
            <li>
              <a>About Me</a>
            </li>
            <li>
              <div className="flex flex-col text-sm">
                <a
                  href="mailto:sanjana.ayshi92@gmail.com"
                  className="text-black hover:text-gray-500 transition"
                >
                  sanjana.ayshi92@gmail.com
                </a>
              </div>
            </li>
          </ul>
        </div>
        <div className="hidden lg:flex navbar-end items-center">
          <h5 className="text-gray-500 lg:text-[14px] sm:text-[14px] mx-2">
            Email:
          </h5>
          <a
            href="mailto:sanjana.ayshi92@gmail.com"
            className="text-center text-[14px] font-semibold text-black hover:text-gray-500 transition"
          >
            sanjana.ayshi92@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
