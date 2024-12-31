import React from "react";

const Education = () => {
  return (
    <div>
      <section className="mb-8 work-experience" id="education">
        <div>
          <h2 className="mt-8 mb-6 text-3xl font-bold text-center text-gray-800">
            Education
          </h2>

          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col max-w-2xl">
              <div className="p-6 mb-4 overflow-hidden duration-300 transform border rounded-lg shadow hover:shadow-3xl hover:scale-110 w-xl bg-slate-200 dark:border-gray-700">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">
                    University of Colombo School of Computing (UCSC)
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700">
                  BSc in Computer Science (Gratuated)
                  <br />
                  (April 2021 - October 2024)
                </p>
                <div className="text-gray-600 skills">
                  Skills : Software Engineering Concepts ,Html, CSS , JavaScript
                  , C++
                </div>
              </div>
              <div className="p-6 mb-4 overflow-hidden duration-300 transform border rounded-lg shadow hover:shadow-3xl hover:scale-110 w-xl bg-slate-200 dark:border-gray-700">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">
                    Institute of Computer Engineering Technology.(ICET)
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700">
                  iCD - iCET Certified Developer
                  <br />
                  (June 2024 - Present)
                </p>
                <div className="text-gray-600 skills">
                  Skills : Angular , Spring Boot , MySql , Tailwind CSS , React
                  JS
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;
