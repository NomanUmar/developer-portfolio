import { useEffect, useState } from 'react';
import { 
  Terminal, 
  Layout, 
  Mail, 
  Database,
  ArrowRight,
  Briefcase,
  Smartphone,
  AppWindow,
  Globe,
  GraduationCap
} from 'lucide-react';
import { FaLinkedin, FaGithub, FaAppStoreIos, FaGooglePlay } from 'react-icons/fa';
import rjImage from './assets/rjlaws-image.png';
import nkenneImage from './assets/nkenne.jpg';
import govpnImage from './assets/govpn.jpg';
import motion2CoachImage from './assets/motion2coach.webp';
import procloudImage from './assets/procloud.jpg';
import dcciImage from './assets/dcci.jpg';
import postquamImage from './assets/postquam.webp';
import profileImg from './assets/profile.jpg';
import './App.css';

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
      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-content">
          <div className="nav-logo">
            <span className="text-gradient">Noman</span>Umar.
          </div>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="about">
        <div className="container">
          <div className="hero-wrapper">
            <div className="hero-content animate-fade-in">
              <span className="hero-greeting">Hi there, I'm</span>
              <h1 className="hero-title">
                Noman <span className="text-gradient">Umar</span>
              </h1>
              <h2 className="hero-subtitle" style={{ fontWeight: 600, color: '#f8fafc', marginBottom: '1rem' }}>
                Senior Software Engineer
              </h2>
              <p className="hero-subtitle">
                8+ years of software development experience, including 7+ years of iOS application development using Swift and modern Apple technologies, and cross-platform/web development using React Native, React.js, Node.js, and PostgreSQL. I build secure, scalable, and business-driven software solutions.
              </p>
              <div className="hero-actions">
                <a href="#experience" className="btn btn-primary">
                  View Experience <ArrowRight size={20} />
                </a>
                <a href="https://www.linkedin.com/in/noman-umar-5620a6163" target="_blank" rel="noreferrer" className="btn btn-secondary">
                  <FaLinkedin size={20} /> LinkedIn
                </a>
              </div>
            </div>
            
            <div className="hero-image-container">
              <div className="profile-img-wrapper">
                <img src={profileImg} alt="Noman Umar" className="profile-img" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Professional <span className="text-gradient">Experience</span></h2>
            <p className="text-secondary">My career journey and roles.</p>
          </div>
          
          <div className="timeline">
            {/* Experience 1 */}
            <div className="timeline-item">
              <div className="timeline-icon"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-title">Senior Software Engineer</h3>
                    <div className="timeline-company">Focusteck, Lahore</div>
                  </div>
                  <span className="timeline-date">Jan 2026 – Present</span>
                </div>
                <ul className="timeline-desc">
                  <li>Design and develop scalable web and mobile applications using React.js, React Native, NestJS, Node.js, and PostgreSQL.</li>
                  <li>Build and maintain secure RESTful APIs and backend services following clean architecture principles.</li>
                  <li>Collaborate with product managers, designers, and QA teams to deliver high-quality software solutions.</li>
                  <li>Develop reusable components and shared modules to improve development efficiency.</li>
                </ul>
              </div>
            </div>

            {/* Experience 2 */}
            <div className="timeline-item">
              <div className="timeline-icon"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-title">Senior iOS Developer</h3>
                    <div className="timeline-company">Fenris Group, Lahore</div>
                  </div>
                  <span className="timeline-date">May 2023 – Dec 2025</span>
                </div>
                <ul className="timeline-desc">
                  <li>Designed and architected complex, scalable, and high-performance iOS applications with a focus on maintainability.</li>
                  <li>Collaborated closely with cross-functional teams to deliver high-quality, feature-rich applications.</li>
                  <li>Created and maintained comprehensive documentation for architecture, codebase, and technical decisions.</li>
                </ul>
              </div>
            </div>

            {/* Experience 3 */}
            <div className="timeline-item">
              <div className="timeline-icon"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-title">Senior iOS Developer</h3>
                    <div className="timeline-company">Focusteck, Lahore</div>
                  </div>
                  <span className="timeline-date">Feb 2022 – May 2023</span>
                </div>
                <ul className="timeline-desc">
                  <li>Collaborated directly with clients to gather requirements, define solutions, and ensure timely delivery.</li>
                  <li>Optimized memory management, UI layout rendering, and network performance for responsive user experiences.</li>
                </ul>
              </div>
            </div>
            
            {/* Experience 4 */}
            <div className="timeline-item">
              <div className="timeline-icon"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-title">iOS Developer</h3>
                    <div className="timeline-company">Tecnomics International & MetaLogix Tech</div>
                  </div>
                  <span className="timeline-date">Jan 2018 – Feb 2022</span>
                </div>
                <ul className="timeline-desc">
                  <li>Designed and developed iOS applications using MVC and MVVM design patterns.</li>
                  <li>Managed the full App Store submission process, including TestFlight beta testing and deployment.</li>
                  <li>Built advanced iOS applications using AFNetworking, AdMob, and In-App Purchases.</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Technical <span className="text-gradient">Arsenal</span></h2>
            <p className="text-secondary">Technologies I work with to bring ideas to life.</p>
          </div>
          
          <div className="skills-grid">
            <div className="glass-panel skill-category">
              <h3><Smartphone size={24} className="text-gradient" /> Mobile Development</h3>
              <div className="skill-list">
                <span className="skill-tag">iOS Development</span>
                <span className="skill-tag">Swift</span>
                <span className="skill-tag">SwiftUI</span>
                <span className="skill-tag">UIKit</span>
                <span className="skill-tag">React Native</span>
                <span className="skill-tag">Combine</span>
              </div>
            </div>

            <div className="glass-panel skill-category">
              <h3><Layout size={24} className="text-gradient" /> Web & Frontend</h3>
              <div className="skill-list">
                <span className="skill-tag">React.js</span>
                <span className="skill-tag">Next.js</span>
                <span className="skill-tag">JavaScript / ES6</span>
                <span className="skill-tag">TypeScript</span>
                <span className="skill-tag">HTML5 & CSS3</span>
              </div>
            </div>

            <div className="glass-panel skill-category">
              <h3><Database size={24} className="text-gradient" /> Backend & APIs</h3>
              <div className="skill-list">
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">NestJS</span>
                <span className="skill-tag">Express.js</span>
                <span className="skill-tag">PostgreSQL</span>
                <span className="skill-tag">REST APIs</span>
                <span className="skill-tag">WebSockets</span>
              </div>
            </div>
            
            <div className="glass-panel skill-category">
              <h3><Terminal size={24} className="text-gradient" /> Tools & Platforms</h3>
              <div className="skill-list">
                <span className="skill-tag">Xcode</span>
                <span className="skill-tag">Git / GitHub</span>
                <span className="skill-tag">Firebase</span>
                <span className="skill-tag">TestFlight</span>
                <span className="skill-tag">RevenueCat</span>
                <span className="skill-tag">AWS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Featured <span className="text-gradient">Projects</span></h2>
            <p className="text-secondary">Notable applications I've built or contributed to.</p>
          </div>

          <div className="projects-grid">
            {/* RJ Laws & Sons E-Book Store */}
            <div className="glass-panel project-card">
              <img src={rjImage} alt="RJ Laws & Sons Screenshot" className="app-icon-image" />
              <h3 className="project-title">RJ Laws & Sons E-Book Store</h3>
              <div className="project-desc">
                A live cross-platform React Native application for browsing and purchasing legal E-Books.
                <ul>
                  <li>Fully functional E-Commerce flow for digital books.</li>
                  <li>Seamless cross-platform experience on both iOS and Android.</li>
                </ul>
              </div>
              <div className="project-links">
                <a href="https://apps.apple.com/us/app/rj-laws-sons-e-book-store/id6467029977" target="_blank" rel="noreferrer" aria-label="App Store">
                  <FaAppStoreIos size={28} />
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.rjlaws.sons" target="_blank" rel="noreferrer" aria-label="Google Play">
                  <FaGooglePlay size={26} />
                </a>
              </div>
            </div>

            {/* Project 1: Nkenne */}
            <div className="glass-panel project-card">
              <img src={nkenneImage} alt="Nkenne Screenshot" className="app-icon-image" />
              <h3 className="project-title">Nkenne</h3>
              <div className="project-desc">
                The premier and only dedicated African language learning app, empowering a community of over 150,000 users worldwide.
                <ul>
                  <li>Offers lessons in 14 African languages including Igbo, Somali, Yoruba, Swahili.</li>
                  <li>Community-focused learning model with interactive lessons.</li>
                </ul>
              </div>
              <div className="project-links">
                <a href="https://apps.apple.com/us/app/nkenne-learn-african-language/id1587537473" target="_blank" rel="noreferrer" aria-label="App Store">
                  <FaAppStoreIos size={28} />
                </a>
              </div>
            </div>

            {/* Project 2: GoVPN */}
            <div className="glass-panel project-card">
              <img src={govpnImage} alt="GoVPN Screenshot" className="app-icon-image" />
              <h3 className="project-title">GoVPN</h3>
              <div className="project-desc">
                Fast & Secure VPN Proxy providing secure, anonymous, and lightning-fast VPN services for iOS users.
                <ul>
                  <li>Built a secure networking layer ensuring high-speed performance.</li>
                  <li>Implemented smooth onboarding, subscription management, and IAPs.</li>
                </ul>
              </div>
              <div className="project-links">
                <a href="https://apps.apple.com/us/app/govpn-fast-secure-vpn-proxy/id6746538373" target="_blank" rel="noreferrer" aria-label="App Store">
                  <FaAppStoreIos size={28} />
                </a>
              </div>
            </div>

            {/* Project 3: Motion2Coach */}
            <div className="glass-panel project-card">
              <img src={motion2CoachImage} alt="Motion2Coach Screenshot" className="app-icon-image" />
              <h3 className="project-title">Motion2Coach</h3>
              <div className="project-desc">
                Advanced markerless and wireless 2D/3D motion analysis for golf professionals.
                <ul>
                  <li>Integrated neural network–based biomechanical motion tracking.</li>
                  <li>Supported multi-angle recording and live performance feedback.</li>
                </ul>
              </div>
              <div className="project-links">
                <a href="https://apps.apple.com/ie/app/motion2coach/id1627218445" target="_blank" rel="noreferrer" aria-label="App Store">
                  <FaAppStoreIos size={28} />
                </a>
              </div>
            </div>
            
            {/* Project 4: Pro-Cloud */}
            <div className="glass-panel project-card">
              <img src={procloudImage} alt="Pro-Cloud App Icon" className="app-icon-image" />
              <h3 className="project-title">Pro-Cloud</h3>
              <div className="project-desc">
                Modular asset and workflow management platform used by enterprises to automate and optimize operations.
                <ul>
                  <li>Supports asset tracking, logistics, and personnel management.</li>
                  <li>Built for both online and offline functionality with real-time updates.</li>
                </ul>
              </div>
              <div className="project-links">
                <a href="https://apps.apple.com/us/app/pro-cloud/id1341684579" target="_blank" rel="noreferrer" aria-label="App Store">
                  <FaAppStoreIos size={28} />
                </a>
              </div>
            </div>

            {/* Project 5: Dubai Chamber */}
            <div className="glass-panel project-card">
              <img src={dcciImage} alt="Dubai Chamber App Icon" className="app-icon-image" />
              <h3 className="project-title">Dubai Chamber (DCCI)</h3>
              <div className="project-desc">
                App representing and supporting the business community in Dubai, promoting it as a leading international hub.
                <ul>
                  <li>Facilitates business networking and trade documentation.</li>
                  <li>Provides access to Chamber services via digital engagement tools.</li>
                </ul>
              </div>
              <div className="project-links">
                <a href="https://apps.apple.com/ae/app/dubai-chamber-of-commerce/id780502711" target="_blank" rel="noreferrer" aria-label="App Store">
                  <FaAppStoreIos size={28} />
                </a>
              </div>
            </div>

            {/* Project 6: PostQuam Cosmetics */}
            <div className="glass-panel project-card">
              <img src={postquamImage} alt="PostQuam Cosmetics App Icon" className="app-icon-image" />
              <h3 className="project-title">PostQuam Cosmetics</h3>
              <div className="project-desc">
                App connecting customers and professionals with premium cosmetic products and exclusive deals.
                <ul>
                  <li>Enables personalized shopping experiences with discount tiers.</li>
                  <li>Integrated admin-driven promotional system for targeted offers.</li>
                </ul>
              </div>
              <div className="project-links">
                <a href="https://apps.apple.com/us/app/postquam-cosmetics/id1487779957?ls=1" target="_blank" rel="noreferrer" aria-label="App Store">
                  <FaAppStoreIos size={28} />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Section & Education */}
      <section id="contact" className="section">
        <div className="container">
          
          {/* Education Info */}
          <div className="glass-panel contact-content" style={{ marginBottom: '3rem', textAlign: 'left' }}>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <GraduationCap size={24} className="text-gradient" /> Education
            </h3>
            <div style={{ marginBottom: '1rem' }}>
              <h4 style={{ color: 'var(--text-primary)', fontSize: '1.1rem' }}>BS Computer Science</h4>
              <p className="text-secondary">COMSATS University, Sahiwal (2014–2018)</p>
            </div>
            <div>
              <h4 style={{ color: 'var(--text-primary)', fontSize: '1.1rem' }}>FSc Pre-Engineering</h4>
              <p className="text-secondary">Punjab College, Okara (2011–2013)</p>
            </div>
          </div>

          <div className="glass-panel contact-content">
            <h2 className="section-title">Let's <span className="text-gradient">Connect</span></h2>
            <p className="contact-desc">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions. 
              Based in Lahore, Punjab.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="mailto:nomanumar488@gmail.com" className="btn btn-primary">
                <Mail size={20} /> Email Me
              </a>
              <a href="https://www.linkedin.com/in/noman-umar-5620a6163" target="_blank" rel="noreferrer" className="btn btn-secondary">
                <FaLinkedin size={20} /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>
            Noman Umar &copy; 2026. <br />
            Built with ❤️ using React.js.
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
