import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import img1 from '../assets/portfolio-img1.png';
import img2 from '../assets/portfolio-img2.png';
import img3 from '../assets/portfolio-img3.png';

const Work = () => {
  return (
    <section className='section' id='work'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-x-10'>
          <motion.div className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}>
            {/* Text */}
            <div>
              <h2 className='h2 leading-tight text-emerald-400'>
                Proyectos <br />
              </h2>
              <p className='max-w-sm mb-16'>
                Éstos son algunos de mis proyectos, pero estoy seguro que cuando revise esto, podría estar trabajando en otros.
.
              </p>
              {/* <button className='btn btn-sm'>View all projects</button> */}
            </div>
            {/* Image */}
            <div className='group relative overflow-hidden border-2 border-white/50 
            rounded-xl lg:mt-16'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40
              transition-all duration-300'></div>
              {/* img */}
              <img className='group-hover:scale-105 transition-all duration-500' src={img1} alt='Imagen Proyecto Chatbot' />
              {/* Pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <a href='https://ieee-c3229.web.app' target='_blanck' rel="noopener">
                  <span className='text-gradient'>
                    CHATBOT CONVERSACIONAL  (DEARROLLO API REST PARA INTEGRACIÓN )
                  </span>
                </a>
              </div>
              {/* Title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3x1 text-white'>BRAIN - PYTHON - ORACLEDB</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn('left', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex flex-col gap-y-10'>

            {/* Image */}
            <div className='group relative overflow-hidden border-2 border-white/50 
            rounded-xl'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40
              transition-all duration-300'></div>
              {/* img */}
              <img className='group-hover:scale-105 transition-all duration-500' src={img2} alt='Imagen Proyecto E-COMMERCE' />
              {/* Pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <a href='https://coffe-mern-stack-production.up.railway.app' target='_blanck' rel="noopener">
                  <span className='text-gradient'>
                    E-COMMERCE SHINERAY.COM.EC (DESARROLLO FULL STACK)
                  </span>
                </a>
              </div>
              {/* Title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3x1 text-white'>NODEJS-REACT-POSTGRESQL- PYTHON</span>
              </div>
            </div>


            {/* Image */}
            <div className='group relative overflow-hidden border-2 border-white/50 
            rounded-xl'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40
              transition-all duration-300'></div>
              {/* img */}
              <img className='group-hover:scale-105 transition-all duration-500' src={img3} alt='Imagen Proyecto ERP' />
              {/* Pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <a href='https://gesprender.com/' target='_blanck' rel="noopener" >
                <span className='text-gradient'>
                  ERP WEB  MASSLINE (DESARROLLO FULL STACK)
                </span>
                </a>
              </div>
              {/* Title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3x1 text-white'>PYTHON-ORACLEDB-REACT</span>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>);
};

export default Work;
