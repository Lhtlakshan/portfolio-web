import React from "react";
import {
  FaCode,
  FaUsers,
  FaClock,
  FaProjectDiagram,
  FaTools,
} from "react-icons/fa";

const Experience = () => {
  return (
    <div>
      <section className="mb-8 work-experience" id="work-experience">
        <div>
          <h2 className="mt-8 mb-6 text-3xl font-bold text-center text-gray-800">
            Work Experience
          </h2>

          <div className="flex flex-col items-center justify-center">
            <div className="flex-col max-row-2xl">
              <div className="relative p-6 mb-6 mr-8 transform rounded-lg shadow-xl transition-all duration-300 bg-white hover:shadow-2xl hover:scale-105 w-xl border border-gray-300">
                <a href="#" className="group">
                  <h5 className="mb-3 text-2xl font-bold text-blue-600 transition-all duration-300">
                    Trainee Software Engineer
                    <span className="block h-1 bg-blue-600 transition-all duration-300 w-full"></span>
                  </h5>
                </a>

                <p className="mb-3 text-gray-700 text-lg font-medium">
                  UniverSL Software (Pvt) Ltd. <br />
                  <span className="text-sm text-gray-500">
                    (Jan 2025 - Present)
                  </span>
                </p>

                <div className="text-gray-700 space-y-3">
                  <div className="flex items-center">
                    <FaCode className="text-blue-500 mr-2" />
                    <span>
                      <span className="font-semibold text-gray-900">
                        Technical Skills:
                      </span>{" "}
                      Java, Spring Boot, Hibernate , Spring Security with Jwt Authentication , MySQL
                    </span>
                  </div>

                  <div className="flex items-center">
                    <FaUsers className="text-blue-500 mr-2" />
                    <span>
                      <span className="font-semibold text-gray-900">
                        Soft Skills:
                      </span>{" "}
                      Teamwork, Time Management, Communication
                    </span>
                  </div>

                  <div className="flex items-center">
                    <FaProjectDiagram className="text-blue-500 mr-2" />
                    <span>
                      <span className="font-semibold text-gray-900">
                        Internal Project:
                      </span>{" "}
                      Developing internal applications, including an E-Commerce
                      style appointment mangement system.
                    </span>
                  </div>

                  <div className="flex items-center">
                    <FaClock className="text-blue-500 mr-2" />
                    <span>
                      Actively participating in Agile practices such as daily
                      stand-ups, sprint planning, and retrospectives.
                    </span>
                  </div>

                  <div className="flex items-center">
                    <FaCode className="text-blue-500 mr-2" />
                    <span>
                      Utilizing{" "}
                      <span className="font-semibold">Git & Bitbucket</span> for
                      version control and{" "}
                      <span className="font-semibold">Jira</span> for project
                      management.
                    </span>
                  </div>
                </div>
              </div>

              <div className="relative p-6 mb-6 mr-8 transform rounded-lg shadow-xl transition-all duration-300 bg-white hover:shadow-2xl hover:scale-105 w-xl border border-gray-300">
                <a href="#" className="group">
                  <h5 className="mb-3 text-2xl font-bold text-blue-600 transition-all duration-300">
                    Intern Software Engineer
                    <span className="block h-1 bg-blue-600 transition-all duration-300 w-full"></span>
                  </h5>
                </a>

                <p className="mb-3 text-gray-700 text-lg font-medium">
                  Zebra Technologies Lanka (Pvt) Ltd. <br />
                  <span className="text-sm text-gray-500">
                    (Dec 2023 - Jun 2024)
                  </span>
                </p>

                <div className="text-gray-700 space-y-3">
                  <div className="flex items-center">
                    <FaCode className="text-blue-500 mr-2" />
                    <span>
                      <span className="font-semibold text-gray-900">
                        Technical Skills:
                      </span>{" "}
                      C# , C++
                    </span>
                  </div>

                  <div className="flex items-center">
                    <FaUsers className="text-blue-500 mr-2" />
                    <span>
                      <span className="font-semibold text-gray-900">
                        Soft Skills:
                      </span>{" "}
                      Teamwork, Time Management, Communication
                    </span>
                  </div>

                  <div className="flex items-center">
                    <FaProjectDiagram className="text-blue-500 mr-2" />
                    <span>
                      <span className="font-semibold text-gray-900">
                        Internal Product:
                      </span>{" "}
                      <span>
                        Implemented enhanced logging across multiple
                        sub-projects within the internal product.
                      </span>
                      <br />
                      <span>
                        Developed and updated test cases, maintaining detailed
                        test case documentation.
                      </span>
                      <br />
                      Conducted system testing using Zebra tools and SDKs.
                    </span>
                  </div>

                  <div className="flex items-center">
                    <FaClock className="text-blue-500 mr-2" />
                    <span>
                      Actively participating in Agile practices such as daily
                      stand-ups, sprint planning, and retrospectives.
                    </span>
                  </div>

                  <div className="flex items-center">
                    <FaCode className="text-blue-500 mr-2" />
                    <span>
                      Utilizing{" "}
                      <span className="font-semibold">Git & Gerrit</span> for
                      version control and{" "}
                      <span className="font-semibold">Jira</span> for project
                      management.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
