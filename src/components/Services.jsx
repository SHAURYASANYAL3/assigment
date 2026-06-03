import '../styles/Services.css';

const services = [
  {
    title: 'Machine Learning',
    description: 'Custom ML models tailored to your business needs and data patterns.',
    icon: '🤖'
  },
  {
    title: 'NLP Solutions',
    description: 'Advanced natural language processing for chatbots and sentiment analysis.',
    icon: '💬'
  },
  {
    title: 'Computer Vision',
    description: 'Image and video recognition systems for automated inspections and safety.',
    icon: '👁️'
  },
  {
    title: 'AI Consulting',
    description: 'Strategic advice on how to integrate AI into your existing workflows.',
    icon: '💡'
  }
];

const Services = () => {
  return (
    <section id="services" className="services section">
      <div className="container">
        <div className="section-header">
          <span className="label">Our Services</span>
          <h2>We Provide SOTA <span>AI Solutions</span></h2>
          <p>Our team of experts delivers cutting-edge technology to help you stay ahead.</p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
