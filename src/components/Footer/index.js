import "./index.css";

const Footer = () => (
  <div className="footer-container">
    <h1 className="footer-title">
      Student Special:Discounted rates on tropical getaways
    </h1>
    <p className="footer-desc">
      Let’s embody your beautiful ideas together, simplify the way you visualize
      your next big things.
    </p>
    <div className="d-flex flex-row justify-content-between">
      <ul className="footer-list-container">
        <li className="footer-list-item">Privacy Policy</li>
        <li className="footer-list-item">Terms of use</li>
        <li className="footer-list-item">Sales and Refunds</li>
        <li className="footer-list-item">Legal</li>
      </ul>
      <ul className="footer-list-container">
        <li className="footer-list-item">About</li>
        <li className="footer-list-item">Schedules</li>
        <li className="footer-list-item">Pricing</li>
        <li className="footer-list-item">Membership</li>
        <li className="footer-list-item">joins</li>
      </ul>
    </div>
  </div>
);

export default Footer;
