"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Download, CheckCircle, Star } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import Carousel from "@/components/Carousel";
import productsData from "@/data/products.json";
import "./page.css";

export default function Home() {
  const popularTitles = [
    "Kartar 4000 AC Cabin Combine Harvester",
    "Kartar 4000 Deluxe Model",
    "Kartar 3500 Track Combine Harvester",
    "Kartar Rotavator"
  ];
  let popularProducts = productsData.products.filter(p => popularTitles.includes(p.title));
  if (popularProducts.length < 4) {
    popularProducts = productsData.products.slice(0, 4);
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants: any = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 12 }
    }
  };

  return (
    <div className="home-wrapper">
      <section className="hero-section">
        <div className="hero-bg">
          <Image 
            src="/hero-bg.png" 
            alt="Hero Background" 
            fill 
            className="hero-image"
            style={{ objectFit: 'cover' }}
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="container hero-container">
          <motion.div 
            className="hero-content"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 className="hero-title" variants={itemVariants}>
              Empowering <span className="text-gradient">Agriculture</span>
            </motion.h1>
            <motion.p className="hero-desc" variants={itemVariants}>
              Discover the power and reliability of Kartar Combine Harvesters and Rotavators. 
              Gajanan Traders brings you the best in agricultural machinery with state-of-the-art performance.
            </motion.p>
            <motion.div variants={itemVariants} className="hero-buttons">
              <Link href="#about" className="btn-primary">
                Learn More <ArrowRight size={20} />
              </Link>
            </motion.div>
          </motion.div>
          <motion.div 
            className="hero-carousel-wrapper"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Carousel />
          </motion.div>
        </div>
      </section>

      <section id="popular-products" className="products-section">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Featured Machinery
          </motion.h2>
          <motion.div 
            className="grid-4" 
            style={{marginTop: '40px'}}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {popularProducts.map((prod, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <Link href="/products" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <ProductCard 
                    title={prod.title}
                    imageSrc={prod.imageSrc}
                    hideDescription={true}
                  />
                </Link>
              </motion.div>
            ))}
          </motion.div>
          <motion.div 
            style={{textAlign: 'center', marginTop: '50px'}}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link href="/products" className="btn-primary" style={{ padding: '16px 40px' }}>
              View All Products <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="app-download-section relative overflow-hidden">
        <div className="container app-download-container flex-between" style={{ flexWrap: 'wrap', gap: '40px' }}>
          <motion.div 
            className="app-download-content flex-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="app-download-title">Get Our <span className="text-gradient">Mobile App</span></h2>
            <p className="app-desc" style={{ marginBottom: '30px', fontSize: '1.1rem', color: '#cbd5e1' }}>
              Take Gajanan Traders with you wherever you go. Browse our complete catalog of Harvesters and Rotavators, read specifications, and submit quick inquiries directly from your mobile device.
            </p>
            <ul style={{ listStyle: 'none', marginBottom: '30px' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px', color: '#f8fafc' }}>
                <CheckCircle color="var(--accent-color)" size={20} /> Real-time product availability
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px', color: '#f8fafc' }}>
                <CheckCircle color="var(--accent-color)" size={20} /> Exclusive mobile-only offers
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px', color: '#f8fafc' }}>
                <CheckCircle color="var(--accent-color)" size={20} /> Instant support and inquiries
              </li>
            </ul>
            <div className="download-buttons-group">
              <motion.a 
                href="#" 
                className="google-play-badge"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={24} style={{ marginRight: '10px' }}/>
                <div className="badge-text">
                  <span className="small-text">GET IT ON</span>
                  <span className="large-text">Google Play</span>
                </div>
              </motion.a>
            </div>
          </motion.div>
          {/* Decorative elements could go here */}
        </div>
      </section>

      <section id="about" className="detailed-about-section">
        <div className="container text-center-block">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Star size={48} color="var(--accent-color)" style={{ margin: '0 auto 20px' }} />
            <h3 className="about-subtitle">
              Renowned for providing top-tier agricultural equipment including the Kartar 4000 AC Cabin Combine Harvester, Kartar 4000 Deluxe Model, and Kartar Agriculture Rotavator.
            </h3>
            <p className="about-paragraph">
              Gajanan Traders takes pride in its specialization in selling various agricultural machines and equipment. In 2006, we started the company and have constantly progressed to stand among the top dealers and suppliers. The offered products are of renowned brand, Kartar Agro Industries Private Limited, who has received many awards in the industry. The founder of Kartar has received National Award from President of India in 1989 and again in 2010-11. They have also received Govt. of Indias National Export Award, State Productivity Award from the Govt. of Punjab. Most of the models of our product-line have been tested and approved by BUDNI/Northern Region Farm Machinery Training & Testing Centre, Hissar, and Central Farm Machinery Training & Testing Institute. 
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
