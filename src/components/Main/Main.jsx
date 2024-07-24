import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import './custom.css'
import { Context } from '../../context/Context'

const Main = () => {

    const {onSent, recentPrompt, showResult, loading, resultData, setInput, input}= useContext(Context);

  return (
    <div className='flex-1 min-h-[100vh] pb-[15vh] relative'>
        <div className="flex items-center justify-between text-2xl p-5 text-[#585858]">
            <p>Gemini</p>
            <img className='w-10 rounded-full' src={assets.user_icon} alt="" />
        </div>
        <div className=" max-w-[900px] m-auto mb-11">

        {!showResult?
    <>
        <div className=" my-12 mx-0 text-[56px] text-[#c4c7c5] font-semibold">
                <p><span className='custom-gradient'>Hello, Dev</span></p>
                <p>How can I help you today?</p>
            </div>
            <div className="grid grid-temp-col gap-4 p-5">
                <div className="h-48 p-4 rounded-xl bg-[#f0f4f9] relative cursor-pointer hover:bg-[#dfe4ea]">
                    <p className='text-[#585858] text-lg'>Suggest must visit places in Amsterdam</p>
                    <img className=' w-9 p-1 absolute bg-white bottom-3 right-3 rounded-xl' src={assets.compass_icon} alt="" />
                </div>
                <div className="h-48 p-4 rounded-xl bg-[#f0f4f9] relative cursor-pointer hover:bg-[#dfe4ea]">
                    <p className='text-[#585858] text-lg'>Briefly summarize this concept: Bigfoot is alive</p>
                    <img className=' w-9 p-1 absolute bg-white bottom-3 right-3 rounded-xl' src={assets.bulb_icon} alt="" />
                </div>
                <div className="h-48 p-4 rounded-xl bg-[#f0f4f9] relative cursor-pointer hover:bg-[#dfe4ea]">
                    <p className='text-[#585858] text-lg'>Suggestions for trick or treat</p>
                    <img className=' w-9 p-1 absolute bg-white bottom-3 right-3 rounded-xl' src={assets.message_icon} alt="" />
                </div>
                <div className="h-48 p-4 rounded-xl bg-[#f0f4f9] relative cursor-pointer hover:bg-[#dfe4ea]">
                    <p className='text-[#585858] text-lg'>Improve the readibility of the following code</p>
                    <img className=' w-9 p-1 absolute bg-white bottom-3 right-3 rounded-xl' src={assets.code_icon} alt="" />
                </div>
            </div>
    </> : <div className='hideScrollBar py-0 px-[5%] max-h-[70vh] overflow-y-scroll'>
        <div className=' my-10 mx-0 flex items-center gap-5'>
            <img className='rounded-full w-10' src={assets.user_icon} alt="" />
            <p>{recentPrompt}</p>
        </div>
        <div className=" flex items-start gap-5">
            <img className='w-10' src={assets.gemini_icon} alt="" />
            {loading?<>
            <div className='w-[100%] flex flex-col gap-3'>
                <hr className='hrLoader' />
                <hr className='hrLoader' />
                <hr className='hrLoader' />
            </div></>
            :
            <p className=' text-lg font-light leading-7' dangerouslySetInnerHTML={{__html:resultData}}></p>}
            
        </div>
    </div>   
    }

            
            <div className=" absolute bottom-0 w-[100%] max-w-[900px] px-5 py-0 m-auto">
                <div className="flex items-center justify-between gap-5 bg-[#f0f4f9] py-2 px-5 rounded-[50px]">
                    <input onChange={(e)=>setInput(e.target.value)} value={input} className='flex-1 bg-transparent border-none outline-none p-2 text-lg' type="text" placeholder='Enter a promt here' />
                    <div className="flex items-center gap-3">
                        <img className=' w-6 cursor-pointer' src={assets.gallery_icon} alt="" />
                        <img className=' w-6 cursor-pointer' src={assets.mic_icon} alt="" />
                        <img onClick={()=>onSent()} className=' w-6 cursor-pointer' src={assets.send_icon} alt="" />
                    </div>
                </div>
                <p className=' text-sm my-4 mx-auto text-center font-light'>
                Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps
                </p>
            </div>
        </div>
    </div>
  )
}

export default Main