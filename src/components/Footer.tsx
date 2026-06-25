import Link from 'next/link';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-left">
          <h2 className="footer-logo">GAJANAN TRADERS</h2>
          
          <div className="contact-info-boxes">
            <div className="contact-box">
              <div className="icon-box">&#128100;</div>
              <div className="contact-details">
                <p className="contact-name">Mr. Aman Dubey (Sales & Marketing Manager)</p>
                <p>Mobile : 07971549885</p>
              </div>
            </div>
            
            <div className="contact-box">
              <div className="icon-box">&#9993;</div>
              <div className="contact-details">
                <Link href="/contact" className="inquiry-link">Send Inquiry</Link>
              </div>
            </div>
          </div>
          
          <address className="footer-address">
            Railway Station Road, In front of Hotel Raj Residency,<br />
            Harda - 461331, Madhya Pradesh, India
          </address>
          
          <Link href="/contact" style={{ textDecoration: 'none' }}>
            <button className="btn-inquiry">Send Inquiry</button>
          </Link>
        </div>
        
        <div className="footer-right">
          <h3 className="footer-title">Quick Link</h3>
          <ul className="footer-links">
            <li><Link href="/">Home Page</Link></li>
            <li><Link href="/company-profile">Company Profile</Link></li>
            <li><Link href="/products">Our Products</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
            <li><Link href="#sitemap">Site Map</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container flex-between footer-bottom-inner">
          <div className="tradeindia-logo">
            <span style={{color: 'red', fontWeight: 'bold'}}>trade</span>
            <span style={{color: '#f9a826', fontWeight: 'bold'}}>india.</span>
            <span style={{fontSize: '0.7rem', display: 'block', color: 'blue'}}>Member</span>
          </div>
          <div className="copyright-text">
            <p>Gajanan Traders All Rights Reserved. <Link href="/terms-of-use" className="footer-link-hover">(Terms of Use)</Link></p>
            <p>Developed and Managed by <span className="managed-by" style={{color: 'var(--primary-color)', fontWeight: '600'}}>Mayank Gour</span></p>
          </div>
        </div>
      </div>
    </footer>
  );
}
