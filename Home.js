import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './home.css'; // Ensure your CSS is correctly linked

function Home() {
  return (
    <div className="home-container">
      {/* Top section with a big photo */}
      <div className="home-hero">
        <img
          src="https://th.bing.com/th/id/OIP.L7LfhDSCpG8g8DnheN-bqQHaEA?rs=1&pid=ImgDetMain" // Replace with the actual URL of the hero image
          alt="Cookd Hero"
          className="home-hero-image"
        />
      </div>

      {/* Our Populars heading */}
      <h2 className="home-popular-heading">Our Populars</h2>

      {/* Scrollable section for popular images */}
      <div className="home-populars-scroll">
        <div className="home-popular-item">
          <img src="https://th.bing.com/th/id/OIP.DQOxi_vkOIEtTritrsdD5QHaHa?pid=ImgDet&w=202&h=202&c=7&dpr=1.3" alt="Popular 1" /> {/* Replace with actual URL */}
          <p className="home-popular-description">PIRANDAI CHUTNEY</p>
        </div>
        <div className="home-popular-item">
          <img src="https://th.bing.com/th/id/OIP.uaNvbzhePNSYSE7zYb6cRAAAAA?pid=ImgDet&w=202&h=202&c=7&dpr=1.3" alt="Popular 2" /> {/* Replace with actual URL */}
          <p className="home-popular-description">PEPPER CHICKEN SOUP</p>
        </div>
        <div className="home-popular-item">
          <img src="https://th.bing.com/th/id/OIP.AoLnqisFAjb9qoOBJQ5sdQAAAA?pid=ImgDet&w=202&h=202&c=7&dpr=1.3" alt="Popular 3" /> {/* Replace with actual URL */}
          <p className="home-popular-description">EGG DROP CURRY</p>
        </div>
        <div className="home-popular-item">
          <img src="https://th.bing.com/th/id/OIP.FN7BLsRamtzITkb7RO4izgAAAA?pid=ImgDet&w=202&h=202&c=7&dpr=1.3" alt="Popular 4" /> {/* Replace with actual URL */}
          <p className="home-popular-description">HONEY CHICKEN</p>
        </div>
        <div className="home-popular-item">
          <img src="https://th.bing.com/th/id/OIP.kF4gzWjr-suoDodUPtsAzgHaHa?pid=ImgDet&w=198&h=198&c=7&dpr=1.3" alt="Popular 5" /> {/* Replace with actual URL */}
          <p className="home-popular-description">FRENCH OMLETTLE</p>
        </div>
      </div>

      {/* Video section */}
      <div className="home-video-section">
        <h2 className="home-video-heading">Featured Video</h2>
        <iframe 
          width="560" 
          height="315" 
          src="https://www.youtube.com/embed/kk5ZC1psw_w" // Embed the YouTube video using the extracted video ID
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen>
        </iframe>
      </div>

      
      {/* Footer section */}
      <footer className="home-footer">
        <div className="footer-content">
          <div className="footer-contact">
            <h3>Contact</h3>
            <p>Email: <a href="mailto:support@cookdtv.com">support@cookdtv.com</a></p>
            <p>Address: AWFIS Building, Rajiv Gandhi Salai, OMR, Kandanchavadi, Chennai, Tamil Nadu 600096</p>
          </div>
          <div className="footer-social">
            <h3>Connect</h3>
            <p><a href="https://www.facebook.com/cookdtv">Facebook</a></p>
            <p><a href="https://twitter.com/cookdtv">Twitter</a></p>
            <p><a href="https://www.instagram.com/cookdtv/">Instagram</a></p>
            <p><a href="https://www.linkedin.com/company/cookdtv">LinkedIn</a></p>
          </div>
        </div>
        <div className="footer-message">
          <p>Thank you for visiting Cookd</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;