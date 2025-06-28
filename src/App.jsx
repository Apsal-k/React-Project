import { useState } from 'react'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const navItems = [
    { id: 'home', label: 'Home', icon: '' },
    { id: 'about', label: 'About Us', icon: '' },
    { id: 'services', label: 'Service', icon: '' },
    { id: 'blog', label: 'Blog', icon: '' },
    { id: 'contact', label: 'Contact', icon: '' }
  ]

  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return (
          <>
            <section
              className="content-section home-section"
              style={{
          backgroundImage: 'url("https://media.istockphoto.com/id/1537255193/photo/asian-people-working-and-discussion-on-whiteboard-in-office.jpg?s=612x612&w=0&k=20&c=zKQrO0PHD6Yh6xyiqXMFxDswNRQSE2wVKmSEqFazenY=")',
              }}
            >
              <div className="home-content-wrapper">
          <div className="home-text-content-overlay">
            <p className="home-subtitle" style={{color:"yellow"}}>We Are Expert In This Field</p>
            <h1 className="home-title" style={{color:'blue'}}>Business Consulting All Solutions</h1>
            <p className="home-description" style={{color:'blue'}}>
              Apexa helps you to convert your data into a strategic asset and get business insights. 
              Apexa helps you to convert your data into a strategic asset and get business insights.
            </p>
            <div className="home-cta-container">
              <button
                className="cta-button home-btn"
                onClick={() => setActiveSection('about')}
              >
                Read More <span className="btn-arrow">→</span>
              </button>
            </div>
          </div>
              </div>
            </section>

            <section className="partnership-section">
              <div className="container">
          <h2>Our Trusted Partners</h2>
          <div className="partners-grid">
            <div className="partner-logo">
              <img src="https://cdn-icons-png.flaticon.com/512/5968/5968776.png" alt="DOORDASH" style={{width: 32, height: 32}} />
              <p>DOORDASH</p>
            </div>
            <div className="partner-logo">
              <img src="https://cdn-icons-png.flaticon.com/512/5968/5968705.png" alt="CENTRIC" style={{width: 32, height: 32}} />
              <p>CENTRIC</p>
            </div>
            <div className="partner-logo">
              <img src="https://cdn-icons-png.flaticon.com/512/5968/5968892.png" alt="Discord" style={{width: 32, height: 32}} />
              <p>Discord</p>
            </div>
            <div className="partner-logo">
              <img src="https://cdn-icons-png.flaticon.com/512/2111/2111320.png" alt="airbnb" style={{width: 32, height: 32}} />
              <p>airbnb</p>
            </div>
            <div className="partner-logo">
              <img src="https://cdn-icons-png.flaticon.com/512/5968/5968703.png" alt="Norton" style={{width: 32, height: 32}} />
              <p>Norton</p>
            </div>
            <div className="partner-logo">
              <img src="https://cdn-icons-png.flaticon.com/512/616/616494.png" alt="Naturewave" style={{width: 32, height: 32}} />
              <p>Naturewave</p>
            </div>
          </div>
              </div>
            </section>

            <section className="home-about-section">
              <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <h2>Simply Known About Apexa</h2>
              <p>Apexa is a leading business consulting firm dedicated to transforming organizations through innovative data-driven solutions. With over 10 years of experience, we have helped countless businesses unlock their potential and achieve sustainable growth.</p>
              <p>Our team of expert consultants brings deep industry knowledge and cutting-edge methodologies to deliver exceptional results for our clients.</p>
              <button className="learn-more-btn" onClick={() => setActiveSection('about')}>
                Learn More About Us
              </button>
            </div>
            <div className="about-image">
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="About Apexa" />
            </div>
          </div>
              </div>
            </section>

            <section className="offers-section">
              <div className="container">
          <h2>What We Offer</h2>
          <div className="offers-grid">
            <div className="offer-card">
              <div className="offer-icon" role="img" aria-label="Data Analytics">
                <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Data Analytics" style={{width: 32, height: 32}} />
              </div>
              <h3>Data Analytics</h3>
              <p>Transform your raw data into actionable business insights with our advanced analytics solutions.</p>
            </div>
            <div className="offer-card">
              <div className="offer-icon" role="img" aria-label="Strategic Consulting">
                <img src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png" alt="Strategic Consulting" style={{width: 32, height: 32}} />
              </div>
              <h3>Strategic Consulting</h3>
              <p>Develop comprehensive business strategies that drive growth and competitive advantage.</p>
            </div>
            <div className="offer-card">
              <div className="offer-icon" role="img" aria-label="Digital Transformation">
                <img src="https://cdn-icons-png.flaticon.com/512/2721/2721297.png" alt="Digital Transformation" style={{width: 32, height: 32}} />
              </div>
              <h3>Digital Transformation</h3>
              <p>Modernize your business processes with cutting-edge digital solutions and technologies.</p>
            </div>
            <div className="offer-card">
              <div className="offer-icon" role="img" aria-label="Process Optimization">
                <img src="https://cdn-icons-png.flaticon.com/512/1828/1828919.png" alt="Process Optimization" style={{width: 32, height: 32}} />
              </div>
              <h3>Process Optimization</h3>
              <p>Streamline operations and improve efficiency through intelligent process automation.</p>
            </div>
          </div>
              </div>
            </section>

            <section className="achievements-section">
              <div className="container">
          <h2>Our Achievements</h2>
          <div className="achievements-grid">
            <div className="achievement-card">
              <div className="achievement-number">500+</div>
              <div className="achievement-label">Projects Completed</div>
            </div>
            <div className="achievement-card">
              <div className="achievement-number">150+</div>
              <div className="achievement-label">Happy Clients</div>
            </div>
            <div className="achievement-card">
              <div className="achievement-number">10+</div>
              <div className="achievement-label">Years Experience</div>
            </div>
            <div className="achievement-card">
              <div className="achievement-number">25+</div>
              <div className="achievement-label">Expert Team Members</div>
            </div>
          </div>
              </div>
            </section>

            <section className="projects-section">
              <div className="container">
                <h2>Our Latest Projects</h2>
                <p className="projects-subtitle">Explore some of our successful client projects and case studies</p>
                <div className="projects-grid">
                  <div className="project-card">
                    <div className="project-image">
                      <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="E-commerce Analytics" />
                    </div>
                    <div className="project-content">
                      <h3>E-commerce Analytics Platform</h3>
                      <p>Developed a comprehensive analytics dashboard for a major retail client, increasing their sales insights by 300%.</p>
                      <div className="project-tags">
                        <span className="tag">Data Analytics</span>
                        <span className="tag">Dashboard</span>
                        <span className="tag">E-commerce</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="project-card">
                    <div className="project-image">
                      <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Financial Management" />
                    </div>
                    <div className="project-content">
                      <h3>Financial Management System</h3>
                      <p>Built a complete financial management solution that streamlined operations for a Fortune 500 company.</p>
                      <div className="project-tags">
                        <span className="tag">FinTech</span>
                        <span className="tag">Enterprise</span>
                        <span className="tag">Automation</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="project-card">
                    <div className="project-image">
                      <img src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Mobile App Development" />
                    </div>
                    <div className="project-content">
                      <h3>Healthcare Mobile App</h3>
                      <p>Created a patient management mobile application used by over 10,000 healthcare professionals daily.</p>
                      <div className="project-tags">
                        <span className="tag">Mobile App</span>
                        <span className="tag">Healthcare</span>
                        <span className="tag">React Native</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        )
      case 'about':
        return (
          <section
            className="content-section page-section"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80")',
            }}
          >
            <div className="page-content-wrapper">
              <div className="page-text-content-overlay">
          <p className="page-subtitle" style={{color:"yellow"}}>Learn About Our Company</p>
          <h1 className="page-title" style={{color:'white'}}>About Us</h1>
          <p className="page-description" style={{color:'white'}}>
            Learn more about our company, mission, and values. We are dedicated to providing innovative solutions.
          </p>
          <div className="about-content">
            <h2 style={{color:'#FFD600'}}>Our Mission</h2>
            <p style={{color:'white'}}>To deliver exceptional value through innovative technology solutions.</p>
            <h2 style={{color:'#FFD600'}}>Our Team</h2>
            <p style={{color:'white'}}>A dedicated group of professionals committed to excellence.</p>
          </div>
              </div>
            </div>
          </section>
        )
      case 'services':
        return (
          <section
            className="content-section page-section"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80")',
            }}
          >
            <div className="page-content-wrapper">
              <div className="page-text-content-overlay">
                <p className="page-subtitle" style={{color:"yellow"}}>What We Offer</p>
                <h1 className="page-title" style={{color:'white'}}>Our Services</h1>
                <div className="services-grid">
                  <div className="service-card-overlay">
                    <h3>Web Development</h3>
                    <p style={{color:"white"}}>Custom web solutions tailored to your needs.</p>
                  </div>
                  <div className="service-card-overlay">
                    <h3>Mobile Apps</h3>
                    <p style={{color:"white"}}>Native and cross-platform mobile applications.</p>
                  </div>
                  <div className="service-card-overlay">
                    <h3>Consulting</h3>
                    <p style={{color:"white"}}>Expert guidance for your technology initiatives.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )
      case 'contact':
        return (
          <section
            className="content-section page-section"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80")',
            }}
          >
            <div className="page-content-wrapper">
              <div className="page-text-content-overlay">
                <p className="page-subtitle" style={{color:"yellow"}}>Get In Touch</p>
                <h1 className="page-title" style={{color:'white'}}>Contact Us</h1>
                <p className="page-description" style={{color:'white'}}>
                  Get in touch with our team for any inquiries. We're here to help you with all your business needs.
                </p>
                <div className="contact-content">
                  <div className="contact-details-overlay">
                    <h3 style={{color:'#FFD600'}}>Contact Information</h3>
                    <p><strong>Email:</strong> info@apexa.com</p>
                    <p><strong>Phone:</strong> +123 9898 500</p>
                    <p><strong>Address:</strong> 256 Avenue, Mark Street, NewYork City</p>
                    <p><strong>Hours:</strong> Mon-Fri: 10:00am - 09:00pm</p>
                  </div>
                  <form className="contact-form-overlay">
                    <input type="text" placeholder="Your Name" />
                    <input type="email" placeholder="Your Email" />
                    <textarea placeholder="Your Message" rows="4"></textarea>
                    <button type="submit" className="submit-btn">Send Message</button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        )
      case 'blog':
        return (
          <section
            className="content-section page-section"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80")',
            }}
          >
            <div className="page-content-wrapper">
              <div className="page-text-content-overlay">
                <p className="page-subtitle" style={{color:"yellow"}}>Latest Updates</p>
                <h1 className="page-title" style={{color:'white'}}>Our Blog</h1>
                <p className="page-description" style={{color:'white'}}>
                  Stay updated with the latest technology trends and insights.
                </p>
                <div className="blog-grid">
                  <article className="blog-card-overlay">
                    <h3>The Future of Web Development</h3>
                    <p style={{color:"white"}}>Exploring emerging technologies that will shape the web...</p>
                    <span className="blog-date">December 10, 2024</span>
                  </article>
                  <article className="blog-card-overlay">
                    <h3>AI in Modern Applications</h3>
                    <p style={{color:"white"}}>How artificial intelligence is transforming user experiences...</p>
                    <span className="blog-date">December 5, 2024</span>
                  </article>
                </div>
              </div>
            </div>
          </section>
        )
      default:
        return <div>Page not found</div>
    }
  }

  return (
    <div className="app">
      <nav className="navbar-1" style={{ border: '1px solid black' }}>
        <div className="contact-details-nav" style={{ display: 'flex', justifyContent: 'flex-end', gap: '2rem' }}>
          <div className="contact-item">
            <span>📞 +123 9898 500</span>
          </div>
          <div className="contact-item">
            <span>📍 256 Avenue, Mark Street, NewYork City</span>
          </div>
        </div>
        <div className="contact-item" style={{ display: 'flex', gap: '2rem' }}>
          <span>📧 info@apexa.com</span>
          <span>🕒 Mon-Fri: 10:00am - 09:00pm</span>
        </div>
      </nav>
      <nav className="navbar">
        <div className="nav-brand">
          <h2>Apexa</h2>
        </div>
        
        <ul className="nav-menu">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                className={activeSection === item.id ? 'nav-link active' : 'nav-link'}
                onClick={() => setActiveSection(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="nav-controls">
          <div className="search-container">
            <input type="text" placeholder="Search..." className="search-input" />
            <button className="search-btn">🔍</button>
          </div>
          <button
            className="toggle-btn"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            ☰
          </button>
        </div>
      </nav>

      <div className={`sidebar ${sidebarOpen ? 'sidebar-open' : ''}`}>
        <div className="sidebar-header">
          <h3>Apexa</h3>
          <button
            className="close-sidebar"
            onClick={() => setSidebarOpen(false)}
          >
            ✕
          </button>
        </div>

        <div className="sidebar-search">
          <div className="search-container" style={{ border: '1px solid black' }}>
            <input type="text" placeholder="Search..." className="search-input" />
            <button className="search-btn">🔍</button>
          </div>
        </div>

        <ul className="sidebar-nav-list">
          {navItems.map((item) => (
            <li
              key={item.id}
              className={`sidebar-nav-item ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => {
                setActiveSection(item.id)
                setSidebarOpen(false)
              }}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-label">{item.label}</span>
            </li>
          ))}
        </ul>

        <div className="sidebar-footer">
          <div className="sidebar-contact">
            <p>📧 info@apexa.com</p>
            <p>📞 +123 9898 500</p>
          </div>
          <div className="sidebar-social">
            <a href="mailto:info@apexa.com" className="social-link">📧</a>
            <a href="tel:+12398985000" className="social-link">📞</a>
            <a href="#" className="social-link">📘</a>
            <a href="#" className="social-link">🐦</a>
            <a href="#" className="social-link">📷</a>
          </div>
        </div>
      </div>

      {sidebarOpen && <div className="overlay" onClick={() => setSidebarOpen(false)}></div>}

      <main className="main-content">
        {renderContent()}
      </main>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Apexa</h3>
            <p>Leading business consulting firm dedicated to transforming organizations through innovative data-driven solutions.</p>
            <div className="footer-social">
              <a href="mailto:info@apexa.com" className="footer-social-link">📧</a>
              <a href="tel:+12398985000" className="footer-social-link">📞</a>
              <a href="#" className="footer-social-link">📘</a>
              <a href="#" className="footer-social-link">🐦</a>
              <a href="#" className="footer-social-link">📷</a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Information</h4>
            <ul className="footer-links">
              <li><a href="#" onClick={() => setActiveSection('about')}>About Us</a></li>
              <li><a href="#" onClick={() => setActiveSection('services')}>Our Services</a></li>
              <li><a href="#" onClick={() => setActiveSection('contact')}>Contact Info</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Career Opportunities</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Top Links</h4>
            <ul className="footer-links">
              <li><a href="#" onClick={() => setActiveSection('home')}>Home</a></li>
              <li><a href="#" onClick={() => setActiveSection('services')}>Web Development</a></li>
              <li><a href="#" onClick={() => setActiveSection('services')}>Mobile Apps</a></li>
              <li><a href="#" onClick={() => setActiveSection('services')}>Data Analytics</a></li>
              <li><a href="#" onClick={() => setActiveSection('services')}>Digital Transformation</a></li>
              <li><a href="#" onClick={() => setActiveSection('blog')}>Latest News</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Posts</h4>
            <div className="footer-posts">
              <div className="footer-post">
                <h5>The Future of Web Development</h5>
                <p>Exploring emerging technologies that will shape the web development landscape...</p>
                <span className="post-date">December 10, 2024</span>
              </div>
              <div className="footer-post">
                <h5>AI in Modern Applications</h5>
                <p>How artificial intelligence is transforming user experiences across industries...</p>
                <span className="post-date">December 5, 2024</span>
              </div>
              <div className="footer-post">
                <h5>Digital Transformation Guide</h5>
                <p>Essential strategies for successful digital transformation in your organization...</p>
                <span className="post-date">November 28, 2024</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2024 Apexa. All rights reserved.</p>
            <div className="footer-contact-info">
              <span>📞 +123 9898 500</span>
              <span>📧 info@apexa.com</span>
              <span>📍 256 Avenue, Mark Street, NewYork City</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
