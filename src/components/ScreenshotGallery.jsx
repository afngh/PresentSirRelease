import React, { useState } from 'react';
import { Smartphone, CheckCircle2 } from 'lucide-react';

const defaultScreenshots = [
  {
    id: 1,
    image: '/screenshots/1.jpg',
    badge: 'Student Mobile Experience',
    title: 'Student Dashboard & Live Attendance',
    description: 'Designed for effortless daily attendance marking. Students can view personal academic details, track live attendance percentages, and submit session codes within verified classroom geofence boundaries.',
    highlights: [
      'Real-time Present vs. Absent counters',
      'Instant 6-digit session code submission',
      'Geofence location status verification',
      'Personalized student admission profile'
    ],
    inverse: false
  },
  {
    id: 2,
    image: '/screenshots/2.jpg',
    badge: 'Faculty Control Hub',
    title: 'Faculty Attendance Session Creator',
    description: 'Empowers professors and faculty members to spin up time-bounded classroom attendance sessions in seconds with full radius control and student device management.',
    highlights: [
      'One-tap subject session launcher',
      'Adjustable geofence radius slider (10m - 50m)',
      'Live student check-in monitoring',
      'Deregister & unbind student device tools'
    ],
    inverse: true
  },
  {
    id: 3,
    image: '/screenshots/3.jpg',
    badge: 'Security & Proxy Prevention',
    title: 'Single Device Binding & Secure Login',
    description: 'Guarantees academic integrity by linking each student login to a unique mobile hardware signature, preventing proxy attendance and unauthorized submissions.',
    highlights: [
      'Admission Number & Password portal',
      'Hardware device fingerprint locking',
      'JNTUACEA academic branding (Beta)',
      'Zero proxy submission security'
    ],
    inverse: false
  }
];

export default function ScreenshotGallery({
  title = "App Features & Interface Showcase",
  subtitle = "Take an in-depth tour of the PresentSir mobile application screens",
  screenshots = defaultScreenshots
}) {
  const [imgErrors, setImgErrors] = useState({});

  const listToRender = Array.isArray(screenshots) && screenshots.length > 0 ? screenshots : defaultScreenshots;

  const handleImageError = (id) => {
    setImgErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <div className="showcase-gallery-container">
      {/* Gallery Section Header */}
      <div className="gallery-header text-center">
        <span className="badge badge-blue">App Showcase</span>
        <h3 className="gallery-title">{title}</h3>
        <p className="gallery-subtitle">{subtitle}</p>
      </div>

      {/* Alternating Showcase Rows */}
      <div className="showcase-rows-list">
        {listToRender.map((item, index) => {
          const isInverse = item.inverse !== undefined ? item.inverse : (index % 2 === 1);
          const badgeText = item.badge || 'Feature Showcase';
          const descriptionText = item.description || item.caption || '';
          const highlightsList = Array.isArray(item.highlights) ? item.highlights : [
            'Seamless mobile interface',
            'Optimized for fast performance',
            'Secure & verified operation'
          ];

          return (
            <div
              key={item.id || index}
              className={`showcase-row ${isInverse ? 'inverse-row' : ''}`}
            >
              {/* Phone Showcase Column */}
              <div className="showcase-media-col">
                <div className="realistic-phone-wrapper">
                  {/* Minimal Realistic Mobile Frame with Balanced Thickness & Multi-Layer Shadow */}
                  <div className="realistic-phone-frame">
                    
                    {/* Hardware Top Camera & Ear Speaker Notch */}
                    <div className="phone-top-hardware">
                      <span className="camera-dot"></span>
                      <span className="speaker-pill"></span>
                    </div>

                    {/* Display Screen Viewport */}
                    <div className="phone-screen-viewport">
                      {imgErrors[item.id] ? (
                        <div className="fallback-placeholder">
                          <Smartphone size={44} color="#0056b3" />
                          <p>{item.title}</p>
                        </div>
                      ) : (
                        <img
                          src={item.image}
                          alt={item.title}
                          className="app-screenshot-img"
                          onError={() => handleImageError(item.id)}
                        />
                      )}
                      {/* Subtle Glass Sheen Reflection */}
                      <div className="screen-glass-sheen"></div>
                    </div>

                    {/* Bottom Home Indicator */}
                    <div className="phone-bottom-hardware">
                      <span className="home-line"></span>
                    </div>

                  </div>
                </div>
              </div>

              {/* Content Info Column */}
              <div className="showcase-content-col">
                <span className="badge badge-green feature-badge">{badgeText}</span>
                <h4 className="feature-heading">{item.title}</h4>
                <p className="feature-description">{descriptionText}</p>

                {/* Bullet Highlights */}
                <ul className="highlights-list">
                  {highlightsList.map((point, idx) => (
                    <li key={idx} className="highlight-item">
                      <div className="check-icon-circle">
                        <CheckCircle2 size={16} color="#198754" />
                      </div>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>

      <style>{`
        .showcase-gallery-container {
          margin-top: 4rem;
        }

        .gallery-header {
          max-width: 680px;
          margin: 0 auto 3.5rem auto;
        }

        .gallery-title {
          font-size: 2.1rem;
          font-weight: 800;
          color: #0056b3;
          margin: 0.5rem 0;
          letter-spacing: -0.3px;
        }

        .gallery-subtitle {
          font-size: 1.05rem;
          color: #64748b;
        }

        .showcase-rows-list {
          display: flex;
          flex-direction: column;
          gap: 4rem;
        }

        /* Alternating Side-by-Side Row */
        .showcase-row {
          display: flex;
          align-items: center;
          gap: 3.5rem;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 24px;
          padding: 2.75rem 2.5rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);
          transition: border-color 0.25s ease, box-shadow 0.25s ease;
        }

        .showcase-row:hover {
          border-color: #0056b3;
          box-shadow: 0 12px 35px rgba(0, 86, 179, 0.07);
        }

        .inverse-row {
          flex-direction: row-reverse;
        }

        .showcase-media-col {
          flex: 1;
          display: flex;
          justify-content: center;
        }

        .showcase-content-col {
          flex: 1.25;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        /* Realistic Phone Frame Wrapper */
        .realistic-phone-wrapper {
          position: relative;
          width: 100%;
          max-width: 280px;
        }

        /* Balanced Frame Thickness & Realistic Multi-Layer Box Shadows */
        .realistic-phone-frame {
          background: #0f172a;
          border-radius: 34px;
          padding: 11px 10px 12px 10px;
          box-shadow:
            0 0 0 1px #334155,
            0 20px 45px rgba(0, 0, 0, 0.18),
            0 8px 20px rgba(0, 86, 179, 0.12),
            inset 0 0 0 1px rgba(255, 255, 255, 0.12);
          position: relative;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .realistic-phone-wrapper:hover .realistic-phone-frame {
          transform: translateY(-5px);
          box-shadow:
            0 0 0 1px #0056b3,
            0 25px 55px rgba(0, 86, 179, 0.22),
            0 10px 25px rgba(0, 0, 0, 0.15),
            inset 0 0 0 1px rgba(255, 255, 255, 0.2);
        }

        /* Top Hardware Area */
        .phone-top-hardware {
          height: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-bottom: 6px;
        }

        .camera-dot {
          width: 7px;
          height: 7px;
          background: #1e293b;
          border: 1px solid #334155;
          border-radius: 50%;
        }

        .speaker-pill {
          width: 30px;
          height: 3px;
          background: #334155;
          border-radius: 2px;
        }

        /* Screen Viewport */
        .phone-screen-viewport {
          position: relative;
          width: 100%;
          aspect-ratio: 9 / 19.5;
          border-radius: 22px;
          overflow: hidden;
          background: #ffffff;
          box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
        }

        .app-screenshot-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          display: block;
        }

        .screen-glass-sheen {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.14) 0%,
            rgba(255, 255, 255, 0.02) 40%,
            transparent 65%
          );
          pointer-events: none;
        }

        /* Bottom Hardware Area */
        .phone-bottom-hardware {
          height: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 5px;
        }

        .home-line {
          width: 90px;
          height: 4px;
          background: #334155;
          border-radius: 2px;
        }

        .fallback-placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 1rem;
          text-align: center;
          color: #64748b;
          font-size: 0.8rem;
        }

        /* Content Styling */
        .feature-badge {
          margin-bottom: 0.85rem;
        }

        .feature-heading {
          font-size: 1.65rem;
          font-weight: 800;
          color: #1e293b;
          line-height: 1.3;
          margin-bottom: 0.85rem;
        }

        .feature-description {
          font-size: 0.98rem;
          color: #475569;
          line-height: 1.6;
          margin-bottom: 1.35rem;
        }

        .highlights-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
          width: 100%;
        }

        .highlight-item {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          font-size: 0.92rem;
          font-weight: 600;
          color: #1e293b;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          padding: 0.6rem 0.9rem;
          border-radius: 10px;
        }

        .check-icon-circle {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        /* Responsive Breakpoints */
        @media (max-width: 900px) {
          .showcase-row, .inverse-row {
            flex-direction: column;
            gap: 2.25rem;
            padding: 2rem 1.25rem;
            text-align: center;
          }

          .showcase-content-col {
            align-items: center;
          }

          .feature-heading {
            font-size: 1.4rem;
          }

          .highlight-item {
            text-align: left;
            width: 100%;
          }
        }

        @media (max-width: 480px) {
          .showcase-row {
            padding: 1.5rem 0.85rem;
            gap: 1.75rem;
            border-radius: 18px;
          }

          .realistic-phone-wrapper {
            max-width: 230px;
          }

          .gallery-title {
            font-size: 1.6rem;
          }

          .feature-heading {
            font-size: 1.25rem;
          }

          .feature-description {
            font-size: 0.9rem;
          }

          .highlight-item {
            font-size: 0.85rem;
            padding: 0.5rem 0.75rem;
          }
        }
      `}</style>
    </div>
  );
}
