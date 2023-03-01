import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'

import { AppWrap, MotionWrap } from '../../wrapper';
import { images } from '../../constants';
import './Testimonial.scss'

const testimonials = [
  {
    name: 'Rob',
    company: 'Spotify',
    imgUrl: images.spotify,
    feedback: 'He was good'
  },
  {
    name: 'Bob',
    company: 'adidas',
    imgUrl: images.adidas,
    feedback: 'He was amazing'
  }
]

const Testimonial = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const test = testimonials[currentIndex];

  const handleClick = (index) => {
    setCurrentIndex(index)
  }


  return (
    <>
      {testimonials.length && (
        <>
          <div className='app__testimonial-item app__flex'>
            <img src={test.imgUrl} alt='testimonials' />
            <div className='app__testimonial-content'>
              <p className='p-text'>{test.feedback}</p>
              <div>
                <h4 className='bold-text'>{test.name}</h4>
                <h5 className='p-text'>{test.company}</h5>
              </div>
            </div>
          </div>

          <div className='app__testimonial-btns app__flex'>
            <div className='app__flex' onClick={(()=> handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1))}>
              <HiChevronLeft />
            </div>
            <div className='app__flex' onClick={(()=> handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1))}>
              <HiChevronRight />
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default AppWrap(
  MotionWrap(Testimonial, 'app__testimonial'),
  'app__primarybg'
)