import { FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Olyra transformed our digital presence completely. Their strategic approach and technical expertise helped us increase online revenue by 240% in just eight months.",
      author: "James Wilson",
      position: "CEO, TechCorp",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5
    },
    {
      quote: "The cybersecurity audit conducted by Olyra identified critical vulnerabilities we weren't aware of. Their team implemented solutions with minimal disruption to our operations.",
      author: "Lisa Thompson",
      position: "CIO, FinancialPlus",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5
    },
    {
      quote: "From initial consultation to final delivery, Olyra demonstrated exceptional professionalism. Our mobile app has maintained a 4.9-star rating thanks to their outstanding work.",
      author: "Robert Garcia",
      position: "Founder, HealthTrack",
      avatar: "https://randomuser.me/api/portraits/men/75.jpg",
      rating: 5
    }
  ];

  return (
    <section className="testimonials">
      <div className="container">
        <div className="section-title">
          <h2>Client Success Stories</h2>
          <p>Don't just take our word for it - here's what industry leaders say about working with us</p>
        </div>
        <div className="testimonial-grid">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-card" key={index}>
              <div className="testimonial-icon">
                <FaQuoteLeft />
              </div>
              <div className="testimonial-content">
                <p>{testimonial.quote}</p>
                <div className="rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </div>
              <div className="testimonial-author">
                <img src={testimonial.avatar} alt={testimonial.author} className="author-avatar" />
                <div className="author-info">
                  <h4>{testimonial.author}</h4>
                  <p>{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;