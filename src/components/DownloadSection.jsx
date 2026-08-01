import React from 'react';
import { Smartphone, Apple, Download, ShieldCheck, Settings, ArrowDownCircle } from 'lucide-react';

export default function DownloadSection({
  headline = "Download PresentSir Mobile App",
  tagline = "The smart, geofence-verified attendance system tailored for JNTUA College of Engineering Ananthapuramu students and faculty.",
  apkUrl = "/app-release.apk",
  version = "v1.0.0",
  fileSize = "7.2 MB",
  releaseDate = "August 2026"
}) {
  const steps = [
    {
      num: 1,
      title: "Tap Download APK",
      desc: 'Click "Download for Android" above to get the app-release.apk file onto your phone.',
      icon: <ArrowDownCircle size={20} color="#0056b3" />
    },
    {
      num: 2,
      title: "Allow Unknown Sources",
      desc: 'Enable "Install from unknown sources" in Android settings if prompted.',
      icon: <Settings size={20} color="#0056b3" />
    },
    {
      num: 3,
      title: "Install & Grant Permissions",
      desc: 'Open the downloaded file, tap Install, and grant location permissions.',
      icon: <ShieldCheck size={20} color="#198754" />
    }
  ];

  return (
    <section id="download" className="download-section">
      <div className="container">
        {/* Minimal Hero Header */}
        <div className="hero-header text-center">
          <span className="badge badge-blue hero-badge">Beta Release</span>
          <h2 className="hero-title">{headline}</h2>
          <p className="hero-tagline">{tagline}</p>
        </div>

        {/* Download Buttons / Cards */}
        <div className="download-cards-grid grid-2">
          {/* Android Card */}
          <div className="minimal-card download-card">
            <div className="card-top">
              <div className="platform-icon-pill android-bg">
                <Smartphone size={26} color="#0056b3" />
              </div>
              <div className="platform-meta">
                <span className="badge badge-green">Available Now</span>
                <h3 className="platform-title">Android (APK)</h3>
                <p className="platform-sub">Compatible with Android 7.0+</p>
              </div>
            </div>

            <div className="file-info-pill">
              <span className="info-chip">Version: <b>{version}</b></span>
              <span className="info-chip">Size: <b>{fileSize}</b></span>
              <span className="info-chip text-green">Verified APK</span>
            </div>

            <a
              href={apkUrl}
              download="app-release.apk"
              className="minimal-pill-btn btn-primary-pill"
            >
              <Download size={18} />
              <span>Download for Android</span>
            </a>
            <p className="card-footnote">Instant download • Direct APK file</p>
          </div>

          {/* iOS Card */}
          <div className="minimal-card download-card ios-card-disabled">
            <div className="card-top">
              <div className="platform-icon-pill ios-bg">
                <Apple size={26} color="#64748b" />
              </div>
              <div className="platform-meta">
                <span className="badge badge-muted">Coming Soon</span>
                <h3 className="platform-title">iOS (App Store)</h3>
                <p className="platform-sub">iPhone & iPad support</p>
              </div>
            </div>

            <div className="file-info-pill">
              <span className="info-chip">Status: <b>In Review</b></span>
              <span className="info-chip">Platform: <b>iOS 14.0+</b></span>
            </div>

            <button disabled className="minimal-pill-btn btn-disabled-pill">
              <Apple size={18} />
              <span>Download for iOS (Coming Soon)</span>
            </button>
            <p className="card-footnote text-muted">iOS build will be on the App Store soon</p>
          </div>
        </div>

        {/* Installation Steps Section */}
        <div className="install-steps-wrapper">
          <div className="section-title-wrap text-center">
            <h3 className="section-title">How to Install on Android</h3>
            <p className="section-subtitle">Follow these 3 simple steps on your mobile phone</p>
          </div>

          <div className="steps-grid grid-3">
            {steps.map((step) => (
              <div key={step.num} className="minimal-card step-card">
                <div className="step-num-pill">{step.num}</div>
                <div className="step-icon-wrap">{step.icon}</div>
                <h4 className="step-title">{step.title}</h4>
                <p className="step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .download-section {
          padding: 3.5rem 0 3rem 0;
          background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
        }

        .hero-header {
          max-width: 680px;
          margin: 0 auto 3rem auto;
        }

        .hero-badge {
          margin-bottom: 0.75rem;
        }

        .hero-title {
          font-size: 2.2rem;
          font-weight: 800;
          color: #0056b3;
          line-height: 1.25;
          margin-bottom: 0.6rem;
          letter-spacing: -0.5px;
        }

        .hero-tagline {
          font-size: 1.05rem;
          color: #64748b;
          line-height: 1.6;
        }

        .download-cards-grid {
          margin-bottom: 3.5rem;
        }

        .minimal-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 18px;
          padding: 1.75rem;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03);
          transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
        }

        .minimal-card:hover {
          border-color: #0056b3;
          box-shadow: 0 8px 25px rgba(0, 86, 179, 0.08);
        }

        .download-card {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .ios-card-disabled {
          opacity: 0.85;
        }

        .card-top {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.25rem;
        }

        .platform-icon-pill {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .android-bg {
          background: #edf2fc;
        }

        .ios-bg {
          background: #f1f5f9;
        }

        .platform-title {
          font-size: 1.2rem;
          font-weight: 700;
          color: #1e293b;
        }

        .platform-sub {
          font-size: 0.82rem;
          color: #64748b;
        }

        .file-info-pill {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .info-chip {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          padding: 0.35rem 0.75rem;
          border-radius: 50px;
          font-size: 0.8rem;
          color: #475569;
        }

        .text-green {
          color: #198754;
          font-weight: 600;
          background: #d1fae5;
          border-color: #a7f3d0;
        }

        /* Minimal Pill Buttons */
        .minimal-pill-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          width: 100%;
          padding: 0.85rem 1.25rem;
          border-radius: 50px;
          font-family: inherit;
          font-size: 0.95rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          border: none;
          text-align: center;
        }

        .btn-primary-pill {
          background: #0056b3;
          color: #ffffff;
          box-shadow: 0 4px 12px rgba(0, 86, 179, 0.25);
        }

        .btn-primary-pill:hover {
          background: #004085;
          transform: translateY(-1px);
          box-shadow: 0 6px 16px rgba(0, 86, 179, 0.35);
        }

        .btn-disabled-pill {
          background: #e2e8f0;
          color: #94a3b8;
          cursor: not-allowed;
        }

        .card-footnote {
          font-size: 0.78rem;
          color: #64748b;
          text-align: center;
          margin-top: 0.75rem;
        }

        .install-steps-wrapper {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 24px;
          padding: 2.5rem 1.75rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);
        }

        .section-title-wrap {
          margin-bottom: 2rem;
        }

        .section-title {
          font-size: 1.5rem;
          font-weight: 800;
          color: #0056b3;
          margin-bottom: 0.3rem;
        }

        .section-subtitle {
          font-size: 0.92rem;
          color: #64748b;
        }

        .step-card {
          position: relative;
          background: #f8fafc;
          padding: 1.5rem;
          border-radius: 16px;
        }

        .step-num-pill {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 26px;
          height: 26px;
          border-radius: 50%;
          background: #0056b3;
          color: #ffffff;
          font-size: 0.85rem;
          font-weight: 700;
          margin-bottom: 0.75rem;
        }

        .step-icon-wrap {
          margin-bottom: 0.5rem;
        }

        .step-title {
          font-size: 1.05rem;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 0.4rem;
        }

        .step-desc {
          font-size: 0.85rem;
          color: #475569;
          line-height: 1.5;
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 1.75rem;
          }
        }
      `}</style>
    </section>
  );
}
