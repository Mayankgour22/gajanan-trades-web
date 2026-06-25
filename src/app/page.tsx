import Image from "next/image";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import Carousel from "@/components/Carousel";
import productsData from "@/data/products.json";
import "./page.css";

export default function Home() {
  const popularTitles = [
    "Kartar 4000 Dlx Combine Harvester With AC Cabin",
    "Kartar Agriculture Rotavator",
    "Agricultural Wheel Hay Rake Machine",
    "Kartar Super Seeder Machine"
  ];
  let popularProducts = productsData.products.filter(p => popularTitles.includes(p.title));
  if (popularProducts.length < 4) {
    // fallback to first 4 products if matching failed
    popularProducts = productsData.products.slice(0, 4);
  }

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
        </div>
        <div className="container hero-container">
          <div className="hero-content">
            <h1 className="hero-title">Empowering <span>Agriculture</span></h1>
            <p className="hero-desc">
              Discover the power and reliability of Kartar Combine Harvesters and Rotavators. 
              Gajanan Traders brings you the best in agricultural machinery.
            </p>
            <a href="#about" className="btn-primary">Learn More</a>
          </div>
          <div className="hero-carousel-wrapper">
            <Carousel />
          </div>
        </div>
      </section>

      <section id="popular-products" className="products-section">
        <div className="container">
          <h2 className="section-title text-left" style={{textAlign: 'left'}}>Most Popular Products</h2>
          <div className="grid-4" style={{marginTop: '30px'}}>
            {popularProducts.map((prod, idx) => (
              <Link href="/products" key={idx} style={{ textDecoration: 'none', color: 'inherit' }}>
                <ProductCard 
                  title={prod.title}
                  imageSrc={prod.imageSrc}
                  hideDescription={true}
                />
              </Link>
            ))}
          </div>
          <div style={{textAlign: 'center', marginTop: '40px'}}>
            <Link href="/products" className="btn-primary">
              View All 60 Products & Specifications
            </Link>
          </div>
        </div>
      </section>

      <section className="app-download-section">
        <div className="container app-download-container">
          <div className="app-download-content">
            <h2 className="app-download-title">Get Our <span>Mobile Application</span></h2>
            <p className="app-desc">
              Take Gajanan Traders with you wherever you go. Browse our complete catalog of Harvesters, Rotavators, and Tyres, read specifications, and submit quick inquiries directly from your mobile device.
            </p>
            <div className="download-buttons-group">
              <a href="#" className="google-play-badge">
                <span className="play-store-icon">&#9654;</span>
                <div className="badge-text">
                  <span className="small-text">GET IT ON</span>
                  <span className="large-text">Google Play</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="detailed-about-section">
        <div className="container text-center-block">
          <h3 className="about-subtitle">
            Renowned for providing several agricultural equipment like Kartar 360 TAF Combine Harvester, Kartar 4000 Maize Combine Harvester, Kartar Agriculture Rotavator, Kartar 4000 Deluxe Combine Harvester, Kartar 4000 SV Combine Harvester, and more.
          </h3>
          <p className="about-paragraph">
            Gajanan Traders takes pride in its specialization in selling various agricultural machines and equipment. In 2006, we started the company and have constantly progressed to stand among the top dealers and suppliers. We supply Kartar 4000 Deluxe Combine Harvester, Kartar 4000 SV Combine Harvester, Kartar 360 TAF Combine Harvester, Kartar 4000 Maize Combine Harvester, Kartar Agriculture Rotavator, and many other products. The offered products are of renowned brand, Kartar Agro Industries Private Limited, who has received many awards in the industry. The founder of Kartar has received National Award from President of India in 1989 and again in 2010-11. They have also received Govt. of Indias National Export Award, State Productivity Award from the Govt. of Punjab. Most of the models of our product-line have been tested and approved by BUDNI/Northern Region Farm Machinery Training & Testing Centre, Hissar, and Central Farm Machinery Training & Testing Institute. The products of Kartar have also been approved by the National Bank for Agricultural and Rural Development (NABARD) and Department of Agriculture & Cooperation, Ministry of Agriculture, Govt. of India. Furthermore, we render Rotavator Spares Repair, and Maintenance Services as a service provider.
          </p>
        </div>
      </section>
    </div>
  );
}
