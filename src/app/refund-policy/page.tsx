"use client";

import React from 'react';
import './page.css';

export default function RefundPolicyPage() {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="terms-page-wrapper">
      <div className="terms-hero">
        <div className="container">
          <h1 className="terms-title">Refund &amp; <span>Cancellation Policy</span></h1>
          <p className="terms-subtitle">Last updated: {currentDate}</p>
        </div>
      </div>

      <div className="container terms-content-container">
        <div className="terms-card glass-panel">
          <div className="terms-toc">
            <h3>Table of Contents</h3>
            <ol>
              <li><a href="#overview">Overview</a></li>
              <li><a href="#harvester-booking">Harvester Bookings</a></li>
              <li><a href="#rotavator-booking">Rotavator Bookings</a></li>
              <li><a href="#spare-parts">Spare Parts Purchases</a></li>
              <li><a href="#refund-process">Refund Processing Time</a></li>
              <li><a href="#cancellation">Cancellation Terms</a></li>
              <li><a href="#contact">Contact for Returns &amp; Refunds</a></li>
            </ol>
          </div>

          <div className="terms-body">
            <p className="lead-paragraph">
              At Gajanan Traders, customer satisfaction is our top priority. We deal in high-quality agricultural machinery, including Kartar Combine Harvesters, Rotavators, and genuine spare parts. This Refund and Cancellation Policy outlines the terms under which bookings can be cancelled, products returned, and refunds processed.
            </p>

            <section id="overview" className="terms-section">
              <h2>1. Overview</h2>
              <p>
                Our policy varies depending on the type of product or service you purchase from us:
              </p>
              <ul>
                <li><strong>Heavy Agricultural Machinery (Harvesters and Rotavators):</strong> Involves custom ordering, manufacturing block booking, and delivery scheduling. Bookings are governed by specific dealer-manufacturer terms.</li>
                <li><strong>Spare Parts:</strong> Shipped physical items that are returnable or replaceable under specified conditions within a set timeframe.</li>
              </ul>
            </section>

            <section id="harvester-booking" className="terms-section">
              <h2>2. Harvester Bookings</h2>
              <p>
                Harvester bookings require a token/booking down-payment to secure your order from the manufacturer (e.g., Kartar Agri). 
              </p>
              <ul>
                <li><strong>Cancellation Period:</strong> Bookings can be cancelled within 48 hours of payment for a full refund of the booking amount.</li>
                <li><strong>Post-48 Hours:</strong> If you cancel after 48 hours, the order is forwarded to the manufacturer for allocation. A cancellation fee of 10% of the booking amount will be deducted, and the remaining amount will be refunded.</li>
                <li><strong>Post-Dispatch:</strong> Once the harvester has been dispatched from the manufacturing plant or dealer yard, the booking amount is strictly non-refundable.</li>
              </ul>
            </section>

            <section id="rotavator-booking" className="terms-section">
              <h2>3. Rotavator Bookings</h2>
              <p>
                Rotavator bookings follow a similar process to heavy machinery.
              </p>
              <ul>
                <li><strong>Cancellation:</strong> Bookings can be cancelled before dispatch from our showroom/yard for a full refund.</li>
                <li><strong>Post-Delivery:</strong> Once delivered and the registration/warranty has been activated in your name, returns or refunds are not accepted except under manufacturer-approved warranty claims for manufacturing defects.</li>
              </ul>
            </section>

            <section id="spare-parts" className="terms-section">
              <h2>4. Spare Parts Purchases</h2>
              <p>
                Gajanan Agro &amp; Spares supplies genuine spare parts. You can request a return or replacement for spare parts within <strong>7 days</strong> of delivery.
              </p>
              <p><strong>Eligibility for Returns/Replacements:</strong></p>
              <ul>
                <li>The spare part must be unused, unaltered, and in the same condition as received.</li>
                <li>It must be in its original packaging with all tags, labels, and invoice copy intact.</li>
                <li>Returns are only accepted if you received a damaged, defective, or incorrect part that does not match your ordered specifications.</li>
                <li>Parts damaged due to improper installation by the customer are not eligible for returns or refunds.</li>
              </ul>
            </section>

            <section id="refund-process" className="terms-section">
              <h2>5. Refund Processing Time</h2>
              <p>
                Once your return is received and inspected (for spare parts) or your cancellation request is approved (for bookings):
              </p>
              <ul>
                <li>We will notify you via SMS/Email regarding the approval or rejection of your refund.</li>
                <li>Approved refunds will be processed and credited back to your original payment method (Bank Account, Credit/Debit Card, UPI, etc.) within <strong>5 to 7 working days</strong>.</li>
                <li>In case of offline transactions, refunds will be issued via Bank Transfer (NEFT/RTGS) to the customer's verified bank account.</li>
              </ul>
            </section>

            <section id="cancellation" className="terms-section">
              <h2>6. Cancellation Terms</h2>
              <p>
                Gajanan Traders reserves the right to cancel any booking or order due to unforeseen circumstances, including but not limited to stock unavailability, manufacturing delays, or incorrect pricing/specifications listed on the site. In such cases, a 100% refund of the amount paid will be issued to the customer.
              </p>
            </section>

            <section id="contact" className="terms-section">
              <h2>7. Contact for Returns &amp; Refunds</h2>
              <p>
                For any queries regarding cancellations, returns, or refunds, please reach out to our billing team:
              </p>
              <div className="contact-card-terms">
                <p><strong>Gajanan Traders (Gajanan Group)</strong></p>
                <p>Railway Station Road, In front of Hotel Raj Residency,</p>
                <p>Harda - 461331, Madhya Pradesh, India</p>
                <p>Mobile: +91 9406973436, +91 9644868236</p>
                <p>Email: contact@gajanantraders.in</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
