import React from "react";

const Experience = () => {
  return (
    <div>
      <section className="mb-8 work-experience" id="work-experience">
        <div>
          <h2 className="mt-8 mb-6 text-3xl font-bold text-center text-gray-800">
            Work Experience
          </h2>

          <div className="flex flex-col items-center justify-center">
            <div className="flex max-row-2xl flex-">
              <div className="p-6 mb-4 mr-8 duration-300 transform border rounded-lg shadow mroverflow-hidden hover:shadow-3xl hover:scale-110 w-xl bg-slate-200 dark:border-gray-700">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">
                    Trainee Software Engineer
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700">
                  UniverSL Software (Pvt) Ltd.
                  <br />
                  (Jan 2025 - Present)
                </p>
                <div className="text-gray-600 skills">
                  Skills : Spring Boot, Hibernate , MySql
                </div>
              </div>

              <div className="p-6 mb-4 overflow-hidden duration-300 transform border rounded-lg shadow hover:shadow-3xl hover:scale-110 w-xl bg-slate-200 dark:border-gray-700">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">
                    Software Engineer Intern
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700">
                  Zebra Technologies Lanka(Pvt) Ltd.
                  <br />
                  (Dec 2023 - June 2024)
                </p>
                <div className="text-gray-600 skills">Skills : C# , C++</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
