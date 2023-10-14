import styles from "../style"
import { arrowUp } from "../assets"
import Aos from 'aos'
import 'aos/dist/aos.css'

const GetStarted = () => (
    <div className="relative group">
      <div className="absolute inset-0 rounded-full group-hover:bg-cyan-600 blur-2xl transition 
      duration-[600ms] ease-out" />
      <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full
      bg-blue-gradient p-[2px] cursor-pointer group-hover:scale-[1.1] ease-linear duration-200` }>
        <div className={`${styles.flexCenter} flex-col bg-primary 
        w-[100%] h-[100%] rounded-full relative`} 
        // style="text-shadow: rgb(152, 255, 255) 0px 0px 0px; box-shadow: rgb(152, 255, 255) 0px 0px 0px; transform: none"
        >
          <div className={`${styles.flexStart} flex-row`}>

            <p className="font-poppins font-medium text-[18px] leading-[23px] mr-0.5">
              <span className="text-gradient">Get</span>
            </p>
            <img src={arrowUp} alt="arrow" className="w-[23px] h-[23px] object-contain"/>
            
          </div>

            <p className="font-poppins font-medium text-[18px] leading-[23px]">
              <span className="text-gradient">Started</span>
            </p>
        </div>
      </div>
    </div>
  )


export default GetStarted