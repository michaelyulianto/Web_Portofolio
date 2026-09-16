export default function Footer() {
  return (
    <footer className="px-6 py-10 md:px-12 lg:px-20">

      <div className="mx-auto flex max-w-[1400px] flex-col justify-between gap-5 border-t border-neutral-300 pt-8 md:flex-row">

        <p>
          © 2026 Michael Yulianto T
        </p>

        <div className="flex gap-6">
          <a href="#">GitHub</a>
          <a href="#">LinkedIn</a>
          <a href="#">Instagram</a>
        </div>

      </div>

    </footer>
  );
}