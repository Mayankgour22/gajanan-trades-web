"use client";

import React, { useState } from 'react';
import './page.css';

export default function ContactPage() {
  const [selectedTab, setSelectedTab] = useState<'quotation' | 'pricelist' | 'discuss'>('discuss');
  const [requirementText, setRequirementText] = useState<string>('');
  const [mobileNumber, setMobileNumber] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>('');

  const getRequirementPlaceholder = () => {
    switch (selectedTab) {
      case 'quotation':
        return 'Could you please send me a quotation for the items?';
      case 'pricelist':
        return 'Can you provide me with the latest price list for your products?';
      case 'discuss':
        return 'I would like to discuss my requirements in detail. Can we set up a time to talk?';
      default:
        return 'Tell us your requirement';
    }
  };

  const handleTabChange = (tab: 'quotation' | 'pricelist' | 'discuss') => {
    setSelectedTab(tab);
    setRequirementText(''); // Reset text to use standard placeholder context
    setErrorMsg('');
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    const finalRequirement = requirementText.trim() || getRequirementPlaceholder();

    if (!mobileNumber.trim()) {
      setErrorMsg('Mobile No. is needed for Inquiry.');
      return;
    }

    if (mobileNumber.trim().length !== 10 || !/^\d+$/.test(mobileNumber.trim())) {
      setErrorMsg('Please enter a valid 10-digit Mobile No.');
      return;
    }

    setIsSubmitted(true);
  };

  return (
    <div className="contact-page-wrapper">
      {/* Header bar mirroring original site */}
      <div className="contact-branding-bar">
        <div className="container branding-container">
          <div className="branding-left">
            <h1 className="branding-logo">GAJANAN TRADERS</h1>
            <p className="branding-gst">GST : 23AHLPD5451C1ZU</p>
          </div>
          <div className="branding-right">
            <div className="phone-icon-circle">&#128222;</div>
            <div className="branding-call-now">
              <span className="call-label">Call us now</span>
              <span className="call-number">07971549885</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container contact-main-container">
        <div className="contact-layout-grid">
          {/* Left Column: Contact Details */}
          <div className="contact-details-column">
            <h2 className="details-heading">Contact Details</h2>
            
            <div className="details-list">
              <div className="details-item">
                <span className="details-icon">&#128100;</span>
                <div className="details-text">
                  <h3>Mr. Aman Dubey</h3>
                  <p>Sales & Marketing Manager</p>
                </div>
              </div>

              <div className="details-item">
                <span className="details-icon">&#128241;</span>
                <div className="details-text">
                  <p>Mobile : +91 7971549885</p>
                </div>
              </div>

              <div className="details-item">
                <span className="details-icon">&#10148;</span>
                <div className="details-text">
                  <p>
                    Railway Station Road, In front of Hotel Raj Residency, Harda-461331, Madhya Pradesh, India
                  </p>
                </div>
              </div>
            </div>

            <div className="call-me-free-container">
              <a href="tel:07971549885" className="btn-call-me-free">
                CALL ME FREE
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="contact-form-column">
            <div className="contact-form-card">
              <h2 className="form-card-title">Contact Us</h2>
              
              {isSubmitted ? (
                <div className="contact-success-state">
                  <div className="success-icon">&#9989;</div>
                  <h3>Thank You!</h3>
                  <p>We have received your requirements.</p>
                  <p className="success-subtext">Mr. Aman Dubey will contact you shortly.</p>
                  <button 
                    onClick={() => { setIsSubmitted(false); setRequirementText(''); setMobileNumber(''); }}
                    className="btn-contact-now"
                    style={{ marginTop: '20px' }}
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit}>
                  {/* Form Action Tabs */}
                  <div className="form-tabs">
                    <button
                      type="button"
                      className={`tab-btn ${selectedTab === 'quotation' ? 'active' : ''}`}
                      onClick={() => handleTabChange('quotation')}
                    >
                      Get Quotation
                    </button>
                    <button
                      type="button"
                      className={`tab-btn ${selectedTab === 'pricelist' ? 'active' : ''}`}
                      onClick={() => handleTabChange('pricelist')}
                    >
                      Get Price List
                    </button>
                    <button
                      type="button"
                      className={`tab-btn ${selectedTab === 'discuss' ? 'active' : ''}`}
                      onClick={() => handleTabChange('discuss')}
                    >
                      Discuss Requirement
                    </button>
                  </div>

                  {/* Requirement Input */}
                  <div className="form-group-textarea">
                    <textarea
                      placeholder={getRequirementPlaceholder()}
                      value={requirementText}
                      onChange={(e) => setRequirementText(e.target.value)}
                      className="form-textarea"
                      rows={5}
                    />
                    <span className="textarea-label">Tell us your requirement</span>
                  </div>

                  {/* Mobile Input */}
                  <div className="form-group-phone">
                    <div className="phone-prefix-select">
                      <span className="flag-icon">&#127470;&#127473;</span>
                      <span>+91</span>
                      <span className="select-arrow">&#9662;</span>
                    </div>
                    <input
                      type="tel"
                      placeholder="Mobile number"
                      value={mobileNumber}
                      onChange={(e) => setMobileNumber(e.target.value)}
                      className="form-phone-input"
                    />
                  </div>

                  {errorMsg && <p className="contact-form-error-msg">{errorMsg}</p>}

                  {/* Submit Button */}
                  <button type="submit" className="btn-contact-now">
                    Contact Now
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
