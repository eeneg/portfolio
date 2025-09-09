import React from 'react'
import { motion, AnimatePresence } from 'motion/react';


export const Intro = () => {

  const effect_variants = {
      hidden: { opacity: 0, x: 0 },
      visible: { opacity: 1, x: 0 },
  }

  return (
    <div
        className='text-white flex items-center justify-center h-screen w-screen overflow-hidden'
    >
        <div
          className='text-4xl font-medium text-center'
        >
          <motion.p
            className='text-light'
            variants={effect_variants}
            initial="visible"
            animate="hidden"
            transition={{ duration: .5, delay: 1 }}
          >
            Gene Philip Rellanos
          </motion.p>
          <motion.p
            className='text-2xl font-light text-neutral-300 my-2'
            variants={effect_variants}
            initial="visible"
            animate="hidden"
            transition={{ duration: .9, delay: 1.5 }}
          >
            Portfolio
          </motion.p>
        </div>
    </div> 
  )
}
