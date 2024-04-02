import React, { useEffect, useState } from "react";
import MainDisplay from "../components/mainDisplay";
import SideBar from "../components/asideBar";
import { getAllChats } from "../redux/chat/action";
import { useDispatch, useSelector } from "react-redux";


const Home = ({ hamState }) => {
  const [allchat, setAllChat] = useState([]);
  const token = useSelector((state) => state.AuthReducer.token);
  const userDetails = useSelector((state) => state.AuthReducer.userDetails);
  const dispatch = useDispatch();

  // const retriveChatList = () => {
  //   const payload = { token };
  //   dispatch(getAllChats(payload)).then((res) => {
  //     // console.log(res, "from home");
  //   })
  // };
  // useEffect(() => {
  //   retriveChatList();
  // }, [token]);

  return (
    <div className="relative ">
      <div className="absolute top-[65px] flex w-screen h-full  ">
        <SideBar hamState={hamState} />
        <MainDisplay />
      </div>
    </div>
  );
};

export default Home;
