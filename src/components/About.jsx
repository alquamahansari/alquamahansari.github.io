// src/components/About.jsx
import React from "react";

const stats = [
  { value: "2",   label: "Production Projects Shipped" },
  { value: "4",   label: "Months Software Dev Experience" },
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
              Most APIs never leave localhost.
              <span className="text-[#00C9A7]"> I build the ones that do.</span>
            </h2>
          </div>

          <div className="space-y-4 font-['Inter'] text-[#8fcef5] text-base font-light leading-relaxed">
            <p>
              I focus on the full backend lifecycle from API design and database
              schema to authentication, testing, and containerized deployment. My
              work sits at the intersection of solid engineering fundamentals
              (data structures, algorithms, system design) and shipping real,
              working systems.
            </p>
            <p>
              At Swetrasoft, I worked as a Software Developer on a cross-functional
              iOS team based in Sweden, contributing to feature development, code
              review, and Agile sprint workflows. I also completed an ML internship
              at Tanvika Solutions, shipping two production-oriented systems (a
              multimodal AI Interview Analyzer and a Dockerized MLOps pipeline),
              applying the same engineering discipline modular code, CI/CD,
              containerization that now anchors my backend work.
            </p>
            <p>
              I'm currently building out backend projects, including an
              authentication/IAM system with FastAPI and PostgreSQL, and actively
              looking for Software Engineer / Backend Developer roles where I can
              bring that same ownership.
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