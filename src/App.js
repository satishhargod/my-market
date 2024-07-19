import React from 'react';
import './App.css';
import './css/bootstrap.min.css'
import './css/style.css'

const ProductsSection = ({title, products}) => {
  return (
    <section id="products" className="container mt-5">
    <h1>{title}</h1>
    <div className="row row-cols-1 row-cols-md-3 g-4 mt-3">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          image={process.env.PUBLIC_URL + product.image}
          title={product.title}
          description={product.description}
          price={product.price}
        />
      ))}
    </div>
  </section>
  );
};

const HeaderSection = () => {
  return (
    <section className="head-section">
      <header className="container">
        <nav className="navbar navbar-expand-lg navbar-light penguin-navbar">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img
                src={process.env.PUBLIC_URL + "/Images/logo.png"}
                alt="Logo"
                className="penguin-logo img-fluid"
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarNav"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#products">Products</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about-us">About us</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact-us">Contact us</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </section>
  );
};


const BannerSection = () => {
  return (<section className="head-section">
    <div className="pt-2 pb-5 container">
      <div className="row d-flex align-items-center">
        <div className="col-md-6 px-3">
          <h1 id="text-style">Buy the Sweaters</h1>
          <h1 className="text-style2">for Winter</h1>
          <p>
            Winter Fashion is back with latest styles for this winter. Find
            the sweaters and jacket of your choice and get with 25%
            discount. Offer valid just for 5 days.
          </p>
          <button type="button" className="btn penguin-btn">
            <i className="fa fa-shopping-cart"></i> BUY NOW
          </button>
        </div>
        <div className="col-md-6 how-img px-5">
          <img src={process.env.PUBLIC_URL +"/Images/bannar-profile.png"} className="img-fluid" alt="Banner" />
        </div>
      </div>
    </div>
  </section>)
}

// ProductCard Component
const ProductCard = ({ image, title, description, price }) => (
  <div className="col">
    <div className="card h-100 penguin-card-border shadow rounded">
      <img src={image} className="card-img-top penguin-card-img w-75" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
      <div className="card-footer d-flex justify-content-between align-items-center penguin-card-footer">
        <div>
          <h3 className="price-text-style">{price}</h3>
        </div>
        <div>
          <button type="button" className="btn penguin-btn">
            <i className="fa fa-shopping-cart"></i> BUY NOW
          </button>
        </div>
      </div>
    </div>
  </div>
);



// InfoSection Component
const InfoSection = () => {
  return (<section className="container mt-5 pt-5">
    <div className="pt-2 pb-5 container">
      <div className="row d-flex align-items-center flex-column-reverse flex-lg-row">
        <div className="col-md-6 px-3">
          <div className="card mb-3 penguin-card-border shadow" style={{ maxWidth: '540px' }}>
            <div className="row g-0">
              <div className="col-md-3">
                <img src={process.env.PUBLIC_URL +"/icon/image 12.png"} className="w-50 penguin-info" alt="Perfect Fit" />
              </div>
              <div className="col-md-9">
                <div className="card-body">
                  <h5 className="card-title">Find the Perfect Fit</h5>
                  <p className="card-text">Everybody is different, which is why we offer styles for every body.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="card mb-3 penguin-card-border shadow" style={{ maxWidth: '540px' }}>
            <div className="row g-0">
              <div className="col-md-3">
                <img src={process.env.PUBLIC_URL +"/icon/image 13.png"} className="w-50 penguin-info" alt="Free Exchanges" />
              </div>
              <div className="col-md-9">
                <div className="card-body">
                  <h5 className="card-title">Free Exchanges</h5>
                  <p className="card-text">One of the many reasons you can shop with peace of mind.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="card mb-3 penguin-card-border shadow" style={{ maxWidth: '540px' }}>
            <div className="row g-0">
              <div className="col-md-3">
                <img src={process.env.PUBLIC_URL +"./public/icon/image 14.png"} className="w-50 penguin-info" alt="Contact Our Seller" />
              </div>
              <div className="col-md-9">
                <div className="card-body">
                  <h5 className="card-title">Contact Our Seller</h5>
                  <p className="card-text">They are here to help you. That's quite literally what we pay them for.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 how-img px-5">
          <img src={process.env.PUBLIC_URL +"/icon/XMLID 1.png"} className="img-fluid" alt="Information" />
        </div>
      </div>
    </div>
  </section>)
}

const womanProducts = [
  {
    image: '/Images/woman/woman-jak1.png',
    title: 'Yellow Coat Jacket',
    description: 'Stylish yellow coat for young and beautiful ladies.',
    price: '3200Rs',
  },
  {
    image: '/Images/woman/woman-jak2.png',
    title: 'Ladies Jacket',
    description: 'Jackets for casual wear in best prices and different color patterns.',
    price: '2500Rs',
  },
  {
    image: '/Images/woman/woman-jak3.png',
    title: 'Woman Leather Jacket',
    description: 'Leather jackets of premium quality.',
    price: '5000Rs',
  },
];

const manProducts = [
  {
    image: '/Images/man/man-jak1.png',
    title: 'Snowboard Jacket Mens',
    description: 'Snowboard jacket are perfect match for people in mountain areas or for tourists.',
    price: '3500Rs',
  },
  {
    image: '/Images/man/man-jak3.png',
    title: 'Man Leather Jackets',
    description: 'Perfect bike riding jacket available with different color and sizes.',
    price: '4500Rs',
  },
  {
    image: '/Images/man/man-jak2.png',
    title: 'Man Casual Jackets',
    description: 'Matte Black Jacket with all sizes available.',
    price: '3000Rs',
  },
];


const FooterSection = () => (
  <section className="footer-section">
    <div className="container pb-5">
      <div className="row">
        {/* About Us Section */}
        <div id="about-us" className="col-sm pe-5 pt-3">
          <img src={process.env.PUBLIC_URL +"/Images/logo.png"} alt="Logo" className="penguin-logo img-fluid" />
          <hr />
          <p>
            Changing the way you dress will change the way you feel. When you
            are well dressed and look good you will automatically feel better.
            When you feel good about yourself, you are more likely to feel
            good inside, treat others better, and have more energy.
          </p>
        </div>

        {/* Contact Us Section */}
        <div id="contact-us" className="col-sm pe-5 pt-3">
          <h5>Contact us:</h5>
          <hr />
          <p>
            <i className="fa fa-map-marker fa-1x"> </i>Shradha Park, B-37/39
            Hingna–Wadi Link Road, Nagpur - 440016.
          </p>
          <p>
            <i className="fa fa-envelope-open"></i>
            vaibhav.mathane.cse@ghrietn.raisoni.net
          </p>
          <p><i className="fa fa-phone"></i> +911234567891</p>
        </div>

        {/* Get in Touch and Payment Section */}
        <div className="col-sm pe-5 pt-3">
          <div>
            <h5>Get in Touch</h5>
            <hr />
            <i className="fa fa-facebook-square fa-2x pe-3"> </i>
            <i className="fa fa-twitter-square fa-2x pe-3"></i>
            <i className="fa fa-linkedin fa-2x pe-3"></i>
          </div>
          <div className="pt-5">
            <h5>Pay with</h5>
            <hr />
            <img src={process.env.PUBLIC_URL + "icon/pay.png"} className="w-75" alt="Payment Methods" />
          </div>
        </div>
      </div>
    </div>

    {/* Footer Note */}
    <footer>
      <hr />
      <p className="text-center">
        © Winter Fashion 2021, all rights reserved by Satish Hargod
      </p>
    </footer>
  </section>
);

// App Component
function App() {
  return (
    
    <div className="App">
    <HeaderSection/>
    <BannerSection />
    <ProductsSection title="Woman Jacket" products={womanProducts} />
    <ProductsSection title="Man Jacket" products={manProducts} />
    <InfoSection />
    <FooterSection /> 
        
    </div>
  );
}

export default App;