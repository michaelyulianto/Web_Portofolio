const socialLinks = [
  { label: "GitHub", href: "https://github.com/michaelyulianto" },
  { label: "LinkedIn", href: "https://id.linkedin.com/in/michael-tamba" },
];

export default function Navbar() {
  return (
    <header className="site-header">
      <nav className="site-nav page-shell" aria-label="Main navigation">
        <a className="site-nav__brand" href="#home" aria-label="Michael Yulianto Tamba, home">
          <span className="site-nav__monogram" aria-hidden="true">MYT</span>
          <span className="site-nav__brand-name">Michael Yulianto Tamba</span>
        </a>
        <div className="site-nav__links">
          <a className="site-nav__link" href="#home" aria-current="page">Home</a>
          <a className="site-nav__link" href="#about">About</a>
          <a className="site-nav__link" href="#off-screen">Photos</a>
          <a className="site-nav__link" href="#skills">Skills</a>
          <a className="site-nav__link" href="#projects">Projects</a>
          <a className="site-nav__link" href="#experience">Experience</a>
          <a className="site-nav__link" href="#contact">Contact</a>
          {socialLinks.map(({ label, href }) => (
            <a className="site-nav__link" href={href} target="_blank" rel="noopener noreferrer" key={label}>
              {label}<span className="external-arrow" aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
        <a className="site-nav__contact" href="mailto:tamba.yulianto1@gmail.com">
          Email me <span aria-hidden="true">↗</span>
        </a>
        <details className="site-nav__mobile">
          <summary className="site-nav__menu-button">Menu <span aria-hidden="true">+</span></summary>
          <div className="site-nav__mobile-panel">
            <a href="#home" aria-current="page">Home</a>
            <a href="#about">About</a>
            <a href="#off-screen">Photos</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
            {socialLinks.map(({ label, href }) => (
              <a href={href} target="_blank" rel="noopener noreferrer" key={label}>{label} ↗</a>
            ))}
            <a href="mailto:tamba.yulianto1@gmail.com">Email me ↗</a>
          </div>
        </details>
      </nav>
    </header>
  );
}
