import { useEffect } from "react";
import { useState } from "react"

//Loading Screen 
export const LoadingScreen = ({onComplete}) => {
    //use usestate to keep track the letter 
    const [text, setText] = useState("");
    const displayText = "<Hello World />";


    useEffect(()=>{
        let index = 0;
        const interval = setInterval(()=>{
            //every time thsi use efect run set the text with increase by one letter 
            setText(displayText.substring(0,index));
            index++;

            //check all the letters return 
            if (index>displayText.length){
                clearInterval(interval);

                //after 1.5 sec triger the onComplete funtion 
                setTimeout(()=>{
                    onComplete();
                },1500)
            }
        //add late for each letter    
        },100);
        return ()=> clearInterval(interval);
    },[onComplete]);


    return(
        <div className="fixed inset-0 z-50 bg-animate-diagonal text-gray-100 flex flex-col items-center justify-center">
            <div className="mb-4 text-4xl font-mono font-bold">
                {text} <span className="animate-blink ml-0">| </span>
            </div>

            {/*progress bar 
               class name also in the line */}
            <div className="w-[270px] h-[7px] bg-gray-800 rounded relative overflow-hidden">
                {/*moving line */}
                <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar">
                </div>

            </div>
        </div>
    )
}