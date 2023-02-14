import React, { useState, useEffect} from 'react'
import './About.scss'

import { motion } from 'framer-motion';

const abouts = [
  {
    title: 'Web Development',
    description: 'I am new to web developing but learning new things quickly',
    imgUrl: 'https://'
  },
  {
    title: 'UI/UX',
    description: 'I have an understanding of UX/UI',
    imgUrl: 'https://'
  }
];

const About = () => {
  return (
    <>
      <h2 className='head-text'>
        I Know that 
        <span>Good design</span>
        <br />
        means
        <span>Good Business</span>
      </h2>

      <div className='app__profiles'>
        {abouts.map((about, index)=>(
          <motion.div
          whileInView={{ opacity: 1}}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, type: 'tween' }}
          className="app__profile-item"
          key={about.title + index}
          >
            <img src={abouts.imgURL} alt={about.title} />
            <h2 className='bold-text' style={{ marginTop: 20}}>{about.title}</h2>
            <p className='p-text' style={{ marginTop: 10}}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default About