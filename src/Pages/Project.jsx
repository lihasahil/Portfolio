import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Project = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchProject() {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setProjects(response.data.slice(0,5));
        console.log(response.data);
      } catch (error) {
        console.log("Failed to fetch data", error);
        toast.error("FAiled to fetch data");
      } finally {
        setIsLoading(false);
      }
    }
    fetchProject();
  }, []);
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen ">
        <div className="w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto my-12 px-4 mt-20">
      <ToastContainer position="top-right" autoClose={3000} />
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-xl font-semibold mb-3 text-gray-900">
              {project.title}
            </h3>
            <p className="text-gray-700">{project.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
