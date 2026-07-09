import Link from 'next/link';
import Image from 'next/image';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-group-section">
        <div className="container">
          <div className="group-header">
            <Image src="/images/gajanan group.jpeg" alt="Gajanan Group" width={90} height={90} className="group-logo" unoptimized />
            <div className="group-header-text">
              <h2 className="group-title">Gajanan Group</h2>
              <p className="group-since">Since 2006</p>
            </div>
          </div>
          
          <div className="firms-grid">
            <div className="firm-card">
              <div className="firm-logo-wrapper">
                <Image src="/images/gajana traders logo.jpeg" alt="Gajanan Traders" width={70} height={70} className="firm-logo" unoptimized />
              </div>
              <div className="firm-info">
                <h4>Gajanan Traders</h4>
                <p className="firm-year">Year of established 2006</p>
                <p className="firm-desc">Agriculture combine harvester Dealer</p>
              </div>
            </div>
            
            <div className="firm-card">
              <div className="firm-logo-wrapper">
                <Image src="/images/shree gajanan guru pvt lmt.jpeg" alt="Shri Gajanan Guru Pvt Ltd" width={70} height={70} className="firm-logo" unoptimized />
              </div>
              <div className="firm-info">
                <h4>Shri Gajanan Guru Pvt Ltd</h4>
                <p className="firm-year">Year of established 2024</p>
                <p className="firm-desc">Export and trading company</p>
              </div>
            </div>

            <div className="firm-card">
              <div className="firm-logo-wrapper">
                <Image src="/images/gajanan agro & spare parts.png" alt="Gajanan Agro & Spares" width={70} height={70} className="firm-logo" unoptimized />
              </div>
              <div className="firm-info">
                <h4>Gajanan Agro &amp; Spares</h4>
                <p className="firm-year">Year of established 2026</p>
                <p className="firm-desc">Spare parts dealer &amp; supplier of all type Agriculture machinery</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container footer-grid">
        <div className="footer-left">
          <h2 className="footer-logo">GAJANAN TRADERS</h2>
          
          <div className="contact-info-boxes">
            <div className="contact-box">
              <div className="icon-box">&#128100;</div>
              <div className="contact-details">
                <p className="contact-name">Mr. Aman Dubey (Sales &amp; Marketing Manager)</p>
                <p>Mobile : +91-9406973436, +91-9644868236</p>
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
        <div className="container footer-bottom-inner" style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="copyright-text" style={{ textAlign: 'center' }}>
            <p>Gajanan Traders All Rights Reserved.</p>
            <p style={{ marginTop: '6px', fontSize: '0.85rem', display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/terms-of-use" className="footer-link-hover">Terms of Use</Link>
              <span>|</span>
              <Link href="/privacy-policy" className="footer-link-hover">Privacy Policy</Link>
              <span>|</span>
              <Link href="/refund-policy" className="footer-link-hover">Refund &amp; Cancellation</Link>
              <span>|</span>
              <Link href="/shipping-policy" className="footer-link-hover">Shipping &amp; Delivery</Link>
            </p>
            <p style={{ marginTop: '8px' }}>Developed and Managed by <span className="managed-by" style={{color: 'var(--primary-color)', fontWeight: '600'}}>Mayank Gour</span></p>
          </div>
        </div>
      </div>
    </footer>
  );
}
