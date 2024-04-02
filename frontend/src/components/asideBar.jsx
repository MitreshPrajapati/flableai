import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { URL } from "../api";
import { getAllChats, swithChat } from "../redux/chat/action";

const SideBar = ({ hamState }) => {
  const currChat = useSelector((state) => state.ChatReducer.currentChat);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.AuthReducer.token);
  const [modalState, setModalState] = useState(false);

  const [newChatName, setNewChatName] = useState("");
  const chatList = useSelector((state) => state.ChatReducer.chatList);

  const retriveChatList = async () => {
    const payload = { token: token };
    dispatch(getAllChats(payload));

  };

  const handleCurrChat = (id) => {
    const payload = { id: id, token: token };
    dispatch(swithChat(payload)).then((r) => {
      console.log(r, "sucess switch chat");
      
    });
  };

  const addChat = () => {
    if (newChatName) {
      let chat = newChatName.trim();

      axios
        .post(
          `${URL}/chats/newchat`,
          { chatName: chat },
          {
            headers: {
              "Content-Type": "application/json",
              Authentication: `Bearer ${token}`,
            },
          }
        )
        .then((res) => {
          console.log(res, "track");

          retriveChatList();
          handleCurrChat(res.data._id);
        });
      setNewChatName("");
      setModalState(false);
    }
  };

  useEffect(() => {
    setNewChatName("");
    setModalState(false);
    retriveChatList();
  }, []);

  console.log(chatList, " from aside bar");
  if (!hamState) return "";

  return (
    <aside className="  w-[fit-content] min-h-[93vh] flex gap-1 transition ease-in-out delay-150 duration-300 ">
      <div className="bg-slate-200 pt-2 w-[200px]  overflow-y-scroll">
        {chatList &&
          chatList?.map((chat, idx) => {
            return (
              <li
                key={chat._id}
                onClick={() => {
                  handleCurrChat(chat._id);
                }}
                className="list-none mt-2 p-2 bg-blue-200 rounded-md w-[90%] m-auto"
              >
                {chat?.chatName}
              </li>
            );
          })}
      </div>
      <div className="bg-slate-200 w-[200px]">
        <div className="flex items-center justify-between m-2">
          <h2>History</h2>
          <button
            className="bg-slate-50 rounded-md p-2 text-sm font-bold text-slate-400  "
            onClick={() => setModalState(true)}
          >
            New Chat
          </button>
        </div>
        {modalState && (
          <div className="p-2 ">
            <input
              type="text"
              value={newChatName}
              onChange={(e) => setNewChatName(e.target.value)}
              className="p-2 rounded-md w-full "
            />
            <button
              className="mt-2 px-4 py-2 w-full bg-blue-400 rounded-md"
              onClick={addChat}
            >
              Add chat
            </button>
          </div>
        )}
        <br />
        <div>
          <hr className="w-full h-[1px] " />
          <ul className="flex flex-col gap-2 ml-2">
            {
              currChat && currChat?.chat?.map((chat)=>{
                return(
                  <li key={Date.now+chat.question} >
                    {chat?.question}
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
