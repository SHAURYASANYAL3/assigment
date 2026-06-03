import '../styles/About.css';
import aboutImage from '../assets/hero.png'; // Using same placeholder for now

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container about-content">
        <div className="about-image">
          <img src={aboutImage} alt="Our Team at Work" />
        </div>
        <div className="about-text">
          <span className="label">About Us</span>
          <h2>Innovating the Future with <span>Passion</span></h2>
          <p>
            Agentic is a team of dedicated developers, data scientists, and creative thinkers who believe in the transformative power of AI. We work closely with our clients to understand their unique challenges and build solutions that drive real impact.
          </p>
          <p>
            With years of experience in machine learning and software engineering, we have helped businesses of all sizes automate processes, gain insights from data, and provide better experiences for their customers.
          </p>
          <button className="btn-primary">Learn More About Us</button>
        </div>
      </div>
    </section>
  );
};

export default About;
