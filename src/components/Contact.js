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
            <input className='bg-transparent border-b py-3 outline-none w-full 
          placeholder:text-white focus:border-emerald-400 transition-all'
              type='text'
              name='name'
              placeholder='Your name'
            />
            <input className='bg-transparent border-b py-3 outline-none w-full 
          placeholder:text-white focus:border-emerald-400 transition-all'
              type='text'
              name='email'
              placeholder='Your email'
            />

          <textarea
          className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white
          focus:border-emerald-400 transition-all mb-12'
          placeholder='Your message'
          name='message'
          ></textarea>
          <button className='btn btn-lg'>Send message</button>
          </motion.form>
        </div>
      </div>
    </section>);
};

export default Contact;
