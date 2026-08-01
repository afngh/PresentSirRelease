# PresentSir — Smart Attendance System (JNTUACEA Edition)

[![React Version](https://img.shields.io/badge/React-19.0-0056b3?style=flat-square&logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-6.1-646cff?style=flat-square&logo=vite)](https://vitejs.dev/)
[![Status](https://img.shields.io/badge/Status-Beta%20Release-198754?style=flat-square)](https://github.com/afngh/PresentSirRelease)
[![Institution](https://img.shields.io/badge/JNTUACEA-NAAC%20'A'%20Grade-0056b3?style=flat-square)](https://jntuacea.ac.in/)

A simple, clean, responsive single-page showcase website built with **React + Vite** to showcase the **PresentSir Smart Attendance Mobile App** for students and faculty of **JNTUA College of Engineering Ananthapuramu**.

---

## 🌟 Features

- **JNTUACEA Brand Identity**: Styled with the academic blue header branding, clean card layouts, and accreditation badges.
- **Direct APK Download**: Serves `public/app-release.apk` directly via the "Download for Android" button.
- **iOS App Store Ready**: Built-in iOS download card with a "Coming Soon" badge, ready to be updated when the iOS build is live.
- **Step-by-Step Android Installation Guide**: Numbered 3-step guide for enabling unknown sources and installing the APK.
- **Interactive Screenshot Showcase**: Alternating showcase rows with screenshot previews inside realistic mobile frames.
- **Development Team Spotlight**: Features Lead Developers **Shaikshavali Masul** and **Shaik Afnan**.
- **100% Fully Responsive**: Optimized for phones, tablets, and desktop displays.

---

## 📁 Project Structure

```
c:\PsBackend\app-release\
├── public/
│   ├── app-release.apk         # Direct download APK file artifact
│   ├── assets/
│   │   └── phone-frame.png     # Phone chassis reference asset
│   └── screenshots/            # App screenshots (1.jpg, 2.jpg, 3.jpg)
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Glassmorphism minimal navbar
│   │   ├── DownloadSection.jsx # Android/iOS download cards & install guide
│   │   ├── AboutSection.jsx    # Platform overview & feature cards
│   │   ├── ScreenshotGallery.jsx # Screenshot showcase with realistic frames
│   │   ├── TeamSection.jsx     # Developer spotlight cards
│   │   └── Footer.jsx          # JNTUACEA copyright footer
│   ├── App.jsx                 # Main page container & data arrays
│   ├── main.jsx                # Vite React entry point
│   └── index.css               # Responsive design system tokens & styles
├── index.html                  # HTML entry point with Inter Google Fonts
├── vite.config.js              # Vite configuration
└── package.json                # Project dependencies
```

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open `http://localhost:3000` in your browser.

### 3. Build for Production
```bash
npm run build
```
The optimized production bundle will be generated inside the `dist/` directory.

---

## 📱 How to Update when iOS App is Ready

When your iOS build is approved on TestFlight or the Apple App Store:

1. Open `src/components/DownloadSection.jsx`.
2. Locate the iOS card (`ios-card-disabled`) section around line 76.
3. Update the button element:
   - Change `disabled` to `disabled={false}`.
   - Replace `<button>` with `<a href="YOUR_APP_STORE_LINK" className="minimal-pill-btn btn-primary-pill">`.
4. Update the status badge from `Coming Soon` to `Available on App Store`.

---

## 👨‍💻 Development Team

- **Shaikshavali Masul** — Lead Developer & System Architect (*JNTUA College of Engineering Ananthapuramu*)
- **Shaik Afnan** — Lead Mobile & Frontend Developer (*JNTUA College of Engineering Ananthapuramu*)

---

## 📜 License & Copyright

© **JNTUACEA - All rights reserved.**  
Designed & Developed for JNTUA College of Engineering Ananthapuramu.
