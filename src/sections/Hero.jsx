import React from "react";
import HeroTitle from "../components/hero_components/HeroTitle";


const Hero = () => {
    return (
        <section className="flex items-start justify-center md:items-start md:justify-start min-h-screen max-h-screen overflow-hidden sm:px-10 px-5 lg:px-15">
            <HeroTitle />
        </section>
    );
};

export default Hero;