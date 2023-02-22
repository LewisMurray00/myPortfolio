import React, {useState, useEffect} from 'react'
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper'

import { AiFillEye, AiFillGithub} from 'react-icons/ai';
import './Work.scss'


const Work = () => {

  const handleWorkFilter = () => {
    
  }

  return (
    <>
      <h2 className="head-text">My Creative <span>Portfolio</span></h2>

      <div className='app__work-filter'>
        {['Web App', 'React JS', 'Game', 'All'].map((item, index) => (
          <div
          key={index}
          onClick={() => handleWorkFilter(item)}
          >

          </div>
        ))}
      </div>
    </>
  )
}

export default Work