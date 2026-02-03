import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import './App.css';

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

const stagger = {
  visible: {
    transition: { staggerChildren: 0.15 }
  }
};

// Navigation Component
function Navigation({ scrolled }) {
  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <motion.nav 
      className={`nav ${scrolled ? 'nav--scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      <div className="nav__container">
        <a href="#" className="nav__logo">
          <img src="/images/logo.png" alt="ʻIlikō Sweet Skin" />
        </a>
        
        <div className={`nav__links ${menuOpen ? 'nav__links--open' : ''}`}>
          <a href="#about" onClick={() => setMenuOpen(false)}>Our Story</a>
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
          <a href="#reviews" onClick={() => setMenuOpen(false)}>Reviews</a>
          <a href="#contact" className="nav__cta" onClick={() => setMenuOpen(false)}>Book Now</a>
        </div>
        
        <button 
          className={`nav__toggle ${menuOpen ? 'nav__toggle--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
        </button>
      </div>
    </motion.nav>
  );
}

// Floating Organic Shape Component
function OrganicShape({ className, delay = 0 }) {
  return (
    <motion.div 
      className={`organic-shape ${className}`}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.5, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    />
  );
}

// Hero Section - Light, Editorial, Immersive
function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const floatY1 = useTransform(scrollYProgress, [0, 1], ['0%', '-20%']);
  const floatY2 = useTransform(scrollYProgress, [0, 1], ['0%', '-35%']);

  return (
    <section className="hero" ref={ref}>
      {/* Organic Background Shapes */}
      <div className="hero__shapes">
        <motion.div className="hero__shape hero__shape--1" style={{ y: floatY1 }} />
        <motion.div className="hero__shape hero__shape--2" style={{ y: floatY2 }} />
      </div>
      
      <div className="hero__container">
        {/* Left Content */}
        <motion.div className="hero__content" style={{ y: contentY }}>
          <motion.div 
            className="hero__badge"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="hero__badge-line"></span>
            <span>Hilo, Hawaiʻi</span>
          </motion.div>
          
          <div className="hero__title-wrapper">
            <motion.h2
              className="hero__brand"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              ʻIlikō Sweet Skin
            </motion.h2>
            
            <h1>
              <motion.span
                className="hero__title-line"
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                Embrace Your
              </motion.span>
              <motion.span
                className="hero__title-accent"
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.65 }}
              >
                Natural
              </motion.span>
              <motion.span
                className="hero__title-accent hero__title-accent--highlight"
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                Radiance
              </motion.span>
            </h1>
          </div>
          
          <motion.p
            className="hero__subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Artisan body sugaring & bespoke skincare rituals, 
            crafted with intention and aloha spirit
          </motion.p>
          
          <motion.div 
            className="hero__ctas"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <a href="#contact" className="btn btn--primary">
              <span>Book Your Experience</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a href="#services" className="btn btn--text">Explore Services</a>
          </motion.div>
          
          {/* Floating Stats - moved under CTAs for better flow */}
          <motion.div 
            className="hero__stats"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <div className="hero__stat">
              <span className="hero__stat-number">5.0</span>
              <span className="hero__stat-label">★ Rating</span>
            </div>
            <div className="hero__stat-divider"></div>
            <div className="hero__stat">
              <span className="hero__stat-number">500+</span>
              <span className="hero__stat-label">Happy Clients</span>
            </div>
            <div className="hero__stat-divider"></div>
            <div className="hero__stat">
              <span className="hero__stat-number">8+</span>
              <span className="hero__stat-label">Years Experience</span>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Right Image Gallery */}
        <div className="hero__gallery">
          <motion.div 
            className="hero__image hero__image--main"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            style={{ y: imageY, scale: imageScale }}
          >
            <img src="/images/treatment-room.jpg" alt="Serene treatment room" />
          </motion.div>
          
          <motion.div 
            className="hero__image hero__image--secondary"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <img src="/images/neon.jpg" alt="Candida, founder" />
          </motion.div>
          
          <motion.div 
            className="hero__image hero__image--tertiary"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <img src="/images/products.jpg" alt="Premium products" />
          </motion.div>
          
          {/* Women-Owned Badge - repositioned */}
          <motion.div 
            className="hero__badge-float"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.3 }}
          >
            <span>Women</span>
            <span>Owned</span>
          </motion.div>
        </div>
      </div>
      
      {/* Bottom Scroll Indicator */}
      <motion.div 
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
      >
        <div className="hero__scroll-line"></div>
        <span>Scroll</span>
      </motion.div>
    </section>
  );
}

// About Section
function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <motion.div 
          className="about__grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          <motion.div className="about__images" variants={fadeUp}>
            <div className="about__image about__image--main">
              <img src="/images/neon.jpg" alt="Candida, founder of ʻIlikō Sweet Skin" />
            </div>
            <div className="about__image about__image--accent">
              <img src="/images/team.jpg" alt="The ʻIlikō team" />
            </div>
            <div className="about__float-text">
              <span>Women</span>
              <span>Owned</span>
            </div>
          </motion.div>
          
          <motion.div className="about__content" variants={fadeUp}>
            <span className="section-label">Our Story</span>
            <h2>A Legacy of<br /><em>Beauty & Aloha</em></h2>
            <div className="about__text">
              <p>
                Welcome to ʻIlikō Sweet Skin, where beauty meets the warmth of Hawaiian hospitality. 
                Founded by Candida, our intimate spa has blossomed into a mother-daughter sanctuary 
                dedicated to helping every client discover their innate radiance.
              </p>
              <p>
                We specialize in the ancient art of body sugaring—a gentle, effective technique 
                that honors your skin. Combined with our curated facial rituals and lash services, 
                we offer an experience that transcends ordinary beauty treatments.
              </p>
              <p>
                At ʻIlikō, you're not just a client—you're ʻohana. Step into our serene space 
                and leave feeling confident, renewed, and beautifully yourself.
              </p>
            </div>
            <div className="about__signature">
              <span>With aloha,</span>
              <span className="signature">Candida, Majena & Chai</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// Services Section
function Services() {
  const services = [
    {
      category: "Sugaring",
      description: "Ancient hair removal artistry for silky-smooth skin",
      items: ["Brazilian", "Full Legs", "Underarms", "Facial Sugaring", "Full Body"],
      image: "/images/staff-prep.jpg"
    },
    {
      category: "Facials",
      description: "Customized skin rituals for your unique complexion",
      items: ["Signature Facial", "Deep Cleanse", "Anti-Aging Treatment", "Hydrating Ritual", "Acne Care"],
      image: "/images/lobby.jpg"
    },
    {
      category: "Lash & Brow",
      description: "Frame your eyes with natural enhancement",
      items: ["Lash Lift & Tint", "Brow Lamination", "Brow Shaping", "Brow Tinting"],
      image: "/images/products.jpg"
    }
  ];

  return (
    <section className="services section" id="services">
      <div className="services__bg"></div>
      <div className="container">
        <motion.div 
          className="services__header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <span className="section-label">Our Services</span>
          <h2>Rituals for<br /><em>Body & Soul</em></h2>
          <p>Every treatment is a journey toward your most radiant self</p>
        </motion.div>
        
        <motion.div 
          className="services__grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={stagger}
        >
          {services.map((service, index) => (
            <motion.div 
              key={service.category}
              className="service-card"
              variants={fadeUp}
            >
              <div className="service-card__image">
                <img src={service.image} alt={service.category} />
                <div className="service-card__overlay"></div>
              </div>
              <div className="service-card__content">
                <span className="service-card__number">0{index + 1}</span>
                <h3>{service.category}</h3>
                <p>{service.description}</p>
                <ul className="service-card__list">
                  {service.items.map(item => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <a href="#contact" className="service-card__link">
                  <span>View Pricing</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Experience/Gallery Section
function Experience() {
  return (
    <section className="experience section" id="experience">
      <div className="container">
        <motion.div 
          className="experience__header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <span className="section-label">The Experience</span>
          <h2>Your Sanctuary<br /><em>Awaits</em></h2>
        </motion.div>
        
        <motion.div 
          className="experience__grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.div className="experience__item experience__item--large" variants={fadeUp}>
            <img src="/images/treatment-room.jpg" alt="Treatment room" />
            <div className="experience__item-content">
              <h3>Serene Treatment Rooms</h3>
              <p>Designed for total relaxation</p>
            </div>
          </motion.div>
          <motion.div className="experience__item" variants={fadeUp}>
            <img src="/images/lobby.jpg" alt="Welcoming lobby" />
            <div className="experience__item-content">
              <h3>Welcoming Space</h3>
              <p>Feel at home from the moment you arrive</p>
            </div>
          </motion.div>
          <motion.div className="experience__item" variants={fadeUp}>
            <img src="/images/products.jpg" alt="Premium products" />
            <div className="experience__item-content">
              <h3>Premium Products</h3>
              <p>Circadia & curated skincare</p>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="experience__features"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          {[
            { icon: "✦", title: "Gentle Technique", text: "Sugar paste that's kind to sensitive skin" },
            { icon: "✦", title: "Licensed Experts", text: "Highly trained estheticians you can trust" },
            { icon: "✦", title: "Clean & Safe", text: "Meticulous hygiene in every service" },
            { icon: "✦", title: "Personal Touch", text: "Treatments tailored just for you" }
          ].map((feature, i) => (
            <motion.div key={i} className="experience__feature" variants={fadeUp}>
              <span className="experience__feature-icon">{feature.icon}</span>
              <h4>{feature.title}</h4>
              <p>{feature.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Reviews Section
function Reviews() {
  const reviews = [
    {
      text: "The family business that they provide is amazing to me and they make the environment so calm for every client. I love seeing Majena every month—she is like my therapy person. She just makes me feel better about myself.",
      author: "Kahealani M.",
      service: "Monthly Sugaring",
      date: "Sep 2025"
    },
    {
      text: "Iliko Beauty & Sugaring Spa are incredible! Mumma & daughter team are professional, efficient, & exceeded my expectations. Beautiful & lovely inside & out! True description of the 'Aloha Spirit'",
      author: "Cyndi M.",
      service: "Sugaring Treatment",
      date: "Nov 2025"
    },
    {
      text: "Love the Ohana there, everyone is so friendly and helpful. Majena is especially helpful and understanding. Awesome service from all of them. So much Aloha!",
      author: "Malia A.",
      service: "Facial & Sugaring",
      date: "Sep 2025"
    },
    {
      text: "Every woman should try it at least once. Candida is super sweet and professional. My first time having to sugar my face, not bad at all. Feeling smooth and looking clean.",
      author: "Claudine L.",
      service: "Facial Sugaring",
      date: "Oct 2025"
    }
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="reviews section" id="reviews">
      <div className="container">
        <motion.div 
          className="reviews__content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <span className="section-label">Client Love</span>
          <h2>Words from Our <em>ʻOhana</em></h2>
          
          <div className="reviews__carousel">
            <AnimatePresence mode="wait">
              <motion.div 
                key={current}
                className="review"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="review__stars">★★★★★</div>
                <blockquote>"{reviews[current].text}"</blockquote>
                <div className="review__author">
                  <span className="review__name">{reviews[current].author}</span>
                  <span className="review__meta">{reviews[current].service} · {reviews[current].date}</span>
                </div>
              </motion.div>
            </AnimatePresence>
            
            <div className="reviews__dots">
              {reviews.map((_, i) => (
                <button 
                  key={i}
                  className={`reviews__dot ${i === current ? 'reviews__dot--active' : ''}`}
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>
          </div>
          
          <div className="reviews__trust">
            <span>Verified reviews from</span>
            <strong>Vagaro</strong>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Contact/CTA Section
function Contact() {
  return (
    <section className="contact section" id="contact">
      <div className="container">
        <motion.div 
          className="contact__grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.div className="contact__content" variants={fadeUp}>
            <span className="section-label">Visit Us</span>
            <h2>Begin Your<br /><em>Journey</em></h2>
            <p>
              Ready to experience the ʻIlikō difference? Book your appointment today 
              and discover why Hilo's discerning clients trust us with their beauty rituals.
            </p>
            
            <div className="contact__info">
              <div className="contact__item">
                <span className="contact__icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </span>
                <div>
                  <strong>Location</strong>
                  <p>586 Kanoelehua Ave, Unit 201<br />Hilo, HI 96720</p>
                </div>
              </div>
              
              <div className="contact__item">
                <span className="contact__icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </span>
                <div>
                  <strong>Phone</strong>
                  <p><a href="tel:8084644164">(808) 464-4164</a></p>
                </div>
              </div>
              
              <div className="contact__item">
                <span className="contact__icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                </span>
                <div>
                  <strong>Hours</strong>
                  <p>Monday – Saturday: 9am – 6pm<br />Sunday: Closed</p>
                </div>
              </div>
            </div>
            
            <div className="contact__ctas">
              <a 
                href="https://www.vagaro.com/ilikosweetskin" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn--primary btn--large"
              >
                Book on Vagaro
              </a>
              <a 
                href="https://www.instagram.com/ilikosweetskinhilo/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn--outline"
              >
                Follow on Instagram
              </a>
            </div>
          </motion.div>
          
          <motion.div className="contact__visual" variants={fadeUp}>
            <div className="contact__image">
              <img src="/images/team.jpg" alt="The ʻIlikō team" />
            </div>
            <div className="contact__accent">
              <span>We can't wait</span>
              <span>to meet you</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__brand">
            <img src="/images/logo.png" alt="ʻIlikō Sweet Skin" className="footer__logo" />
            <p>Beauty rituals crafted with aloha in the heart of Hilo, Hawaiʻi.</p>
          </div>
          
          <div className="footer__links">
            <div className="footer__col">
              <h4>Navigate</h4>
              <a href="#about">Our Story</a>
              <a href="#services">Services</a>
              <a href="#experience">Experience</a>
              <a href="#reviews">Reviews</a>
            </div>
            <div className="footer__col">
              <h4>Connect</h4>
              <a href="https://www.instagram.com/ilikosweetskinhilo/" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://www.vagaro.com/ilikosweetskin" target="_blank" rel="noopener noreferrer">Book Online</a>
              <a href="tel:8084644164">Call Us</a>
            </div>
          </div>
        </div>
        
        <div className="footer__bottom">
          <p>© 2025 ʻIlikō Sweet Skin. All rights reserved.</p>
          <p className="footer__credit">Crafted with aloha</p>
        </div>
      </div>
    </footer>
  );
}

// Main App
function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="noise-overlay"></div>
      <Navigation scrolled={scrolled} />
      <main>
        <Hero />
        <About />
        <Services />
        <Experience />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
