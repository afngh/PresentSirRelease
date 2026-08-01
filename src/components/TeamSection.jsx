import React from 'react';
import { Users, GraduationCap, Code, Sparkles } from 'lucide-react';

export default function TeamSection() {
  const teamMembers = [
    {
      id: 1,
      name: "Shaikshavali Masul",
      role: "Lead Developer & System Architect",
      institution: "JNTUA College of Engineering Ananthapuramu",
      initials: "SM",
      bio: "Contributed to backend architecture, database design, and real-time attendance verification systems."
    },
    {
      id: 2,
      name: "Shaik Afnan",
      role: "Lead Mobile & Frontend Developer",
      institution: "JNTUA College of Engineering Ananthapuramu",
      initials: "SA",
      bio: "Engineered the PresentSir Android application, geofence location engine, and mobile user experience."
    }
  ];

  return (
    <section id="team" className="team-section">
      <div className="container">
        {/* Section Header */}
        <div className="team-header text-center">
          <span className="badge badge-blue">Development Team</span>
          <h2 className="team-title">Meet the Creators</h2>
          <p className="team-subtitle">
            Built with pride for JNTUA College of Engineering Ananthapuramu
          </p>
        </div>

        {/* Team Cards Grid */}
        <div className="team-grid grid-2">
          {teamMembers.map((member) => (
            <div key={member.id} className="minimal-card team-card">
              <div className="team-card-header">
                <div className="avatar-pill">
                  <span>{member.initials}</span>
                </div>
                <div className="member-meta">
                  <h3 className="member-name">{member.name}</h3>
                  <p className="member-role">{member.role}</p>
                </div>
              </div>

              <div className="institution-tag">
                <GraduationCap size={16} color="#0056b3" />
                <span>{member.institution}</span>
              </div>

              <p className="member-bio">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .team-section {
          padding: 4rem 0 4.5rem 0;
          background: #f8fafc;
          border-top: 1px solid #e2e8f0;
        }

        .team-header {
          max-width: 680px;
          margin: 0 auto 3rem auto;
        }

        .team-title {
          font-size: 2.1rem;
          font-weight: 800;
          color: #0056b3;
          margin: 0.5rem 0 0.4rem 0;
          letter-spacing: -0.3px;
        }

        .team-subtitle {
          font-size: 1.05rem;
          color: #64748b;
        }

        .team-grid {
          max-width: 920px;
          margin: 0 auto;
        }

        .team-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 20px;
          padding: 2rem;
          box-shadow: 0 4px 18px rgba(0, 0, 0, 0.02);
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
        }

        .team-card:hover {
          border-color: #0056b3;
          transform: translateY(-4px);
          box-shadow: 0 10px 30px rgba(0, 86, 179, 0.08);
        }

        .team-card-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.25rem;
        }

        .avatar-pill {
          width: 52px;
          height: 52px;
          border-radius: 16px;
          background: linear-gradient(135deg, #0056b3 0%, #004085 100%);
          color: #ffffff;
          font-size: 1.2rem;
          font-weight: 800;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(0, 86, 179, 0.25);
          flex-shrink: 0;
        }

        .member-name {
          font-size: 1.3rem;
          font-weight: 800;
          color: #1e293b;
          line-height: 1.2;
        }

        .member-role {
          font-size: 0.85rem;
          font-weight: 600;
          color: #198754;
          margin-top: 0.2rem;
        }

        .institution-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: #edf2fc;
          padding: 0.4rem 0.85rem;
          border-radius: 50px;
          font-size: 0.8rem;
          font-weight: 600;
          color: #0056b3;
          margin-bottom: 1rem;
        }

        .member-bio {
          font-size: 0.9rem;
          color: #475569;
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .team-title {
            font-size: 1.65rem;
          }
        }
      `}</style>
    </section>
  );
}
