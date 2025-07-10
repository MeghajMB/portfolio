import GithubIcon from "@/components/icons/github-icon";
import LiveIcon from "@/components/icons/live-icon";
import React from "react";

const projects = [
  {
    urls: [
      {
        link: "https://github.com/MeghajMB/academia-backend",
        title: "github",
        icon: <GithubIcon />,
      },
      {
        link: "https://www.academiaco.shop",
        title: "live",
        icon: <LiveIcon />,
      },
    ],
    title: "Academia",
    description: `Academia is an E-learning platform built using nextjs, nodejs with typescript and mongodb as database.
      Note: The backend for the live demo may not be fully functional as it is hosted on GKE Free Tier, which may cause limited availability.`,
  },
  {
    urls: [
      {
        link: "https://github.com/MeghajMB/E-commerce-Alchemy",
        title: "github",
        icon: <GithubIcon />,
      },
    ],
    title: "Alchemy",
    description:
      "Alchemy is an E-commerce website built using Node.js, Express, EJS,and MongoDB.",
  },
  {
    urls: [
      {
        link: "https://github.com/MeghajMB/React-Projects",
        title: "github",
        icon: <GithubIcon />,
      },
    ],
    title: "React projects",
    description:
      "This repo is a collection of projects which i made using react.",
  },
  {
    urls: [
      {
        link: "https://github.com/MeghajMB/redis-typescript",
        title: "github",
        icon: <GithubIcon />,
      },
    ],
    title: "Redis",
    description: "This repo contains my custom build redis from scratch.",
  },
];
function ProjectsSection() {
  return (
    <section>
      <h2 className="font-primary my-3">Projects</h2>
      <ul className="grid md:grid-cols-2">
        {projects.map((project, index) => {
          return (
            <li key={index} className="py-2">
              <h3 className="text-2xl">{project.title}</h3>
              <p>{project.description}</p>
              <div className="flex gap-2">
                {project.urls.map((urlData, index) => {
                  return (
                    <a
                      href={urlData.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline flex"
                      key={index}
                    >
                      <span className="w-6 h-6 mr-1">{urlData.icon}</span>{" "}
                      {urlData.title}
                    </a>
                  );
                })}
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default ProjectsSection;
