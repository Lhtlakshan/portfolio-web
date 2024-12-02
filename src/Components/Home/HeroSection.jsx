import React from "react";

function HeroSection() {
  return (
    <section
      id="heroSection"
      className="flex flex-col-reverse items-start justify-start px-6 pt-16 h-[75%] md:flex-row md:px-16 lg:px-32 bg-slate-200 pb-5"
    >
      <div className="space-y-6 text-center md:w-1/2 md:text-left">
        <p className="text-lg font-medium text-gray-600">Hey, I'm Thilina</p>
        <h1 className="text-4xl font-bold leading-tight text-gray-800 md:text-6xl">
          <span className="text-blue-800">Software Engineer</span>
        </h1>
        <p className="leading-relaxed text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          deserunt, sequi ipsa quo expedita quaerat nisi itaque tempora, nobis
          quibusdam cum quasi. Architecto, suscipit! Harum fugiat cupiditate
          suscipit eos quasi?
        </p>
        <button className="px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 focus:ring focus:ring-blue-300">
          Get in touch
        </button>
      </div>

      {/* Right Image */}
      <div className="flex justify-center md:w-1/2">
        <img
          src="./img/thilina.jpg"
          alt="Thilina"
          className="object-cover rounded-full shadow-lg w-80 h-80"
        />
      </div>
    </section>
  );
}

export default HeroSection;
