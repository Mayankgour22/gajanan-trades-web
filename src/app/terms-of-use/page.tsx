"use client";

import React from 'react';
import './page.css';

export default function TermsOfUsePage() {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="terms-page-wrapper">
      <div className="terms-hero">
        <div className="container">
          <h1 className="terms-title">Terms of <span>Use</span></h1>
          <p className="terms-subtitle">Last updated: {currentDate}</p>
        </div>
      </div>

      <div className="container terms-content-container">
        <div className="terms-card glass-panel">
          <div className="terms-toc">
            <h3>Table of Contents</h3>
            <ol>
              <li><a href="#acceptance">Acceptance of Terms</a></li>
              <li><a href="#eligibility">Eligibility & Account Registration</a></li>
              <li><a href="#license">Mobile Application License Grant</a></li>
              <li><a href="#conduct">Prohibited User Conduct</a></li>
              <li><a href="#intellectual-property">Intellectual Property Rights</a></li>
              <li><a href="#disclaimers">Disclaimers & Warranties</a></li>
              <li><a href="#liability">Limitation of Liability</a></li>
              <li><a href="#privacy">Privacy & Data Security</a></li>
              <li><a href="#governing-law">Governing Law & Jurisdiction</a></li>
              <li><a href="#contact">Contact Information</a></li>
            </ol>
          </div>

          <div className="terms-body">
            <p className="lead-paragraph">
              Welcome to Gajanan Traders. These Terms of Use ("Terms") govern your access to and use of our website (www.gajanantraders.in) and our mobile application (collectively, the "Service"). Please read these Terms carefully before downloading, registering, or using the Service.
            </p>

            <section id="acceptance" className="terms-section">
              <h2>1. Acceptance of Terms</h2>
              <p>
                By downloading our mobile application from the Google Play Store, registering an account, or browsing our website, you expressly agree to be bound by these Terms and our Privacy Policy. If you do not agree to all of these Terms, you must immediately uninstall the mobile application and cease all use of our website.
              </p>
            </section>

            <section id="eligibility" className="terms-section">
              <h2>2. Eligibility & Account Registration</h2>
              <p>
                You must be at least 18 years of age or the legal age of majority in your jurisdiction to use our Services. By registering an account in our mobile application, you represent and warrant that all information you provide is accurate, current, and complete. You are solely responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
              </p>
            </section>

            <section id="license" className="terms-section">
              <h2>3. Mobile Application License Grant</h2>
              <p>
                Subject to your compliance with these Terms, Gajanan Traders grants you a limited, non-exclusive, non-transferable, revocable license to download, install, and use our mobile application on a compatible mobile device owned or controlled by you, solely for your personal, non-commercial use in connection with purchasing or browsing agricultural machinery and tyres.
              </p>
              <p>You agree not to:</p>
              <ul>
                <li>Decompile, reverse engineer, disassemble, or attempt to derive the source code of the application.</li>
                <li>Modify, adapt, improve, translate, or create derivative works from the application.</li>
                <li>Distribute, rent, lease, lend, sell, sublicense, or otherwise transfer the application to any third party.</li>
                <li>Remove, alter, or obscure any proprietary rights notices, including copyright and trademark notices.</li>
              </ul>
            </section>

            <section id="conduct" className="terms-section">
              <h2>4. Prohibited User Conduct</h2>
              <p>
                When using our website or mobile application, you agree to comply with all applicable local, national, and international laws. You agree not to engage in any conduct that disrupts, damages, or impairs the functionality of the Service. Prohibited actions include, but are not limited to, introducing viruses or malware, scraping product specifications, submitting false inquiries, or attempting unauthorized access to our servers.
              </p>
            </section>

            <section id="intellectual-property" className="terms-section">
              <h2>5. Intellectual Property Rights</h2>
              <p>
                All content, features, logos, graphics, brand names (including "Gajanan Traders" and licensed product branding such as "Kartar Agro"), and software code available on our Services are the exclusive property of Gajanan Traders, its affiliates, or licensed third-party brand owners, and are protected by Indian and international copyright, trademark, and intellectual property laws. Nothing in these Terms grants you any right or license to use any trademarks, logos, or content without prior written permission.
              </p>
            </section>

            <section id="disclaimers" className="terms-section">
              <h2>6. Disclaimers & Warranties</h2>
              <p>
                The Services, including all product listings, dimensions, prices, images, and technical specifications, are provided on an "as is" and "as available" basis. Gajanan Traders acts as a supplier and dealer. While we strive to display accurate data scraped from authorized manufacturer catalogs, we make no warranties, express or implied, regarding the accuracy, completeness, reliability, or timeliness of product descriptions or availability. Product specifications and prices are subject to change without notice.
              </p>
            </section>

            <section id="liability" className="terms-section">
              <h2>7. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by applicable law, Gajanan Traders, its directors, employees, or managers shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising out of or in connection with your download, use of, or inability to use the website, mobile application, or any machinery purchased through references obtained on our Services.
              </p>
            </section>

            <section id="privacy" className="terms-section">
              <h2>8. Privacy & Data Security</h2>
              <p>
                Your privacy is important to us. Our collection, use, and storage of your personal data (such as mobile numbers and requirements inputted during inquiries) through the website and mobile application are governed by our Privacy Policy. By using the Services, you consent to the processing of your data in accordance with our Privacy Policy.
              </p>
            </section>

            <section id="governing-law" className="terms-section">
              <h2>9. Governing Law & Jurisdiction</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of India. Any legal action, dispute, or claim arising out of or relating to these Terms, the website, or the mobile application shall be subject to the exclusive jurisdiction of the courts located in Harda, Madhya Pradesh, India.
              </p>
            </section>

            <section id="contact" className="terms-section">
              <h2>10. Contact Information</h2>
              <p>
                If you have any questions, concerns, or requests regarding these Terms of Use or the mobile application, please contact us at:
              </p>
              <div className="contact-card-terms">
                <p><strong>Gajanan Traders</strong></p>
                <p>Railway Station Road, In front of Hotel Raj Residency,</p>
                <p>Harda - 461331, Madhya Pradesh, India</p>
                <p>Mobile: +91 79715 49885</p>
                <p>Email: contact@gajanantraders.in</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
