import React from "react";
import { FaUser, FaEnvelope, FaGlobe, FaPhone, FaLinkedin } from "react-icons/fa";

function ContactMe() {
  return (
    <section
      id="ContactMe"
      className="flex max-w-screen-md p-8 mx-auto mt-4 bg-gray-100 rounded-lg shadow-md"
    >
      <div>
        <div className="mb-8 mtext-center">
          <h2 className="text-3xl font-bold text-gray-800">Contact Me</h2>
          <p className="mt-2 text-base text-gray-600">
            Here’s how you can get in touch with me!
          </p>
        </div>
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <FaUser className="w-6 h-6 text-gray-700" />
            <div>
              <p className="text-sm text-gray-500">Name</p>
              <p className="text-base font-medium text-gray-800">
                Thilina Lakshan Hewage
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <FaLinkedin className="w-6 h-6 text-gray-700" />
            <div>
              <p className="text-sm text-gray-500">Name</p>
              <a
                href="https://www.linkedin.com/in/thilina-235881282/"
                className="font-medium text-blue-500 hover:underline"
              >
                Thilina Lakshan Hewage
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <FaEnvelope className="w-6 h-6 text-gray-700" />
            <div>
              <p className="text-sm text-gray-500">Email</p>
              <a
                href="mailto:thilinalakshanhewage1999@gmail.com"
                className="font-medium text-blue-500 hover:underline"
              >
                thilinalakshanhewage1999@gmail.com
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <FaGlobe className="w-6 h-6 text-gray-700" />
            <div>
              <p className="text-sm text-gray-500">Webpage</p>
              <a
                href="https://www.johndoe.com"
                className="font-medium text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.johndoe.com
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <FaPhone className="w-6 h-6 text-gray-700" />
            <div>
              <p className="text-sm text-gray-500">Phone</p>
              <a
                href="tel:+1234567890"
                className="text-base font-medium text-gray-800"
              >
                (+94)776645236
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-auto h-auto ml-6 ">
        <img className="rounded-3xl" src="../img/contacts.jpg" alt="" />
        <img className="rounded-3xl" src="../img/linkedin.png" alt="" />
      </div>
    </section>
  );
}

export default ContactMe;
