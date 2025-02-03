import React, { useState } from 'react';
import Damvolter from '../../assets/damvolter.jpg';
import MovieLand from '../../assets/movieland.jpg';
import Cricket from '../../assets/cricket.jpg';
import Learnmate from '../../assets/learnmate.jpg';
import Weather from '../../assets/weatherapp.jpg';
import Currency from '../../assets/currency.jpg';

const ProjectCard = ({ image, title, description, githubLink, deployedLink, onMoreClick, isActive }) => (
  <div className="p-4 md:w-1/3 mb-6">
    <div className="relative group rounded-lg h-52 overflow-hidden border border-gray-700">
      <img src={image} alt="content" className="object-cover object-center h-full w-full" />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h2 className="text-xl font-semibold text-white">{title}</h2>
      </div>
    </div>
    <button
      onClick={onMoreClick}
      className="text-blue-300 hover:text-blue-100 inline-flex items-center mt-3"
    >
      {isActive ? 'Show Less' : 'More Info'}
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="w-4 h-4 ml-2"
        viewBox="0 0 24 24"
      >
        <path d="M12 5l7 7-7 7"></path>
      </svg>
    </button>
    {isActive && (
      <div className="mt-4 bg-gray-800 p-4 rounded-lg shadow-lg">
        <p className="text-gray-300 mb-2">{description}</p>
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-300 hover:underline block"
        >
          GitHub Repository
        </a>
        <a
          href={deployedLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-300 hover:underline block mt-1"
        >
          Deployed Site
        </a>
      </div>
    )}
  </div>
);

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      title: 'Damvolter',
      image: Damvolter,
      description: 'Got selected to participate in a boot-camp conducted by Intel in summer’21. I was given the opportunity to learn about Artificial Intelligence and I made a fully functional AI project ”Damvolter” using Linear Regression. The project was oriented at a sustainable development goal by the UN at the end of it',
    },
    {
      title: 'Movie Land',
      image: MovieLand,
      description: 'Developed a responsive React-based web application, MovieLand, enabling users to search for movies by name. Integrated an external movie database API to fetch real-time data, ensuring an optimized and seamless movie discovery experience across devices.',
      githubLink: 'https://github.com/Jprerna04/MovieWebsite',
      deployedLink: 'https://movie-website-beta-pink.vercel.app/',
    },
    {
      title: 'Cricket Website',
      image: Cricket,
      description: 'Developed a comprehensive and interactive website for XYZ Organization, which focuses on conducting cricket tournaments in various formats as a hackthon project. This project was built using Vite, Tailwind CSS, React, and Lucide React, creating an engaging user experience with a variety of features tailored to cricket enthusiasts.',
      githubLink: 'https://github.com/Jprerna04/cricket-xyz',
      deployedLink: 'https://cricket-xyz-rho.vercel.app/',
    },
    {
        title: 'LearnMate',
        image: Learnmate,
        description: 'Designed and developed a React-based web app during a hackathon to streamline access to mentors and courses, featuring an intuitive UI with filtering, search, and user reviews.',
        githubLink: 'https://github.com/Jprerna04/learnmate',
        deployedLink: 'https://learnmate-steel.vercel.app/',
      },
      {
        title: 'Weather App',
        image: Weather,
        description: 'A Weather App built using React and OpenWeather API, providing real-time weather updates for any city. ',
        githubLink: 'https://github.com/Jprerna04/weather-app.final',
        deployedLink: 'https://main--daily-weather-application.netlify.app/',
      },
      {
        title: 'Currency Converter',
        image: Currency,
        description: 'A Currency Converter built with React that allows users to quickly convert between multiple currencies using real-time exchange rates fetched from an API.',
        githubLink: 'https://github.com/Jprerna04/currencyconvert',
        deployedLink: 'https://currencyconvert-murex.vercel.app/',
      },
  ];

  return (
    <section id="projects" className="text-gray-400 bg-blue-950 body-font">
      <div className="container px-3 py-11 mx-auto">
        <div data-aos="fade-up" data-aos-delay="300" className="flex flex-col">
          <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
            <h1 className="sm:w-2/5 text-white font-medium title-font text-3xl mb-2 sm:mb-0">
              Projects
            </h1>
            <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
              A collection of my recent work, including web applications and personal projects.
            </p>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="flex flex-wrap sm:m-4 -mx-4 -mb-10 -mt-4"
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
              onMoreClick={() =>
                setActiveProject(activeProject === index ? null : index)
              }
              isActive={activeProject === index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

