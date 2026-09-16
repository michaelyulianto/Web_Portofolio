import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Photoscape Studio",
    type: "Web Application",
    year: "2026",
    image: "/projects/photoscape.jpg",
  },
  {
    id: 2,
    title: "Manten",
    type: "Wedding Platform",
    year: "2026",
    image: "/projects/manten.jpg",
  },
  {
    id: 3,
    title: "Kamar320",
    type: "Digital Studio",
    year: "2026",
    image: "/projects/kamar320.jpg",
  },
  {
    id: 4,
    title: "BRDF Rendering",
    type: "Research Project",
    year: "2026",
    image: "/projects/brdf.jpg",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <h2 className="mb-10 text-4xl font-bold">
        Selected Projects
      </h2>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.id}
            className={`group ${
              project.id % 2 === 0 ? "md:mt-24" : ""
            }`}
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            <div className="mt-4">
              <p className="mb-2 text-xs text-neutral-400">
                0{project.id}
              </p>

              <h3 className="text-2xl font-semibold">
                {project.title}
              </h3>

              <div className="mt-2 flex justify-between text-sm text-neutral-500">
                <span>{project.type}</span>
                <span>{project.year}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}