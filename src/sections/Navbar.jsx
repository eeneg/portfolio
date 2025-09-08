import { useState } from "react";
import { motion } from "motion/react";

function Navigation() {
  return (
  <ul className="flex flex-col md:flex-row gap-4 md:gap-8">
    <li className="">
      <a href="#" className="hover:text-lg hover:font-medium">Home</a>
    </li>
    <li className="">
      <a href="#" className="hover:text-lg hover:font-medium">About me</a>
    </li>
    <li className="">
      <a href="#" className="hover:text-lg hover:font-medium">Services</a>
    </li>
    <li className="">
      <a href="#" className="hover:text-lg hover:font-medium">Contact</a>
    </li>
  </ul>
  )
}

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full sm:text-lg sm:font-medium">
      <div className="flex justify-between items-center py-4 px-8">
        <div className="">Gene</div>
        <div className="flex justify-center items-center gap-8">

          { !isMenuOpen ? (
            <svg
              className="w-6 h-6 cursor-pointer md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          ) : (
            <svg
              className="w-6 h-6 cursor-pointer md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          )}

          <nav className="hidden md:flex">
            <Navigation/>
          </nav> 
        </div>
      </div>
      <div className="md:hidden">
        {isMenuOpen && (
          <motion.div className="block overflow-hidden text-center pb-4"
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
          >
            <Navigation />
          </motion.div>
        )}
      </div>
    </div>
  )
};

export default Navbar;
