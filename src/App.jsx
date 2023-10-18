import styles from './style'
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero, Blank } from "./components";
import Aos from 'aos'
import 'aos/dist/aos.css'
import { motion } from "framer-motion";
import {AiOutlineArrowDown} from 'react-icons/ai'

const App = () => (
    <div className='bg-primary w-full overflow-hidden'>
        <div className={`${styles.flexCenter} mb-[85px]`}>
          <div className={`${styles.navWidth}`}>
            <div id='home'>

            </div>

            <Navbar />
          </div>
        </div>
        
        <div className='bg-transparent'>d</div>
        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Hero />

            {/* <div className={`absolute flex justify-center bottom-7 xl:w-[83rem] ${styles.paddingY}`}>
              <a href='#features'>
                <div className='animate-bounce bg-white dark:bg-slate-800 p-2 w-10 h-10 ring-1 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center'>
                    <AiOutlineArrowDown className='scale-[1.4] text-cyan-500 shadow-sm'/>
                </div>
              </a>  
            </div> */}

          </div>
        </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          
          <div id='features'>
            <Blank />
          </div>

          <Business />
          <div className='py-3'>
            <Blank />
          </div>
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>

    </div>
  )

export default App