import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'

const ServiceCard = ({index, title, icon}) => {
  return (
    <div>
      <Tilt className='xs:w-[250px] w-full'>
        <motion.div
          variants={fadeIn('right','spring',0.5*index,0.75)}
          className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card' 
        >
          <div
          // Adding Tilt options
            options={{
              max:45,
              scale:1,
              speed:450
            }}
            className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col '
          >
            <img src={icon} alt={title} className='w-20 h-20 object-contain' />
            <div className="text-white text-[20px] font-bold text-center">{title}</div>
          </div>
        </motion.div>
      </Tilt>
    </div>
  )
}


const About = () => {
  return (
    <>
      <motion.div
       variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <div className={`flex flex-row items-start gap-5`}>
        <div className="w-1 sm:h-60 h-40 violet-gradient"/>
        <motion.p 
          className='mt-4 text-secondary text-[19px] max-w-3xl leading-[30px] font-normal'
          variants={fadeIn('','',0.1,0.1)}
        >Hi there! I'm Fabio a Full-Stack Developer and industrial engineer with a passion for learning and problem solving. I enjoy discovering new technologies and frameworks to learn and build software solutions to every day challenges.<br className="sm:block hidden"/> Oh! and film music, I love film music!
        </motion.p>
      </div>
      <div className='mt-20 flex flex-wrap gap-10 justify-center'>
        {services.map((service,index)=>(
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About,'about')