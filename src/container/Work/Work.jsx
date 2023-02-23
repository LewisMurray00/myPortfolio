import React, {useState, useEffect} from 'react'
import { animate, motion } from 'framer-motion';
import { AppWrap } from '../../wrapper'

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
  }
]

const Work = () => {

  const [activeFilter, setactiveFilter] = useState('All')
  const [animateCard, setanimateCard] = useState({ y: 0, opacity: 1})
  const [works, setworks] = useState([])
  const [filterWork, setfilterWork] = useState([])


  const handleWorkFilter = (item) => {

  }

  return (
    <>
      <h2 className="head-text">My Creative <span>Portfolio</span></h2>

      <div className='app__work-filter'>
        {['Web App', 'React JS', 'Game', 'All'].map((item, index) => (
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

                

              </motion.div>

  


            </div>
          </div>
        ))}
      </motion.div>
    </>
  )
}

export default Work