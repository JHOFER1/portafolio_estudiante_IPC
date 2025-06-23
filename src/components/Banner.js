import React from 'react';
import Image from '../assets/avatar.png';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { Link } from 'react-scroll';

const Banner = () => {
  return (
    <section className='min-h-[70vh] lg:min-h-[65vh] flex items-center mb-20' id='home'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
          {/* TEXT */}
          <div className='flex-1 text-center font-secondary lg:text-left'>

            <motion.h1
              variants={fadeIn('up', 0.3)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='text-[55px] font-bold leading-[0.8] lg:text-[95px]'>
              JOHNNY <span>PALAGUACHI</span>
            </motion.h1>

            <motion.div
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='mb-6 text-[36px] lg:text-[45px] font-secondary font-semibold uppercase leading-1'>
              <span className='text-wuite mr-4'>I am a</span>
              <TypeAnimation
                sequence={[
                  'Developer',
                  2000,
                  'Frontend',
                  2000,
                  'Backend',
                  2000,
                ]}
                speed={50}
                className='text-emerald-400'
                wrapper='span'
                repeat={Infinity}
              />
            </motion.div>

            <motion.div
              variants={fadeIn('up', 0.5)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='mb-6 max-w-4xl mx-auto lg:mx-0 grid grid-cols-1 lg:grid-cols-2 gap-6 text-justify'
            >
              <p>
                Hola, soy Johnny Palaguachi. Estudio Ingeniería en Software y trabajo como desarrollador Full Stack. Me especializo en backend y también diseño interfaces modernas.
              </p>
              <p>
                Además, tengo experiencia en automatización, arquitectura de software, y desarrollo de APIs REST. Siempre busco crear soluciones escalables y eficientes, aplicando buenas prácticas de ingeniería.
              </p>
            </motion.div>

            <motion.div
              variants={fadeIn('up', 0.6)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>

              <Link to='contact'
                className='text-gradient btn-link'
                activeClass='active'
                smooth={true}
                spy={true}>
                <button className='btn btn-lg'>Contacto</button>
              </Link>

              <a href='https://drive.google.com/file/d/1CrF5emfmR3txXIJBnE0z9dvSCHXL77kv/view?usp=sharing'
                target='_blanck'
                rel="noopener"
                className='text-gradient btn-link cursor-pointer'
                activeClass='active'
                smooth={true}
                spy={true}
              >CV
              </a>

            </motion.div>
            {/* socials */}
            <motion.div
              variants={fadeIn('up', 0.7)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
              <a href='https://github.com/JHOFER1' target='_blanck' rel="noopener">
                <FaGithub />
              </a>
              <a href='https://www.linkedin.com/in/johnny-dev-palaguachi-jerez-266090251/' target='_blanck' rel="noopener" >
                <FaLinkedin />
              </a>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn('down', 0.5)}
            initial='hidden'
            whileInView={'show'}
            // viewport={{ once: false, amount: 0.7 }}
            className='hidden lg:flex flex-1 max-w-[300px] lg:max-w-[220px]'>
            <img className='rounded-3xl' src={Image} alt='none' />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default Banner;
