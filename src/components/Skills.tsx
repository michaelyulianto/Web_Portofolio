const skills = [
  "Frontend Development",
  "Backend Development",
  "UI Implementation",
  "Database Design",
  "REST API Development",
];

export default function Skills() {
  return (
    <section className="px-6 py-32 md:px-12 lg:px-20">

      <div className="mx-auto grid max-w-[1400px] gap-16 md:grid-cols-2">

        <div>
          <p className="text-sm uppercase tracking-widest text-neutral-500">
            Expertise
          </p>
        </div>

        <div>

          {skills.map((skill, index) => (
            <div
              key={skill}
              className="flex justify-between border-b border-neutral-300 py-6"
            >
              <p className="text-2xl">
                {skill}
              </p>

              <span className="text-neutral-400">
                0{index + 1}
              </span>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}