"use client";

import React from 'react';
import './page.css';

export default function ShippingPolicyPage() {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="terms-page-wrapper">
      <div className="terms-hero">
        <div className="container">
          <h1 className="terms-title">Shipping &amp; <span>Delivery Policy</span></h1>
          <p className="terms-subtitle">Last updated: {currentDate}</p>
        </div>
      </div>

      <div className="container terms-content-container">
        <div className="terms-card glass-panel">
          <div className="terms-toc">
            <h3>Table of Contents</h3>
            <ol>
              <li><a href="#overview">Overview</a></li>
              <li><a href="#processing-time">Order Processing Timelines</a></li>
              <li><a href="#delivery-timelines">Delivery Estimates &amp; Transit Times</a></li>
              <li><a href="#shipping-charges">Shipping Rates &amp; Calculation</a></li>
              <li><a href="#heavy-machinery">Harvester &amp; Rotavator Logistics</a></li>
              <li><a href="#tracking">Shipment Tracking</a></li>
              <li><a href="#damaged-goods">Damaged or Lost Shipments</a></li>
              <li><a href="#contact">Contact Support</a></li>
            </ol>
          </div>

          <div className="terms-body">
            <p className="lead-paragraph">
              Thank you for visiting and shopping at Gajanan Traders. The following terms and conditions constitute our Shipping and Delivery Policy for products purchased through our website, mobile application, or authorized dealer office.
            </p>

            <section id="overview" className="terms-section">
              <h2>1. Overview</h2>
              <p>
                We offer nationwide shipping across India for all spare parts listed under our "Gajanan Agro &amp; Spares" catalog. Heavy agricultural machinery (such as Kartar Harvesters and Rotavators) is subject to specialized transport arrangements.
              </p>
            </section>

            <section id="processing-time" className="terms-section">
              <h2>2. Order Processing Timelines</h2>
              <p>
                All orders for spare parts are processed within <strong>1 to 2 business days</strong> (excluding Sundays and national holidays).
              </p>
              <ul>
                <li>If we are experiencing a high volume of orders, shipments may be delayed by a few days. Please allow additional days in transit for delivery.</li>
                <li>In case of significant delays in shipping your order, we will contact you immediately via email or phone.</li>
              </ul>
            </section>

            <section id="delivery-timelines" className="terms-section">
              <h2>3. Delivery Estimates &amp; Transit Times</h2>
              <p>
                Delivery times depend on your location and the shipping method selected:
              </p>
              <ul>
                <li><strong>Within Madhya Pradesh (Local):</strong> 2 to 4 business days.</li>
                <li><strong>Rest of India (Metro cities &amp; major towns):</strong> 4 to 6 business days.</li>
                <li><strong>Rest of India (Rural / Remote areas):</strong> 5 to 8 business days.</li>
              </ul>
              <p>
                <em>Note: Delivery delays can occasionally occur due to weather anomalies, logistical disruptions, or local regulations.</em>
              </p>
            </section>

            <section id="shipping-charges" className="terms-section">
              <h2>4. Shipping Rates &amp; Calculation</h2>
              <p>
                Shipping charges for spare parts are calculated based on the weight, dimensions of the package, and delivery pincode.
              </p>
              <ul>
                <li>Estimated shipping charges will be displayed in your cart or provided at the time of order confirmation.</li>
                <li>We partner with reliable logistics services (e.g. Delhivery, Blue Dart, DTDC, or Speed Post) to ensure safe and timely deliveries.</li>
              </ul>
            </section>

            <section id="heavy-machinery" className="terms-section">
              <h2>5. Harvester &amp; Rotavator Logistics</h2>
              <p>
                For heavy agricultural machinery (Combine Harvesters and Rotavators), regular courier services are not applicable:
              </p>
              <ul>
                <li><strong>Self-Pickup:</strong> Customers can arrange to pick up their machinery directly from our dealer yard at Harda, Madhya Pradesh.</li>
                <li><strong>Flatbed Transport:</strong> We can assist in arranging flatbed truck trailers to transport the machinery to your location. Freight and transport charges are paid directly to the transport provider or added to the invoice, as agreed during order confirmation.</li>
                <li><strong>Transit Insurance:</strong> All heavy machinery transport is strongly recommended to be covered under transit insurance during freight transit.</li>
              </ul>
            </section>

            <section id="tracking" className="terms-section">
              <h2>6. Shipment Tracking</h2>
              <p>
                Once your order has been dispatched, you will receive a shipment confirmation message via SMS or WhatsApp containing your tracking number(s). The tracking number will be active within 24 hours of dispatch.
              </p>
            </section>

            <section id="damaged-goods" className="terms-section">
              <h2>7. Damaged or Lost Shipments</h2>
              <p>
                If you receive your order damaged, please document the damage by taking photos or videos before opening the package and contact our support team immediately. 
              </p>
              <ul>
                <li>Please save all packaging materials and damaged goods before filing a return claim.</li>
                <li>For verified transit damages, we will dispatch a replacement part at no extra cost or initiate a full refund.</li>
              </ul>
            </section>

            <section id="contact" className="terms-section">
              <h2>8. Contact Support</h2>
              <p>
                For any queries regarding the delivery status of your order, please get in touch with us:
              </p>
              <div className="contact-card-terms">
                <p><strong>Gajanan Traders</strong></p>
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
