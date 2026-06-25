import Image from 'next/image';
import './ProductCard.css';

interface ProductCardProps {
  title: string;
  imageSrc: string;
  description?: string;
  hideDescription?: boolean;
}

export default function ProductCard({ title, imageSrc, description, hideDescription = false }: ProductCardProps) {
  return (
    <div className={`product-card ${hideDescription ? 'simple-card' : ''}`}>
      <div className="product-image-wrapper">
        <Image 
          src={imageSrc} 
          alt={title} 
          fill 
          className="product-image"
          unoptimized
        />
      </div>
      <div className="product-content">
        <h3 className="product-title">{title}</h3>
        {!hideDescription && description && (
          <p className="product-desc">{description}</p>
        )}
        {!hideDescription && (
          <button className="btn-secondary product-btn">View Details</button>
        )}
      </div>
    </div>
  );
}
