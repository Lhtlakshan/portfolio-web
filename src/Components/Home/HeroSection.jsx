import React from "react";

function HeroSection() {
  return (
    <section
      id="heroSection"
      className="flex flex-col-reverse items-start justify-start px-6 pt-16 h-[75%] md:flex-row md:px-16 lg:px-32 bg-gray-300 pb-5"
    >
      <div className="space-y-6 text-center md:w-1/2 md:text-left">
        <p className="text-lg font-medium text-gray-600">Hey, I'm Thilina</p>
        <h1 className="text-4xl font-bold leading-tight text-gray-800 md:text-6xl">
          <span className="text-blue-800">Software Engineer</span>
        </h1>
        <p className="leading-relaxed text-gray-600">
          A responsible and dedicated computer science student, with a keen
          interest in and{" "}
          <b>full stack development (Java , Spring boot , React , Angular)</b>
          .Seeking professional experience, where I can effectively utilize my
          knowledge and skills
        </p>

        <a href="./img/Thilina_Hewage_SE.pdf" download="Thilina_Hewage_SE.pdf">
          <button className="px-6 py-3 mt-5 text-lg font-medium text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 focus:ring focus:ring-blue-300">
            Download resume
          </button>
        </a>
      </div>

      <div className="flex justify-center md:w-1/2">
        <img
          src="./img/thilina_updated.jpg"
          alt="Thilina"
          className="object-cover rounded-full shadow-xl w-80 h-80"
        />
      </div>
    </section>
  );
}

export default HeroSection;
