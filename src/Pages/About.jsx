import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const About = () => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  return (
    <section
      id="about"
      className={`py-16 px-6 md:px-20 lg:px-32 transition-colors duration-500 ${
        isDark ? "bg-gray-900 text-gray-200" : "bg-white text-gray-800"
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <h2
          className={`text-4xl font-bold mb-6 ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          About Me
        </h2>
        <p className="text-lg leading-relaxed mb-6">
          I'm a passionate{" "}
          <span
            className={`font-semibold ${
              isDark ? "text-indigo-400" : "text-indigo-600"
            }`}
          >
            Front-End Developer
          </span>{" "}
          focused on building clean, intuitive, and engaging digital
          experiences. I blend design with code to craft responsive,
          user-friendly interfaces that bring ideas to life.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          With{" "}
          <span
            className={`font-medium ${
              isDark ? "text-gray-300" : "text-gray-700"
            }`}
          >
            3+ years of experience
          </span>
          , I've contributed to projects ranging from startups to established
          brands, always driven by a love for problem-solving and continuous
          learning.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          When I'm not coding, you’ll find me exploring new design trends,
          tinkering with side projects, or enjoying a good espresso.
        </p>
        <div className="mt-8">
          <h3
            className={`text-xl font-semibold mb-2 ${
              isDark ? "text-gray-200" : "text-gray-800"
            }`}
          >
            Tech Stack:
          </h3>
          <ul className="flex flex-wrap gap-3">
            {["React", "JavaScript", "Tailwind CSS", "Figma", "Git"].map(
              (tech) => (
                <li
                  key={tech}
                  className={`px-3 py-1 rounded-full ${
                    isDark
                      ? "bg-gray-700 text-gray-300"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  {tech}
                </li>
              )
            )}
          </ul>
        </div>
        <p
          className={`mt-8 text-lg ${
            isDark ? "text-gray-300" : "text-gray-700"
          }`}
        >
          <strong>Currently:</strong> Open to freelance or full-time
          opportunities.
        </p>
      </div>
    </section>
  );
};

export default About;
