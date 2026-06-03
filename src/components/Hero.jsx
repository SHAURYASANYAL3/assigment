import '../styles/Hero.css';
import heroImage from '../assets/hero.png';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <h1>Unlock Your Business <span>Potential</span> with AI</h1>
          <p>
            We provide innovative software solutions powered by artificial intelligence to help your business grow and succeed in the digital era.
          </p>
          <div className="hero-btns">
            <button className="btn-primary">Get Started</button>
            <button className="btn-outline">Learn More</button>
          </div>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="Innovative AI Solutions" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
