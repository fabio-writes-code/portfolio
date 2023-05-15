import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component/dist-modules'
import { motion } from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css'

import { styles } from '../styles'
import { experiences } from '../constants'
import { SectionWrapper } from '../hoc'
import { textVariant } from '../utils/motion'


const Button = ({refUrl, refText}) =>{
  return(
    <a 
      href={refUrl} 
      target='_blank'
      className={
        `md:w-2/5 w-full ml-4 px-6 py-4 rounded-md shadow-md bg-[#C7CDD9] text-[#000] text-center
        hover:bg-[#C2EDDD] hover:font-medium transition ease-in-out duration-300`
      }
    >
      {refText}
    </a>
  )
}


const ExperienceCard =({experience})=>{
  return(
    <VerticalTimelineElement
      contentStyle={{
        background:'#65718C', 
        color:'#ff', 
        borderRadius:'2%',
        boxShadow:"0px 4px 4px 0px rgba(0,0,0,0.4)"
      }}
      contentArrowStyle={{borderRight:'7px solid #65718C'}}
      // date={experience.date} 
      iconStyle={{background:'#C7CDD9'}}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.project_name}
            className='w-[60%] h-[60%] object-fill'
          />
        </div>
      }
    >
      {/* Titles */}
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p className='text-white text-[18px] font-semibold pb-4' style={{margin:'0px'}}>{experience.project_name}</p>
      </div>

      {/* Image */}
      <div>
        <img src={experience.image} alt={experience.project_name} className='rounded-xl max-h-60 w-full object-cover'/>
      </div>

      {/* Frameworks */}
      <div className='mt-4 text-center'>
        {experience.icons.map((icon,index)=>(
          <i  
            key={index}
            className={`${icon} text-4xl px-2`}
          ></i>
        ))}
      </div>

      {/* Bullets */}
      <ul className='mt-5 list-disc ml-5 space-y-2 mb-9'>
        {experience.points.map((point, index)=>(
          <li 
            key={`experience-point-${index}`}
            className='text-white-100 text-[16px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>

      {experience.note
      ?<p className='text-[18px] italic font-light'>{`(${experience.note})`}</p>
      :null
      }

      {/* Links */}
      <div className='my-4 flex flex-wrap gap-2'>
        {experience.gitUrl
          ?<Button refUrl={experience.gitUrl} refText={'Source Code'} />
          :<p className='ml-4 px-6 py-4 rounded-md shadow-md bg-[#C7CDD9] text-[#000]'>UNDER NDA</p>
        }

        {experience.liveUrl
          ?<Button refUrl={experience.liveUrl} refText={'View Live'} />
          :null
        }
      </div>
    </VerticalTimelineElement>
  )
}

const Experience = () => {
  return (
    <>
      <motion.div
       variants={textVariant()}>
        <p className={styles.sectionSubText}>So far I've done...</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>
      <div className="mt-20 flex flex-col px-0 m-0">
        <VerticalTimeline>
          {experiences.map((experience, index)=>(
            <ExperienceCard key={index} experience={experience}/>
          ))}
        </VerticalTimeline>
      </div>
    
    </>
  )
}

export default SectionWrapper(Experience, 'experience')