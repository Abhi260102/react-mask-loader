import React from 'react';
import './styles/index.css';
type LoaderProps = {
  image?: string;
  alt?: string;
  classImage?:string
};
const Loader: React.FC<LoaderProps> = ({ image, alt = 'Loading...',classImage='' }) => {
  return (<>

    <div className="custom-loader-overlay">
      <div className="logo_container_loader">
        <img
          src={image || ''}
          className={`logo-img-loader ${classImage}`}
          alt={alt || 'Loading...'}
          
        />
        <div className="shimmer-mask"
          style={{
            maskImage: `url(${image})`,
            WebkitMaskImage: `url(${image})`
          }}
        />
      </div>
    </div>

  </>)
};

export default Loader;
