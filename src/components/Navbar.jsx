import React, { useState } from 'react';
import { GraduationCap, Menu, X, Download, Info, Smartphone } from 'lucide-react';

export default function Navbar({ activeSection, setActiveSection, apkUrl = '/app-release.apk' }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="minimal-header">
      <div className="container nav-container">
        {/* Brand Logo & College Title */}
        <div className="brand-logo" onClick={() => handleNavClick('download')}>
          <div className="logo-icon-pill">
            <GraduationCap size={20} color="#ffffff" />
          </div>
          <div className="brand-text-wrap">
            <span className="brand-name">PresentSir</span>
            <span className="brand-sub">JNTUA College of Engineering</span>
          </div>
        </div>

        {/* Desktop Navigation Links & CTA */}
        <div className="nav-actions desktop-nav">
          <button
            className={`minimal-tab ${activeSection === 'download' ? 'active' : ''}`}
            onClick={() => handleNavClick('download')}
          >
            <Download size={16} />
            <span>Download</span>
          </button>
          <button
            className={`minimal-tab ${activeSection === 'about' ? 'active' : ''}`}
            onClick={() => handleNavClick('about')}
          >
            <Info size={16} />
            <span>About</span>
          </button>
          <a
            href={apkUrl}
            download="app-release.apk"
            className="minimal-btn-primary nav-apk-btn"
          >
            <Smartphone size={16} />
            <span>Get APK</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="mobile-hamburger-btn mobile-only"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer Dropdown */}
      {mobileMenuOpen && (
        <div className="mobile-menu-drawer mobile-only fade-in">
          <button
            className={`mobile-tab-item ${activeSection === 'download' ? 'active' : ''}`}
            onClick={() => handleNavClick('download')}
          >
            <Download size={18} />
            <span>Download</span>
          </button>
          <button
            className={`mobile-tab-item ${activeSection === 'about' ? 'active' : ''}`}
            onClick={() => handleNavClick('about')}
          >
            <Info size={18} />
            <span>About</span>
          </button>
          <a
            href={apkUrl}
            download="app-release.apk"
            className="minimal-btn-primary mobile-apk-btn"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Smartphone size={18} />
            <span>Download APK</span>
          </a>
        </div>
      )}

      <style>{`
        .minimal-header {
          position: sticky;
          top: 0;
          z-index: 1000;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(226, 232, 240, 0.8);
          transition: all 0.2s ease;
        }

        .nav-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 64px;
        }

        .brand-logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          cursor: pointer;
        }

        .logo-icon-pill {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: #0056b3;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 10px rgba(0, 86, 179, 0.2);
        }

        .brand-text-wrap {
          display: flex;
          flex-direction: column;
        }

        .brand-name {
          font-size: 1.15rem;
          font-weight: 800;
          color: #0056b3;
          letter-spacing: -0.3px;
          line-height: 1.1;
        }

        .brand-sub {
          font-size: 0.75rem;
          font-weight: 500;
          color: #64748b;
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .minimal-tab {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.5rem 1rem;
          border-radius: 50px;
          background: transparent;
          border: none;
          font-family: inherit;
          font-size: 0.9rem;
          font-weight: 600;
          color: #64748b;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .minimal-tab:hover {
          color: #0056b3;
          background: #f1f5f9;
        }

        .minimal-tab.active {
          color: #0056b3;
          background: #edf2fc;
          font-weight: 700;
        }

        .minimal-btn-primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.4rem;
          background: #0056b3;
          color: #ffffff;
          font-family: inherit;
          font-size: 0.88rem;
          font-weight: 600;
          padding: 0.55rem 1.15rem;
          border-radius: 50px;
          border: none;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(0, 86, 179, 0.25);
          transition: all 0.2s ease;
          margin-left: 0.4rem;
        }

        .minimal-btn-primary:hover {
          background: #004085;
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(0, 86, 179, 0.35);
        }

        .mobile-hamburger-btn {
          background: #f1f5f9;
          border: none;
          border-radius: 8px;
          padding: 0.45rem;
          color: #1e293b;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .mobile-menu-drawer {
          background: #ffffff;
          border-bottom: 1px solid #e2e8f0;
          padding: 1rem 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .mobile-tab-item {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.75rem 1rem;
          border-radius: 10px;
          border: none;
          background: transparent;
          color: #475569;
          font-size: 0.95rem;
          font-weight: 600;
          width: 100%;
          text-align: left;
          cursor: pointer;
        }

        .mobile-tab-item.active {
          background: #edf2fc;
          color: #0056b3;
        }

        .mobile-apk-btn {
          width: 100%;
          margin-top: 0.5rem;
          padding: 0.75rem;
        }

        .desktop-nav {
          display: flex;
        }

        .mobile-only {
          display: none;
        }

        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-only {
            display: flex !important;
          }
          .brand-sub {
            display: none;
          }
        }
      `}</style>
    </header>
  );
}
