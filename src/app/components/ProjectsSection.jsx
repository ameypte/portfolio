"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Client Website: Technominds",
    // this is one of my client's project: Technominds IP Solutions specializes in intellectual property support services and caters to Indian market and international companies, organizations and professional services companies. It serves as a center of excellence in teaching, training and research in Patent Laws and Practices. They provide services like trandemark registration, patent registration, copyright registration, design registration, etc.
    description: "Technominds IP Solutions specializes in intellectual property support services and caters to Indian market and international companies, organizations and professional services companies. ",
    image: "/images/projects/tech.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Ayush-Bulbule/technominds",
    previewUrl: "https://www.technomindsip.in/",
  },
  {
    id: 2,
    title: "Password Manager in React & Flask",
    description: "I developed a Dockerized password manager using React and Flask, with Firebase for user data storage. The project focused on exploring encryption techniques like Simple Columnar, Multiple Columnar, and Rail Fence Cipher.",
    image: "/images/projects/pass.png",
    tag: ["All", "Web", "Python"],
    gitUrl: "https://github.com/ameypte/Password-Manager",
    previewUrl: "Password-Manager",
  },
  {
    id: 3,
    title: "CPU Scheduling Simulator",
    description: "Python desktop application using Tkinter and Matplotlib to simulate CPU scheduling algorithms (FCFS and SJF). The system generates Gantt charts and provides detailed metrics such as completion time, turnaround time, waiting time, and their averages.",
    image: "/images/projects/cpu.png",
    tag: ["All", "Python"],
    gitUrl: "https://github.com/ameypte/CPU-Scheduling-Simulator",
    previewUrl: "#",
  },
  {
    id: 4,
    title: "Next.js Recipe App with Chatbot",
    description: "Next.js application that enables users to create accounts, manage recipes, and search for recipes based on available ingredients, leveraging a complex MySQL database with procedures and views. Additionally, the app features a chatbot powered by Google Gemini for enhanced user interaction.",
    image: "/images/projects/recipe.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ameypte/recipe-app",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Python"
          isSelected={tag === "Python"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
