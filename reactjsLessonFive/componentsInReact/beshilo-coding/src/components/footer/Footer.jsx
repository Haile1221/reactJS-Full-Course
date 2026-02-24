// Footer.jsx
import "./Footer.css";

function Footer() {
  return (
    <footer className="beshilo-footer">
      <div className="footer-container">
        {/* About Section */}
        <div className="footer-section about">
          <h3>Beshilo Coding Academy</h3>
          <p>
            Empowering the next generation of developers. Learn web, mobile, and backend development with real projects and mentorship.
          </p>
        </div>

        {/* Newsletter Subscription */}
        <div className="footer-section newsletter">
          <h3>Subscribe to our Newsletter</h3>
          <p>Get updates on courses, tips, and new projects.</p>
          <form className="footer-form">
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>

        {/* Contact Form */}
        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <form className="footer-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Email Address" required />
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

        {/* Social Links */}
        <div className="footer-section social">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="#" aria-label="Facebook">Facebook</a>
            <a href="#" aria-label="Twitter">Twitter</a>
            <a href="#" aria-label="Instagram">Instagram</a>
            <a href="#" aria-label="LinkedIn">LinkedIn</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Beshilo Coding Academy. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;