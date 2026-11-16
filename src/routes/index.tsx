import { createFileRoute } from "@tanstack/react-router";

import profilePhoto from "@/assets/emmanuel-coastal-wide.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Emmanuel Paul C | Student, Archer & Musician" },
      {
        name: "description",
        content:
          "Meet Emmanuel Paul C: computer science and digital business student, national-level archer, NCC Navy cadet, and musician in Hyderabad.",
      },
      { property: "og:title", content: "Emmanuel Paul C | Student, Archer & Musician" },
      {
        property: "og:description",
        content:
          "Computer science and digital business student, national-level archer, NCC Navy cadet, and musician in Hyderabad.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500&family=Karla:wght@400;500;700&display=swap",
      },
    ],
  }),
  component: Portfolio,
});

const navigation = [
  ["About", "about"],
  ["Education", "education"],
  ["Achievements", "achievements"],
  ["Skills", "skills"],
  ["Contact", "contact"],
] as const;

function Portfolio() {
  return (
    <div className="portfolio-shell">
      <nav className="site-nav" aria-label="Main navigation">
        <a href="#home" className="site-logo">Emmanuel Paul C</a>
        <div className="nav-links">
          {navigation.map(([label, id]) => (
            <a key={id} href={`#${id}`}>{label}</a>
          ))}
        </div>
      </nav>

      <header className="intro" id="home">
        <div className="intro-copy">
          <p className="grace-line">By His grace</p>
          <p className="intro-label">Student · Archer · Musician</p>
          <h1>Emmanuel<br />Paul C</h1>
          <blockquote>
            I can do all things through Christ which strengtheneth me.
            <cite>Philippians 4:13</cite>
          </blockquote>
          <div className="intro-actions">
            <a href="#achievements" className="action-link action-primary">See my achievements</a>
            <a href="#contact" className="action-link action-secondary">Get in touch</a>
          </div>
        </div>
        <figure className="portrait-frame">
          <img src={profilePhoto} alt="Emmanuel Paul C by the sea" />
          <figcaption>Hyderabad, India</figcaption>
        </figure>
        <a className="scroll-cue" href="#about" aria-label="Scroll to About me">↓</a>
      </header>

      <main>
        <section className="content-section about-section" id="about">
          <p className="section-index">01 / A little about me</p>
          <h2>Curious by nature.<br /><em>Driven by purpose.</em></h2>
          <div className="about-copy">
            <p>I am a first-year B.Tech Computer Science and Engineering student at VNR VJIET, and I am also pursuing a BBA in Digital Business and Entrepreneurship at IIM Bangalore. I enjoy building things with code, and I like learning how technology and business work together.</p>
            <p>Outside the classroom, I am a professional archer and a two-time national player. I am also an NCC Navy cadet and a Republic Day Camp returnee, and I play the keyboard, guitar and electric drums.</p>
          </div>
        </section>

        <section className="content-section education-section" id="education">
          <p className="section-index">02 / The path so far</p>
          <h2>Education</h2>
          <div className="education-list">
            <article className="education-item">
              <span className="education-year">2026 — 2030</span>
              <div><h3>B.Tech in Computer Science and Engineering</h3><p>VNR VJIET, Hyderabad</p></div>
              <span className="education-mark">01</span>
            </article>
            <article className="education-item">
              <span className="education-year">2026 — 2029</span>
              <div><h3>BBA in Digital Business and Entrepreneurship</h3><p>IIM Bangalore</p></div>
              <span className="education-mark">02</span>
            </article>
            <article className="education-item">
              <span className="education-year">2024 — 2026</span>
              <div><h3>Intermediate (MPC)</h3><p>Resonance Junior College, Telangana · 83%</p></div>
              <span className="education-mark">03</span>
            </article>
            <article className="education-item">
              <span className="education-year">Class 1 — 10</span>
              <div><h3>Schooling</h3><p>Kendriya Vidyalaya No. 2, Golconda · Class 10: 83%</p></div>
              <span className="education-mark">04</span>
            </article>
          </div>
        </section>

        <section className="content-section achievements-section" id="achievements">
          <p className="section-index">03 / Beyond the classroom</p>
          <h2>Work, play<br /><em>and the in-between.</em></h2>
          <div className="achievement-grid">
            <article className="achievement achievement-archery">
              <p className="achievement-number">01</p><h3>Archery</h3>
              <p>Professional compound archer, competing in the Double 50 round.</p>
              <p>Two-time national player at the KV National Meet: 51st in 2022 and 52nd in 2023.</p>
              <p>Silver and bronze medallist at Regionals.</p>
            </article>
            <article className="achievement achievement-ncc">
              <p className="achievement-number">02</p><h3>NCC</h3>
              <p>Republic Day Camp returnee, 2023.</p>
              <p>Represented the AP and Telangana Directorate NCC in the Junior Division, one of 9 members selected after 8 months of rigorous training and selection.</p>
              <p>Navy wing cadet with A and B certificates.</p>
            </article>
            <article className="achievement achievement-music">
              <p className="achievement-number">03</p><h3>Music</h3>
              <p>Keyboard, guitar and electric drums and pads.</p>
              <p>Performed under Musicia at Resofest for two consecutive years.</p>
            </article>
            <article className="achievement achievement-hackathon">
              <p className="achievement-number">04</p><h3>Convergence Hackathon</h3>
              <p>Participated in the Convergence Hackathon at VNR VJIET.</p>
            </article>
          </div>
        </section>

        <section className="content-section skills-section" id="skills">
          <p className="section-index">04 / Things I enjoy</p>
          <h2>Skills & interests</h2>
          <div className="skill-group">
            <h3>Technical skills</h3>
            <ul className="skill-list"><li>C</li><li>C++</li><li>Java</li><li>HTML</li><li>CSS</li><li>JavaScript</li></ul>
          </div>
          <div className="skill-group">
            <h3>Interests</h3>
            <ul className="skill-list"><li>Archery</li><li>Music</li><li>Gymming</li></ul>
          </div>
        </section>

        <section className="content-section contact-section" id="contact">
          <p className="section-index">05 / Say hello</p>
          <div className="contact-heading">
            <h2>Let’s make<br /><em>something meaningful.</em></h2>
            <p>I would be glad to hear from you.</p>
          </div>
          <ul className="contact-list">
            <li><span>Email</span><a href="mailto:emmanuelpaulc65@gmail.com">emmanuelpaulc65@gmail.com</a></li>
            <li><span>Phone</span><a href="tel:+919347539597">9347539597</a></li>
            <li><span>Location</span><span className="contact-value">Hyderabad</span></li>
            <li><span>GitHub</span><a href="https://github.com/EmmanuelPaulC/IIMB" target="_blank" rel="noreferrer">github.com/EmmanuelPaulC/IIMB ↗</a></li>
          </ul>
        </section>
      </main>

      <footer className="site-footer">
        <p className="grace-line">By His grace</p>
        <p>Emmanuel Paul C</p>
        <a href="#home" aria-label="Back to top">Back to top ↑</a>
      </footer>
    </div>
  );
}