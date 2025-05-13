import { RevealOnScroll } from '../RevealOnScroll';

export const Projects = () => {
  const projects = [

    { name : "SHUTR" , description:"Developed a platform connecting clients with photographers, Built as a web application using Next.js ,Django and MangoDB.", technologies:["Next.js","Redux","Django","MangoDB"],  pic:"../projects/shutr.png"},

    { name : "Plane Ticket Booking System" , description:"Developed a plane ticket booking system using java", technologies:["Java"], pic:"../projects/booking.png"},

    { name : "ARCV Coffee Shop Website" , description:"A responsive static website built with HTML, CSS, and JavaScript, featuring product displays, customer reviews, and a modern UI design.", technologies:["HTML","CSS","JavaScript"], pic:"../projects/coffee.png"},

    { name : "Student Progression Outcome Visualizer" , description:"Designed a Python tool to classify and visualize student outcomes using input validation, conditionallogic, file handling, and a custom histogram GUI.", technologies:["Python"], pic:"../projects/progression.png"},

    { name : "EverGreen RICC - Website" , description:"Develop a website titled 'Plants Save Life on Earth' using HTML, CSS, and JavaScript.", technologies:["HTML","CSS","JavaScript"], pic:"../projects/evergreen.png"},

    { name : "Portfolio Website" , description:"Developed a fully responsive personal portfolio website using ReactJS and TailwindCSS. The site showcases my skills, projects, and includes smooth animations for an enhanced user experience across all devices.", technologies:["React","TailwindCSS"], pic:"../projects/portfolio.png"},

    ]

  return (
    <RevealOnScroll>
    <section id='project' className='min-h-screen flex flex-col items-center justify-center'>
      <div className='max-w-3xl mx-auto px-4 mt-10'>
        <h2 className='text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-cyan-300 bg-clip-text text-transparent'>My Projects</h2>
      </div>

      <div className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-13 max-w-7xl mx-auto mt-6 p-10'>
        {projects.map((project, index)=>(
           <div className='border border-white/10 rounded max-w-[375px] shadow-xl transition-all duration-500 hover:scale-105 hover:bg-white/5 hover:border-blue-700 hover:shadow-[0_0_8px_3px_rgba(59,130,246,0.5)]' key={index}>
              
              <div className='flex justify-center items-center mt-3'>
                <img src={project.pic} className='w-[350px] rounded' alt={project.name} />
              </div>

              <div >
                <h2 className='text-[20px] font-semibold mt-4 ml-4'>{project.name}</h2>
              </div>

              <div>
                <p className='text-[16px] p-4 text-justify text-gray-300 leading-8'>{project.description}</p>
              </div>

              <div className='flex flex-row ml-4'>
                {project.technologies.map((technology, ind)=>(
                  <div key={ind} className='mr-3 text-[15px]  text-blue-400 font-semibold mb-4'>
                    {technology}
                  </div>
                ))}
              </div>             

          </div>
        ))}
      </div>

    </section>
    </RevealOnScroll>
  )
}
