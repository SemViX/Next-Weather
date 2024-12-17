import { IAnimatedSectionProps } from '@/types/animatedSection'
import {motion} from 'motion/react'

const AnimatedSection = ({children, className}:IAnimatedSectionProps) => {
  return (
    <motion.section
        className={className}
        initial={{y:-10, opacity:0}}
        whileInView={{y:0, opacity:1}}
        viewport={{once:false}}
        transition={{delay:0.2, ease:'easeInOut', duration:0.4}}
    >
        {children}
    </motion.section>
  )
}

export default AnimatedSection