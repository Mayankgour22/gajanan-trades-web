"use client";

import React from 'react';
import './page.css';

export default function PrivacyPolicyPage() {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="terms-page-wrapper">
      <div className="terms-hero">
        <div className="container">
          <h1 className="terms-title">Privacy <span>Policy</span></h1>
          <p className="terms-subtitle">Last updated: {currentDate}</p>
        </div>
      </div>

      <div className="container terms-content-container">
        <div className="terms-card glass-panel">
          <div className="terms-toc">
            <h3>Table of Contents</h3>
            <ol>
              <li><a href="#introduction">Introduction</a></li>
              <li><a href="#information-collection">Information We Collect</a></li>
              <li><a href="#how-we-use">How We Use Your Information</a></li>
              <li><a href="#information-sharing">Information Sharing &amp; Disclosure</a></li>
              <li><a href="#data-security">Data Security</a></li>
              <li><a href="#payment-gateway">Payment Security</a></li>
              <li><a href="#cookies">Cookies &amp; Tracking Technologies</a></li>
              <li><a href="#contact">Contact Information</a></li>
            </ol>
          </div>

          <div className="terms-body">
            <p className="lead-paragraph">
              Gajanan Traders ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website (www.gajanantraders.in) or use our mobile application (collectively, the "Services").
            </p>

            <section id="introduction" className="terms-section">
              <h2>1. Introduction</h2>
              <p>
                By using our website or mobile application, you agree to the collection and use of information in accordance with this Privacy Policy. We collect information to provide a seamless booking experience for agricultural machinery (harvesters, rotavators) and to process deliveries of genuine spare parts.
              </p>
            </section>

            <section id="information-collection" className="terms-section">
              <h2>2. Information We Collect</h2>
              <p>
                We may collect personal information that you voluntarily provide to us when registering, placing an order, booking equipment, or contacting us. This includes:
              </p>
              <ul>
                <li><strong>Personal Identifiers:</strong> Name, shipping address, billing address, phone number, and email address.</li>
                <li><strong>Payment Information:</strong> Financial transaction data (processed securely by our payment gateway partners). We do not store full credit card numbers or PINs on our servers.</li>
                <li><strong>Device &amp; Usage Data:</strong> IP address, browser type, operating system, and app interaction logs.</li>
                <li><strong>Machinery Details:</strong> Manufacturer details, model name, and requirements inputted for custom equipment bookings.</li>
              </ul>
            </section>

            <section id="how-we-use" className="terms-section">
              <h2>3. How We Use Your Information</h2>
              <p>
                We process your information for purposes based on legitimate business interests, the fulfillment of our contract with you, compliance with our legal obligations, and/or your consent. We use it to:
              </p>
              <ul>
                <li>Facilitate account creation and the logon process.</li>
                <li>Fulfill and manage your orders, bookings, and payments.</li>
                <li>Deliver spare parts to your specified address.</li>
                <li>Send administrative updates, booking confirmations, and delivery notifications via SMS or WhatsApp.</li>
                <li>Provide customer support and respond to product inquiries.</li>
                <li>Improve our mobile application and website performance.</li>
              </ul>
            </section>

            <section id="information-sharing" className="terms-section">
              <h2>4. Information Sharing &amp; Disclosure</h2>
              <p>
                We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.
              </p>
              <ul>
                <li><strong>With Manufacturers:</strong> We may share booking information with original manufacturers (e.g. Kartar Agri) to register warranties and process equipment delivery allocations.</li>
                <li><strong>With Third-Party Service Providers:</strong> We share data with delivery partners/courier companies (for shipping spare parts) and SMS gateway providers.</li>
                <li><strong>For Legal Compliance:</strong> We may disclose information if required to do so by applicable law, governmental request, or court order.</li>
              </ul>
            </section>

            <section id="data-security" className="terms-section">
              <h2>5. Data Security</h2>
              <p>
                We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that no security measures are perfect or impenetrable.
              </p>
            </section>

            <section id="payment-security" className="terms-section">
              <h2>6. Payment Security</h2>
              <p>
                All online payments on our platform are processed through secure, PCI-DSS compliant payment gateways. We do not store or process card details directly on our servers. The transmission of sensitive payment data is protected using secure socket layer (SSL) encryption.
              </p>
            </section>

            <section id="cookies" className="terms-section">
              <h2>7. Cookies &amp; Tracking Technologies</h2>
              <p>
                We may use cookies, tracking pixels, and other tracking technologies on our Services to help customize the website and improve your experience. You can modify your browser settings to decline cookies, but this may affect the functionality of some features on our website.
              </p>
            </section>

            <section id="contact" className="terms-section">
              <h2>8. Contact Information</h2>
              <p>
                If you have questions or comments about this Privacy Policy, please contact us at:
              </p>
              <div className="contact-card-terms">
                <p><strong>Gajanan Traders</strong></p>
                <p>Railway Station Road, In front of Hotel Raj Residency,</p>
                <p>Harda - 461331, Madhya Pradesh, India</p>
                <p>Mobile: +91 9406973436, +91 9644868236</p>
                <p>Email: gajanantradersgt@gmail.com</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
