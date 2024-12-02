import React from 'react'

const Footer = () => {

    const scrollToSection = (id) => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };
    
  return (
    <footer class="bg-white rounded-lg shadow m-4 dark:bg-gray-100 mb-4">
      <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2025 . All Rights Reserved.
        </span>
        <div class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <button
            className="mr-3 hover:text-blue-400"
            onClick={() => scrollToSection("AboutMe")}
          >
            About me
          </button>
          <button
            className="mr-3 hover:text-blue-400"
            onClick={() => scrollToSection("Portfolio")}
          >
            Projects
          </button>
          <button
            className="mr-3 hover:text-blue-400"
            onClick={() => scrollToSection("AboutMe")}
          >
            About Me
          </button>
          <button
            className="mr-3 hover:text-blue-400"
            onClick={() => scrollToSection("mySkills")}
          >
            My Skills
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer
