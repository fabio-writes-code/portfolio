import { useState, useRef } from "react"
import { motion } from "framer-motion"
import emailjs from '@emailjs/browser'

import { styles } from "../styles"
import { EarthCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { slideIn } from "../utils/motion"

import {contact} from '../constants/index'

const Contact = () => {
  const formRef=useRef()
  const [form, setForm] = useState({
    name:'',
    email:'',
    message:''
  })
  const [loading, setLoading] = useState(false)

  const handleChange = e =>{
    const {name, value}= e. target
    setForm({...form, [name]:value})

  }

  const handleSubmit=e=>{
    e.preventDefault()
  }

  return (
    <div
    className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden"
    >
      <motion.div
        variants={slideIn('left', 'tween', 0.2,1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={`${styles.sectionSubText}`}>Get in touch</p>
        <h3 className={`${styles.sectionHeadText}`}>Contact.</h3>

        <div className="flex flex-col gap-4 ">
          {contact.map(c=>(
            <div 
              key={c.name} 
              className="flex gap-4 py-4 bg-tertiary/50 px-6 text-white rounded-lg font-medium  min-h-[100px]"
            >
              <img src={c.icon} alt={c.name} className="w-8"/>
              <div className="self-center">
                <h3 className="">{c.name}</h3>
                {c.link
                  ?<a target = {c.link?'_blank':null} href={c.href} className="underline text-[14px]">{c.content}</a>
                  :<p>{c.content}</p>
                }
              </div>
              
            </div>
          ))}
        </div>
      </motion.div>
      <motion.div
        variants={slideIn('right', 'tween', 0.2,1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[550px]"
      >
        <EarthCanvas/>
      </motion.div>

    </div>
  )
}

export default SectionWrapper(Contact,'contact')