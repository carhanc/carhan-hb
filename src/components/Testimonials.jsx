import React from 'react'
import { feedback } from '../constants'
import styles from '../style'
import FeedbackCard from './FeedbackCard'
import Blank from './Blank'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Testimonials = () => (
    <div>
      <div id='clients'>
        <Blank />
      </div>
        <section data-aos="zoom-in-down"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine" 
        data-aos-duration="1500"
        className={`${styles.paddingY} ${styles.flexCenter} flex-col relative mt-[50px]`}>
          <div className='absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient' />

          <div className='w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]'>

            <h2 className={styles.heading2}>
              What are people <br className='sm:block hidden'/> saying about us?
            </h2>

            <div className='w-full md:mt-0 mt-6'>
              <p className={`${styles.paragraph} text-left max-w-[450px]`}>
                Everything you need to accept card payments and grow your business anywhere on the planet.
              </p>
            </div>
          </div>

          <div className='flex flex-wrap justify-start w-full feedback-container relative z-[1]'>
            {feedback.map((card) => (
              <FeedbackCard key={card.id} {...card} />
            ))}
          </div>
        </section>
    </div>
)


export default Testimonials