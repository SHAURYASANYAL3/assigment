import '../styles/Testimonials.css';

const testimonials = [
  {
    quote: "Agentic transformed our customer support with their NLP solution. We've seen a 40% reduction in response time.",
    author: "Jane Doe",
    position: "CEO, TechStart",
    rating: 5
  },
  {
    quote: "The ML models they built for us are incredibly accurate. Our forecasting has never been better.",
    author: "John Smith",
    position: "CTO, DataFlow",
    rating: 5
  },
  {
    quote: "A team of true professionals. They understood our needs and delivered exactly what we needed.",
    author: "Alice Wong",
    position: "Manager, CreativeAgency",
    rating: 4
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials section">
      <div className="container">
        <div className="section-header">
          <span className="label">Testimonials</span>
          <h2>What Our <span>Clients Say</span></h2>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((t, index) => (
            <div key={index} className="testimonial-card">
              <div className="stars">
                {Array(t.rating).fill().map((_, i) => <span key={i}>⭐</span>)}
              </div>
              <p className="quote">"{t.quote}"</p>
              <div className="author">
                <h4>{t.author}</h4>
                <span>{t.position}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
