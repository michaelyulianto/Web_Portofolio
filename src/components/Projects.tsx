import Image from "next/image";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section className="projects" id="projects" aria-labelledby="projects-title">
      <div className="projects__inner page-shell">
        <header className="projects__header">
          <h2 id="projects-title">Projects<span>.</span></h2>
          <p className="mono-label">Work / 05</p>
        </header>

        <div className="projects__archive">
          {projects.map((project, index) => (
            <article className="projects__entry" key={project.link}>
              <span className="projects__index mono-label" aria-label={`Project ${index + 1}`}>
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="projects__proof">
                <div className="projects__proof-top mono-label">
                  <span>Project / visual record</span>
                  <span>{project.year}</span>
                </div>
                <div className="projects__image-frame">
                  <Image
                    className="projects__image"
                    src={project.image}
                    alt={`Preview image of ${project.title}`}
                    sizes="(max-width: 639px) calc(100vw - 2rem), (max-width: 1023px) calc(100vw - 3rem), 55vw"
                    loading="lazy"
                  />
                </div>
                <div className="projects__proof-bottom mono-label">
                  <span>{String(index + 1).padStart(2, "0")} / digital print</span>
                  <span>{project.image.width} × {project.image.height} px</span>
                </div>
              </div>

              <div className="projects__details">
                <h3>{project.title}</h3>
                <dl>
                  <div><dt>Problem</dt><dd>{project.problem}</dd></div>
                  <div><dt>Role</dt><dd>{project.role}</dd></div>
                  <div><dt>Stack</dt><dd>{project.stack.join(" / ")}</dd></div>
                  <div><dt>Year</dt><dd>{project.year}</dd></div>
                </dl>
                <a className="projects__link" href={project.link} target="_blank" rel="noreferrer">
                  View repository <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="projects__next" aria-label="Next project in progress">
          <div className="projects__next-frame" aria-hidden="true">
            <span className="mono-label">next</span>
          </div>
          <p>Working on the next project with a friend. This negative is still waiting for its first print.</p>
          <span className="projects__next-status mono-label">Unexposed / for now</span>
        </div>
      </div>
      <div className="projects__bottomline page-shell mono-label" aria-hidden="true">
        <span>05 / Projects</span>
        <span>End of frame / 005</span>
      </div>
    </section>
  );
}
