import React, { useState } from "react";
import "./App.css";
import "./css/bootstrap.min.css";
import "./css/style.css";
import "./css/footer.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './css/slider.css'; // Ensure your CSS is imported


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
                  <a className="nav-link" href="#products">
                    Products
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about-us">
                    About us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact-us">
                    Contact us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </section>
  );
};

const BannerSection = ({ onProductClick }) => {
  return (
    <section className="head-section">
      <div className="pt-2 pb-5 container">
        <div className="row d-flex align-items-center">
          <div className="col-md-6 px-3">
            <h1 id="text-style">Find Your Perfect Match</h1>
            <h1 className="text-style2">Explore Our Collection</h1>
            <p>
              Winter Fashion is back with latest styles for this winter. Find
              the sweaters and jacket of your choice and get with 25% discount.
              Offer valid just for 5 days.
            </p>
            <button onClick={onProductClick} type="button" className="btn penguin-btn">
              <i className="fa fa-shopping-cart"></i> BUY NOW
            </button>
          </div>
          <div className="col-md-6 how-img px-5">
            <img
              src={process.env.PUBLIC_URL + "/Images/bannar-profile.png"}
              className="img-fluid"
              alt="Banner"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-slick-arrow`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-slick-arrow`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

const SlideProductsSection = ({ title, products, onProductClick }) => {
  let settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,              // Enable auto-slide
    autoplaySpeed: 3000,         // Auto-slide interval in milliseconds
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow className={'slick-prev'} />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="product-slider">
      <h1 className="product-title-type text-right">{title}</h1>
      <Slider {...settings}>
        {products.map((product, index) => (
          <ProductCard
            key={index}
            image={process.env.PUBLIC_URL + product.image}
            title={product.title}
            description={product.description}
            price={product.price}
            rating={product.rating}
            onClick={() => onProductClick(product)}
          />
        ))}
      </Slider>
    </div>
  );
};

const ProductsSection = ({ title, products, onProductClick }) => {
  return (
    <section id="products" className="container-fluid">
      <h1 className="product-title-type text-right">{title}</h1>
      <div className="row row-cols-1 row-cols-md-6">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            image={process.env.PUBLIC_URL + product.image}
            title={product.title}
            description={product.description}
            price={product.price}
            rating={product.rating}
            onClick={() => onProductClick(product)}
          />
        ))}
      </div>
    </section>
  );
};

// ProductCard Component
const ProductCard = ({ image, title, description, price, rating, onClick }) => (
  <div className="card">
    <img src={image} alt={title} className="card-image" />
    <div className="card-content">
      <div className="title-container">
        <h1 className="product-title">
          {title.length > 18 ? title.substring(0, 18) + "..." : title}
        </h1>
        <p className="price">${price}</p>
      </div>
      <div className="rating-container">
        <span className="stars">
          {[...Array(Math.round(rating ? rating : 1))].map((_, i) => (
            <i key={i} className="fas fa-star"></i>
          ))}
          {[...Array(5 - Math.round(rating ? rating : 1))].map((_, i) => (
            <i
              key={i + Math.round(rating ? rating : 1)}
              className="far fa-star"
            ></i>
          ))}
        </span>
      </div>
      <p className="description">
        {description.length > 50
          ? description.substring(0, 50) + "..."
          : description}{" "}
      </p>
      <div className="p-button">
        <button onClick={onClick}>
          <span>
            <i
              className="fas fa-shopping-cart"
              style={{ marginRight: "8px" }}
            ></i>
            Add to Cart
          </span>
        </button>
      </div>
    </div>
  </div>
);

// InfoSection Component
const InfoSection = () => {
  return (
    <section className="container mt-5 pt-5">
      <div className="pt-2 pb-5 container">
        <div className="row d-flex align-items-center flex-column-reverse flex-lg-row">
          <div className="col-md-6 px-3">
            <div
              className="card mb-3 penguin-card-border shadow"
              style={{ maxWidth: "540px" }}
            >
              <div className="row g-0">
                <div className="col-md-3">
                  <img
                    src={process.env.PUBLIC_URL + "/icon/image 12.png"}
                    className="w-50 penguin-info"
                    alt="Perfect Fit"
                  />
                </div>
                <div className="col-md-9">
                  <div className="card-body">
                    <h5 className="card-title">Find the Perfect Fit</h5>
                    <p className="card-text">
                      Everybody is different, which is why we offer styles for
                      every body.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="card mb-3 penguin-card-border shadow"
              style={{ maxWidth: "540px" }}
            >
              <div className="row g-0">
                <div className="col-md-3">
                  <img
                    src={process.env.PUBLIC_URL + "/icon/image 13.png"}
                    className="w-50 penguin-info"
                    alt="Free Exchanges"
                  />
                </div>
                <div className="col-md-9">
                  <div className="card-body">
                    <h5 className="card-title">Free Exchanges</h5>
                    <p className="card-text">
                      One of the many reasons you can shop with peace of mind.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="card mb-3 penguin-card-border shadow"
              style={{ maxWidth: "540px" }}
            >
              <div className="row g-0">
                <div className="col-md-3">
                  <img
                    src={process.env.PUBLIC_URL + "/icon/image 14.png"}
                    className="w-50 penguin-info"
                    alt="Contact Our Seller"
                  />
                </div>
                <div className="col-md-9">
                  <div className="card-body">
                    <h5 className="card-title">Contact Our Seller</h5>
                    <p className="card-text">
                      They are here to help you. That's quite literally what we
                      pay them for.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 how-img px-5">
            <img
              src={process.env.PUBLIC_URL + "/icon/XMLID 1.png"}
              className="img-fluid"
              alt="Information"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const womanProducts = [
  {
    image: "/Images/woman/woman-jak1.png",
    title: "Yellow Coat Jacket",
    description: "Stylish yellow coat for young and beautiful ladies.",
    price: "3200",
    rating: 4,
  },
  {
    image: "/Images/woman/063A4322-front.webp",
    title: "Ladies Jacket",
    description:
      "Jackets for casual wear in best prices and different color patterns.",
    price: "2500",
    rating: 4,
  },
  {
    image: "/Images/woman/woman-jak3.png",
    title: "Woman Leather Jacket",
    description: "Leather jackets of premium quality.",
    price: "5000",
    rating: 4,
  },
  {
    image: "/Images/woman/fashion-dream-girls-teal-blue-foil-printed-georgette-pack-of-1-dress-product-images-rvs2nflush-0-202302241139.webp",
    title: "Yellow Coat Jacket",
    description: "Stylish yellow coat for young and beautiful ladies.",
    price: "3200",
    rating: 4.5,
  },
  {
    image: "/Images/woman/woman-jak2.png",
    title: "Ladies Jacket",
    description:
      "Jackets for casual wear in best prices and different color patterns.",
    price: "2500",
    rating: 4,
  },
  {
    image: "/Images/woman/woman-jak3.png",
    title: "Woman Leather Jacket",
    description: "Leather jackets of premium quality.",
    price: "5000",
    rating: 3.2,
  },
];

const manProducts = [
  {
    image: "/Images/man/ss-8-white-leaf-8-urbanbox-white-black-original-imagvgf4cuzs2hrw.webp",
    title: "Classic Rounded Front, Aerated ",
    description:
      "Classic Rounded Front, Aerated Mesh Design & Cushioned Impact Sneakers For Women  (Blue, White , 3)",
    price: "3500",
    rating: 3.4,
  },
  {
    image: "/Images/man/man-jak1.png",
    title: "Snowboard Jacket Mens",
    description:
      "Snowboard jacket are perfect match for people in mountain areas or for tourists.",
    price: "3500",
    rating: 5,
  },
  {
    image: "/Images/man/ss-10-8050-black-red-waan-black-red-original-imag5psezyhhwwkps-bb.webp",
    title: "Man Leather Jackets",
    description:
      "Perfect bike riding jacket available with different color and sizes.",
    price: "4500",
    rating: 4,
  },
  {
    image: "/Images/man/ss-8-white-leaf-8-urbanbox-white-black-original-imagvgf4cuzs2hrw.webp",
    title: "Classic Rounded Front, Aerated ",
    description:
      "Classic Rounded Front, Aerated Mesh Design & Cushioned Impact Sneakers For Women  (Blue, White , 3)",
    price: "3500",
    rating: 3,
  },
  {
    image: "/Images/man/man-jak1.png",
    title: "Snowboard Jacket Mens",
    description:
      "Snowboard jacket are perfect match for people in mountain areas or for tourists.",
    price: "3500",
    rating: 5,
  },
  {
    image: "/Images/man/ss-bf58b931-1da6-467b-a3e5-133d1118dbcd1688469529787RedTapeMenWhiteWovenDesignSneakers1.jpg",
    title: "Man Casual Jackets",
    description: "Matte Black Jacket with all sizes available.",
    price: "3000",
    rating: 4,
  },
  {
    image: "/Images/man/ss-ROYCE-2_CG-248_BLK-T.BLU.webp",
    title: "Man Casual Jackets",
    description: "Matte Black Jacket with all sizes available.",
    price: "3000",
    rating: 5,
  },
];

const bestDealsOnAppliances = [
  {
    image: "/Images/best deal/4.webp",
    title: "SleepyHug AirCell Series",
    description:
      "AirCell Series Ortho SpineX Honeycomb Grid Orthopedic UltraSupport 6 inch Single High Resilience (HR) Foam Mattress  (L x W: 75 inch x 36 inch)",
    price: "9500",
    rating: 4,
  },
  {
    image: "/Images/woman/063A4322-front.webp",
    title: "Ladies Jacket",
    description:
      "Jackets for casual wear in best prices and different color patterns.",
    price: "2500",
    rating: 4,
  },
  {
    image: "/Images/man/ss-8-white-leaf-8-urbanbox-white-black-original-imagvgf4cuzs2hrw.webp",
    title: "Classic Rounded Front, Aerated ",
    description:
      "Classic Rounded Front, Aerated Mesh Design & Cushioned Impact Sneakers For Women  (Blue, White , 3)",
    price: "3500",
    rating: 3,
  },
  {
    image: "/Images/best deal/5454.webp",
    title: "Perfect Homes Opus Engineered",
    description:
      "Opus Engineered Wood Queen Box Bed  (Finish Color - American Espresso, Delivery Condition - Knock Down)",
    price: "8500",
    rating: 3,
  },
  {
    image: "/Images/best deal/data_bed-with-storage_clemency-bed-with-box-storage-queen-size-frosty-white-finish_new-logo_1-810x702.jpg",
    title: "Engineered Wood King",
    description:
      "Flipkart Perfect Homes Opus Engineered Wood King Box Bed  (Finish Color - American Espresso, Delivery Condition - Knock Down)",
    price: "8600",
    rating: 4,
  },
  {
    image: "/Images/man/ss-bf58b931-1da6-467b-a3e5-133d1118dbcd1688469529787RedTapeMenWhiteWovenDesignSneakers1.jpg",
    title: "Man Casual Jackets",
    description: "Matte Black Jacket with all sizes available.",
    price: "3000",
    rating: 4,
  },
  {
    image: "/Images/best deal/mobile.webp",
    title: "Realme mobile",
    description:
      "King Perfect Homes Opus Engineered Wood King Box Bed  (Finish Color - American Espresso, Delivery Condition - Knock Down)",
    price: "8600",
    rating: 4,
  },
  {
    image: "/Images/best deal/4.webp",
    title: "SleepyHug AirCell Series",
    description:
      "AirCell Series Ortho SpineX Honeycomb Grid Orthopedic UltraSupport 6 inch Single High Resilience (HR) Foam Mattress  (L x W: 75 inch x 36 inch)",
    price: "9500",
    rating: 5,
  },
  {
    image: "/Images/man/ss-bf58b931-1da6-467b-a3e5-133d1118dbcd1688469529787RedTapeMenWhiteWovenDesignSneakers1.jpg",
    title: "Man Casual Jackets",
    description: "Matte Black Jacket with all sizes available.",
    price: "3000",
    rating: 4,
  },
  {
    image: "/Images/best deal/data_bed-with-storage-mdf_bartha-bed-with-box-storage_flowery-wenge_updated_new-logo_1-1-750x650.jpg",
    title: "Wood King Box Bed",
    description:
      "Perfect Homes Opus Engineered Wood King Box Bed  (Finish Color - American Espresso, Delivery Condition - Knock Down)",
    price: "8600",
    rating: 4,
  },
  {
    image: "/Images/best deal/normal-top-king-6-72-75-aircell-series-ortho-spinex-honeycomb-original-imah2v29pfuefy5g.webp",
    title: "New Wood Box Bed",
    description:
      "King Perfect Homes Opus Engineered Wood King Box Bed  (Finish Color - American Espresso, Delivery Condition - Knock Down)",
    price: "8600",
    rating: 3,
  },
  {
    image: "/Images/best deal/realme-mobiles.jpg",
    title: "Realme mobile",
    description:
      "King Perfect Homes Opus Engineered Wood King Box Bed  (Finish Color - American Espresso, Delivery Condition - Knock Down)",
    price: "8600",
    rating: 4,
  },
]

const shoes = [
  {
    image: "/Images/man/ss-8-white-leaf-8-urbanbox-white-black-original-imagvgf4cuzs2hrw.webp",
    title: "Classic Rounded Front, Aerated ",
    description:
      "Classic Rounded Front, Aerated Mesh Design & Cushioned Impact Sneakers For Women  (Blue, White , 3)",
    price: "3500",
    rating: 4,
  },
];
const electronics = [
  {
    image: "/Images/man/man-jak1.png",
    title: "Snowboard Jacket Mens",
    description:
      "Snowboard jacket are perfect match for people in mountain areas or for tourists.",
    price: "3500",
    rating: 3,
  },
  {
    image: "/Images/man/man-jak3.png",
    title: "Man Leather Jackets",
    description:
      "Perfect bike riding jacket available with different color and sizes.",
    price: "4500",
    rating: 4,
  },
  {
    image: "/Images/man/man-jak2.png",
    title: "Man Casual Jackets",
    description: "Matte Black Jacket with all sizes available.",
    price: "3000",
    rating: 5,
  },
];


const FooterSection = () => (
  <section className="footer" id="contact-us">
    <div className="footer-row">
      <div className="footer-col">
        <h4>Info</h4>
        <ul className="links">
          <li><a href="#">About Us</a></li>
          <li><a href="#">Compressions</a></li>
          <li><a href="#">Customers</a></li>
          <li><a href="#">Service</a></li>
          <li><a href="#">Collection</a></li>
        </ul>
      </div>

      <div className="footer-col">
        <h4>Explore</h4>
        <ul className="links">
          <li><a href="#">Free Designs</a></li>
          <li><a href="#">Latest Designs</a></li>
          <li><a href="#">Themes</a></li>
          <li><a href="#">Popular Designs</a></li>
          <li><a href="#">Art Skills</a></li>
          <li><a href="#">New Uploads</a></li>
        </ul>
      </div>

      <div className="footer-col">
        <h4>Legal</h4>
        <ul className="links">
          <li><a href="#">Customer Agreement</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">GDPR</a></li>
          <li><a href="#">Security</a></li>
          <li><a href="#">Testimonials</a></li>
          <li><a href="#">Media Kit</a></li>
        </ul>
      </div>

      <div className="footer-col">
        <h4>Newsletter</h4>
        <p>
          Subscribe to our newsletter for a weekly dose
          of news, updates, helpful tips, and
          exclusive offers.
        </p>
        <form action="#">
          <input type="text" placeholder="Your email" required />
          <button type="submit">SUBSCRIBE</button>
        </form>
        <div className="icons">
          <i className="fa-brands fa-facebook-f"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-linkedin"></i>
          <i className="fa-brands fa-github"></i>
        </div>
      </div>
    </div>
  </section>
  // <section className="footer-section">
  //   <div className="container pb-5">
  //     <div className="row">
  //       <div id="about-us" className="col-sm pe-5 pt-3">
  //         <img
  //           src={process.env.PUBLIC_URL + "/Images/logo.png"}
  //           alt="Logo"
  //           className="penguin-logo img-fluid"
  //         />
  //         <hr />
  //         <p>
  //           Changing the way you dress will change the way you feel. When you
  //           are well dressed and look good you will automatically feel better.
  //           When you feel good about yourself, you are more likely to feel good
  //           inside, treat others better, and have more energy.
  //         </p>
  //       </div>

  //       <div id="contact-us" className="col-sm pe-5 pt-3">
  //         <h5>Contact us:</h5>
  //         <hr />
  //         <p>
  //           <i className="fa fa-map-marker fa-1x"> </i>Shradha Park, B-37/39
  //           Hingna–Wadi Link Road, Nagpur - 440016.
  //         </p>
  //         <p>
  //           <i className="fa fa-envelope-open"></i>
  //           infosatishhargod@gmail.com
  //         </p>
  //         <p>
  //           <i className="fa fa-phone"></i> +911234567891
  //         </p>
  //       </div>
  //       <div className="col-sm pe-5 pt-3">
  //         <div>
  //           <h5>Get in Touch</h5>
  //           <hr />
  //           <i className="fa fa-facebook-square fa-2x pe-3"> </i>
  //           <i className="fa fa-twitter-square fa-2x pe-3"></i>
  //           <i className="fa fa-linkedin fa-2x pe-3"></i>
  //         </div>
  //         <div className="pt-5">
  //           <h5>Pay with</h5>
  //           <hr />
  //           <img
  //             src={process.env.PUBLIC_URL + "/icon/pay.png"}
  //             className="w-75"
  //             alt="Payment Methods"
  //           />
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // </section>
);

// App Component
function App() {
  // const [selectedTab, setSelectedTab] = useState("woman");
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  // const handleTabChange = (tab) => {
  //   setSelectedTab(tab);
  // };

  return (
    <div className="App">
      <HeaderSection />
      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="3000">
      <img src={process.env.PUBLIC_URL + "/Images/banner/b2.webp"} className={"banner-img d-block w-100"} alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5>Explore Our Collection</h5>
        <h4>Find Your Perfect Match</h4>             
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="3000">
      <img src={process.env.PUBLIC_URL + "/Images/banner/b3.gif"} className={"banner-img d-block w-100"} alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5>Shop Now</h5>
        <h4>Discover Your Next Must-Have</h4>             
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="3000">
      <img src={process.env.PUBLIC_URL + "/Images/banner/b12.jpg"} className={"banner-img d-block w-100"} alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5>Top Products in One Place</h5>
        <h4>Get Ready to Be Amazed</h4>             
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="4000">
      <img src={process.env.PUBLIC_URL + "/Images/banner/b4.webp"} className={"banner-img d-block w-100"} alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5>New Arrivals Are Here</h5>
        <h4>Elevate Your Style</h4>             
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="4000">
      <img src={process.env.PUBLIC_URL + "/Images/banner/b9.jpg"} className={"banner-img d-block w-100"} alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5>Best Sellers and New Trends</h5>
        <h4>Your Shopping Destination</h4>             
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
   
    <div className="carousel-item" data-bs-interval="4000">
      <img src={process.env.PUBLIC_URL + "/Images/banner/b5.jpg"} className={"banner-img d-block w-100"} alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5>Shop the Latest Trends</h5>
        <h4>Upgrade Your Lifestyle</h4>             
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
  </div>
</div>

{/* marquee */}
<div class="marquee">
        <div class="marquee-content">
            <p>Exclusive Offer! Get 20% off on all items. | New Arrivals! Check out our latest collection. | Limited Time Only! Free shipping on orders over $50.</p>
        </div>
    </div>

      {/* <BannerCarousel/> */}
      {/* <BannerSection onProductClick={openPopup} /> */}
      <SlideProductsSection
        title="Best Deals On Appliances"
        products={bestDealsOnAppliances}
        onProductClick={openPopup}
      />
      {/* <ProductsSection
        title="Best Deals On Appliances"
        products={bestDealsOnAppliances}
        onProductClick={openPopup}
      /> */}
      <SlideProductsSection
        title="Woman"
        products={womanProducts}
        onProductClick={openPopup}
      />
      <SlideProductsSection
        title="Man"
        products={manProducts}
        onProductClick={openPopup}
      />
      {/* <ProductsSection
        title="Man Shoes"
        products={shoes}
        onProductClick={openPopup}
      /> */}
      <div className="info-section">
        <InfoSection />
      </div>
      <div className="footer-section">
        <FooterSection />
      </div>
      <div className="copy-right-footer">
        <span className="text-center">
          © Winter Fashion {new Date().getFullYear()}, all rights reserved by
          Satish Hargod
        </span>
      </div>
      {isPopupOpen && (
        <div className="popup-overlay">
          <button className="pop-close-button" onClick={closePopup}>
            ×
          </button>
          <div className="coming-soon">
            {/* <h1 className="comming-soon">COMING SOON!</h1> */}
            <div className="wrapper ten">
              <div>
                <h3 className="bounce">
                  <span>C</span>
                  <span>O</span>
                  <span>M</span>
                  <span>I</span>
                  <span>N</span>
                  <span>G</span>
                  <span>&nbsp;</span>
                  <span>S</span>
                  <span>O</span>
                  <span>O</span>
                  <span>N</span>
                </h3>
              </div>
            </div>
            <form action="">
              <input id="form-email" name="form-email" type="email" placeholder="Your email address" />
              <input type="submit" value="Notify me" />
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
