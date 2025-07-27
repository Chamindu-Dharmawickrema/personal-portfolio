<<<<<<< HEAD
import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
    const skills = [
        { name: "Java", icon: "../logo/java.png" },
        { name: "Python", icon: "../logo/python.png" },
        { name: "HTML", icon: "../logo/html.png" },
        { name: "CSS", icon: "../logo/css.png" },
        { name: "JavaScript", icon: "../logo/javascript.png" },
        { name: "Tailwind CSS", icon: "../logo/tailwind.png" },
        { name: "React", icon: "../logo/react.png" },
        { name: "Next.js", icon: "../logo/next.png" },
        { name: "Django", icon: "../logo/django.png" },
        { name: "Node.js", icon: "../logo/node.png" },
        { name: "MySQL", icon: "../logo/mysql.png" },
        { name: "MongoDB", icon: "../logo/mongodb.png" },
    ];

    const [option, setOption] = useState("skills");

    return (
        <RevealOnScroll delay={"-50px"}>
            <section
                id="about"
                className="min-h-screen flex flex-col items-center justify-center py-20"
            >
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-cyan-300 bg-clip-text text-transparent text-center">
                        About me
                    </h2>
                </div>

                <div className="rounded-xl p-4 sm:p-8 border-white/10 border max-w-3xl  ml-5 sm:ml-0 mr-5 sm:mr-0 mx-auto px-4 hover:translate-y-1 transition-all">
                    <p className="text-gray-300 mb-6 text-center text-[18px] leading-8">
                        I am a Software Engineering undergraduate at the
                        Informatics Institute of Technology, Sri Lanka,
                        affiliated with the University of Westminster, UK.
                        Throughout my academic journey, I have developed a solid
                        grounding in software development principles, including
                        programming, systems design, and database management. My
                        portfolio highlights my enthusiasm for solving
                        real-world problems through innovative and efficient
                        solutions. I am constantly motivated to embrace new
                        challenges and make valuable contributions to both
                        industry and society. Outside of my coursework, I have a
                        keen interest in web technologies and staying updated
                        with the latest trends in the tech world, always
                        striving to expand my skills and knowledge.
                    </p>
                </div>

                <div className="mt-12 max-w-3xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
                    <button
                        className={`flex-1 text-[20px] px-5 py-2 font-semibold cursor-pointer transition-colors ${
                            option === "skills"
                                ? "text-blue-500 border-blue-500"
                                : "text-white hover:text-blue-500 border-white"
                        }`}
                        onClick={() => setOption("skills")}
                    >
                        Skills
                    </button>

                    <button
                        className={`flex-1 text-[20px] px-5 py-2 font-semibold cursor-pointer transition-colors ${
                            option === "edu"
                                ? "text-blue-500 border-blue-500"
                                : "text-white hover:text-blue-500 border-white"
                        }`}
                        onClick={() => setOption("edu")}
                    >
                        Education
                    </button>

                    <button
                        className={`flex-1 text-[20px] px-5 py-2 font-semibold cursor-pointer transition-colors ${
                            option === "certifi"
                                ? "text-blue-500 border-blue-500"
                                : "text-white hover:text-blue-500 border-white"
                        }`}
                        onClick={() => setOption("certifi")}
                    >
                        Certification
                    </button>
                </div>

                {option === "skills" ? (
                    <div className="p-8 rounded-lg border border-white/10 transition-all duration-300 hover:bg-white/5 hover:border-blue-700 hover:shadow-[0_0_8px_3px_rgba(59,130,246,0.5)]  items-center grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-8xl mt-10 mx-auto">
                        {skills.map((skill, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center p-4 rounded-lg hover:bg-white/5 transition-colors"
                            >
                                <img
                                    src={`/${skill.icon}`}
                                    alt={skill.name}
                                    className="w-14 h-16 object-contain"
                                />
                                <p className="mt-3 text-sm text-center text-gray-300">
                                    {skill.name}
                                </p>
                            </div>
                        ))}
                    </div>
                ) : option === "edu" ? (
                    <div className="mt-10 w-[90%] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 max-w-3xl  ml-5 sm:ml-0 mr-5 sm:mr-0 mx-auto py-8 rounded-lg border border-white/10 transition-all duration-300 hover:bg-white/5 hover:border-blue-700 hover:shadow-[0_0_8px_3px_rgba(59,130,246,0.5)] ">
                        <ul className="space-y-8 text-gray-300 leading-loose list-disc pl-5">
                            <li>
                                <div className="flex flex-col sm:flex-row sm:justify-between">
                                    <span className="font-semibold text-white">
                                        University of Westminster
                                    </span>
                                    <span className="text-sm text-gray-400 sm:text-right">
                                        2023–Present
                                    </span>
                                </div>
                                <p>BEng (Hons) Software Engineering</p>
                            </li>
                            <li>
                                <div className="flex flex-col sm:flex-row sm:justify-between">
                                    <span className="font-semibold text-white">
                                        Aquinas College
                                    </span>
                                    <span className="text-sm text-gray-400 sm:text-right">
                                        2023 March – 2023 July
                                    </span>
                                </div>
                                <p>
                                    Completed certificate level-3 of Aquinas
                                    English Diploma
                                </p>
                            </li>
                            <li>
                                <div className="flex flex-col sm:flex-row sm:justify-between">
                                    <span className="font-semibold text-white">
                                        Informatics Institute of Technology
                                    </span>
                                    <span className="text-sm text-gray-400 sm:text-right">
                                        2022–2023
                                    </span>
                                </div>
                                <p>
                                    Foundation Certificate in Higher Education
                                    with Merit pass
                                </p>
                            </li>
                            <li>
                                <div className="flex flex-col sm:flex-row sm:justify-between">
                                    <span className="font-semibold text-white">
                                        G/ P. De S. Kularathna College
                                    </span>
                                    <span className="text-sm text-gray-400 sm:text-right">
                                        2008–2021
                                    </span>
                                </div>
                                <p>GCE Advanced Level - Mathematics stream</p>
                                <p>GCE Ordinary Level - 8A & 1B</p>
                            </li>
                        </ul>
                    </div>
                ) : option === "certifi" ? (
                    <div className="mt-10 w-[90%] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 max-w-3xl ml-5 sm:ml-0 mr-5 sm:mr-0 mx-auto py-8 rounded-lg border border-white/10 transition-all duration-300 hover:bg-white/5 hover:border-blue-700 hover:shadow-[0_0_8px_3px_rgba(59,130,246,0.5)]">
                        <ul className="space-y-8 text-gray-300 leading-loose list-disc pl-5">
                            <li>
                                <span className="font-semibold text-white">
                                    Hult Prize Competition
                                </span>
                                <p>
                                    Participating in the Hult Prize On-Campus
                                    Qualifier Round
                                </p>
                            </li>
                            <li>
                                <span className="font-semibold text-white">
                                    Java Programming
                                </span>
                                <p>
                                    Certification in "Java Object-Oriented
                                    Programming" course by Kathryn Hodge
                                </p>
                            </li>
                        </ul>
                    </div>
                ) : null}
            </section>
        </RevealOnScroll>
    );
};
=======
import { useState } from 'react'
import { RevealOnScroll } from '../RevealOnScroll';

export const About = () => {
    
    const skills = [
        { name: "Java", icon: "../logo/java.png" },
        { name: "Python", icon: "../logo/python.png" },
        { name: "HTML", icon: "../logo/html.png" },
        { name: "CSS", icon: "../logo/css.png" },
        { name: "JavaScript", icon: "../logo/javascript.png" },
        { name: "Tailwind CSS", icon: "../logo/tailwind.png" },
        { name: "React", icon: "../logo/react.png" },
        { name: "Next.js", icon: "../logo/next.png" },
        { name: "Django", icon: "../logo/django.png" },
        { name: "Node.js", icon: "../logo/node.png" },
        { name: "MySQL", icon: "../logo/mysql.png" },
        { name: "MongoDB", icon: "../logo/mongodb.png" },
      ];

    const [option ,setOption] = useState("skills")

    return (
        <RevealOnScroll delay={"-50px"}>
        <section id='about' className='min-h-screen flex flex-col items-center justify-center py-20'>
            <div className='max-w-3xl mx-auto px-4'>
                <h2 className='text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-cyan-300 bg-clip-text text-transparent text-center'>About me</h2>
            </div>

            <div className='rounded-xl p-4 sm:p-8 border-white/10 border max-w-3xl  ml-5 sm:ml-0 mr-5 sm:mr-0 mx-auto px-4 hover:translate-y-1 transition-all'>
                <p className='text-gray-300 mb-6 text-center text-[18px] leading-8'>
                    I am a Software Engineering undergraduate at the Informatics Institute of Technology, Sri Lanka, affiliated with the University of Westminster, UK. Throughout my academic journey, I have developed a solid grounding in software development principles, including programming, systems design, and database management. My portfolio highlights my enthusiasm for solving real-world problems through innovative and efficient solutions. I am constantly motivated to embrace new challenges and make valuable contributions to both industry and society. Outside of my coursework, I have a keen interest in web technologies and staying updated with the latest trends in the tech world, always striving to expand my skills and knowledge.
                </p>
            </div>

            <div className='mt-10 max-w-3xl mx-auto flex justify-center'>
                <button className={`text-[20px] mr-10 px-5 py-1.5 font-semibold cursor-pointer transition-colors ${option === "skills" ? "text-blue-500" : "text-white hover:text-blue-500"}`} onClick={()=>setOption("skills")}>
                    Skills
                </button>
                
                <button className={`text-[20px] px-5 py-1.5 font-semibold cursor-pointer transition-colors ${option === "edu" ? "text-blue-500" : "text-white hover:text-blue-500"}`} onClick={()=>setOption("edu")}>
                    Education
                </button>
            </div>

            {option === "skills" ? (
                <div className="p-8 rounded-lg border border-white/10 transition-all duration-300 hover:bg-white/5 hover:border-blue-700 hover:shadow-[0_0_8px_3px_rgba(59,130,246,0.5)]  items-center grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-8xl mt-10 mx-auto"  >
                    {skills.map((skill, index) => (
                    <div key={index} className="flex flex-col items-center p-4 rounded-lg hover:bg-white/5 transition-colors">
                        <img src={`/${skill.icon}`} alt={skill.name} className="w-14 h-16 object-contain" />
                        <p className="mt-3 text-sm text-center text-gray-300">{skill.name}</p>
                    </div>
                    ))}
                </div>
              
            ) : option === "edu" ? (

                <div className="mt-10 w-[90%] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 max-w-3xl  ml-5 sm:ml-0 mr-5 sm:mr-0 mx-auto py-8 rounded-lg border border-white/10 transition-all duration-300 hover:bg-white/5 hover:border-blue-700 hover:shadow-[0_0_8px_3px_rgba(59,130,246,0.5)] ">
                    <ul className="space-y-8 text-gray-300 leading-loose list-disc pl-5">
                        <li>
                            <div className="flex flex-col sm:flex-row sm:justify-between">
                                <span className="font-semibold text-white">University of Westminster</span>
                                <span className="text-sm text-gray-400 sm:text-right">2023–Present</span>
                            </div>
                            <p>BEng (Hons) Software Engineering</p>
                        </li>
                        <li>
                            <div className="flex flex-col sm:flex-row sm:justify-between">
                                <span className="font-semibold text-white">Aquinas College</span>
                                <span className="text-sm text-gray-400 sm:text-right">2023 March – 2023 July</span>
                            </div>
                            <p>Completed certificate level-3 of Aquinas English Diploma</p>
                        </li>
                        <li>
                            <div className="flex flex-col sm:flex-row sm:justify-between">
                                <span className="font-semibold text-white">Informatics Institute of Technology</span>
                                <span className="text-sm text-gray-400 sm:text-right">2022–2023</span>
                            </div>
                            <p>Foundation Certificate in Higher Education with Merit pass</p>
                        </li>
                        <li>
                            <div className="flex flex-col sm:flex-row sm:justify-between">
                                <span className="font-semibold text-white">G/ P. De S. Kularathna College</span>
                                <span className="text-sm text-gray-400 sm:text-right">2008–2021</span>
                            </div>
                            <p>GCE Advanced Level - Mathematics stream</p>
                            <p>GCE Ordinary Level - 8A & 1B</p>
                        </li>
                    </ul>
                </div>

            ) : null}
       
        </section>
        </RevealOnScroll> 
    )
}
>>>>>>> a7ef10d1b839215512f4b181b8c2498fa5f085a8
