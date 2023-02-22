import React, {useState, useEffect} from 'react'
import { animate, motion } from 'framer-motion';
import { AppWrap } from '../../wrapper'

import { AiFillEye, AiFillGithub} from 'react-icons/ai';
import { images } from '../../constants';
import './Work.scss'

const work = [
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
        
      </motion.div>
    </>
  )
}

export default Work