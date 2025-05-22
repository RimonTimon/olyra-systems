import { 
  FaCode, 
  FaMobileAlt, 
  FaShieldAlt, 
  FaChartLine, 
  FaServer, 
  FaNetworkWired 
} from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaCode />,
      title: "Web Development",
      description: "Custom websites & web apps built with Django, React, Node.js, Express, MongoDB & PostgreSQL — fast, modern, and scalable."
    },
    {
      icon: <FaMobileAlt />,
      title: "Mobile Development",
      description: "Cross-platform mobile apps for iOS and Android using Flutter and React Native for seamless user experiences."
    },
    {
      icon: <FaShieldAlt />,
      title: "Cyber Security",
      description: "Comprehensive security audits, penetration testing, and protection solutions for your digital assets."
    },
    {
      icon: <FaChartLine />,
      title: "Digital Marketing",
      description: "Data-driven marketing strategies including SEO, PPC, and social media to maximize your online presence."
    },
    {
      icon: <FaServer />,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and hosting with AWS, Azure, and Google Cloud for maximum reliability."
    },
    {
      icon: <FaNetworkWired />,
      title: "IT Consulting",
      description: "Expert guidance on technology strategy, digital transformation, and infrastructure optimization."
    }
  ];

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-title">
          <h2>Our Expert Services</h2>
          <p>We deliver comprehensive digital solutions tailored to your business needs, helping you stay ahead in the digital landscape.</p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              {/* <a href="#contact" className="service-link">Learn more →</a> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;