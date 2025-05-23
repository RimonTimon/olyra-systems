import { motion } from 'framer-motion';
import { FaLinkedin, FaWhatsapp, FaGithub, FaGlobe, FaInstagram  } from 'react-icons/fa';

const Team = () => {
   const teamMembers = [
  {
    name: "Rimon",
    role: "Full-Stack Web Developer",
    bio: "Experienced in building dynamic web applications with Django and Express. Skilled in crafting robust backends and seamless integrations.",
    image: "./src/assets/images/rimon.jpg",
    social: [
    { icon: <FaGithub />, url: "https://github.com/RimonTimon" },
    { icon: <FaGlobe />, url: "https://rimon-protfolio.vercel.app/" },
    ]
  },
  {
    name: "Mahadi",
    role: "Digital Marketing Specialist",
    bio: "Expert in SEO, social media strategy, and performance marketing. Helps businesses grow through data-driven digital campaigns.",
    image: "./src/assets/images/mahadi.jpg",
    social: [
      { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/linkedmahadihasan/" },
      { icon: <FaWhatsapp />, url: "https://wa.me/8801928247410" }
    ]
  },
  {
    name: "Salman",
    role: "Cybersecurity Analyst",
    bio: "Focused on protecting digital assets through risk assessment, penetration testing, and proactive defense strategies.",
    image: "./src/assets/images/salman.jpg",
    social: [
      { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/zuccedscan?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
      { icon: <FaGithub />, url: "https://github.com/zuccedscan/" }
    ]
  },

];


  return (
    <section className="team-section">
      <div className="container">
        <div className="section-title">
          <h2>Meet Our Team</h2>
          <p>"Curious, creative, and constantly learning — the team behind our progress."</p>
        </div>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <motion.div 
              key={index}
              className="team-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="team-image-container">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="team-image"
                />
                <div className="team-social">
                  {member.social.map((social, i) => (
                    <a 
                      key={i} 
                      href={social.url} 
                      className="social-icon"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
              <div className="team-info">
                <h3>{member.name}</h3>
                <p className="role">{member.role}</p>
                <p className="bio">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="cta-section"
        >
          <h3>Want to join our team?</h3>
          <p>We're always looking for talented individuals to join our growing company</p>
          <a href="#contact" className="btn btn-outline">View Open Positions</a>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;