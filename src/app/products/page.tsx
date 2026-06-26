"use client";

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Filter, Tractor } from 'lucide-react';
import productsData from '@/data/products.json';
import './page.css';

function slugify(text: string) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categoriesList = useMemo(() => {
    return [
      { id: 'all', name: 'All Categories' },
      ...productsData.categories
    ];
  }, []);

  const filteredProducts = useMemo(() => {
    return productsData.products.filter(product => {
      const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
      const titleLower = product.title.toLowerCase();
      const queryLower = searchQuery.toLowerCase();
      
      let matchesSearch = titleLower.includes(queryLower);
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
      <section className="products-hero">
        <div className="container">
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Our <span className="text-gradient">Agricultural Equipment</span>
          </motion.h1>
          <motion.p 
            className="hero-desc"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Explore our comprehensive range of high-efficiency combine harvesters and rotavators.
          </motion.p>
        </div>
      </section>

      <section className="catalog-section">
        <div className="container catalog-container">
          <aside className="catalog-sidebar">
            <div className="search-box-wrapper">
              <Search className="search-icon" size={20} />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery('')} className="clear-search">
                  <X size={16} />
                </button>
              )}
            </div>

            <div className="category-list-wrapper">
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Filter size={18} /> Categories</h3>
              <ul className="category-list">
                {categoriesList.map(cat => (
                  <li key={cat.id}>
                    <button
                      onClick={() => setActiveCategory(cat.id)}
                      className={`category-btn ${activeCategory === cat.id ? 'active' : ''}`}
                    >
                      <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        {cat.id !== 'all' && <Tractor size={16} />}
                        {cat.name}
                      </span>
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

          <main className="catalog-content">
            <div className="catalog-header-info">
              <h2>{categoriesList.find(c => c.id === activeCategory)?.name}</h2>
              <p>Showing {filteredProducts.length} products</p>
            </div>

            {filteredProducts.length === 0 ? (
              <motion.div 
                className="no-products-found"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <p>No products match your criteria. Try searching for something else!</p>
                <button 
                  onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}
                  className="btn-primary"
                  style={{ marginTop: '15px' }}
                >
                  Reset Filters
                </button>
              </motion.div>
            ) : (
              <motion.div layout className="products-grid">
                <AnimatePresence>
                  {filteredProducts.map((product, idx) => (
                    <motion.div
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                      key={product.title}
                    >
                      <Link 
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
                            <span className="btn-view-details">Details</span>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            )}
          </main>
        </div>
      </section>
    </div>
  );
}
