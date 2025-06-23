import React from 'react';
// import { BsArrowUpRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { Link } from 'react-scroll';

const services = [
  {
    id: '1',
    name: 'FrontEnd Stack ',
    skills: ['HTML-CSS', 'Javascript', 'ReactJS', 'Sass', 'Tailwindcss', 'Bootstrap']
  },
  {
    id: '2',
    name: 'BackendEnd Stack',
    skills: ['PHP','NodeJS','Symfony','MySQL','OracleDB', 'Python','Flask']
  },
  {
    id: '3',
    name: 'Other Tools',
    skills: ['Github','Figma','Matlab','Docker']
  }
];

const Skills = () => {
  return (
    <section className='section' id='services'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* tex */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1  mix-blend-lighten mb-12 lg:mb-0'>
            <h2 className='h2 text-emerald-400 mb-6'>Skill</h2>
            <h3 className='h3 max-w-[455px] mb-16'>
              Tecnologias  :
            </h3>
            <Link to='work'>
            <button className='btn btn-sm'>Mis Proyectos</button>
            </Link>
          </motion.div>
          {/* services */}
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'>
            <div>
              {services.map((service, index) => {
                const { name, skills } = service;
                return (
                  <div className='border-b border-white/20 h-[146px] mb-[38px]' key={index} >
                    <div className='max-w-[476px]'>
                      <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-3'>
                        {name}
                      </h4>
                      <ul className=' list-inside list-disc font-secondary leading-tight grid grid-cols-2'>
                        {skills.map((skill, index) => {
                          return (
                            <li key={index}>{skill}</li>
                          )
                        })}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
