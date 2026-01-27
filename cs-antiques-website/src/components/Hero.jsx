import logo from "../assets/images/logo.png";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <img src={logo} alt="CS Antiques Logo" className="hero-logo" />

        <h1>Bring the Unique Charm of Antiquity to Your Dream Home</h1>

        <p>
          Premium Antique & Reproduction Furniture Since 2019
        </p>

        <div className="hero-actions">
          <a href="#" className="btn-gold">Inquire on WhatsApp</a>
          <a href="#" className="btn-outline">Visit Showroom</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
