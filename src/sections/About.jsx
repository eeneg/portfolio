import React from "react";

const About = () => {
    return (
        <section className="p-4 min-h-screen max-h-screen flex flex-col pt-12">
          <div className="flex justify-center sm:justify-start">
              <h2 className="text-6xl font-medium mb-4">
                About me
              </h2>
          </div>
          <div className="w-full flex-1 grid grid-cols-1 sm:grid-cols-4 md:grid-rows-4 sm:grid-rows-5 gap-4 py-4">
            <div className="md:row-span-1 md:col-span-4 sm:row-span-1 sm:col-span-4 rounded-lg bg-gradient-to-tr from-gray-800 to-gray-900 p-8">
              <div className="flex flex-col h-full justify-end">
                  <p className="text-lg md:text-3xl font-medium">Hello, I'm Gene</p>
                  <p className="text-sm font-light">
                    A passionate web developer with experience in building dynamic and responsive web applications. I enjoy turning complex problems into simple, beautiful, and intuitive designs.
                  </p>
              </div>
            </div>
            <div className="md:row-span-2 md:col-span-2 sm:row-span-1 sm:col-span-4 rounded-lg bg-gradient-to-tr from-gray-800 to-gray-900 p-1">
              2
            </div>
            <div className="md:row-span-2 md:col-span-2 sm:row-span-1 sm:col-span-4  rounded-lg bg-gradient-to-tr from-gray-800 to-gray-900 p-1">
              3
            </div>
            <div className="md:row-span-1 md:col-span-1 sm:row-span-1 sm:col-span-4  rounded-lg bg-gradient-to-tr from-gray-800 to-gray-900 p-1">
              4
            </div>
            <div className="md:row-span-1 md:col-span-3 sm:row-span-1 sm:col-span-4  rounded-lg bg-gradient-to-tr from-gray-800 to-gray-900 p-1">
              5
            </div>
          </div>
        </section>
    );
};

export default About;
