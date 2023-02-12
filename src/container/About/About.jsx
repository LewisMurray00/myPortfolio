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
        {abouts.map((about, index)=>{
          
        })}
      </div>
    </>
  )
}

export default About