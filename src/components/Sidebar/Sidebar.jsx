import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

const Sidebar = () => {
  const [extended, setExtended] = useState(false);
  const {onSent, prevPrompt, setRecentPrompt, newChat}= useContext(Context);
  const loadPrompt= async (prompt)=>{
    setRecentPrompt(prompt);
    await onSent(prompt);
  }

  return (
    <div className=" min-h-[100vh] flex flex-col justify-between bg-[#f0f4f9] px-4 py-6">
      <div className="top">
        <img onClick={()=>setExtended(prev=>!prev)}
          className=" w-5 block ml-2 cursor-pointer"
          src={assets.menu_icon}
          alt=""
        />
        <div onClick={()=>newChat()} className="mt-12 flex items-center gap-2 py-2 px-3 bg-[#e6eaf1] border rounded-[50px] text-[grey] text-sm cursor-pointer">
          <img className=" w-5" src={assets.plus_icon} alt="" />
          {extended ? <p>New Chat</p> : null}
        </div>
        {extended ? (
          <div className="flex flex-col">
            <p className="mt-7 mb-5">Recent</p>
            {prevPrompt.map((item, index)=>{
                return(
                    <div onClick={()=>loadPrompt(item)} className="flex items-start gap-3 p-2 pr-10 rounded-[50px] text-[#282828] cursor-pointer hover:bg-[#e2e6eb]">
              <img className="pt-[2px] w-5" src={assets.message_icon} alt="" />
              <p title={item}>{item.slice(0,18)}...</p>
            </div>
                )
            })}
            
          </div>
        ) : null}
      </div>
      <div className="flex flex-col">
        <div className="flex items-start gap-3 p-2 rounded-[50px] text-[#282828] cursor-pointer hover:bg-[#e2e6eb]">
          <img className="pt-1 w-5" src={assets.question_icon} alt="" />
          {extended?<p>Help</p>:null}
        </div>
        <div className="flex items-start gap-3 p-2  rounded-[50px] text-[#282828] cursor-pointer hover:bg-[#e2e6eb]">
          <img className="pt-1 w-5" src={assets.history_icon} alt="" />
          {extended?<p>Activity</p>:null}
        </div>
        <div className="flex  items-start gap-3 p-2  rounded-[50px] text-[#282828] cursor-pointer hover:bg-[#e2e6eb]">
          <img className="pt-1 w-5" src={assets.setting_icon} alt="" />
          {extended?<p>Settings</p>:null}

        </div>
      </div>
    </div>
  );
};

export default Sidebar;
