import React, {useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ReactTooltip from 'react-tooltip';

import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import './Skills.scss'

const skillsArray = [
  {
    name: 'Javascript',
    imgUrl: images.javascript
  },
  {
    name: 'HTML',
    imgUrl: images.html
  },
  {
    name: 'CSS',
    imgUrl: images.css
  },
  {
    name: 'React',
    imgUrl: images.react
  }
]

const experiencesArray = [
  {
    name: 'School of Code',
    company: 'School of Code'
  }
]

const Skills = () => {
  return (
    <>
      <h2 className='head-text'>Skills & Experience</h2>

      <div className='app__skills-container'>
        <motion.div className='app__skills-list'>
          {skillsArray.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0,1 ]}}
              transition={{ duration: 0.5 }}
              className='app__skills-item app__flex'
              key={skill.name}
            >
              <div className='app__flex' style={{ backgroundColor: skill.bgcolor }}>
                <img src={skill.imgUrl} alt={skill.name}/>
              </div>
              <p className='p-text'>{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className='app__skills-exp'>
            {experiencesArray.map((experience) => (
              <>
                <motion.div
                  whileInView={{ opacity: [0,1 ]}}
                  transition={{ duration: 0.5 }}
                  className='app__skills-exp-work'
                  data-tip
                  data-for={experience.name}
                  key={experience.name}
                >
                  <h4 className='bold-text'>{experience.name}</h4>
                  <p className='p-text'>{experience.company}</p>
                </motion.div>
                
                <ReactTooltip>

                </ReactTooltip>
              </>
            ))}
        </motion.div>

      </div>
    </>
  )
}

export default AppWrap(Skills, 'skills')