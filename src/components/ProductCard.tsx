"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Settings } from 'lucide-react';
import './ProductCard.css';

interface ProductCardProps {
  title: string;
  imageSrc: string;
  description?: string;
  hideDescription?: boolean;
}

export default function ProductCard({ title, imageSrc, description, hideDescription = false }: ProductCardProps) {
  return (
    <motion.div 
      className={`product-card ${hideDescription ? 'simple-card' : ''}`}
      whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.08)' }}
      transition={{ duration: 0.3 }}
    >
      <div className="product-image-wrapper">
        <Image 
          src={imageSrc} 
          alt={title} 
          fill 
          className="product-image"
          unoptimized
        />
        <div className="product-overlay">
           <motion.div 
             className="view-icon"
             whileHover={{ rotate: 90 }}
           >
              <Settings size={24} color="#fff" />
           </motion.div>
        </div>
      </div>
      <div className="product-content">
        <h3 className="product-title">{title}</h3>
        {!hideDescription && description && (
          <p className="product-desc">{description}</p>
        )}
        {!hideDescription && (
          <motion.button 
            className="btn-secondary product-btn"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            View Details <ArrowRight size={16} style={{marginLeft: '8px'}} />
          </motion.button>
        )}
      </div>
    </motion.div>
  );
}
