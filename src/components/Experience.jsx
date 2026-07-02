// src/components/Experience.jsx
import React from "react";

const experiences = [
  {
    date: "Dec 2025 – Mar 2026",
    role: "Machine Learning Intern",
    company: "Tanvika Solutions Pvt Ltd",
    location: "Kakinada, India · On-site",
    bullets: [
      "Built AI Interview Performance Analyzer end-to-end — CNN facial emotion recognition + NLP speech evaluation pipeline using PyTorch",
      "Built Car Price Prediction MLOps Pipeline — Random Forest, Docker containerization, CI/CD automation, Streamlit deployment",
      "Full pipeline ownership from raw data to deployed product — no senior ML guidance",
    ],
    accent: true,
  },
  {
    date: "Sep 2025 – Dec 2025",
    role: "Software Developer",
    company: "Swetrasoft",
    location: "Tranås, Sweden · Remote",
    bullets: [
      "iOS application development as part of a cross-functional remote team",
      "Managed tasks and sprint workflows via Jira in an Agile environment",
      "Strengthened async collaboration and communication across time zones",
    ],
    accent: false,
  },
  {
    date: "Apr 2025 – May 2025",
    role: "Data Analyst",
    company: "ULEARN",
    location: "Kakinada, India · Remote",
    bullets: [
      "Analyzed India AQI dataset using Power BI with DAX-based calculated measures",
      "Built interactive multi-view dashboards visualizing pollution trends across regions",
      "Compiled 30-slide analytical report supporting environmental and health trend analysis",
    ],
    accent: false,
  },
  {
    date: "Oct 2023 – Apr 2026",
    role: "Club Lead",
    company: "John McCarthy AI Club · Aditya Degree College",
    location: "Kakinada, India",
    bullets: [
      "Led the official AI/ML student community under the Department of Artificial Intelligence for 2.5 years",
      "Coordinated faculty-guided projects, technical workshops, and interdisciplinary initiatives",
      "Mentored junior students on ML concepts, project development, and AI career direction",
      "Promoted ethical and responsible AI practices through hands-on workshops",
    ],
    accent: false,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-[100px] px-8 max-w-5xl mx-auto">

      {/* Header */}
      <div className="vertical-accent pl-6 mb-16">
        <span className="block mb-2 text-xs font-bold tracking-[0.2em] uppercase text-[#00C9A7] font-['Space_Grotesk']">
          Experience
        </span>
        <h2 className="font-['Space_Grotesk'] text-white text-3xl font-semibold">
          Professional Journey
        </h2>
      </div>

      {/* Timeline */}
      <div className="relative border-l border-[#5A9ABF]/20 ml-4 md:ml-8 pl-8 md:pl-12 space-y-16">
        {experiences.map((exp, i) => (
          <div key={i} className="relative group">

            {/* Timeline dot */}
            <div
              className={
                "absolute -left-[41px] md:-left-[57px] top-1 w-4 h-4 rounded-full border-4 border-[#080E1E] transition-all duration-300 " +
                (exp.accent
                  ? "bg-[#00C9A7] group-hover:shadow-[0_0_12px_rgba(0,201,167,0.6)]"
                  : "bg-[#00597b] group-hover:bg-[#00C9A7]")
              }
            />

            {/* Date */}
            <span className="block mb-1 text-xs font-bold tracking-widest uppercase text-slate-500 font-['Space_Grotesk']">
              {exp.date}
            </span>

            {/* Role */}
            <h3 className="font-['Space_Grotesk'] text-white text-xl font-semibold">
              {exp.role}
            </h3>

            {/* Company */}
            <p className="text-[#00C9A7] text-sm font-medium mt-1 font-['Inter']">
              {exp.company}
            </p>

            {/* Location */}
            <p className="text-[#5a9abf] text-xs mt-0.5 font-['Inter'] tracking-wide">
              {exp.location}
            </p>

            {/* Bullets */}
            <ul className="mt-4 space-y-2">
              {exp.bullets.map((b, j) => (
                <li
                  key={j}
                  className="flex items-start gap-3 font-['Inter'] text-sm text-[#8fcef5] font-light leading-relaxed"
                >
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-[#00C9A7] flex-shrink-0" />
                  {b}
                </li>
              ))}
            </ul>

          </div>
        ))}
      </div>

    </section>
  );
}