import '../styles/Team.css';

const teamMembers = [
  {
    name: 'Shaurya Sanyal',
    role: 'Lead AI Engineer',
    image: 'https://i.pravatar.cc/150?u=shaurya'
  },
  {
    name: 'Sarah Chen',
    role: 'Senior Data Scientist',
    image: 'https://i.pravatar.cc/150?u=sarah'
  },
  {
    name: 'Marcus Miller',
    role: 'Product Designer',
    image: 'https://i.pravatar.cc/150?u=marcus'
  },
  {
    name: 'Elena Rodriguez',
    role: 'Full Stack Developer',
    image: 'https://i.pravatar.cc/150?u=elena'
  }
];

const Team = () => {
  return (
    <section id="team" className="team section">
      <div className="container">
        <div className="section-header">
          <span className="label">Our Team</span>
          <h2>Meet the <span>Experts</span></h2>
          <p>The brilliant minds behind our innovative AI solutions.</p>
        </div>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="member-card">
              <div className="member-image">
                <img src={member.image} alt={member.name} />
              </div>
              <h3>{member.name}</h3>
              <p>{member.role}</p>
              <div className="social-links">
                <a href="#">LinkedIn</a>
                <a href="#">Twitter</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
