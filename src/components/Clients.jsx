import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Clients = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const clients = [
    { name: "TechCorp", logo: "https://img.freepik.com/free-vector/logo-with-shape-3d_1043-51.jpg?ga=GA1.1.1138532678.1729177772&semt=ais_hybrid&w=740" },
    { name: "GlobalBank", logo: "https://img.freepik.com/premium-vector/abstract-building-logo-company-name-simple-logos-icons-illustrations-symbols_1375031-976.jpg?ga=GA1.1.1138532678.1729177772&semt=ais_hybrid&w=740" },
    { name: "InnovateX", logo: "https://img.freepik.com/free-vector/quill-pen-logo-template_23-2149852432.jpg?ga=GA1.1.1138532678.1729177772&semt=ais_hybrid&w=740" },
    { name: "DataSphere", logo: "hhttps://img.freepik.com/free-vector/logo-with-curly-arrow_1043-146.jpg?ga=GA1.1.1138532678.1729177772&semt=ais_hybrid&w=740" },
    { name: "CloudNine", logo: "https://img.freepik.com/free-vector/abstract-logo-triangular-shape_1043-1.jpg?ga=GA1.1.1138532678.1729177772&semt=ais_hybrid&w=740" },
  ];

  return (
    <section className="clients-section">
      <div className="container">
        <motion.div 
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 50 }
          }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          <h2>Trusted By Industry Leaders</h2>
          <p>We partner with forward-thinking companies to deliver exceptional results</p>
        </motion.div>

        <div className="client-logos-container">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              className="client-logo-item"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <img 
                src={client.logo} 
                alt={client.name} 
                className="client-logo" 
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;