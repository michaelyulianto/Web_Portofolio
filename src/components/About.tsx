export default function About() {
  return (
    <section
      id="about"
      className="px-6 py-32 md:px-12 lg:px-20"
    >
      <div className="mx-auto grid max-w-[1400px] gap-12 md:grid-cols-2">

        <p className="text-sm uppercase tracking-widest text-neutral-500">
          About Me
        </p>

        <p className="text-3xl leading-snug md:text-5xl">
          I build digital experiences that combine
          thoughtful design with reliable software.
        </p>

      </div>
    </section>
  );
}