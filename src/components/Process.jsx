import { FaSearch, FaProjectDiagram, FaCode, FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Process = () => {
  const processSteps = [
    {
      icon: <FaSearch size={40} />,
      title: "Discovery",
      description: "We conduct in-depth research to understand your business goals and challenges."
    },
    {
      icon: <FaProjectDiagram size={40} />,
      title: "Planning",
      description: "Our team creates a detailed roadmap with milestones and deliverables."
    },
    {
      icon: <FaCode size={40} />,
      title: "Development",
      description: "Agile implementation with regular updates and quality assurance."
    },
    {
      icon: <FaCheckCircle size={40} />,
      title: "Delivery",
      description: "Thorough testing, deployment, and ongoing support."
    }
  ];

  return (
    <section className="process-section">
      <div className="container">
        <div className="section-title">
          <h2>Our Proven Process</h2>
          <p>A structured approach that ensures success for every project</p>
        </div>

        <div className="process-steps-container">
          {processSteps.map((step, index) => (
            <motion.div 
              key={index}
              className="process-step-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="step-icon">
                {step.icon}
                <div className="step-number">0{index + 1}</div>
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;