import React, { useContext } from "react";
import projects from "../constants/index.js";
import ThemeContext from "../context/ThemeContext"; // import your context

const Projects = () => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  return (
    <section
      className={`px-4 py-20 min-h-screen transition-colors duration-300 ${
        isDark
          ? "bg-gradient-to-br from-gray-900 to-gray-800 text-white"
          : "bg-gradient-to-br from-gray-50 to-white text-gray-900"
      }`}
    >
      <h2 className="text-4xl font-extrabold text-center mb-4">🚧 Projects</h2>
      <p
        className={`text-center max-w-xl mx-auto mb-10 ${
          isDark ? "text-gray-300" : "text-gray-600"
        }`}
      >
        A collection of cool things I’ve built. From design to deployment —
        here’s what I’ve been up to!
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`rounded-2xl border overflow-hidden group flex flex-col transition-all duration-300 ${
              isDark
                ? "bg-gray-800 border-gray-700 shadow-md hover:shadow-xl"
                : "bg-white border-gray-200 shadow-xl hover:shadow-2xl"
            } hover:-translate-y-1`}
          >
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="flex flex-col flex-grow p-5">
              <h3
                className={`text-xl font-semibold mb-2 ${
                  isDark ? "text-white" : "text-gray-800"
                }`}
              >
                {project.name}
              </h3>
              <p
                className={`text-sm mb-4 flex-grow line-clamp-3 ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {project.description}
              </p>

              <div className="flex justify-between items-center space-x-2 mt-auto">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-md text-sm font-medium bg-gradient-to-r from-gray-700 to-gray-600 text-white hover:from-gray-600 hover:to-gray-500 transition"
                >
                  GitHub
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-md text-sm font-medium bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:from-blue-500 hover:to-blue-400 transition"
                >
                  Live Site
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
