export default function About() {
  return (
    <section className="about" id="about" aria-labelledby="about-title">
      <div className="about__layout page-shell">
        <div className="about__rail">
          <span className="about__number" aria-hidden="true">02</span>
          <h2 id="about-title">About</h2>
        </div>

        <div className="about__sheet">
          <div className="about__sheet-top mono-label">
            <span>Contact sheet / 002</span>
            <span>Notes from the frame</span>
          </div>

          <blockquote className="about__quote">
            Still <span>developing.</span>
          </blockquote>

          <div className="about__details">
            <p className="about__bio">
              I study Informatics at Universitas Pelita Harapan in Tangerang, Indonesia. I started in 2024.
            </p>

            <div className="about__offscreen">
              <p className="about__offscreen-title mono-label">Off screen</p>
              <ul>
                <li><span>Photography</span><span aria-hidden="true">01</span></li>
                <li><span>Sports</span><span aria-hidden="true">02</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="about__bottomline mono-label page-shell">
        <span>02 / About</span>
        <span>End of frame / 002</span>
      </div>
    </section>
  );
}
