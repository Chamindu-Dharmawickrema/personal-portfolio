import { useEffect, useState } from 'react';
import { RevealOnScroll } from '../RevealOnScroll';

export const Home = () => {
    const phrases = ["Chamindu Dharmawickrama","Full Stack Developer"];
    const [displayText,setDisplayText] = useState("");

    useEffect(()=>{
        let currentPhraseindex = 0;
        let currentText = '';
        let isDeleting = false;
        let frame;
        let typingSpeed =60;

        const type = () =>{
            //fullText = Chamindu Dharmawickrama
            const fullText = phrases[currentPhraseindex];        

            //if isDeleteing is true remove the letters by the currentText
            //if isDeleting is false add a another letter to the current text 
            if (isDeleting){
                currentText = fullText.substring(0,currentText.length-1);
            } else {
                currentText = fullText.substring(0,currentText.length+1);
            }

            //update the current text 
            setDisplayText(currentText);

            //if isDeleing is not true and if the current text contains all the letters in a full text, 
            //Hold for a 1.2s
            //assing true to the isDeleting for continue the delete part
            //
            if (!isDeleting && currentText == fullText){
                setTimeout(() => {
                    isDeleting = true;
                    // Schedule the next step of typing or deleting to run smoothly on the browser's next screen refresh for best animation performance.
                    frame = requestAnimationFrame(type);                    
                }, 1500);
                return;
            }

            //this code block run when the after deleing all the characters in the 0 index text  
            if (isDeleting && currentText === ''){
                isDeleting = false;
                //update the currentPhraseindex to access to the next index
                currentPhraseindex = (currentPhraseindex+1)%phrases.length;
            }            
            //delays the next typing/deleting step
            frame = setTimeout(() => requestAnimationFrame(type),isDeleting? 30:typingSpeed);         
        };
        //	Starts the typing animation on the next screen repaint
        frame=requestAnimationFrame(type);

        //Stops the animation if the component unmounts
        return () => {
            cancelAnimationFrame(frame);
          };          
        
    },[]);    
    

    return (
        <RevealOnScroll>
        <section id="home" className="min-h-screen w-full flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-16 pt-16 sm:pt-20">
        
        <div className="flex flex-col items-center justify-between gap-6 sm:gap-8  max-w-7xl mx-auto w-full py-8 sm:py-12 md:py-16 mt-6 sm:mt-8 md:mt-10 lg:flex-row">
        
            <div className="text-center w-full  lg:text-left order-1 lg:order-1">

                <div className="min-h-[8rem] sm:min-h-[9rem] md:min-h-[10rem]">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[67px] font-bold leading-tight text-center lg:text-left">
                        Hi, I'm <br/>
                        <span className="bg-gradient-to-r from-blue-600 to-cyan-300 bg-clip-text text-transparent inline-block break-words">{displayText}&nbsp;</span>
                    </h1>
                </div>

                <p className="mt-4 sm:mt-5 md:mt-6 text-base sm:text-lg text-gray-300 max-w-xl px-6 sm:px-0 mx-auto lg:mx-0 leading-8">
                    I'm proud of my portfolio as it reflects my passion for innovation and creative problem-solving. I thrive on challenges and am driven by the chance to make meaningful contributions that bring value to both organizations and the communities they impact.
                </p>

                <div className="flex flex-col sm:flex-row gap-5 ml-15 mr-15 mt-6 sm:mt-8 md:mt-10 mx-auto lg:mx-0 justify-center lg:justify-start">
                    <a href="#contact" className="bg-blue-500 text-white py-2.5 sm:py-3 px-5 sm:px-6 rounded-4xl font-semibold transition-all duration-300 hover:translate-y-0.5 hover:shadow-lg text-center">
                        Contact Me
                    </a>

                    <a href="/Chamindu.pdf" download className="border border-blue-500/50 text-blue-500 py-2.5 sm:py-3 px-5 sm:px-6 rounded-4xl font-semibold transition-all duration-300 hover:translate-y-0.5 hover:bg-blue-500/10 text-center">
                        Download CV
                    </a>
                </div>

            </div>
            
            {/*image*/}
            <div className="order-2 lg:order-2 mt-8 lg:mt-0">
                <div className="relative">
                    <div className="absolute -inset-1 rounded-xl blur-xl  bg-white opacity-20"></div>
                        <img 
                            src="/chamindu.jpg" 
                            alt="Chamindu Dharmawickrama" 
                            className="relative w-48 sm:w-56 md:w-64 lg:w-80 xl:w-106 rounded-xl shadow-xl object-cover transition-all duration-500 hover:scale-105"
                        />
                    </div> 
            </div>

        </div> 
                 
    </section>
    </RevealOnScroll> 
    )
}