import { FaPhone, FaCheck, FaCalendarAlt } from "react-icons/fa";

const CompactContactSection = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        alert("Thanks for your submission!");
        form.reset();
      } else {
        alert("Submission failed. Please try again.");
      }
    } catch {
      alert("Submission failed. Please check your connection.");
    }
  };

  return (
    <section className="compact-contact-section" id="contact">
      <div className="container">
        <div className="compact-contact-header">
          <h2>Partner with Us</h2>
          <p className="compact-subtitle">
            We'll help you determine which services best fit your needs.
          </p>

          <div className="compact-contact-phone">
            <FaPhone className="compact-phone-icon" />
            <a href="tel:12817679070">+880-1607377914</a>
          </div>
        </div>

        <div className="compact-contact-content">
          <div className="compact-benefits-section">
            <h3>Your benefits:</h3>
            <ul className="compact-benefits-list">
              <li>
                <FaCheck className="compact-check-icon" /> Client-oriented
              </li>
              <li>
                <FaCheck className="compact-check-icon" /> Independent
              </li>
              <li>
                <FaCheck className="compact-check-icon" /> Competent
              </li>
              <li>
                <FaCheck className="compact-check-icon" /> Results-driven
              </li>
              <li>
                <FaCheck className="compact-check-icon" /> Problem-solving
              </li>
              <li>
                <FaCheck className="compact-check-icon" /> Transparent
              </li>
            </ul>

            <div className="compact-next-steps">
              <h3>Next steps:</h3>
              <ol>
                <li>We review your inquiry</li>
                <li>Specialist contacts you</li>
                <li>Free consultation</li>
                <li>Project proposal</li>
              </ol>
            </div>
          </div>

          <div className="compact-form-container">
            <div className="compact-form-header">
              <FaCalendarAlt className="compact-form-icon" />
              <h3>Free Consultation</h3>
            </div>

            <form
              action="https://formsubmit.co/olyrasystems@gmail.com"
              method="POST"
              className="compact-contact-form"
              onSubmit={handleSubmit}
            >
              <div className="compact-form-row">
                <div className="compact-form-group">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First name"
                    required
                  />
                </div>
                <div className="compact-form-group">
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last name"
                    required
                  />
                </div>
              </div>

              <div className="compact-form-group">
                <input type="text" name="company" placeholder="Company" />
              </div>

              <div className="compact-form-group">
                <input type="email" name="email" placeholder="Email" required />
              </div>

              <div className="compact-form-group">
                <input type="tel" name="phone" placeholder="Phone" />
              </div>

              <div className="compact-form-group">
                <select name="service" required>
                  <option value="">How can we help?</option>
                  <option value="web">Web Development</option>
                  <option value="mobile">Mobile Development</option>
                  <option value="security">Cyber Security</option>
                  <option value="consulting">IT Consulting</option>
                </select>
              </div>

              <div className="compact-form-group">
                <textarea
                  name="message"
                  rows="3"
                  placeholder="Describe how we can help..."
                  required
                ></textarea>
              </div>
              <input type="hidden" name="_captcha" value="false" />

              <button type="submit" className="compact-submit-btn">
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompactContactSection;
