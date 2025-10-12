import React from "react";
import { Skills } from "../components/about_components/Skills";


const About = () => {

  return (
    <section className="p-4 min-h-screen flex flex-col pt-12">
      <div className="flex justify-center sm:justify-start">
          <h2 className="text-4xl font-bold mb-4">
            About me
          </h2>
      </div>
      <div className="w-full flex-1 grid grid-cols-1 sm:grid-cols-4 md:grid-rows-4 sm:grid-rows-5 gap-4 py-4">
        <div className="md:row-span-1 md:col-span-4 sm:row-span-1 sm:col-span-4 rounded-lg bg-gradient-to-tr from-gray-800 to-gray-900 p-8">
          <div className="flex flex-col h-full justify-end">
              <p className="text-lg font-medium">Hello, I'm Gene</p>
              <p className="text-lg">
                A passionate web developer with experience in building dynamic and responsive web applications. I enjoy turning complex problems into simple, beautiful, and intuitive designs.
              </p>
          </div>
        </div>
         {/* Skills & Technologies */}
         <div className="relative md:row-span-2 md:col-span-2 sm:row-span-1 sm:col-span-4 rounded-lg bg-gradient-to-tr from-gray-800 to-gray-900 p-6">
            <div className="grid-default-color grid-5">
              <div className="absolute inset-y-0 md:inset-y-0 w-full h-full start-[50%] md:scale-125">
                <Skills />
              </div>
            </div>
         </div>

        {/* Experience & Education */}
        <div className="md:row-span-2 md:col-span-2 sm:row-span-1 sm:col-span-4 rounded-lg bg-gradient-to-tr from-gray-800 to-gray-900 p-6">
          <div className="flex flex-col h-full">
            <h3 className="text-lg font-semibold mb-4 text-white">Experience & Education</h3>
            <div className="flex flex-col space-y-4 flex-1">
              <div>
                <h4 className="text-lg font-medium text-gray-300">Current Role</h4>
                <p className="text-lg text-gray-400">
                  {/* TODO: Add your current job title and company */}
                  Software Developer at [Company Name]
                </p>
                <p className="text-lg text-gray-500">2023 - Present</p>
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-300">Education</h4>
                <p className="text-lg text-gray-400">
                  {/* TODO: Add your education background */}
                  Bachelor's in Computer Science
                </p>
                <p className="text-lg text-gray-500">2020 - 2023</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="md:row-span-1 md:col-span-1 sm:row-span-1 sm:col-span-4 rounded-lg bg-gradient-to-tr from-gray-800 to-gray-900 p-6">
          <div className="flex flex-col h-full justify-center items-center text-center">
            <h3 className="text-lg font-semibold mb-2 text-white">Years Experience</h3>
            <p className="text-2xl font-bold text-blue-400">
              {/* TODO: Update with your years of experience */}
              3+
            </p>
          </div>
        </div>

        {/* Interests & Hobbies */}
        <div className="md:row-span-1 md:col-span-3 sm:row-span-1 sm:col-span-4 rounded-lg bg-gradient-to-tr from-gray-800 to-gray-900 p-6">
          <div className="flex flex-col h-full">
            <h3 className="text-lg font-semibold mb-4 text-white">Interests & Hobbies</h3>
            <div className="flex flex-wrap gap-2 flex-1 items-center">
              <span className="px-3 py-1 bg-blue-600 text-white text-lg rounded-full">
                {/* TODO: Add your interests and hobbies */}
                Web Development
              </span>
              <span className="px-3 py-1 bg-green-600 text-white text-lg rounded-full">
                Open Source
              </span>
              <span className="px-3 py-1 bg-purple-600 text-white text-lg rounded-full">
                Photography
              </span>
              <span className="px-3 py-1 bg-orange-600 text-white text-lg rounded-full">
                Travel
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
