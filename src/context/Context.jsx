import { createContext, useState } from "react";
import run from "../config/Gemini";


export const Context = createContext();


const ContextProvider= (props)=>{

    const [input, setInput]= useState("");
    const [recentPrompt, setRecentPrompt]= useState("");
    const [prevPrompt, setPrevPrompt]= useState([]);
    const [showResult, setShowResult]= useState(false);
    const [loading, setLoading]= useState(false);
    const [resultData, setResultData]= useState("");

    const delayedPara = (index, nextWord)=>{
        setTimeout(function() {
            setResultData(prev=>prev+nextWord);
        }, 75*index);
    }

    const newChat= ()=>{
        setLoading(false);
        setShowResult(false);
    }

    const onSent= async (prompt)=>{

        setResultData("");
        setLoading(true);
        setShowResult(true);
        let response;
        if(prompt !== undefined){
            response = await run(prompt);
            setRecentPrompt(prompt);
        }else{
            setPrevPrompt(prev=>[...prev, input]);
            setRecentPrompt(input);
            response = await run(input);
            setInput("");
        }
        const resArray= response.split("**")
        let newResponse="";
        for(let i=0; i<resArray.length; i++){
            if(i===0|| i%2 !==1){
                newResponse+= resArray[i];
            }else{
                newResponse+= "<b>"+resArray[i]+"</b>";
            }
        }
        let newResponse2= newResponse.split("*").join("</br>")
        let newResponseArray= newResponse2.split(" ");
        for(let i=0; i<newResponseArray.length; i++){
            delayedPara(i, newResponseArray[i]+" ");
        }
        setLoading(false);
        setInput("");
    }

    const ContextValue= {
        input,
        setInput,
        recentPrompt,
        setRecentPrompt,
        prevPrompt,
        setPrevPrompt,
        showResult,
        loading,
        resultData,
        onSent,
        newChat,
    }
    return (
        <Context.Provider value={ContextValue}>{props.children}</Context.Provider>
    )
}

export default ContextProvider