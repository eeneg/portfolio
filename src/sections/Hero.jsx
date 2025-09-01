import React from "react";
import HeroTitle from "../components/hero_components/HeroTitle";
import { motion } from "motion/react";

const Hero = () => {
    return (
        <section 
            style={{
                backgroundImage: "radial-gradient(150% 100% at 0% 50%, #020617 50%, #999999)"
            }}
            className="flex items-start justify-center md:items-start md:justify-start min-h-screen max-h-screen overflow-hidden sm:px-10 px-5 lg:px-15">
           <HeroTitle />
        </section>
    )
}

export default Hero;