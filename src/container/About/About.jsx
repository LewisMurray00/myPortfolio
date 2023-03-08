import React, { useState, useEffect} from 'react'
import './About.scss'

import { motion } from 'framer-motion';
import { images } from '../../constants'

import { AppWrap, MotionWrap } from '../../wrapper'
// import { urlFor, client } from '../../client'


const abouts = [
  {
    title: 'Frontend Development',
    description: 'I feel that my knowledge of Frontend Development consists of frequently using Javascript, HTML & CSS to create my work & projects. I have since expanded this to use frameworks such as React and other languages such as SCSS.',
    imgUrl: images.about01
  },
  {
    title: 'UI/UX',
    description: 'I have an good understanding of UX/UI, this involves using things such as Figma, Canva, Trello and Figjam to achieve the designs and user experience to create my applications',
    imgUrl: images.about02
  },
  {
    title: 'Testing',
    description: 'When it comes to testing, i have used Jest as a framework to use, allowing me to unit test parts of my creations and others to ensure they are working how they should be.',
    imgUrl: images.about04
  }
];

const About = () => {

//   const [abouts, setAbouts] = useState([]);

//   useEffect(() => {
//     const query = '*[_type == "abouts"]';

//     client.fetch(query)
//       .then((data) => setAbouts(data))
//   }, []);
  

  return (
    <>
      <h2 className='head-text'>
        I Know that having <span>Good development</span> <br /> means <span>Good Business</span>
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
            <img src={about.imgUrl} alt={about.title} />
            <h2 className='bold-text' style={{ marginTop: 20}}>{about.title}</h2>
            <p className='p-text' style={{ marginTop: 10}}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg'
);