import React from "react";

function ProjectsSection() {
  return (
    <section>
      <h2 className="font-primary my-3">Projects</h2>
      <ul>
        <li>
          <a
            href="https://github.com/MeghajMB/academia-backend"
            target="_blank"
            className="underline"
          >
            Academia
          </a>
          <p>
            Academia is an E-learning platform built using nextjs and nodejs.
          </p>
        </li>
        <li>
          <a
            href="https://github.com/MeghajMB/E-commerce-Alchemy"
            target="_blank"
            className="underline"
          >
            Alchemy
          </a>
          <p>
            Alchemy is an E-commerce website built using Node.js, Express, EJS,
            and MongoDB.
          </p>
        </li>
      </ul>
    </section>
  );
}

export default ProjectsSection;
