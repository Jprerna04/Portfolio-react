import React from "react";
import CV_Resume from "./CV_Resume.pdf";
import HTML from "../../assets/html.jpg";
import CSS from "../../assets/css.svg";
import JS from "../../assets/js.webp";
import react from "../../assets/react.png";
import Tailwind from "../../assets/tailwind.jpg";
import Node from "../../assets/node.jpg";
import CPP from "../../assets/cpp.png";
import DSA from "../../assets/dsa.jpg";
import Python from "../../assets/python.jpg";
import Canva from "../../assets/canva.jpg";
import Figma from "../../assets/figma.jpg";
import Git from "../../assets/git.png";

export default function Skills() {
  const skills = [
    { img: HTML, text: "HTML" },
    { img: CSS, text: "CSS" },
    { img: JS, text: "Javascript" },
    { img: Tailwind, text: "Tailwind CSS" },
    { img: react, text: "React" },
    { img: Node, text: "Node" },
    { img: CPP, text: "C++" },
    { img: DSA, text: "Data Structures & Algorithms" },
    { img: Python, text: "Python" },
    { img: Git, text: "Git" },
    { img: Canva, text: "Canva" },
    { img: Figma, text: "Figma" }
  ];

  return (
    <div>
        <section id='skills' className='text-gray-600 body-font'>
        <div className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">My Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="relative w-full h-52 group cursor-pointer" // Reduced height
            >
              {/* Skill Image */}
              <img
                src={skill.img}
                alt={skill.text}
                className="w-full h-full object-cover rounded-lg transition-all duration-300 group-hover:blur-sm"
              />

              {/* Text Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg font-bold">{skill.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Resume Button */}
        <div className="mt-8">
          <a
            href={CV_Resume}
            download
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Download My Resume
          </a>
        </div>
      </div>
    </div>
    </section>
        
    </div>
    
  );
}
