export default function Navbar() {
  return (
    <nav className="w-full px-6 py-6 md:px-12 lg:px-20">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between">
        <div className="text-lg font-semibold tracking-tight">
          CAEL.
        </div>

        <div className="hidden items-center gap-8 text-sm md:flex">
          <a
            href="#about"
            className="transition-opacity hover:opacity-50"
          >
            About
          </a>

          <a
            href="#projects"
            className="transition-opacity hover:opacity-50"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="transition-opacity hover:opacity-50"
          >
            Contact
          </a>
        </div>

        <a
          href="#contact"
          className="rounded-full border border-black px-5 py-2 text-sm transition-colors hover:bg-black hover:text-white"
        >
          Let&apos;s Talk
        </a>
      </div>
    </nav>
  );
}