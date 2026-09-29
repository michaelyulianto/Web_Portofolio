import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <section className="skills" id="skills" aria-labelledby="skills-title">
      <div className="skills__inner page-shell">
        <div className="skills__header">
          <h2 id="skills-title">In use.<br /><span>In progress.</span></h2>
          <p>The same tools appear twice. Apparently they don&apos;t come with a done button.</p>
        </div>

        <div className="skills__ledger">
          <div className="skills__used">
            <div className="skills__group-heading">
              <h3>Already used</h3>
              <span className="mono-label">{String(skills.alreadyUsed.length).padStart(2, "0")} entries</span>
            </div>
            <ol className="skills__used-list">
              {skills.alreadyUsed.map((name, index) => (
                <li key={name}>
                  <span className="mono-label" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                  <span>{name}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="skills__learning">
            <div className="skills__group-heading">
              <h3>Currently learning</h3>
              <span className="mono-label">Since {skills.currentlyLearning.since}</span>
            </div>
            <ul className="skills__learning-list">
              {skills.currentlyLearning.items.map((name, index) => (
                <li key={name}>
                  <span className="mono-label" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                  <span>{name}</span>
                </li>
              ))}
            </ul>
            <div className="skills__learning-note">
              <span className="mono-label">Note /</span>
              <p>{skills.currentlyLearning.note}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="skills__bottomline mono-label page-shell">
        <span>04 / Learning + skills</span>
        <span>End of frame / 004</span>
      </div>
    </section>
  );
}
