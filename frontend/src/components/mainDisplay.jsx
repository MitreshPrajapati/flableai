import React, { useState } from "react";
// import { sendMsgToOpenAI } from "./openai";
import { MdContentCopy } from "react-icons/md";
import axios from "axios";
import { URL } from "../api";
import { useDispatch, useSelector } from "react-redux";
import { swithChat, updateAndGetChat } from "../redux/chat/action";

const MainDisplay = () => {
  const [prompt, setPrompt] = useState("");
  const [accordingTo, setAccordingTo] = useState("sage");
  const [prevMessages, setPrevMessages] = useState([]);
  const token = useSelector((state) => state.AuthReducer.token);
  const currChat = useSelector((state) => state.ChatReducer.currentChat);
  const dispatch = useDispatch();

  const handleCopyText = (text) => {
    navigator.clipboard.writeText(text);
  };

  const handleCurrChat = (id) => {
    const payload = { id: id, token: token };
    dispatch(swithChat(payload)).then((r) => {
      console.log(r, "sucess switch chat");
    });
  };
  // console.log(currChat, "from generateChat");

  const generateAnswer = async () => {
    if (prompt && accordingTo) {
      const payload = {
        id: currChat._id,
        prompt: prompt,
        token: token,
      };
      dispatch(updateAndGetChat(payload)).then((res) => {
        handleCurrChat(payload.id);
      });

      setPrompt("");
    }
  };
  return (
    <div className="w-full min-h-full flex flex-col justify-between">
      <div className="relative">
        <button className="absolute right-0 mr-2 p-2 bg-orange-300 rounded-md ">
          {" "}
          Export
        </button>
      </div>
      <div className="mt-[60px] min-h-[78vh] scroll-smooth px-2">
        <ul className="flex flex-col gap-2 ">
          {currChat?.chat?.map((item, idx) => {
            return (
              <div
                key={idx}
                className="relative text-slate-800 p-2 w-full text-left flex flex-col"
              >
                <span className="absolute right-0 min-w-[30%] w-[fit-content] text-left bg-slate-100 p-2 rounded-md ">
                  {item.prompt}
                </span>
                <div className=" bg-slate-100 mt-12 p-2 rounded-md w-[95%] flex flex-col ml-0 ">
                  <div className="text-slate-800 font-semibold">
                    {item.question}
                  </div>
                  <div className="">
                    {item.answer}
                    <div className="mt-2">
                      <span
                        onClick={() => {
                          handleCopyText(item.answer);
                        }}
                      >
                        {" "}
                        <MdContentCopy className="font-bold " />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </ul>
      </div>
      <div className=" flex justify-evenly gap-4 px-4 py-2 pb-3  bg-slate-200">
        <select
          value={accordingTo}
          onChange={(e) => setAccordingTo(e.target.value)}
          className="px-4 py-4 rounded-lg bg-white"
        >
          <option value="sage" selected="selected">
            Sage
          </option>
          <option value="seo">SEO</option>
          <option value="web analytics">WebAnalytics</option>
        </select>
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Ask me anything..."
          className="w-[80%] pl-2 rounded-lg"
        />
        <button
          className="px-6 py-4 rounded-lg bg-white "
          onClick={generateAnswer}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default MainDisplay;
