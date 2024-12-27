import React from 'react'

const Footer = () => {

    const scrollToSection = (id) => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };
    
  return (
    <footer className="m-4 mb-4 bg-white rounded-lg shadow dark:bg-gray-100">
      <div className="w-full max-w-screen-xl p-4 mx-auto md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2025 . All Rights Reserved.
        </span>
        <div className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <button
            className="mr-3 hover:text-blue-400"
            onClick={() => scrollToSection("AboutMe")}
          >
            About me
          </button>
          <button
            className="mr-3 hover:text-blue-400"
            onClick={() => scrollToSection("mySkills")}
          >
            My Skills
          </button>
          <button
            className="mr-3 hover:text-blue-400"
            onClick={() => scrollToSection("Portfolio")}
          >
            Projects
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer
