import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';


const About = () => {
  const [ref] = useInView({
    threshold: 0.5,
  });
  return (
    <section className='section' id='about' ref={ref}>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
          {/* Text */}
          <motion.div
            variants={fadeIn('left', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'>
            <h3 className='h2 text-emerald-400'>About me.</h3>
            <h3 className='h3 mb-4'>Web Developer with 2 years of experience</h3>
            
            <p className='mb-6 text-justify'>
              Hello! My name is Johnny and I like transform ideas into code.
              My interest in web development started back in 2019 when I built a web interface for an automation project.
              I researched and followed a curriculum on web development,
              created my first page for a student organization where I tested my skills as a frontend developer and had the opportunity to work at the Gesprender startup as a backend.
              Currently I am constantly learning while developing projects as a freelancer.

            </p>

            {/* <div className='flex flex-wrap  gap-x-16 mb-12 ml-5'>
              <div className='flex gap-x-8'>
                <ul className='list-outside list-disc'>
                  <h2 className='text-emerald-400 ' >Frontend Stack </h2>
                  <li>HTML-CSS</li>
                  <li>JavaScript (ES6+)</li>
                  <li>ReactJS</li>
                </ul>

                <ul className='list-outside list-disc mt-7'>
                  <li>Sass</li>
                  <li>Tailwindcss</li>
                  <li>Bootstrap</li>
                </ul>
              </div>

              <div>
                <ul className='list-outside list-disc'>
                  <h2 className=' text-emerald-400'>Backend Stack</h2>
                  <li>PHP</li>
                  <li>NodeJS</li>
                  <li>Symfony</li>
                </ul>

                <ul className='list-outside list-disc mt-7'>
                  <li>MySQL</li>
                  <li>MongoDB</li>
                  <li>Python</li>
                </ul>
              </div>

              <div>
                <ul className='list-outside list-disc'>
                  <h2 className=' text-emerald-400'>Other Skills</h2>
                  <li>Github</li>
                  <li>Figma</li>
                </ul>
              </div>
            </div> */}

            {/* <div className='flex gap-x-8 items-center'>
              <button className='btn btn-lg'>Contact me</button>
              <a href='/' className='text-gradient btn-link'>My portfolio
              </a>
            </div> */}
          </motion.div>
        </div>
      </div>
    </section >);
};

export default About;
