import React from "react";
import ProjectCard from "./ProjectCard";
import bharatKhata from "../../assets/bharatKhata.png";
import mail from "../../assets/mail.png";
import resume from "../../assets/resume.png";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 bg-gradient-to-br from-black via-gray-900 to-black min-h-screen text-white">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-20 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
        Projects
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
        <ProjectCard
          title="Bharat Khata"
          main="A modern React.js-based platform designed for seamless business transactions, featuring an intuitive and responsive UI/UX for enhanced user engagement and operational efficiency."
          image={bharatKhata}
          demoLink="https://bharat-khata.web.app/"
          codeLink="https://github.com/shikharnagar14"
        />
        <ProjectCard
          title="Smart Email Assistant"
          main="A web application extension that enables auto-generated email replies, built using React for the frontend and Spring Boot for the backend."
          image={mail}
          demoLink="https://github.com/shikharnagar14"
          codeLink="https://github.com/shikharnagar14"
        />
        <ProjectCard
          title="AI Resume Generator"
          main="An intelligent resume generator web application built with React and Spring Boot, enabling users to create professional resumes effortlessly using AI-powered suggestions."          
          image={resume}
          demoLink="https://github.com/shikharnagar14"
          codeLink="https://github.com/shikharnagar14"
        />
      </div>
    </div>
  );
};

export default Projects;
