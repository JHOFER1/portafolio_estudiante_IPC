import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const activities = [
  {
    id: '3',
    name: 'Desarrollo general de nuevas funcionalidades y mejoras en el sistema.',
  }

];
const activities1 = [
  {
    id: '3',
    name: 'Construcción y mantenimiento de arquitecturas de software modulares y escalables, aplicando principios de diseño como SOLID y patrones MVC.',
  }

];


const Experience = () => {
  const [ref] = useInView({
    threshold: 0.5,
  });
  return (
    <section className='section' id='experience' ref={ref}>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
          {/* Text */}
          <motion.div
            variants={fadeIn('left', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'>
            <h3 className='h2 text-emerald-400'>Profesional Experience</h3>
                        <h3 className='h3 mb-4'>MASSLINE - MOTORCYCLE ASSEMBLY LINE OF ECUADOR S.A</h3>
            <p className='max-w-sm mb-16'>
              Cargo: Desarrollador Full Stack <br />
            </p>
            <div>
              {activities1.map((activitie, index) => {
                const { name } = activitie;
                return (
                  <div className='border-b border-white/20 h-[70px] mb-[38px]' key={index}>
                    <div className='max-w-[1000px]'>
                      <ul className=' list-inside list-disc font-secondary leading-tight'>
                        <li>{name}</li>
                        </ul>
                    </div>
                  </div>
                )
              })}
            </div>

            <h3 className='h3 mb-4'>GESPRENDER</h3>
            <p className='max-w-sm mb-16'>
              Cargo: Desarrollador Full Stack <br />
            </p>
            <div>
              {activities.map((activitie, index) => {
                const { name } = activitie;
                return (
                  <div className='border-b border-white/20 h-[70px] mb-[38px]' key={index}>
                    <div className='max-w-[1000px]'>
                      <ul className=' list-inside list-disc font-secondary leading-tight'>
                        <li>{name}</li>
                        </ul>
                    </div>
                  </div>
                )
              })}
            </div>



          </motion.div>
        </div>
      </div>
    </section >);
};

export default Experience;
