import React from "react";

function LinksSection() {
  return (
    <section>
      <h2 className="font-primary my-3">Links</h2>
      <ul className="flex gap-4">
        <li>
          <a href="/main-resume.pdf" target="_blank" className="underline">
            Resume
          </a>
        </li>
        <li>
          <a
            href="https://github.com/MeghajMB"
            target="_blank"
            className="underline"
          >
            Github
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/meghaj-mb"
            target="_blank"
            className="underline"
          >
            Linkedin
          </a>
        </li>
      </ul>
    </section>
  );
}

export default LinksSection;
