import { useEffect, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Hero = () => {
  const words = ["Digital Solutions", "Smart Services", "Creative Ideas", "Tech Innovations", "Future Tech"];
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setOpacity(0);
      
      setTimeout(() => {
        setCurrentWord(prev => {
          const currentIndex = words.indexOf(prev);
          const nextIndex = (currentIndex + 1) % words.length;
          return words[nextIndex];
        });
        setOpacity(1);
      }, 500);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <h1>
            <span style={{ 
              opacity,
              background: 'linear-gradient(90deg, #fff,rgb(228, 243, 14))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              transition: 'opacity 0.5s ease',
            }}>
              {currentWord}
            </span> 
            <br />for Modern Businesses
          </h1>
          <p>We provide comprehensive digital services to help your business thrive in the online world. From web development to cybersecurity, we've got you covered.</p>
          <div className="hero-buttons">
            <a href="#contact" className="btn">
              Get Started <FaArrowRight style={{ marginLeft: '8px' }} />
            </a>
          </div>
        </div>
        <div className="hero-image">
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
            // src='./src/assets/images/olyra.jpg'
            alt="Digital solutions" 
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;