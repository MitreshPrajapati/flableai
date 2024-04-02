import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useSelector } from "react-redux";

const Navbar = ({ hamState, setHamState }) => {
  const isAuthenticated = useSelector(
    (state) => state.AuthReducer.isAuthenticated
  );
  const User = useSelector((state) => state.AuthReducer.userDetails);
  // console.log(User, "from nav");
  const handleLogout=()=>{
    localStorage.removeItem("token")
    localStorage.removeItem("user");
    window.location.reload();
  }
  return (
    <nav className="w-full z-10 fixed h-[60px] bg-slate-100 shadow-lg flex px-4 ">
      <div className="w-[200px] flex items-center justify-between ml-2 mr-2 ">
        <svg
          className="_hover: cursor-pointer"
          id="logo-38"
          width="78"
          height="32"
          viewBox="0 0 78 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {" "}
          <path
            d="M55.5 0H77.5L58.5 32H36.5L55.5 0Z"
            class="ccustom"
            fill="#FF7A00"
          ></path>{" "}
          <path
            d="M35.5 0H51.5L32.5 32H16.5L35.5 0Z"
            class="ccompli1"
            fill="#FF9736"
          ></path>{" "}
          <path
            d="M19.5 0H31.5L12.5 32H0.5L19.5 0Z"
            class="ccompli2"
            fill="#FFBC7D"
          ></path>{" "}
        </svg>
        <div
          className="text-2xl _hover: cursor-pointer"
          onClick={() => {
            setHamState(!hamState);
          }}
        >
          <GiHamburgerMenu />
        </div>
      </div>
      {isAuthenticated && (
        <div className="flex w-full items-center justify-end">
          {isAuthenticated && <button className="bg-orange-300 p-2 rounded-md mr-2" onClick={handleLogout}>Logout</button>}
          {/* <div className="flex flex-col h-[fit-content]"> */}
          <p>{User?.userDetails?.username}</p>
          {/* <p className="text-right">{User?.useDetails?.email}</p> */}
          {/* </div> */}
          <img
            src={User?.userDetails?.avatar}
            className="bg-slate-200 w-[45px] h-[45px] text-center ml-2 rounded-full p-2"
            alt="user imgae"
          />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
