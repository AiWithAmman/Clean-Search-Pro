import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="csp-footer" data-testid="site-footer">
    <div className="csp-footer-left">
      <div className="csp-nav-icon csp-footer-icon" aria-hidden>🚫</div>
      <span className="csp-footer-name">Clean Search Pro · © 2025</span>
    </div>
    <div className="csp-footer-links">
      <Link to="/" data-testid="footer-home">Home</Link>
      <Link to="/#features" data-testid="footer-features">Features</Link>
      <Link to="/#pricing" data-testid="footer-pricing">Pricing</Link>
      <Link to="/privacy-policy" data-testid="footer-privacy">Privacy</Link>
    </div>
  </footer>
);

export default Footer;
