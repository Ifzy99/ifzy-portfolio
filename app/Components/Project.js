"use client";
import{ useEffect, useRef} from 'react';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Project = () => {
  const projectRefs = useRef([]);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        } else {
          entry.target.classList.remove('animate');
        }
      });
    }, { threshold: 0.3 });

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

 



  const projectsData = [
    {
      title: "CodeCrafters Academy",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae expedita enim ipsa voluptatum inventore fugiat tempore vero dignissimos facilis ea? !.",
      stacks: "Stacks: Vite + React.JS, React-Redux, Node.JS, MongoDB.",
      githubLink: "https://github.com/Ifzy99/CodeCrafters_Academy",
      liveLink: "",
      category: "LMS App"
    },
    {
      title: "FinBank",
      description: "FinBank is a web banking application designed to provide users with a seamless experience for managing their finances. The app includes features such as account management, transaction tracking, and an intuitive user interface for both mobile and desktop users.",
      stacks: "Stacks: Javascript,HTML, CSS, Bootstrap.",
      githubLink: "https://github.com/Ifzy99/FinBank",
      liveLink: "https://finbankapp.netlify.app/",
      category: "FinTech Web App"
    },
    {
      title: "Printivo Landing Page",
      description: "PrintivoApp is a landing page clone of the official Printivo website. This project replicates the design and layout of the homepage, focusing on clean UI and responsive design. It's built to showcase a simple, attractive landing page for a printing business.",
      stacks: "Stacks: Vite + React, Javascript, Bootstrap.",
      githubLink: "https://github.com/Ifzy99/printivoApp",
      liveLink: "https://printivo-app.vercel.app",
      category: "E-Commerce Landing Page"
    },
    {
      title: "Mini Weather Checker",
      description: "Mini Weather Checker is a simple weather application built with HTML, CSS, and JavaScript that fetches real-time weather data using the OpenWeather API. It allows users to search for the current weather conditions of any city around the world.",
      stacks: "Stacks: Javascript, Bootstrap, HTML and CSS.",
      githubLink: "https://github.com/Ifzy99/weatherForecast",
      liveLink: "https://miniweatherchecker.netlify.app/",
      category: "Weather Forecast App"
    },
    {
      title: "DevCamper API",
      description: "DevCamper is a comprehensive backend API for managing bootcamps, courses, reviews, users, and authentication. It’s designed to serve as the backend for a bootcamp directory application. The API is built with Node.js and Express, utilizing MongoDB for data storage, and includes full CRUD operations, user authentication, and role-based access control.",
      stacks: "Stacks: Node.js, Express j.s, JSON Web Token, Postman, MongoDB.",
      githubLink: "https://github.com/Ifzy99/devCamper_BACKEND",
      liveLink: "https://dev-camper-backend.vercel.app/",
      category: "Backend API"
    },
  ];

  return (
    <div id="projects" className="section-container">
    <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 text-#333 dark:darkGrayishBlue">Projects</h2>
    <div className="text-#333 dark:text-white py-6 md:p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-8 md:px-12">
        {projectsData.map((project, index) => (
          <div 
            key={index} 
            ref={el => projectRefs.current[index] = el}
            className="projects-card bg-rgba(212, 217, 217, 0.5) dark:bg-tranparent border border-gray-300 dark:border-gray-500 rounded-md p-1 md:p-1 animate-slide-left transition-transform duration-500 ease-out hover:-translate-y-8 hover:shadow-lg"
          >
            <div className="py-2 text-left space-y-0 flex flex-row justify-between md:px-8 px-2 items-center">
              <div className="pb-3">
                <span className="text-[20px] md:text-[24px]">{project.title}</span>
              </div>
              <div className="inline-block transition-transform duration-300 hover:scale-125 justify-end project-links dark:text-grayishBlue">
                <a href={project.githubLink}>
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>
            </div>
            <p className="px-2 py-2 md:px-8 md:py-4 text-sm md:text-base">{project.description}</p>
            <p className="p-2 md:px-8 text-sm dark:text-gray-400">{project.stacks}</p>
            <div className="w-full border-t border-gray-200 dark:border-[#161622] py-4 md:px-8 px-2">
              <div className="flex flex-row justify-between items-center">
                <div className="py-2 px-4 rounded-xl border border-orange-400/50 text-orange-400 bg-orange-400/10">
                  {project.category}
                </div>
                <div className="">
                  <a href={project.liveLink} className="inline-block transition-transform duration-300 hover:scale-125">
                    <FontAwesomeIcon icon={faLink} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
};

export default Project;