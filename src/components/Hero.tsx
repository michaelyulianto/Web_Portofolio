export default function Hero() {
  return (
    <section className="px-6 pb-20 pt-16 md:px-12 md:pt-24 lg:px-20">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex min-h-[75vh] flex-col justify-between">

          {/* Top */}
          <div>
            <p className="mb-6 text-sm uppercase tracking-[0.2em] text-neutral-500">
              Software Developer — Jakarta, Indonesia
            </p>

            <h1 className="max-w-[1200px] text-[15vw] font-medium leading-[0.82] tracking-[-0.06em] md:text-[11vw] lg:text-[135px]">
              Building
              <br />
              meaningful
              <br />
              digital things.
            </h1>
          </div>

          {/* Bottom */}
          <div className="mt-16 flex flex-col justify-between gap-8 border-t border-neutral-300 pt-8 md:flex-row md:items-end">

            <p className="max-w-md text-base leading-relaxed text-neutral-600 md:text-lg">
              Informatics student focused on web development,
              backend systems, and building digital products
              that are simple, useful, and well-crafted.
            </p>

            <a
              href="#projects"
              className="group flex items-center gap-3 text-lg font-medium"
            >
              View selected work

              <span className="transition-transform duration-300 group-hover:translate-x-2">
                →
              </span>
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}