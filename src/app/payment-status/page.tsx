"use client";

import React, { Suspense, useMemo } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle2, XCircle, ArrowLeft, PhoneCall, FileText } from 'lucide-react';
import './page.css';

function PaymentStatusContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Extract payment response parameters
  const status = searchParams?.get('status') || '';
  const orderId = searchParams?.get('order_id') || 'N/A';
  const productName = searchParams?.get('product') || 'Selected Machinery';
  const amount = searchParams?.get('amount') || '0';
  const name = searchParams?.get('name') || '';
  const phone = searchParams?.get('phone') || '';
  const email = searchParams?.get('email') || '';
  const address = searchParams?.get('address') || '';
  const pincode = searchParams?.get('pincode') || '';

  const formattedAmount = useMemo(() => {
    const num = parseInt(amount, 10);
    return isNaN(num) ? '0' : num.toLocaleString('en-IN');
  }, [amount]);

  const isSuccess = status === 'success';

  return (
    <div className="payment-status-wrapper">
      <div className="container status-container">
        
        {isSuccess ? (
          /* SUCCESS CASE */
          <div className="status-card success glass-panel">
            <div className="status-header">
              <div className="status-icon-wrapper success-pulse">
                <CheckCircle2 size={48} color="#22c55e" />
              </div>
              <h1 className="status-main-title">Pre-Booking Confirmed!</h1>
              <p className="status-desc">
                Your payment of <strong>₹{formattedAmount}</strong> has been successfully processed via Cashfree.
              </p>
            </div>

            <hr className="status-divider" />

            {/* Receipt Summary Box */}
            <div className="receipt-box">
              <div className="receipt-header">
                <h3>Booking Details</h3>
                <span className="receipt-ref-id">Ref: {orderId}</span>
              </div>

              <div className="receipt-body">
                <table className="receipt-table">
                  <tbody>
                    <tr>
                      <td className="label">Machinery Product</td>
                      <td className="value font-bold">{productName}</td>
                    </tr>
                    <tr>
                      <td className="label">Booking Fee Paid</td>
                      <td className="value price font-bold">₹{formattedAmount}.00</td>
                    </tr>
                    <tr>
                      <td className="label">Customer Name</td>
                      <td className="value">{name}</td>
                    </tr>
                    <tr>
                      <td className="label">Mobile Number</td>
                      <td className="value">+91 {phone}</td>
                    </tr>
                    <tr>
                      <td className="label">Email Address</td>
                      <td className="value">{email}</td>
                    </tr>
                    <tr>
                      <td className="label">Billing Address</td>
                      <td className="value">
                        {address} - {pincode}
                      </td>
                    </tr>
                    <tr>
                      <td className="label">Payment Status</td>
                      <td className="value"><span className="badge paid">PAID</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="action-info-box">
              <h3>What happens next?</h3>
              <p>
                Our Sales Manager, <strong>Mr. Aman Dubey</strong>, will contact you shortly on <strong>+91 {phone}</strong> to verify the address, discuss delivery timelines, and coordinate final payments.
              </p>
              
              <div className="direct-contacts">
                <a href="tel:+919406973436" className="btn-contact-call">
                  <PhoneCall size={16} /> Call +91-9406973436
                </a>
                <a href="tel:+919644868236" className="btn-contact-call">
                  <PhoneCall size={16} /> Call +91-9644868236
                </a>
              </div>
            </div>

            <div className="status-actions">
              <Link href="/products" className="btn-primary-action">
                Browse More Catalog
              </Link>
              <Link href="/" className="btn-secondary-action">
                Return to Homepage
              </Link>
            </div>
          </div>
        ) : (
          /* FAILURE CASE */
          <div className="status-card failure glass-panel">
            <div className="status-header">
              <div className="status-icon-wrapper failure-pulse">
                <XCircle size={48} color="#ef4444" />
              </div>
              <h1 className="status-main-title text-red">Pre-Booking Payment Failed</h1>
              <p className="status-desc">
                We could not complete your booking transaction. The payment gateway was declined or cancelled.
              </p>
            </div>

            <hr className="status-divider" />

            <div className="failed-info-box">
              <h4>Common reasons for failure:</h4>
              <ul>
                <li>Transaction was cancelled on the mock gateway page.</li>
                <li>Insufficient funds or daily transaction limit exceeded.</li>
                <li>Network connection timed out.</li>
              </ul>
            </div>

            <div className="status-actions">
              <button 
                onClick={() => router.push('/checkout')} 
                className="btn-primary-action retry"
              >
                <ArrowLeft size={16} /> Retry Pre-Booking Checkout
              </button>
              <Link href="/products" className="btn-secondary-action">
                Cancel and Go to Catalog
              </Link>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default function PaymentStatusPage() {
  return (
    <Suspense fallback={
      <div className="payment-status-wrapper flex-center" style={{ minHeight: '60vh' }}>
        <div className="spinner"></div>
        <p style={{ marginLeft: '12px', fontSize: '1.1rem' }}>Verifying Pre-booking payment status...</p>
      </div>
    }>
      <PaymentStatusContent />
    </Suspense>
  );
}
