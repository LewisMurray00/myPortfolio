import React, {useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {Tooltip as ReactTooltip} from 'react-tooltip';

import { AppWrap, MotionWrap } from '../../wrapper';
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
  },
  {
    name:'Sass',
    imgUrl: images.sass
  }
]

const experiencesArray = [
  {
    year: 'March 2021 - October 2021',
    name: 'Frontend developer (bootcamper)',
    company: 'School of Code',
    desc: "A course i did for 24 weeks which entailed getting me to the position i am now."
  },
  {
    year: '2019-Current',
    name: 'Labourer',
    company: 'JW Construction',
    desc: "My current job - started here in 2019, job role involves general labouring, building work and maintenance"
  },
  {
    year: '2016-2019',
    name: 'Kitchen Porter/Waiter',
    company: 'The Hollybush ',
    desc: ""
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
                <motion.div className='app__skills-exp-item' key={experience.year}>
                  <div className='app__skills-exp-year'>
                    <p className='bold-text'>{experience.year}</p>
                  </div>

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
                  
                  <ReactTooltip
                    id={experience.name}
                    // effect="solid"
                    // arrowColor='#fff'
                    className="skills-tooltip"
                  >
                    {experience.desc}
                  </ReactTooltip>

                </motion.div>
              </>
            ))}
        </motion.div>

      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg'
)