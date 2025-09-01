import React from 'react';
import HeroFlipWord from './HeroFlipWord';
import { motion } from 'motion/react';

const HeroTitle = () => {

    const flip_words = ["Secure", "Fast", "Modern", "Scalable"];

    const effect_variants_pc = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
    }

    const effect_variants_mobile = {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0 },
    }

    return (
        <div className="z-10 text-center md:text-left mt-20 md:mt-40 rounded-3xl bg-clip-text">
            {/* desktop */}
            <div className="flex-col hidden md:flex sm:px-10 px-5 lg:px-15">
                <motion.h1 
                    className="text-4xl font-medium"
                    variants={effect_variants_pc}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.1, delay: 1 }}
                >
                    Gene Rellanos
                </motion.h1>
                <div className="flex flex-col items-start">
                    <motion.p
                        className="text-5xl font-medium text-neutral-300"
                        variants={effect_variants_pc}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.1, delay: 1.2 }}
                    >
                        Web Developer
                    </motion.p>
                    <motion.div 
                        className="flex items-center gap-2 my-2"
                        variants={effect_variants_pc}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.1, delay: 1.2 }}
                    >
                        <div className="w-12 h-px bg-gradient-to-r from-blue-500 to-purple-600"></div>
                        <span className="text-sm font-light text-neutral-400 uppercase tracking-wider">Building Web Solutions</span>
                        <div className="w-12 h-px bg-gradient-to-r from-purple-600 to-blue-500"></div>
                    </motion.div>
                    <motion.div 
                        className="flex items-center gap-2 my-2"
                        variants={effect_variants_pc}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.1, delay: 1.4 }}
                    >
                        <HeroFlipWord className='font-light text-6xl' words={flip_words} />
                    </motion.div>
                </div>
            </div>
            {/* mobile */}
            <div className="flex-col flex md:hidden sm:px-10 px-5 lg:px-15">
                <motion.h1 
                    className="text-4xl font-medium"
                    variants={effect_variants_mobile}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.1, delay: 1 }}
                >
                    Gene Rellanos
                </motion.h1>
                <div className="flex flex-col items-center">
                    <motion.p className="text-5xl font-medium text-neutral-300"
                        variants={effect_variants_mobile}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.1, delay: 1.2 }}
                    >
                        Web Developer
                    </motion.p>
                    <motion.div className="flex items-center gap-2 my-2"
                        variants={effect_variants_mobile}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.1, delay: 1.2 }}
                    >
                        <div className="w-12 h-px bg-gradient-to-r from-blue-500 to-purple-600"></div>
                        <span className="text-sm font-light text-neutral-400 uppercase tracking-wider">Building Web Solutions</span>
                        <div className="w-12 h-px bg-gradient-to-r from-purple-600 to-blue-500"></div>
                    </motion.div>
                    <motion.div
                        variants={effect_variants_mobile}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.1, delay: 1.4 }}
                    >
                        <HeroFlipWord className='font-light text-6xl' words={flip_words} />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default HeroTitle;