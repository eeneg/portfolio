import React from 'react';
import HeroFlipWord from './HeroFlipWord';

const HeroTitle = () => {

    const flip_words = ["Secure", "Fast", "Modern", "Scalable"];

    return (
        <div className="z-10 text-center md:text-left mt-20 md:mt-40 rounded-3xl bg-clip-text">
            {/* desktop */}
            <div className="flex-col hidden md:flex sm:px-10 px-5 lg:px-15">
                <h1 className="text-4xl font-medium">
                    Gene Rellanos
                </h1>
                <div className="flex flex-col items-start">
                    <p className="text-5xl font-medium text-neutral-300">Web Developer</p>
                    <div className="flex items-center gap-2 my-2">
                        <div className="w-12 h-px bg-gradient-to-r from-blue-500 to-purple-600"></div>
                        <span className="text-sm font-light text-neutral-400 uppercase tracking-wider">Building Web Solutions</span>
                        <div className="w-12 h-px bg-gradient-to-r from-purple-600 to-blue-500"></div>
                    </div>
                    <HeroFlipWord className='font-light text-6xl' words={flip_words} />
                      
                </div>
            </div>
            {/* mobile */}
            <div className="flex-col flex md:hidden sm:px-10 px-5 lg:px-15">
                <h1 className="text-4xl font-medium">
                    Gene Rellanos
                </h1>
                <div className="flex flex-col items-center">
                    <p className="text-5xl font-medium text-neutral-300">Web Developer</p>
                    <div className="flex items-center gap-2 my-2">
                        <div className="w-12 h-px bg-gradient-to-r from-blue-500 to-purple-600"></div>
                        <span className="text-sm font-light text-neutral-400 uppercase tracking-wider">Building Web Solutions</span>
                        <div className="w-12 h-px bg-gradient-to-r from-purple-600 to-blue-500"></div>
                    </div>
                    <HeroFlipWord className='font-light text-6xl' words={flip_words} />
                </div>
            </div>
        </div>
    );
};

export default HeroTitle;