import { motion } from 'framer-motion';
import { FaAward, FaUsers, FaProjectDiagram } from 'react-icons/fa';

const About = () => {
  const stats = [
    { value: "1.5+", label: "Years Experience", icon: <FaAward /> },
    { value: "20+", label: "Satisfied Clients", icon: <FaUsers /> },
    { value: "30+", label: "Projects Completed", icon: <FaProjectDiagram /> }
  ];

  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="about-content">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="about-text"
          >
            <div className="section-title">
              <h2>Who We Are</h2>
              <p>"We build with purpose, grow with vision, and secure with precision."</p>
            </div>
            
            <p className="about-description">
              Founded in 2024, Olyra-systems has been at the forefront of digital transformation, 
              helping businesses of all sizes navigate the complexities of the modern 
              technological landscape.
            </p>
            
            <p>
              Our team of experts combines technical prowess with creative thinking to 
              deliver solutions that not only meet but exceed expectations. We believe 
              in building lasting partnerships based on trust, transparency, and 
              exceptional results.
            </p>

            <div className="about-stats">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  className="stat-item"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="stat-icon">{stat.icon}</div>
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="about-images"
          >
            <div className="image-grid">
              <motion.img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Our team working" 
                className="main-image"
                whileHover={{ scale: 1.02 }}
              />
              <div className="secondary-images">
                <motion.img 
                  src="https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                  alt="Our office" 
                  className="secondary-image"
                  whileHover={{ scale: 1.05 }}
                />
                <div className="experience-badge">
                  <span>1.5+ Years</span>
                  <span>Digital Excellence</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;