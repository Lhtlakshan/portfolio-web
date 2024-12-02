import React from "react";
import data from "../../data/index.json";

function MySkills() {
  return (
    <section id="mySkills" className="py-12 mt-5 bg-gray-100">
      <div className="mb-8 text-center portfolio-container">
        <p className="text-xl text-gray-600">My Skills</p>
        <h2 className="text-3xl font-bold text-gray-800">My Expertise</h2>
      </div>

      <div className="grid grid-cols-1 gap-8 px-4 mx-auto sm:grid-cols-2 lg:grid-cols-3 max-w-7xl">
        {data?.skills?.map((skill, index) => (
          <div
            key={index}
            className="p-6 transition-shadow duration-300 bg-white rounded-lg shadow-lg hover:shadow-xl"
          >
            <h3 className="mb-3 text-2xl font-semibold text-blue-600">
              {skill.title}
            </h3>
            <p className="text-gray-700">{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MySkills;
