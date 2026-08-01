import React from 'react';
import { ArrowUp, GraduationCap } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="jntua-footer">
      <div className="container footer-container">
        <div className="footer-left">
          <GraduationCap size={20} color="#0056b3" />
          <p className="copyright-text">© JNTUACEA - All rights reserved.</p>
        </div>

        <button className="top-btn" onClick={scrollToTop} aria-label="Scroll to top">
          <span>Back to Top</span>
          <ArrowUp size={16} />
        </button>
      </div>

      <style>{`
        .jntua-footer {
          background: #ffffff;
          border-top: 1px solid #e2e8f0;
          padding: 1.25rem 0;
          margin-top: auto;
        }

        .footer-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .footer-left {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        .copyright-text {
          font-size: 0.88rem;
          color: #198754; /* Green color match with screenshot © JNTUACEA - All rights reserved. */
          font-weight: 600;
        }

        .top-btn {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          background: #edf2fc;
          color: #0056b3;
          border: 1px solid #cbd5e1;
          padding: 0.4rem 0.8rem;
          border-radius: 6px;
          font-family: inherit;
          font-size: 0.82rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .top-btn:hover {
          background: #0056b3;
          color: #ffffff;
        }

        @media (max-width: 640px) {
          .footer-container {
            flex-direction: column;
            gap: 0.75rem;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
}
