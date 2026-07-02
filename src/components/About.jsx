// src/components/About.jsx
import React from "react";

const stats = [
  { value: "2",   label: "Production Projects Shipped" },
  { value: "4",   label: "Months MLOps Internship" },
  { value: "5", label: "Projects Shipped" },
];

export default function About() {
  return (
    <section id="about" className="py-[100px] px-8 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-start">

        {/* ── Left: Text ── */}
        <div className="space-y-8">
          <div className="vertical-accent pl-6">
            <span className="block mb-2 text-xs font-bold tracking-[0.2em] uppercase text-[#00C9A7] font-['Space_Grotesk']">
              About
            </span>
            <h2 className="font-['Space_Grotesk'] text-white text-3xl font-semibold leading-tight">
              Most ML models never leave the notebook.
              <span className="text-[#00C9A7]"> I build the ones that do.</span>
            </h2>
          </div>

          <div className="space-y-4 font-['Inter'] text-[#8fcef5] text-base font-light leading-relaxed">
            <p>
              I own the full ML lifecycle — from raw data and feature engineering
              to model training, evaluation, and containerized deployment with
              CI/CD automation. My work lives at the intersection of strong
              modeling fundamentals and production engineering.
            </p>
            <p>
              During my internship at Tanvika Solutions, I independently shipped
              two production ML systems from scratch — a multimodal AI Interview
              Analyzer combining CNN-based emotion recognition with NLP speech
              evaluation, and a full MLOps pipeline with Docker, CI/CD, and a
              Streamlit inference interface.
            </p>
            <p>
              I am currently deepening my focus on NLP systems evolving toward
              LLM infrastructure — and actively seeking entry-level ML Engineering
              and MLOps roles at early-stage AI startups where ownership is the job.
            </p>
          </div>
        </div>

        {/* ── Right: Stats ── */}
        <div className="grid gap-6">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={
                "bg-[#0D2137] border border-[#5A9ABF]/20 p-8 flex flex-col justify-center transition-all duration-300 hover:border-[#00C9A7]/50 " +
                (i === 0 ? "teal-glow" : "")
              }
            >
              <span
                className="font-['Space_Grotesk'] text-[#00C9A7] font-bold"
                style={{ fontSize: "48px", lineHeight: "1.1" }}
              >
                {stat.value}
              </span>
              <span className="mt-2 text-xs font-bold tracking-[0.15em] uppercase text-slate-400 font-['Space_Grotesk']">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}