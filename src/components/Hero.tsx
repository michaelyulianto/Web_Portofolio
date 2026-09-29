import Image from "next/image";
import portrait from "../../public/projects/foto-cutout.png";

export default function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero__inner page-shell">
        <div className="hero__topline mono-label">
          <span>Contact sheet / 001</span>
          <span>Informatics student</span>
        </div>
        <div className="hero__stage">
          <span className="hero__outline" aria-hidden="true">PORTFOLIO</span>
          <div className="hero__name-block">
            <p className="hero__hello mono-label">Yes, that&apos;s me</p>
            <h1 id="hero-title">Michael<br />Yulianto<br />Tamba<span className="hero__period">.</span></h1>
            <a className="hero__about-link" href="mailto:tamba.yulianto1@gmail.com">
              Send a note <span aria-hidden="true">↗</span>
            </a>
          </div>
          <figure className="hero__portrait-frame">
            <Image
              className="hero__portrait"
              src={portrait}
              alt="Michael Yulianto Tamba wearing a dark jacket and glasses"
              sizes="(max-width: 639px) 78vw, (max-width: 1023px) 370px, 34vw"
              preload
            />
          </figure>
          <div className="hero__bio-block">
            <span className="hero__bio-rule" aria-hidden="true" />
            <p className="hero__bio">I&apos;m an Informatics student. I like computers, and learning web development is what I enjoy most. There&apos;s always something new I&apos;m trying.</p>
            <p className="hero__focus mono-label">From frontend to database structure.</p>
          </div>
        </div>
        <div className="hero__bottomline mono-label">
          <span>01 / Portrait</span>
          <span>Michael Yulianto Tamba</span>
          <span>End of frame / 001</span>
        </div>
      </div>
    </section>
  );
}
