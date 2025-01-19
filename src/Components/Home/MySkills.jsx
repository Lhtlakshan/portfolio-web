import React from "react";
import data from "../../data/data.json";

function MySkills() {
  return (
    <section id="mySkills" className="py-12 mt-5 bg-gray-100">
      <div className="mb-8 text-center portfolio-container">
        <p className="text-xl text-gray-600">My Skills</p>
        <h2 className="text-3xl font-bold text-gray-800">My Expertise</h2>
      </div>

      <div className="m-4 text-center">
        {data?.skills?.map((skill) => (
          <div
            key={skill.id}
            className="p-6 m-5 overflow-hidden duration-300 transform bg-white rounded-lg w-screen/2 shadow-l hover:shadow-3xl hover:scale-110"
          >
            <h3 className="justify-center mb-3 text-2xl font-semibold text-center text-blue-600">
              {skill.title}
            </h3>
              <div className="flex flex-row justify-center">
                {skill.tools.map((tool) => (
                  <img key={tool.id} className="w-10 h-10 m-2" src={tool.icon} />
                ))}
              </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MySkills;
