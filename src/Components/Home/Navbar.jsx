import React from "react";

function Navbar() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 z-10 w-full text-white bg-gray-800 shadow-md">
      <div className="flex items-center justify-between p-4">
        <div className="text-xl font-bold">Thilina Hewage</div>
        <div className="flex space-x-6">
          <button
            className="hover:text-blue-400"
            onClick={() => scrollToSection("AboutMe")}
          >
            About Me
          </button>
          <button
            className="hover:text-blue-400"
            onClick={() => scrollToSection("Portfolio")}
          >
            Projects
          </button>
          <button
            className="hover:text-blue-400"
            onClick={() => scrollToSection("mySkills")}
          >
            My Skills
          </button>
          <button
            className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-600"
            onClick={() => scrollToSection("ContactMe")}
          >
            Contact Me
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
