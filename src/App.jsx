import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } }
}

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } }
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
}

// Navigation Component
function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav 
      className={`nav ${scrolled ? 'nav--scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="nav__container">
        <a href="#" className="nav__logo">ʻILIKŌ SWEET SKIN</a>
        <div className="nav__links">
          <a href="#about">Our Story</a>
          <a href="#services">Services</a>
          <a href="#reviews">Reviews</a>
          <a href="#contact" className="nav__cta">Book Now</a>
        </div>
      </div>
    </motion.nav>
  )
}

// Hero Section
function Hero() {
  return (
    <section className="hero">
      {/* Organic floating shapes */}
      <div className="hero__shapes">
        <div className="hero__shape hero__shape--1"></div>
        <div className="hero__shape hero__shape--2"></div>
        <div className="hero__shape hero__shape--3"></div>
      </div>
      
      {/* Botanical accents */}
      <div className="hero__botanical hero__botanical--1"></div>
      <div className="hero__botanical hero__botanical--2"></div>

      <div className="hero__container">
        <motion.div 
          className="hero__content"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div className="hero__badge" variants={fadeUp}>
            <span>Hilo, Hawaiʻi</span>
          </motion.div>

          <motion.div className="hero__title-wrapper" variants={fadeUp}>
            <h2 className="hero__brand">ʻIlikō Sweet Skin</h2>
            <h1>
              <span className="hero__title-line">Embrace Your</span>
              <span className="hero__title-accent">Natural</span>
              <span className="hero__title-accent hero__title-accent--highlight">Radiance</span>
            </h1>
          </motion.div>

          <motion.p className="hero__subtitle" variants={fadeUp}>
            Artisan body sugaring & bespoke skincare rituals, 
            crafted with intention and aloha spirit
          </motion.p>

          <motion.div className="hero__ctas" variants={fadeUp}>
            <a href="#contact" className="btn btn--primary">
              <span>Book Your Experience</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a href="#services" className="btn btn--text">Explore Services</a>
          </motion.div>

          <motion.div className="hero__stats" variants={fadeUp}>
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

        <motion.div 
          className="hero__gallery"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ delay: 0.4 }}
        >
          <motion.div 
            className="hero__image hero__image--main"
            variants={scaleIn}
            whileHover={{ scale: 1.03, y: -5 }}
          >
            <img src="/images/hero-main.jpg" alt="ʻIlikō Sweet Skin founder in treatment room" />
          </motion.div>
          <motion.div 
            className="hero__image hero__image--secondary"
            variants={fadeUp}
            whileHover={{ scale: 1.03, y: -5 }}
          >
            <img src="/images/hero-secondary.jpg" alt="Preparing treatment bed with care" />
          </motion.div>
          <motion.div 
            className="hero__image hero__image--tertiary"
            variants={fadeUp}
            whileHover={{ scale: 1.03, y: -5 }}
          >
            <img src="/images/hero-tertiary.jpg" alt="Premium skincare products" />
          </motion.div>
          <motion.div 
            className="hero__badge-float"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <span>Women</span>
            <span>Owned</span>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <div className="hero__scroll-line"></div>
        <span>Scroll</span>
      </motion.div>
    </section>
  )
}

// Section Divider
function SectionDivider() {
  return (
    <div className="section-divider">
      <div className="section-divider__line"></div>
      <div className="section-divider__icon"></div>
      <div className="section-divider__line"></div>
    </div>
  )
}

// About Section
function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="about__grid">
          <motion.div 
            className="about__visual"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <img src="/images/about.jpg" alt="Candida at ʻIlikō Sweet Skin" />
          </motion.div>
          <motion.div 
            className="about__content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span className="section-label" variants={fadeUp}>Our Story</motion.span>
            <motion.h2 variants={fadeUp}>A Mother & Daughter <em>Tradition</em></motion.h2>
            <motion.div className="about__text" variants={fadeUp}>
              <p>
                Nestled in the heart of Hilo, ʻIlikō Sweet Skin is more than a spa—it's a sanctuary where Hawaiian traditions meet modern skincare artistry. What began as a mother's passion for natural beauty has blossomed into a family legacy.
              </p>
              <p>
                We specialize in the ancient art of body sugaring, using only organic ingredients that honor both your skin and our ʻāina. Every treatment is infused with genuine aloha spirit, creating moments of transformation that go beyond the surface.
              </p>
            </motion.div>
            <motion.div className="about__signature" variants={fadeUp}>
              <span>With aloha,</span>
              <span className="signature">Candida & Majena</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Services Section
function Services() {
  const services = [
    {
      number: '01',
      title: 'Body Sugaring',
      description: 'Ancient Egyptian hair removal using all-natural sugar paste. Gentler than wax, with lasting smoothness.',
      tags: ['Full Body', 'Brazilian', 'Underarms', 'Legs']
    },
    {
      number: '02',
      title: 'Signature Facials',
      description: 'Customized treatments using premium botanicals to address your skin\'s unique needs and goals.',
      tags: ['Deep Cleansing', 'Anti-Aging', 'Hydration', 'Acne Care']
    },
    {
      number: '03',
      title: 'Skin Treatments',
      description: 'Advanced solutions for concerns like hyperpigmentation, fine lines, and texture refinement.',
      tags: ['Chemical Peels', 'Dermaplaning', 'LED Therapy', 'Microcurrent']
    }
  ]

  return (
    <section id="services" className="section services">
      <div className="container">
        <motion.div 
          className="services__header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.span className="section-label" variants={fadeUp}>Our Services</motion.span>
          <motion.h2 variants={fadeUp}>Rituals of <em>Renewal</em></motion.h2>
          <motion.p variants={fadeUp}>
            Each treatment is thoughtfully designed to restore balance, reveal radiance, and reconnect you with your natural beauty.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="services__grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="service-card"
              variants={fadeUp}
              whileHover={{ y: -10 }}
            >
              <span className="service-card__number">{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="service-card__list">
                {service.tags.map((tag, i) => (
                  <li key={i}>{tag}</li>
                ))}
              </ul>
              <a href="#contact" className="service-card__link">Learn More →</a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// Reviews Section
function Reviews() {
  const reviews = [
    {
      text: "The family business that they provide is amazing. From the first day I met them they were so welcoming and treated you like family. Majena is like my therapy person—not only does she do an amazing job but we talk about everything and laugh.",
      author: "Kahealani M.",
      meta: "Body Sugaring Client • Verified on Vagaro"
    },
    {
      text: "Mumma & daughter team are professional, efficient, & exceeded my expectations. Love the Ohana there, everyone is so friendly and helpful. Every woman should try it at least once.",
      author: "Cyndi M. & Malia A.",
      meta: "Facial & Sugaring Clients • Verified on Vagaro"
    }
  ]

  const [currentReview, setCurrentReview] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length)
    }, 8000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="reviews" className="section reviews">
      <div className="container">
        <motion.div 
          className="reviews__content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.span className="section-label" variants={fadeUp}>Client Love</motion.span>
          <motion.h2 variants={fadeUp}>Words from Our <em>ʻOhana</em></motion.h2>
          
          <motion.div className="review" variants={fadeUp}>
            <div className="review__stars">★★★★★</div>
            <motion.blockquote
              key={currentReview}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              "{reviews[currentReview].text}"
            </motion.blockquote>
            <div className="review__author">
              <span className="review__name">{reviews[currentReview].author}</span>
              <span className="review__meta">{reviews[currentReview].meta}</span>
            </div>
          </motion.div>
          
          <motion.div className="reviews__trust" variants={fadeUp}>
            <span>⭐</span>
            <strong>5.0 Rating</strong>
            <span>•</span>
            <span>Verified reviews from Vagaro</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// Contact Section
function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="contact__grid">
          <motion.div 
            className="contact__content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span className="section-label" variants={fadeUp}>Visit Us</motion.span>
            <motion.h2 variants={fadeUp}>Begin Your <em>Journey</em></motion.h2>
            <motion.p variants={fadeUp}>
              Ready to experience the ʻIlikō difference? Book your appointment today and discover why Hilo's most discerning clients trust us with their skin.
            </motion.p>
            
            <motion.div className="contact__info" variants={fadeUp}>
              <div className="contact__item">
                <div className="contact__icon">📍</div>
                <div>
                  <strong>Location</strong>
                  <p>586 Kanoelehua Ave, Unit 201<br/>Hilo, Hawaiʻi 96720</p>
                </div>
              </div>
              <div className="contact__item">
                <div className="contact__icon">📞</div>
                <div>
                  <strong>Phone</strong>
                  <p><a href="tel:+18084644164">(808) 464-4164</a></p>
                </div>
              </div>
              <div className="contact__item">
                <div className="contact__icon">🕐</div>
                <div>
                  <strong>Hours</strong>
                  <p>Tuesday – Saturday<br/>By appointment</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div className="contact__ctas" variants={fadeUp}>
              <a href="https://www.vagaro.com/ilikosweetskin" target="_blank" rel="noopener noreferrer" className="btn btn--primary">
                <span>Book on Vagaro</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/ilikosweetskinhilo" target="_blank" rel="noopener noreferrer" className="btn btn--outline">Follow on Instagram</a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="contact__visual"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <img src="/images/contact.jpg" alt="ʻIlikō Sweet Skin spa interior" />
            <div className="contact__accent">
              <span>Aloha</span>
              <span style={{ fontSize: '0.9rem', opacity: 0.7 }}>means love</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Footer
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__brand">
            <div className="footer__logo">ʻIlikō Sweet Skin</div>
            <p>Artisan body sugaring & bespoke skincare rituals in Hilo, Hawaiʻi. Women-owned since 2016.</p>
          </div>
          <div className="footer__links">
            <div className="footer__col">
              <h4>Navigate</h4>
              <a href="#about">Our Story</a>
              <a href="#services">Services</a>
              <a href="#reviews">Reviews</a>
              <a href="#contact">Contact</a>
            </div>
            <div className="footer__col">
              <h4>Services</h4>
              <a href="#services">Body Sugaring</a>
              <a href="#services">Facials</a>
              <a href="#services">Skin Treatments</a>
              <a href="#contact">Products</a>
            </div>
            <div className="footer__col">
              <h4>Connect</h4>
              <a href="https://www.instagram.com/ilikosweetskinhilo" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="https://www.vagaro.com/ilikosweetskin" target="_blank" rel="noopener noreferrer">Vagaro</a>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <span>© 2024 ʻIlikō Sweet Skin. All rights reserved.</span>
          <span>Crafted with aloha in Hilo, Hawaiʻi</span>
        </div>
      </div>
    </footer>
  )
}

// Main App Component
function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <SectionDivider />
      <About />
      <Services />
      <Reviews />
      <Contact />
      <Footer />
    </>
  )
}

export default App
