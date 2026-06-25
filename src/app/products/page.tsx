"use client";

import React, { useState, useMemo } from 'react';
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

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Extend categories list with an "All" option
  const categoriesList = useMemo(() => {
    return [
      { id: 'all', name: 'All Categories' },
      ...productsData.categories
    ];
  }, []);

  // Filter products based on search query and active category
  const filteredProducts = useMemo(() => {
    return productsData.products.filter(product => {
      const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
      
      const titleLower = product.title.toLowerCase();
      const queryLower = searchQuery.toLowerCase();
      
      // Search in title
      let matchesSearch = titleLower.includes(queryLower);
      
      // Search in specifications keys/values
      if (!matchesSearch && product.specs) {
        matchesSearch = Object.entries(product.specs).some(([key, val]) => 
          key.toLowerCase().includes(queryLower) || 
          String(val).toLowerCase().includes(queryLower)
        );
      }
      
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="products-page-wrapper">
      {/* Hero Header */}
      <section className="products-hero">
        <div className="container">
          <h1 className="hero-title">Our <span>Agricultural Equipment & Tyres</span></h1>
          <p className="hero-desc">
            Explore our comprehensive range of high-efficiency combine harvesters, rotavators, seeder machines, and tyres.
          </p>
        </div>
      </section>

      {/* Main Catalog Section */}
      <section className="catalog-section">
        <div className="container catalog-container">
          {/* Sidebar Filters */}
          <aside className="catalog-sidebar">
            <div className="search-box-wrapper">
              <input
                type="text"
                placeholder="Search products or specs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery('')} className="clear-search">
                  &#10006;
                </button>
              )}
            </div>

            <div className="category-list-wrapper">
              <h3>Categories</h3>
              <ul className="category-list">
                {categoriesList.map(cat => (
                  <li key={cat.id}>
                    <button
                      onClick={() => setActiveCategory(cat.id)}
                      className={`category-btn ${activeCategory === cat.id ? 'active' : ''}`}
                    >
                      {cat.name}
                      <span className="count">
                        {cat.id === 'all' 
                          ? productsData.products.length 
                          : productsData.products.filter(p => p.category === cat.id).length
                        }
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Grid Content */}
          <main className="catalog-content">
            <div className="catalog-header-info">
              <h2>{categoriesList.find(c => c.id === activeCategory)?.name}</h2>
              <p>Showing {filteredProducts.length} products</p>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="no-products-found">
                <p>No products match your criteria. Try searching for something else!</p>
                <button 
                  onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}
                  className="btn-primary"
                  style={{ marginTop: '15px' }}
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="products-grid">
                {filteredProducts.map((product, idx) => (
                  <Link 
                    key={idx} 
                    href={`/products/${slugify(product.title)}`}
                    className="product-catalog-card"
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    <div className="product-card-img-wrapper">
                      {product.imageSrc ? (
                        <Image
                          src={product.imageSrc}
                          alt={product.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 30vw"
                          className="product-card-image"
                          style={{ objectFit: 'contain' }}
                          unoptimized
                        />
                      ) : (
                        <div className="no-image-placeholder">No Image Available</div>
                      )}
                    </div>
                    <div className="product-card-info">
                      <span className="product-card-category">{product.categoryName}</span>
                      <h3 className="product-card-title">{product.title}</h3>
                      <div className="product-card-footer">
                        <span className="product-card-price">
                          {product.price && product.price !== '0' && product.price !== '0.0 INR'
                            ? `Price: ₹${product.price.replace(' INR', '')}`
                            : 'Price on Request'
                          }
                        </span>
                        <button className="btn-view-details">Details</button>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </main>
        </div>
      </section>
    </div>
  );
}
