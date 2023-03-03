import React, {useState, useEffect} from 'react'
import { animate, motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper'

import { AiFillEye, AiFillGithub} from 'react-icons/ai';
import { images } from '../../constants';
import './Work.scss'

const project = [
  {
    title: 'firstProject',
    description: 'This is my first project',
    projectLink: 'www.netlify.com',
    codeLink: 'www.github.com',
    imgUrl: images.about01,
    tags: 'Web App',
    all: 'all'
  },
  {
    title: 'secondProject',
    description: 'This is my second project',
    projectLink: 'www.netlify.com',
    codeLink: 'www.github.com',
    imgUrl: images.about02,
    tags: 'Game',
    all: 'all'
  },
  {
    title: 'React-Practice-Website',
    description: 'This is one of the first ever react websites i ever built following me completing the SoC. It is interesting to see how far i have progressed and been abled to achieved.',
    projectLink: 'https://moonlit-biscuit-497934.netlify.app',
    codeLink: 'https://github.com/LewisMurray00/react-practice-website',
    imgUrl: images.about03,
    tags: 'React JS',
    all: 'all'
  }
]

const Work = () => {

  const [activeFilter, setActiveFilter] = useState('All')
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1})
  // const [works, setWorks] = useState([])
  // const [filterWork, setFilterWork] = useState([])


  const handleWorkFilter = (item) => {
   
  }

  return (
    <>
      <h2 className="head-text">My Creative <span>Portfolio</span></h2>

      <div className='app__work-filter'>
        {['Web App', 'React JS', 'Game'].map((item, index) => (
          <div
          key={index}
          onClick={() => handleWorkFilter(item)}
          className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''} `}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {project.map((work, index) => (
          <div className='app__work-item app__flex' key={index}>
            <div className='app__work-img app_flex'>
              <img src={work.imgUrl} alt={work.name} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__work-hover app__flex"
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">
                  
                  <motion.div
                    whileInView={{ scale: [0, 1]}}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                
                </a>

                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  
                  <motion.div
                    whileInView={{ scale: [0, 1]}}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                
                </a>

              </motion.div>
            </div>

            <div className='app__work-content app__flex'>
              <h4 className='bold-text'>{work.title}</h4>
              <p className='p-text' style={{ marginTop: 10 }}>{work.description}</p>
            
              <div className='app__work-tag app__flex'>
                <p className='p-text'>{work.tags}</p>
              </div>
            </div>

          </div>
        ))}
      </motion.div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Work, 'app__works'),
  'work',
  "app__primarybg"
)