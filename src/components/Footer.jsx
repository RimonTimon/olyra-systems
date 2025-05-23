import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id="contact">
      <div className="container">
        <div className="footer-container">
          <div className="footer-about">
            <a href="#" className="footer-logo">Olyra <span className='systems'>systems</span> </a>
            <p>Empowering businesses with smart, innovative digital solutions..</p>
            <div className="social-links">
              <a href="https://www.facebook.com/olyrasystems"><FaFacebookF /></a>
              <a href="#"><FaTwitter /></a>
              <a href="https://www.linkedin.com/company/olyra-systems/"><FaLinkedinIn /></a>
    
            </div>
          </div>
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Contact</a></li>

            </ul>
          </div>
          <div className="footer-contact">
            <h3>Contact Us</h3>
            <p><FaMapMarkerAlt /> Gazipur, Dhaka, Bangladesh</p>
            <p><FaPhone /> +880-1607377914</p>
            <p><FaEnvelope /> olyrasystems@gmail.com</p>
            <p><FaClock /> Mon-Fri: 10AM - 6PM</p>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; 2025 Olyra systems. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;