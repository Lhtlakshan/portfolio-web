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
            className="w-screen p-6 m-5 overflow-hidden duration-300 transform bg-white rounded-lg shadow-l hover:shadow-3xl hover:scale-110"
          >
            <h3 className="justify-center mb-3 text-2xl font-semibold text-center text-blue-600">
              {skill.title}
            </h3>
              <div className="flex flex-row">
                {skill.tools.map((tool) => (
                  <img key={tool.id} className="w-10 h-10 m-2" src={tool.icon} />
                ))}
              </div>
          </div>
        ))}
      </div>

      {/* <div className="grid grid-cols-1 gap-8 px-4 mx-auto mt-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl">
        {data?.items?.map((item, index) => (
          <div
            key={index}
            className="p-6 overflow-hidden duration-300 transform bg-white rounded-lg shadow-lg hover:shadow-3xl hover:scale-110 max-w-[300px]"
          >
            <h3 className="mb-3 text-2xl font-semibold text-blue-600">
              {item.title}
            </h3>
            {item.tools.map((tool) => (
              <div className="flex items-center justify-center mb-2 space-x-2">
                <p className="font-medium text-gray-700">{tool.name}</p>
              </div>
            ))}
          </div>
        ))}
      </div> */}
    </section>
  );
}

export default MySkills;
