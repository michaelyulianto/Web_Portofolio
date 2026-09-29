import Footer from "@/components/Footer";

const email = "tamba.yulianto1@gmail.com";
const profiles = [
  {
    name: "GitHub",
    address: "github.com/michaelyulianto",
    href: "https://github.com/michaelyulianto",
  },
  {
    name: "LinkedIn",
    address: "id.linkedin.com/in/michael-tamba",
    href: "https://id.linkedin.com/in/michael-tamba",
  },
] as const;

// TODO: Add a CV link only after a real CV file or URL is provided.
export default function Contact() {
  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <div className="contact__inner page-shell">
        <div className="contact__topline mono-label">
          <span>07 / Contact</span>
          <span>Last frame / contact sheet</span>
        </div>

        <div className="contact__body">
          <h2 id="contact-title">The last frame<br />has an inbox<span>.</span></h2>

          <div className="contact__email">
            <span className="mono-label">01 / Email</span>
            <a className="contact__email-link" href={`mailto:${email}`}>
              <span className="contact__email-address">
                <span>tamba.yulianto1</span><span>@gmail.com</span>
              </span>
              <span className="contact__email-arrow" aria-hidden="true">↗</span>
              <span className="sr-only">Send email</span>
            </a>
          </div>

          <div className="contact__profiles" aria-label="Profiles">
            {profiles.map(({ name, address, href }, index) => (
              <a className="contact__profile" href={href} target="_blank" rel="noopener noreferrer" key={name}>
                <span className="contact__profile-no mono-label">0{index + 2} / {name}</span>
                <span className="contact__profile-address">{address}</span>
                <span className="contact__profile-arrow" aria-hidden="true">↗</span>
                <span className="sr-only">Opens in a new tab</span>
              </a>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
