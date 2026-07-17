"use client";

import React, { Suspense, useState, useMemo } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import productsData from '@/data/products.json';
import './page.css';

// Slugify helper to map product titles to URLs
function slugify(text: string) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start
    .replace(/-+$/, '');            // Trim - from end
}

function CheckoutContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const productParam = searchParams?.get('product') || '';

  // Form Fields
  const [selectedProductSlug, setSelectedProductSlug] = useState<string>(productParam);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [addressLine1, setAddressLine1] = useState('');
  const [addressLine2, setAddressLine2] = useState('');
  const [cityState, setCityState] = useState('');
  const [pincode, setPincode] = useState('');

  // States
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isRedirecting, setIsRedirecting] = useState(false);
  const [showMockGateway, setShowMockGateway] = useState(false);
  const [mockGatewayStatus, setMockGatewayStatus] = useState<'idle' | 'processing'>('idle');
  const [generatedOrderId, setGeneratedOrderId] = useState('');

  // Get list of valid bookable products
  const bookableProducts = useMemo(() => {
    return productsData.products.filter(p => 
      p.category === 'combine-harvester' || p.category === 'agriculture-rotavator'
    );
  }, []);

  // Selected Product details
  const activeProduct = useMemo(() => {
    if (!selectedProductSlug) return null;
    return bookableProducts.find(p => slugify(p.title) === selectedProductSlug) || null;
  }, [selectedProductSlug, bookableProducts]);

  // Booking Amount
  const bookingAmount = useMemo(() => {
    if (!activeProduct) return 0;
    return activeProduct.category === 'combine-harvester' ? 21000 : 5000;
  }, [activeProduct]);

  // Form Validation
  const validateForm = () => {
    const errors: Record<string, string> = {};

    if (!selectedProductSlug) {
      errors.product = 'Please select a machinery product to pre-book.';
    }
    if (!fullName.trim()) {
      errors.fullName = 'Full Name is required.';
    }
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Please enter a valid email address.';
    }
    if (!phone.trim() || phone.trim().length !== 10 || !/^\d+$/.test(phone.trim())) {
      errors.phone = 'Please enter a valid 10-digit mobile number.';
    }
    if (!addressLine1.trim()) {
      errors.addressLine1 = 'Billing Address is required.';
    }
    if (!cityState.trim()) {
      errors.cityState = 'City & State are required.';
    }
    if (!pincode.trim() || pincode.trim().length !== 6 || !/^\d+$/.test(pincode.trim())) {
      errors.pincode = 'Please enter a valid 6-digit pincode.';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handlePaySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsRedirecting(true);

    // Simulate connecting to Cashfree Payment Gateway
    setTimeout(() => {
      const orderId = `GT-BOOK-${Math.floor(100000 + Math.random() * 900000)}`;
      setGeneratedOrderId(orderId);
      setIsRedirecting(false);
      setShowMockGateway(true);
    }, 2000);
  };

  const handleSimulatePayment = (success: boolean) => {
    setMockGatewayStatus('processing');
    
    // Simulate payment authorization delay
    setTimeout(() => {
      setShowMockGateway(false);
      setMockGatewayStatus('idle');

      if (!activeProduct) return;

      const params = new URLSearchParams({
        status: success ? 'success' : 'failed',
        order_id: generatedOrderId,
        product: activeProduct.title,
        amount: bookingAmount.toString(),
        name: fullName,
        phone: phone,
        email: email,
        address: `${addressLine1}${addressLine2 ? ', ' + addressLine2 : ''}, ${cityState}`,
        pincode: pincode
      });

      router.push(`/payment-status?${params.toString()}`);
    }, 1800);
  };

  return (
    <div className="checkout-page-wrapper">
      <div className="container">
        <h1 className="checkout-title">Pre-Booking Checkout</h1>
        <p className="checkout-subtitle">Secure your machinery delivery with our secure token payment gateway.</p>

        <div className="checkout-layout">
          {/* Left Column: Form */}
          <div className="checkout-form-column glass-panel">
            <h2 className="form-section-title">Customer &amp; Billing Details</h2>
            <form onSubmit={handlePaySubmit}>
              {/* Product Selection (Visible Dropdown fallback if no product in URL) */}
              <div className="checkout-form-group">
                <label className="checkout-label">Select Machinery to Book</label>
                <select 
                  value={selectedProductSlug} 
                  onChange={(e) => {
                    setSelectedProductSlug(e.target.value);
                    setFormErrors(prev => ({ ...prev, product: '' }));
                  }}
                  className={`checkout-select ${formErrors.product ? 'error' : ''}`}
                >
                  <option value="">-- Choose Harvester or Rotavator --</option>
                  {bookableProducts.map((p) => (
                    <option key={slugify(p.title)} value={slugify(p.title)}>
                      {p.title} (Deposit: ₹{p.category === 'combine-harvester' ? '21,000' : '5,000'})
                    </option>
                  ))}
                </select>
                {formErrors.product && <p className="error-text">{formErrors.product}</p>}
              </div>

              <div className="form-row-2">
                <div className="checkout-form-group">
                  <label className="checkout-label">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="Enter your name" 
                    value={fullName}
                    onChange={(e) => { setFullName(e.target.value); setFormErrors(prev => ({ ...prev, fullName: '' })); }}
                    className={`checkout-input ${formErrors.fullName ? 'error' : ''}`}
                  />
                  {formErrors.fullName && <p className="error-text">{formErrors.fullName}</p>}
                </div>

                <div className="checkout-form-group">
                  <label className="checkout-label">Mobile Number</label>
                  <div className="phone-input-wrapper">
                    <span className="phone-prefix">+91</span>
                    <input 
                      type="tel" 
                      placeholder="10-digit number" 
                      value={phone}
                      onChange={(e) => { setPhone(e.target.value); setFormErrors(prev => ({ ...prev, phone: '' })); }}
                      className={`checkout-input phone-input ${formErrors.phone ? 'error' : ''}`}
                    />
                  </div>
                  {formErrors.phone && <p className="error-text">{formErrors.phone}</p>}
                </div>
              </div>

              <div className="checkout-form-group">
                <label className="checkout-label">Email Address</label>
                <input 
                  type="email" 
                  placeholder="name@example.com" 
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setFormErrors(prev => ({ ...prev, email: '' })); }}
                  className={`checkout-input ${formErrors.email ? 'error' : ''}`}
                />
                {formErrors.email && <p className="error-text">{formErrors.email}</p>}
              </div>

              <div className="checkout-form-group">
                <label className="checkout-label">Address Line 1</label>
                <input 
                  type="text" 
                  placeholder="House No, Building, Street, Area" 
                  value={addressLine1}
                  onChange={(e) => { setAddressLine1(e.target.value); setFormErrors(prev => ({ ...prev, addressLine1: '' })); }}
                  className={`checkout-input ${formErrors.addressLine1 ? 'error' : ''}`}
                />
                {formErrors.addressLine1 && <p className="error-text">{formErrors.addressLine1}</p>}
              </div>

              <div className="checkout-form-group">
                <label className="checkout-label">Address Line 2 (Optional)</label>
                <input 
                  type="text" 
                  placeholder="Landmark, Suite, etc." 
                  value={addressLine2}
                  onChange={(e) => setAddressLine2(e.target.value)}
                  className="checkout-input"
                />
              </div>

              <div className="form-row-2">
                <div className="checkout-form-group">
                  <label className="checkout-label">City, State</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Harda, Madhya Pradesh" 
                    value={cityState}
                    onChange={(e) => { setCityState(e.target.value); setFormErrors(prev => ({ ...prev, cityState: '' })); }}
                    className={`checkout-input ${formErrors.cityState ? 'error' : ''}`}
                  />
                  {formErrors.cityState && <p className="error-text">{formErrors.cityState}</p>}
                </div>

                <div className="checkout-form-group">
                  <label className="checkout-label">Pincode</label>
                  <input 
                    type="text" 
                    placeholder="6-digit PIN" 
                    maxLength={6}
                    value={pincode}
                    onChange={(e) => { setPincode(e.target.value); setFormErrors(prev => ({ ...prev, pincode: '' })); }}
                    className={`checkout-input ${formErrors.pincode ? 'error' : ''}`}
                  />
                  {formErrors.pincode && <p className="error-text">{formErrors.pincode}</p>}
                </div>
              </div>

              <button 
                type="submit" 
                className="checkout-pay-btn" 
                disabled={isRedirecting}
              >
                {isRedirecting ? (
                  <span className="spinner-flex">
                    <span className="spinner"></span> Connecting to Secure Gateway...
                  </span>
                ) : (
                  `Proceed to Pre-Book (₹${bookingAmount.toLocaleString('en-IN')})`
                )}
              </button>
            </form>
          </div>

          {/* Right Column: Order Summary */}
          <div className="checkout-summary-column">
            <div className="summary-card glass-panel">
              <h2 className="summary-title">Booking Summary</h2>
              
              {activeProduct ? (
                <div className="summary-details">
                  <div className="summary-product-img">
                    {activeProduct.imageSrc ? (
                      <Image 
                        src={activeProduct.imageSrc} 
                        alt={activeProduct.title} 
                        fill 
                        style={{ objectFit: 'contain' }}
                        unoptimized
                      />
                    ) : (
                      <div className="no-image">No Image</div>
                    )}
                  </div>
                  <h3 className="summary-product-title">{activeProduct.title}</h3>
                  <span className="summary-category">{activeProduct.categoryName}</span>
                  
                  <hr className="divider" />
                  
                  <div className="price-row">
                    <span>Full Machinery Price:</span>
                    <strong>{activeProduct.price && activeProduct.price !== '0' && activeProduct.price !== '0.0 INR' ? `₹${activeProduct.price.replace(' INR', '')}` : 'Price on Request'}</strong>
                  </div>
                  
                  <div className="price-row highlight">
                    <span>Pre-Booking Token Amount:</span>
                    <span className="token-price">₹{bookingAmount.toLocaleString('en-IN')}</span>
                  </div>

                  <p className="summary-note">
                    *The token amount is fully refundable and will be adjusted in the final billing during machinery delivery.
                  </p>
                </div>
              ) : (
                <div className="summary-empty">
                  <p>Please select a product from the list to view booking summary and pay booking fees.</p>
                </div>
              )}
            </div>

            <div className="trust-card glass-panel">
              <h4>Secure Payment Promise</h4>
              <p>We process payments securely. Supported options via Cashfree Payment Gateway:</p>
              <div className="payment-badges">
                <span>💳 Cards</span>
                <span>📱 UPI</span>
                <span>🏦 Netbanking</span>
                <span>💼 Wallets</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cashfree Mock Gateway Modal */}
      {showMockGateway && (
        <div className="modal-overlay">
          <div className="mock-gateway-container">
            {mockGatewayStatus === 'processing' ? (
              <div className="gateway-processing-wrapper">
                <span className="gateway-spinner"></span>
                <h3>Processing payment transaction...</h3>
                <p>Do not reload or close this window.</p>
              </div>
            ) : (
              <>
                <div className="gateway-header">
                  <div className="gateway-logo-flex">
                    <span className="gateway-cf-badge">cashfree payments</span>
                    <span className="gateway-env-tag">TEST GATEWAY</span>
                  </div>
                  <span className="gateway-merchant">Gajanan Traders — Prebooking</span>
                </div>

                <div className="gateway-order-details">
                  <div className="gateway-row">
                    <span>Order Reference ID</span>
                    <strong>{generatedOrderId}</strong>
                  </div>
                  <div className="gateway-row">
                    <span>Amount Payable</span>
                    <strong className="gateway-amount">₹{bookingAmount.toLocaleString('en-IN')}.00</strong>
                  </div>
                </div>

                <div className="gateway-body">
                  <h4>Choose Payment Outcome for Testing</h4>
                  <p className="gateway-hint">
                    This is the Cashfree payment sandbox environment simulator. You can trigger a successful payment callback or simulate a card failure check.
                  </p>

                  <div className="gateway-actions">
                    <button 
                      onClick={() => handleSimulatePayment(true)} 
                      className="gateway-btn success"
                    >
                      ✓ Simulate Successful Payment
                    </button>
                    
                    <button 
                      onClick={() => handleSimulatePayment(false)} 
                      className="gateway-btn failure"
                    >
                      ✗ Simulate Payment Failed
                    </button>
                  </div>
                </div>

                <div className="gateway-footer">
                  <button 
                    onClick={() => {
                      setShowMockGateway(false);
                      setIsRedirecting(false);
                    }} 
                    className="gateway-cancel"
                  >
                    Cancel and Return to Checkout
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={
      <div className="checkout-page-wrapper flex-center" style={{ minHeight: '60vh' }}>
        <div className="spinner"></div>
        <p style={{ marginLeft: '12px', fontSize: '1.1rem' }}>Loading Pre-Booking Checkout...</p>
      </div>
    }>
      <CheckoutContent />
    </Suspense>
  );
}
