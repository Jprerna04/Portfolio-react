import React from 'react'
import Navbar from '../navbar/Navbar'
import me from '../../assets/me.jpg'
import LinkedInIcon from '../../assets/linkedinIcon.png' // replace with your LinkedIn icon image
import LeetCodeIcon from '../../assets/lc.png' // replace with your LeetCode icon image
import GFGIcon from '../../assets/gfg.jpeg' // replace with your GFG icon image
import GitHubIcon from '../../assets/github.png' // replace with your GitHub icon image
import EmailIcon from '../../assets/email.jpg' // replace with your Email icon image
import XIcon from '../../assets/x.webp' 

export default function Hero() {
  return (
    <div className='relative overflow-hidden min-h-[550px] sm:min-h-[650px] flex flex-col items-center'>
        <div className='md:h-[720px] h-[990px] md:w-[1600px] w-[900px] bg-gradient-to-r absolute bg-blue-950 rounded-full transform rotate-6 -top-40 z-0'></div>
        <Navbar />

        <section id='home' className='flex flex-col md:flex-row items-center justify-center w-full px-4 md:px-52 pb-4 md:pd-24 md:pt-32 pt-24 md:pb-24 mt-24 md:mt-0 z-10'>
          <div data-aos='fade-up' className='flex-1 md:text-left mt-10 md:mt-0'>
            <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4'>Prerna Jha</h1>
            <p data-aos='fade-up' data-aos-delay='300' className='text-base sm:text-lg md:text-lg text-gray-300 mb-6'>
              Hi! I am Prerna, fullstack developer from India. <br/>
              I love building web experiences and collaborating with tech communities. 
            </p>

            {/* Social media icons with reduced space and size */}
            <div className="flex gap-4 mt-4">
              {/* Email Icon */}
              <a href="mailto:prernajha267@gmail.com" target="_blank" rel="noopener noreferrer">
                <img src={EmailIcon} alt="Email" className="h-10 w-10 rounded-full hover:opacity-80 transition duration-300" />
              </a>
              {/* LinkedIn Icon */}
              <a href="https://www.linkedin.com/in/prerna-jha-6080a9253/" target="_blank" rel="noopener noreferrer">
                <img src={LinkedInIcon} alt="LinkedIn" className="h-10 w-10 rounded-full hover:opacity-80 transition duration-300" />
              </a>
              {/* X Icon */}
              <a href="https://x.com/PrernaJha04" target="_blank" rel="noopener noreferrer">
                <img src={XIcon} alt="X" className="h-10 w-10 rounded-full hover:opacity-80 transition duration-300" />
              </a>
              {/* GitHub Icon */}
              <a href="https://github.com/Jprerna04" target="_blank" rel="noopener noreferrer">
                <img src={GitHubIcon} alt="GitHub" className="h-10 w-10 rounded-full hover:opacity-80 transition duration-300" />
              </a>
              {/* LeetCode Icon */}
              <a href="https://leetcode.com/jprerna04/" target="_blank" rel="noopener noreferrer">
                <img src={LeetCodeIcon} alt="LeetCode" className="h-10 w-10 rounded-full hover:opacity-80 transition duration-300" />
              </a>
              {/* GeeksforGeeks Icon */}
              <a href="https://www.geeksforgeeks.org/user/prernajcyh1/" target="_blank" rel="noopener noreferrer">
                <img src={GFGIcon} alt="GeeksforGeeks" className="h-10 w-10 rounded-full hover:opacity-80 transition duration-300" />
              </a>
            </div>
          </div>
          <div data-aos='fade-up' className='flex-1 flex justify-center md:justify-end mt-0 md:mt-0'>
            <img src={me} alt="Hero Image" className='h-[300px] sm:h-[400px] md:h-[440px] w-[250px] sm:w-[360px] object-cover rounded-lg' />
          </div>
        </section>
    </div>
  )
}
