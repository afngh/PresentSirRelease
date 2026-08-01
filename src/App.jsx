import React, { useState } from 'react';
import Navbar from './components/Navbar';
import DownloadSection from './components/DownloadSection';
import AboutSection from './components/AboutSection';
import TeamSection from './components/TeamSection';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('download');

  // Configurable App Details & Links
  const appConfig = {
    appName: "PresentSir",
    tagline: "Smart, location-verified attendance management for JNTUA College of Engineering Ananthapuramu.",
    apkUrl: "/app-release.apk", // Link to APK file in public directory
    version: "v1.0.0",
    fileSize: "7.2 MB",
    releaseDate: "August 2026"
  };

  // Customizable Screenshots Data Array with Image Paths, Badges, Highlights & Captions
  const customScreenshots = [
    {
      id: 1,
      image: "/screenshots/1.jpg",
      badge: "Student Mobile Experience",
      title: "Student Dashboard & Attendance",
      description: "Allows students to view personal details, check live attendance stats (Present/Absent count), enter session codes, and submit attendance via GPS verification.",
      caption: "Allows students to view personal details, check live attendance stats, enter session code, and submit attendance via GPS verification.",
      highlights: [
        "Real-time Present vs. Absent counters",
        "Instant 6-digit session code submission",
        "Geofence location status verification",
        "Personalized student admission profile"
      ],
      inverse: false
    },
    {
      id: 2,
      image: "/screenshots/2.jpg",
      badge: "Faculty Control Hub",
      title: "Faculty Attendance Session Creator",
      description: "Empowers professors and faculty members to spin up time-bounded classroom attendance sessions in seconds with full radius control and student device management.",
      caption: "Empowers faculty members to launch new attendance sessions, set subject names, specify geofence radiuses in meters, and view live submission counts.",
      highlights: [
        "One-tap subject session launcher",
        "Adjustable geofence radius slider (10m - 50m)",
        "Live student check-in monitoring",
        "Deregister & unbind student device tools"
      ],
      inverse: true
    },
    {
      id: 3,
      image: "/screenshots/3.jpg",
      badge: "Security & Proxy Prevention",
      title: "Single Device Binding & Secure Login",
      description: "Guarantees academic integrity by linking each student login to a unique mobile hardware signature, preventing proxy attendance and unauthorized submissions.",
      caption: "Secure login interface requiring Admission Number / Username and password, binding each account to a single mobile device to prevent proxy attendance.",
      highlights: [
        "Admission Number & Password portal",
        "Hardware device fingerprint locking",
        "JNTUACEA academic branding (Beta)",
        "Zero proxy submission security"
      ],
      inverse: false
    }
  ];

  return (
    <div className="app-main-wrapper">
      {/* Top Navbar */}
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        apkUrl={appConfig.apkUrl}
      />

      {/* Main Page Content */}
      <main className="content-container">
        {/* Download Section */}
        <DownloadSection
          headline="Download PresentSir App"
          tagline={appConfig.tagline}
          apkUrl={appConfig.apkUrl}
          version={appConfig.version}
          fileSize={appConfig.fileSize}
          releaseDate={appConfig.releaseDate}
        />

        {/* About Section with Screenshot Showcase */}
        <AboutSection screenshots={customScreenshots} />

        {/* Team Section */}
        <TeamSection />
      </main>

      {/* Footer */}
      <Footer />

      <style>{`
        .app-main-wrapper {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          background-color: #f8fafc;
        }

        .content-container {
          flex: 1;
        }
      `}</style>
    </div>
  );
}
