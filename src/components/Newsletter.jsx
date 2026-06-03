import { useState } from 'react';
import '../styles/Newsletter.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setStatus('Thank you for subscribing!');
      setEmail('');
    }
  };

  return (
    <section className="newsletter section">
      <div className="container">
        <div className="newsletter-box">
          <div className="newsletter-text">
            <h2>Subscribe to Our <span>Newsletter</span></h2>
            <p>Get the latest updates on AI trends and our new solutions.</p>
          </div>
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
            <button type="submit" className="btn-primary">Subscribe</button>
          </form>
          {status && <p className="status-msg">{status}</p>}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
