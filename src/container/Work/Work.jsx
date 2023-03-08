import React, {useState, useEffect} from 'react'
import { animate, motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper'

import { AiFillEye, AiFillGithub} from 'react-icons/ai';
import { images } from '../../constants';
import './Work.scss'

const project = [
  {
    title: 'React-Portfolio-Website',
    description: 'This was my initial portfolio that i had a go at creating prior to the creation of this webpage',
    projectLink: 'https://warm-alfajores-8eb297.netlify.app',
    codeLink: 'https://github.com/LewisMurray00/react-portfolio-website',
    imgUrl: images.react,
    tags: 'Web App',
    all: 'all'
  },
  {
    title: 'Pokemon-JS-Game',
    description: 'This was more of a passion project, i always enjoyed playing Pokemon growing up and so when i was browsing different tutorials and projects, i came across a tutorial creating my very own pokemon game and so this is what became of it.',
    projectLink: 'https://github.com/LewisMurray00/Pokemon-JS-game',
    codeLink: 'https://github.com/LewisMurray00/Pokemon-JS-game',
    imgUrl: images.pokemon,
    tags: 'Game',
    all: 'all'
  },
  {
    title: 'React-Practice-Website',
    description: 'This is one of the first ever react websites i ever built following me completing the SoC. It is interesting to see how far i have progressed and been abled to achieved.',
    projectLink: 'https://moonlit-biscuit-497934.netlify.app',
    codeLink: 'https://github.com/LewisMurray00/react-practice-website',
    imgUrl: images.react,
    tags: 'React JS',
    all: 'all'
  },
  {
    title: 'Javascript_Practice_FCC',
    description: 'This involved a series of mini projects, all made from Javascript and was a real return back to basics.',
    projectLink: 'https://github.com/LewisMurray00/Javascript_Practice_FCC',
    codeLink: 'https://github.com/LewisMurray00/Javascript_Practice_FCC',
    imgUrl: images.javascript,
    tags: 'JS',
    all: 'all'
  },

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
        {['Web App', 'React JS', 'Javascript', 'Game'].map((item, index) => (
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