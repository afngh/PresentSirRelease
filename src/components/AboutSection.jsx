import React from 'react';
import ScreenshotGallery from './ScreenshotGallery';
import { MapPin, Lock, Zap, BarChart2 } from 'lucide-react';

export default function AboutSection({
  aboutParagraph = "PresentSir is an automated Smart Attendance System specially engineered for JNTUA College of Engineering Ananthapuramu. It empowers faculty to instantly generate time-bounded geofenced attendance sessions while allowing students to submit attendance codes within verified GPS radius limits directly from their registered mobile devices."
}) {
  const features = [
    {
      icon: <MapPin size={24} color="#0056b3" />,
      title: "Geofence Verification",
      description: "Attendance can only be marked when students are physically present within the instructor's specified GPS radius (e.g. 15 meters)."
    },
    {
      icon: <Lock size={24} color="#0056b3" />,
      title: "Single Device Binding",
      description: "Each student admission number is linked to a unique device fingerprint to prevent proxy attendance and multiple submissions."
    },
    {
      icon: <Zap size={24} color="#0056b3" />,
      title: "Instant Session Codes",
      description: "Faculty can spin up classroom sessions instantly by entering subject details and broadcasting a dynamic 6-digit session code."
    },
    {
      icon: <BarChart2 size={24} color="#0056b3" />,
      title: "Real-time Statistics",
      description: "Track live attendance counts (Present vs. Absent), percentage metrics, and full historical logs for students and administrators."
    }
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        {/* Section Header */}
        <div className="about-header text-center">
          <span className="badge badge-blue">Platform Overview</span>
          <h2 className="about-title">Smart, Location-Bound Campus Attendance</h2>
          <p className="about-lead">{aboutParagraph}</p>
        </div>

        {/* Core Feature Cards Grid */}
        <div className="features-grid grid-4">
          {features.map((feat, idx) => (
            <div key={idx} className="minimal-card feature-card">
              <div className="feature-icon-box">{feat.icon}</div>
              <h3 className="feature-title">{feat.title}</h3>
              <p className="feature-desc">{feat.description}</p>
            </div>
          ))}
        </div>

        {/* Clean Static Showcase Rows */}
        <ScreenshotGallery />
      </div>

      <style>{`
        .about-section {
          padding: 4rem 0 5rem 0;
          background: #ffffff;
          border-top: 1px solid #e2e8f0;
        }

        .about-header {
          max-width: 780px;
          margin: 0 auto 3rem auto;
        }

        .about-title {
          font-size: 2.1rem;
          font-weight: 800;
          color: #0056b3;
          margin: 0.5rem 0 1rem 0;
          letter-spacing: -0.4px;
        }

        .about-lead {
          font-size: 1.05rem;
          color: #475569;
          line-height: 1.7;
        }

        .features-grid {
          margin-bottom: 2rem;
        }

        .feature-card {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 1.5rem;
          transition: all 0.2s ease;
        }

        .feature-card:hover {
          border-color: #0056b3;
          transform: translateY(-2px);
          background: #ffffff;
          box-shadow: 0 8px 25px rgba(0, 86, 179, 0.08);
        }

        .feature-icon-box {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: #edf2fc;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;
        }

        .feature-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 0.5rem;
        }

        .feature-desc {
          font-size: 0.88rem;
          color: #64748b;
          line-height: 1.5;
        }

        @media (max-width: 768px) {
          .about-title {
            font-size: 1.6rem;
          }
          .about-lead {
            font-size: 0.95rem;
          }
        }
      `}</style>
    </section>
  );
}
