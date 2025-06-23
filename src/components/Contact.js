import React from 'react';
// Motion
import { motion } from 'framer-motion';
// variantes
import { fadeIn } from '../variants';

const Contact = () => {
  return (
    <section className='py-16 lg:section ' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* Text */}
          <motion.div
          variants={fadeIn('right', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className='flex-1 flex justify-start items-center'>
            <div>
              <h4 className='text-xl uppercase text-emerald-400 font-medium mb-2
            tracking-wide'>
                Get in touch
              </h4>
              <h2 className='text-[45px] lg:text-[90] leading-none mb-12'>
                let's Work <br /> together!
              </h2>
            </div>
          </motion.div>
          {/* form */}
          <motion.form
          variants={fadeIn('left', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}

          className='flex-1 border rounded-2x1 flex flex-col gap-y-6 pb-24 p-6 items-start'action="https://formsubmit.co/7dab34db497befe4be44b99ffd92acc1" method="POST" >
          <label htmlFor='name' className='sr-only'>Nombre</label>
          <input
            id='name'
            className='bg-transparent border-b py-3 outline-none w-full 
            placeholder:text-white focus:border-emerald-400 transition-all'
            type='text'
            name='name'
            placeholder='Tu nombre'
            required
          />
          <label htmlFor='email' className='sr-only'>Correo electrónico</label>
          <input
            id='email'
            className='bg-transparent border-b py-3 outline-none w-full 
            placeholder:text-white focus:border-emerald-400 transition-all'
            type='email'
            name='email'
            placeholder='Tu correo electrónico'
            required
          />
          <label htmlFor='message' className='sr-only'>Mensaje</label>
          <textarea
            id='message'
            className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white
            focus:border-emerald-400 transition-all mb-12'
            placeholder='Tu mensaje'
            name='message'
            required
          ></textarea>
          <button className='btn btn-lg' type='submit'>Enviar mensaje</button>
          </motion.form>
        </div>
      </div>
    </section>);
};

export default Contact;
