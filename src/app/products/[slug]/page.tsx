"use client";

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
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

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params?.slug as string;

  const [selectedTab, setSelectedTab] = useState<'quotation' | 'pricelist' | 'discuss'>('discuss');
  const [requirementText, setRequirementText] = useState<string>('');
  const [mobileNumber, setMobileNumber] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>('');
  
  const product = useMemo(() => {
    return productsData.products.find(p => slugify(p.title) === slug);
  }, [slug]);

  const [activeImage, setActiveImage] = useState<string>(product?.imageSrc || '');

  React.useEffect(() => {
    if (product?.imageSrc) {
      setActiveImage(product.imageSrc);
    }
  }, [product?.imageSrc]);

  // Fallback placeholder logic
  const getRequirementPlaceholder = () => {
    if (!product) return 'Tell us your requirement';
    switch (selectedTab) {
      case 'quotation':
        return `Could you please send me a quotation for the ${product.title}?`;
      case 'pricelist':
        return `Can you provide me with the latest price list for ${product.title}?`;
      case 'discuss':
        return `I would like to discuss my requirements for ${product.title} in detail. Can we set up a time to talk?`;
      default:
        return 'Tell us your requirement';
    }
  };

  const handleTabChange = (tab: 'quotation' | 'pricelist' | 'discuss') => {
    setSelectedTab(tab);
    setRequirementText(''); // Reset text to default placeholder content
    setErrorMsg('');
  };

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

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

  if (!product) {
    return (
      <div className="product-not-found container">
        <h2>Product Not Found</h2>
        <p>Sorry, the product you are looking for does not exist in our catalog.</p>
        <button onClick={() => router.push('/products')} className="btn-primary">
          Back to Catalog
        </button>
      </div>
    );
  }

  return (
    <div className="product-detail-page-wrapper">
      <div className="container">
        {/* Breadcrumb Navigation */}
        <nav className="product-breadcrumbs">
          <Link href="/">Home</Link>
          <span className="separator">&gt;</span>
          <Link href="/products">Products</Link>
          <span className="separator">&gt;</span>
          <span className="current">{product.title}</span>
        </nav>

        {/* Back Button */}
        <div className="back-link-wrapper">
          <Link href="/products" className="back-catalog-link">
            &larr; Back to Products Catalog
          </Link>
        </div>

        {/* Main Details Grid */}
        <div className="product-details-grid">
          
          {/* Left Column: Image & Inquiry Card */}
          <div className="details-image-column">
            <div className="details-image-card">
              {activeImage ? (
                <Image
                  src={activeImage}
                  alt={product.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  style={{ objectFit: 'contain' }}
                  priority
                  unoptimized
                />
              ) : (
                <div className="no-image-placeholder">No Image Available</div>
              )}
            </div>

            {/* Thumbnail Gallery */}
            {product.images && product.images.length > 1 && (
              <div className="thumbnail-gallery" style={{ display: 'flex', gap: '10px', marginTop: '15px', overflowX: 'auto', paddingBottom: '10px' }}>
                {product.images.map((img: string, idx: number) => (
                  <div 
                    key={idx} 
                    className={`thumbnail-wrapper ${activeImage === img ? 'active' : ''}`}
                    onClick={() => setActiveImage(img)}
                    style={{ 
                      position: 'relative', width: '80px', height: '80px', flexShrink: 0, 
                      cursor: 'pointer', border: activeImage === img ? '2px solid var(--primary-color)' : '1px solid #ccc',
                      borderRadius: '8px', overflow: 'hidden'
                    }}
                  >
                    <Image src={img} alt={`${product.title} thumbnail ${idx + 1}`} fill style={{ objectFit: 'cover' }} unoptimized />
                  </div>
                ))}
              </div>
            )}

            {/* Spec-Specific Inquiry Form Card */}
            <div className="spec-inquiry-card">
              <h3>Get Price / Inquiry</h3>
              <p className="manager-title"><strong>Mr. Aman Dubey</strong> (Sales Manager)</p>
              
              {isSubmitted ? (
                <div className="inquiry-success-message">
                  <span className="success-icon">&#9989;</span>
                  <h4>Inquiry Sent!</h4>
                  <p>We will contact you shortly on +91 {mobileNumber}.</p>
                </div>
              ) : (
                <form onSubmit={handleInquirySubmit}>
                  {/* Tabs */}
                  <div className="inquiry-tabs">
                    <button
                      type="button"
                      className={`inquiry-tab-btn ${selectedTab === 'quotation' ? 'active' : ''}`}
                      onClick={() => handleTabChange('quotation')}
                    >
                      Quotation
                    </button>
                    <button
                      type="button"
                      className={`inquiry-tab-btn ${selectedTab === 'pricelist' ? 'active' : ''}`}
                      onClick={() => handleTabChange('pricelist')}
                    >
                      Price List
                    </button>
                    <button
                      type="button"
                      className={`inquiry-tab-btn ${selectedTab === 'discuss' ? 'active' : ''}`}
                      onClick={() => handleTabChange('discuss')}
                    >
                      Discuss
                    </button>
                  </div>

                  {/* Textarea */}
                  <div className="inquiry-form-group">
                    <textarea
                      placeholder={getRequirementPlaceholder()}
                      value={requirementText}
                      onChange={(e) => setRequirementText(e.target.value)}
                      rows={3}
                      className="inquiry-textarea"
                    />
                    <span className="inquiry-floating-label">Tell us your requirement</span>
                  </div>

                  {/* Phone input */}
                  <div className="inquiry-form-group-phone">
                    <div className="prefix-select">
                      <span>+91</span>
                    </div>
                    <input
                      type="tel"
                      placeholder="Mobile number"
                      value={mobileNumber}
                      onChange={(e) => setMobileNumber(e.target.value)}
                      className="inquiry-phone-input"
                    />
                  </div>

                  {errorMsg && <p className="inquiry-error-msg">{errorMsg}</p>}

                  <button type="submit" className="btn-inquiry-submit">
                    Contact Now
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Title, Price, Specs */}
          <div className="details-info-column">
            <span className="info-category-label">{product.categoryName}</span>
            <h1 className="info-product-title">{product.title}</h1>

            <div className="info-price-badge">
              <span className="price-label">Estimated Price:</span>
              <span className="price-value">
                {product.price && product.price !== '0' && product.price !== '0.0 INR'
                  ? `₹${product.price.replace(' INR', '')}`
                  : 'Price on Request'
                }
              </span>
            </div>

            {/* Specifications Card */}
            <div className="details-specifications-card">
              <h2>Product Specifications</h2>
              
              {product.specs && Object.keys(product.specs).length > 0 ? (
                <div className="detail-specs-table-wrapper">
                  <table className="detail-specs-table">
                    <tbody>
                      {Object.entries(product.specs).map(([key, val]: any) => (
                        <tr key={key}>
                          <td className="detail-spec-key">{key}</td>
                          <td className="detail-spec-val">{val}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <p className="no-specs-text">No technical details are currently listed. Please request quotes to get more details.</p>
              )}
            </div>

            {/* Support Widget */}
            <div className="details-support-widget">
              <h3>Need Help Ordering?</h3>
              <p>For instant assistance, you can call us directly:</p>
              <a href="tel:07971549885" className="direct-call-link">
                &#9742; +91 79715 49885
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
