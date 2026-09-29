import { projects } from "@/data/projects";

const education = {
  since: "2024",
  field: "Informatics",
  institution: "Universitas Pelita Harapan",
  location: "Tangerang, Indonesia",
} as const;

// TODO: Add other experience only when Michael supplies the details.
export default function Experience() {
  const portfolio = projects[0];

  return (
    <section className="experience" id="experience" aria-labelledby="experience-title">
      <div className="experience__inner page-shell">
        <div className="experience__rail">
          <h2 id="experience-title">Experience</h2>
          <span className="mono-label" aria-hidden="true">06</span>
        </div>

        <div className="experience__content">
          <div className="experience__period" aria-label="2024 to present">
            <span className="experience__year">{education.since}</span>
            <span className="experience__time-rule" aria-hidden="true" />
            <span className="experience__now mono-label">Present</span>
          </div>

          <div className="experience__education">
            <span className="experience__record-no mono-label">01 / Education</span>
            <div>
              <h3>{education.field}</h3>
              <p className="experience__institution">{education.institution}</p>
              <p className="experience__detail">Undergraduate student in {education.location}. Web development is my favorite subject.</p>
            </div>
          </div>

          {portfolio && (
            <div className="experience__project">
              <span className="experience__record-no mono-label">02 / Personal project</span>
              <div className="experience__project-info">
                <p className="experience__project-name">{portfolio.title}</p>
                <p className="mono-label">{portfolio.role} / {portfolio.year}</p>
                <a href="#projects">See {portfolio.title} in Projects <span aria-hidden="true">↑</span></a>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="experience__bottomline page-shell mono-label" aria-hidden="true">
        <span>06 / Experience</span>
        <span>End of frame / 006</span>
      </div>
    </section>
  );
}
