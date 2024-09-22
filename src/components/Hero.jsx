import React from "react"
import profilepic from '../assets/profilepic5.png'
import { AiFillLinkedin,AiFillGithub,AiFillInstagram } from "react-icons/ai"
import {TypeAnimation} from 'react-type-animation'


export function Hero  ()  {
  return (
    <div>
      <div className=' my-7 sm:my-0 max-w-[1200px] h-[80vh] mx-auto flex flex-col-reverse sm:flex-row justify-center align-center'>
        <div className='flex-col my-auto mx-auto md:mx-0'id="home">
              <p className='md:text-5xl sm:text-4xl text-xl font-bold text-gray-200'>Hi! I am Leonardo.</p>
              <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'><TypeAnimation
              sequence={[
                "Fromtend Dev",
                1000,
                "Webdesigner",
                1000,
                "Consultant",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
                />
              </h1>
              <div className='flex justify-center items-center'>
                  <p className='md:text-5xl sm:text-4xl text-xl font-bold text-gray-500'>with a 5+ years experience</p>
              </div>
              <div className='text-5xl flex justify-start gap-16 my-7 text-purple-600'>

              <a href="https://www.linkedin.com/in/leonardo-mendoza-22b799196/" target="_blank" rel="noopener noreferrer"><AiFillLinkedin /></a>
              <a href="https://github.com/LeonardoMachunac" target="_blank" rel="noopener noreferrer"><AiFillGithub/></a>
              <a href="https://www.instagram.com/machunac_ga/" target="_blank" rel="noopener noreferrer"><AiFillInstagram/></a>
              </div>
              <div class='relative inline-flex group my-3'>
                    <div class='absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradiente-to-r 
                    from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 
                    group-hover:-inset-1 group-hover:duration-200 '>
                    </div>
                    <a href="https://drive.google.com/uc?export=dowload&id=1INwfh3DzBnZ3ztgxAaZZM4BH27y1Quh9" title="Download CV" role="button"
                    class="w-[190px] h-[60px] relative inline-flex items-center justify-center px-8 py-4 text-lg 
                    font-bold text-white transition-all duration-200 bg-primary-color rounded-xl
                    focus:outline-none focus:right-2 focus:ring-offset-2 focus:ring-gray-900">Dowloand CV</a>
              </div>
            </div> 
          
          <div className='my-auto'>
              <img className='w-[200px] sm:w-[500px] mx-auto h-auto rounded-full' src={profilepic} alt="profile pic"/>
              
          </div>

          <div class="style-switcher-toggler s-icon">
            <i class="fas fa-cog fa-spin">dd</i>
        </div>
      
          

              

      </div>
    </div>
  )
}

