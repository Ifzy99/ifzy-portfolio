"use client";

import Image from 'next/image';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import Button from './Button';
import Link from 'next/link';
import useIntersectionObserver from "../hooks/useIntersectionObserver";



const About = () => {
  const handleIntersection = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        console.log('Element is in view!');
        entry.target.classList.add('animate');
      } else {
        entry.target.classList.remove('animate');
      }
    });
  }

  const elementRef = useIntersectionObserver(handleIntersection,{root: null,
    rootMargin: '0px', threshold: 0.3 });
  return (
    <section id="about" className="py-16 px-8 md:px-6 max-w-7xl mx-auto">
      <h2 className="text-2xl md:text-4xl font-bold text-center text-grayishBlue dark:text-white mb-10">About Me</h2>

      <div ref={elementRef} className="flex flex-col md:flex-row items-center md:items-start gap-8 animate-slide-left">
        <div  className="md:w-1/2 ">
          <h3 className="text-2xl md:text-3xl font-bold text-yellow-600 dark:text-[#4ec1b5] mb-4 leading-tight">
            Developing With a Passion<br />While Exploring The World.
          </h3>
          <div className="w-16 h-1 bg-yellow-600 mb-6"></div>
          <p className="text-gray-600 mb-4">
            I am an enthusiastic and a passionate web developer with experience of working with both frontend and backend frameworks.
          </p>
          <p className="text-gray-600 mb-4">
           So far,I havefocused on building landing pages and web applications, primarily using the MERN stack (MongoDB, Express, React, Node.js).I also have experience with Angular, Vue, , PHP and Next.JS. I am skilled at understanding project requirements and turning them into functional, user-friendly solutions. I am a strong advocate for continuous learning and always strive to stay updated with the latest trends and technologies in the web development field. This approach helps me deliver efficient and modern solutions in my projects.
          </p>
          <p className="text-gray-600 mb-8">
          When I am not coding, you can usually find me watching a football match, especially if Arsenal is playing, or browsing the web to stay updated on global events. I am also a fan of good music and enjoy watching movies in my downtime.
          </p>
          <div className="">
          <Link href="#contact">
          <Button text="Contact Me" />
          </Link>
          <a href="https://drive.google.com/file/d/1xXIcQzoav-_1GlEWuFo9siaIsA7iIlr0/view?usp=drivesdk " target="_blank" rel="noopener noreferrer">
          <Button text="Resume" className="ml-4"  icon={faDownload} />
          </a>
          </div>
        </div>
        <div  className="md:w-1/2 relative">
          <div className="bg-gray-900 dark:bg-veryDarkBlue w-full h-full absolute top-4 left-4 rounded-lg"></div>
          <div className="relative z-10 bg-gray-200 rounded-lg overflow-hidden">
            <Image
              src="/Images/selfie.jpg"
              alt="Developer working on laptop"
              width={640}
              height={480}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;