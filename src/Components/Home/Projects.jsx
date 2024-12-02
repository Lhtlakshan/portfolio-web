import React from "react";
import data from "../../data";
import { FaGithub } from "react-icons/fa";

function Projects() {
  return (
    <section id="Portfolio" className="py-12 bg-gray-100">
      <div className="px-4 mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="text-lg tracking-widest text-blue-500 uppercase">
            Recent Projects
          </p>
          <h2 className="text-3xl font-bold text-gray-800">My Projects</h2>
        </div>

        {/* GitHub Button */}
        <div className="mb-8 text-center">
          <a
            href="https://github.com/Lhtlakshan"
            className="flex items-center gap-3 px-6 py-3 text-lg font-medium text-white transition bg-blue-500 rounded-full shadow-lg w-[200px] hover:bg-blue-600"
          >
            <FaGithub className="w-10 h-10"/>
            Visit My GitHub
          </a>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {data?.portfolio?.map((item, index) => (
            <div
              key={index}
              className="overflow-hidden transition-transform transform bg-white rounded-lg shadow-lg hover:scale-105"
            >
              <div className="portfolio--section--img">
                <img
                  src={item.src}
                  alt={item.title}
                  className="object-cover w-full h-48"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">{item.description}</p>
                <a
                  href={item.githubLink}
                  className="inline-block mt-4 text-blue-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
