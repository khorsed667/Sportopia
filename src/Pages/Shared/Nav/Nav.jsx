import { Link } from "react-router-dom";
import img from "./../../../assets/Course/avatar.jpg";
import logo from "./../../../assets/Course/logo.png";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";

const Nav = () => {
  const { user, logOut } = useContext(AuthContext);

  const handelLogOut = () => {
    logOut();
  };

  const navLink = (
    <>
      <Link className="m-4" to="/">
        Home
      </Link>
      <Link className="m-4" to="/instractor">
        Instructors
      </Link>
      <Link className="m-4" to="/classes">
        Classes
      </Link>
      <Link className="m-4" to="/dashboard">
        Deshbord
      </Link>
    </>
  );

  return (
    <div className="">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLink}
            </ul>
          </div>
          <img src={logo} className="w-[100px] rounded-lg" alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul tabIndex={0} className="menu menu-horizontal px-1">{navLink}</ul>
        </div>
         <div className="navbar-end ">
          {user ? (
            <>
              <Link onClick={handelLogOut} className="menu">
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    LogOut
                  </span>
                </button>
              </Link>
              <img className="w-[40px] rounded-full" src={img} alt="" />
            </>
          ) : (
            <>
              <Link to="/login" className="menu">
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Login
                  </span>
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
