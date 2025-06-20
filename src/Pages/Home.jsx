import React, { useContext } from "react";
import { MdCode, MdSchool, MdWork } from "react-icons/md";
import {
  IoLogoHtml5,
  IoLogoJavascript,
  IoLogoNodejs,
  IoLogoReact,
} from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";
import { SiTailwindcss } from "react-icons/si";

import ThemeContext from "../context/ThemeContext";

const Home = () => {
  const { theme } = useContext(ThemeContext);

  // Color classes for light/dark mode
  const bgClass = theme === "light" ? "bg-gray-100" : "bg-gray-900";
  const textPrimaryClass =
    theme === "light" ? "text-gray-900" : "text-gray-100";
  const textSecondaryClass =
    theme === "light" ? "text-gray-500" : "text-gray-400";
  const cardBgClass = theme === "light" ? "bg-white" : "bg-gray-800";
  const cardShadowClass =
    theme === "light"
      ? "shadow-md hover:shadow-lg"
      : "shadow-lg hover:shadow-2xl";
  const hoverBgClass =
    theme === "light" ? "hover:bg-gray-50" : "hover:bg-gray-700";

  return (
    <div className={`min-h-screen py-4 sm:px-6 lg:px-8 ${bgClass}`}>
      <div className={`mx-auto ${textPrimaryClass}`}>
        <div className={`text-center mb-16 mt-20 ${textPrimaryClass}`}>
          <div className="flex justify-center mb-6">
            <div className="relative">
              <img
                className="w-32 h-32 rounded-full md:w-40 md:h-40 object-cover"
                src="https://tse3.mm.bing.net/th/id/OIP.GGk-uSEtBqhkgSprnDLvlAHaJQ?rs=1&pid=ImgDetMain"
                alt="profile"
              />
              <div className="absolute bg-blue-500 text-white p-2 rounded-full bottom-2 right-2">
                <MdCode />
              </div>
            </div>
          </div>
          <h1 className={`text-3xl md:text-5xl font-bold mb-4`}>
            Hi, I am <span className="text-blue-500">Sahil Shrestha</span>
          </h1>
          <p className={`text-xl ${textSecondaryClass}`}>
            FrontEnd Developer | MERN Developer
          </p>
          <p className={`text-sm ${textSecondaryClass} mb-6`}>
            I am a Full Stack web developer.
          </p>
        </div>

        <div
          className={`${cardBgClass} rounded-2xl p-8 mb-12 transition-all duration-300 transform ${cardShadowClass}`}
        >
          <h2
            className={`text-3xl font-bold mb-8 text-center relative ${textPrimaryClass}`}
          >
            <span className={`${cardBgClass} relative z-10 px-4`}>
              About Me
            </span>
            <span className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent -z-0"></span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div
              className={`flex items-start p-4 rounded-lg transition ${hoverBgClass}`}
            >
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <MdWork className="text-blue-600 text-xl" />
              </div>
              <div>
                <h3 className={`font-semibold ${textPrimaryClass}`}>
                  Junior Frontend Developer
                </h3>
                <p className={`${textSecondaryClass}`}>Company: XY</p>
                <p className="text-gray-500 text-sm mt-1">Dec 2, 2021</p>
                <p className={`${textPrimaryClass} mt-2`}>
                  Worked on a few frontend projects using React and Tailwind
                  CSS.
                </p>
              </div>
            </div>

            <div
              className={`flex items-start p-4 rounded-lg transition ${hoverBgClass}`}
            >
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <MdSchool className="text-blue-600 text-xl" />
              </div>
              <div>
                <h3 className={`font-semibold ${textPrimaryClass}`}>
                  Bachelor's of Computer Engineering
                </h3>
                <p className={`${textSecondaryClass}`}>
                  Himalaya College of Engineering
                </p>
                <p className="text-gray-500 text-sm mt-1">
                  April, 2022-Present
                </p>
                <p className={`${textPrimaryClass} mt-2`}>
                  Worked on a few frontend projects using React and Tailwind
                  CSS.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2
            className={`text-3xl font-semibold mb-6 text-center ${textPrimaryClass}`}
          >
            Tools And Technologies
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4">
            <SkillCard
              icon={<IoLogoJavascript className="bg-yellow-500 text-white" />}
              name={"Javascript"}
              textClass={textPrimaryClass}
              cardBgClass={cardBgClass}
              hoverBgClass={hoverBgClass}
            />
            <SkillCard
              icon={<IoLogoReact className="bg-white-500 text-blue-400" />}
              name={"React JS"}
              textClass={textPrimaryClass}
              cardBgClass={cardBgClass}
              hoverBgClass={hoverBgClass}
            />
            <SkillCard
              icon={<IoLogoNodejs className="bg-white-500 text-green-700" />}
              name={"Node JS"}
              textClass={textPrimaryClass}
              cardBgClass={cardBgClass}
              hoverBgClass={hoverBgClass}
            />
            <SkillCard
              icon={<SiTailwindcss className="bg-white-500 text-blue-500" />}
              name={"Tailwind CSS"}
              textClass={textPrimaryClass}
              cardBgClass={cardBgClass}
              hoverBgClass={hoverBgClass}
            />
            <SkillCard
              icon={<IoLogoHtml5 className="bg-white-500 text-red-600" />}
              name={"HTML 5"}
              textClass={textPrimaryClass}
              cardBgClass={cardBgClass}
              hoverBgClass={hoverBgClass}
            />
            <SkillCard
              icon={<RiNextjsFill className="bg-white-500 text-gray-900" />}
              name={"Next JS"}
              textClass={textPrimaryClass}
              cardBgClass={cardBgClass}
              hoverBgClass={hoverBgClass}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

function SkillCard({ icon, name, textClass, cardBgClass, hoverBgClass }) {
  return (
    <div
      className={`${cardBgClass} flex flex-col items-center p-4 rounded-lg hover:shadow-md ${hoverBgClass}`}
    >
      <div className="text-3xl mb-2">{icon}</div>
      <div className={`${textClass} font-medium`}>{name}</div>
    </div>
  );
}

export default Home;
