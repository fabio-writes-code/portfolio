import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { technology } from "../constants"
import { styles } from "../styles"

const TechBall = ({content}) =>{
  return(
    <div className="w-full h-[7em] block" key={1}>
      <BallCanvas content={content} />
    </div>
  )
}

const Tech = () => {

  return (
    <div>
      <div className="mb-4">
        <p className={styles.sectionSubText}>Some tools and Languages...</p>
        <h2 className={styles.sectionHeadText}>Tech.</h2>
      </div>  
      <div
        className="flex flex-row flex-wrap justify-center gap-10 w-full"
      >
        {technology.map(t =>(
          <div 
            className="py-4 px-8 bg-secondary/70 md:w-5/12 w-full rounded-lg shadow-def text-center hover:scale-[1.1] transition ease-in-out duration-300"
            key={t.name}
          >
            <h3 className='text-white text-[20px] font-bold block'>{t.name}</h3>
            <TechBall content={t.content} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Tech,'tech')