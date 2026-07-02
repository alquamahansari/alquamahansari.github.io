// src/pages/Projects.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const allProjects = [
  {
    id: "interview-analyzer",
    category: "Multimodal AI",
    tag: "CV + NLP",
    title: "AI Interview Performance Analyzer",
    image: "/images/interview-analyzer.png",
    short: "AI system evaluating interview candidates using computer vision and NLP.",
    details:
      "CNN-based facial emotion recognition combined with NLP speech evaluation pipeline. Generates structured scoring and performance feedback reports with confidence and communication metrics.",
    tech: ["Python", "CNN", "NLP", "TensorFlow", "OpenCV", "NLTK", "Streamlit"],
    repo: "https://github.com/alqamahansari/ai-interview-performance-analyzer",
  },
  {
    id: "car-price",
    category: "Production ML",
    tag: "MLOps",
    title: "Car Price Prediction – MLOps Pipeline",
    image: "/images/car-price-prediction.png",
    short: "End-to-end ML pipeline built to production standards.",
    details:
      "Random Forest regression with modular preprocessing, cross-validation, full evaluation suite (R², RMSE, MAE), Docker containerization, CI/CD automation via GitHub Actions, and Streamlit real-time inference interface.",
    tech: ["Python", "Random Forest", "Streamlit", "Docker", "CI/CD"],
    repo: "https://github.com/alqamahansari/car-price-prediction",
  },
  {
    id: "emotion-detection",
    category: "Deep Learning",
    tag: "Computer Vision",
    title: "Facial Emotion Detection System",
    image: "/images/emotion-detection.png",
    short: "CNN-based facial emotion classification from images.",
    details:
      "Computer vision system using CNN architectures for multi-class facial emotion recognition with structured training, evaluation pipelines, and image preprocessing.",
    tech: ["Python", "TensorFlow", "OpenCV", "CNN"],
    repo: "https://github.com/alqamahansari/Emotion-Detection-System",
  },
  {
    id: "depression-detection",
    category: "NLP",
    tag: "Text Classification",
    title: "Depression Detection from Text",
    image: "/images/depression-detection.png",
    short: "NLP pipeline for depression signal detection from text data.",
    details:
      "Text classification system using NLP techniques to identify depression indicators in written content. Includes preprocessing, feature extraction, and model evaluation pipeline.",
    tech: ["Python", "Scikit-learn", "NLP", "NLTK"],
    repo: "https://github.com/alqamahansari/depression-detection",
  },
  {
    id: "atmos",
    category: "Frontend",
    tag: "API Integration",
    title: "Atmos – Weather Intelligence App",
    image: "/images/atmos.png",
    short: "Real-time weather visualization with dynamic UI.",
    details:
      "Frontend application using OpenWeather API for real-time weather data with responsive dynamic interface and clean visual design.",
    tech: ["HTML", "CSS", "JavaScript", "OpenWeather API"],
    repo: "https://github.com/alqamahansari/atmos",
  },
  {
    id: "automatic-railway-crossing",
    category: "IoT · Embedded",
    tag: "Arduino · Robotics",
    title: "Automatic Railway Crossing System",
    image: "/images/railway-crossing.png",
    short: "Arduino-based autonomous railway gate system with IR sensing and servo actuation.",
    details:
      "Physical scale model using Arduino Nano with IR sensor-based train detection, servo-controlled barrier gates, road traffic signal automation, buzzer alerts, and train signal sequencing — built for engineering exhibition.",
    tech: ["Arduino", "C++", "IR Sensor", "Servo Motor", "Embedded Systems"],
    repo: "https://github.com/alqamahansari/automatic-railway-crossing-system",
  },
];

function ProjectCard({ project }) {
  return (
    <article
      className="flex flex-col md:flex-row bg-[#0D2137] overflow-hidden group transition-all duration-300 hover:-translate-y-1 md:h-[280px]"
      style={{
        border: "1px solid rgba(90,154,191,0.2)",
        borderLeft: "4px solid #00C9A7",
        boxShadow: "0 0 30px rgba(0,201,167,0.05)",
      }}
    >
      {/* Image area — 40%, fixed height from parent */}
      <div className="w-full md:w-[40%] relative min-h-[200px] md:min-h-0 overflow-hidden bg-[#080E1E] flex-shrink-0">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover object-center opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
          />
        ) : (
          <>
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: "linear-gradient(#5A9ABF08 1px, transparent 1px), linear-gradient(90deg, #5A9ABF08 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(0,201,167,0.07) 0%, transparent 70%)",
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="w-16 h-16 rounded-full border border-[#00C9A7]/20 flex items-center justify-center"
                style={{ boxShadow: "0 0 40px rgba(0,201,167,0.1)" }}
              >
                <div className="w-8 h-8 rounded-full bg-[#00C9A7]/10 border border-[#00C9A7]/30" />
              </div>
            </div>
          </>
        )}
        {/* Category badge */}
        <div className="absolute top-4 left-4 z-10">
          <span
            className="px-3 py-1 text-[10px] font-bold text-[#00C9A7] border border-[#00C9A7]/30 uppercase tracking-widest font-['Space_Grotesk']"
            style={{ background: "rgba(8,14,30,0.8)" }}
          >
            {project.category}
          </span>
        </div>
      </div>

      {/* Content — 60%, scrolls internally if needed */}
      <div className="w-full md:w-[60%] p-6 md:p-8 flex flex-col justify-between gap-3 overflow-hidden">
        <div className="space-y-2">
          <span className="text-[10px] font-bold tracking-widest uppercase text-[#00C9A7]/80 font-['Space_Grotesk']">
            {project.tag}
          </span>
          <h2 className="font-['Space_Grotesk'] text-white text-xl font-semibold leading-tight">
            {project.title}
          </h2>
          <p className="font-['Inter'] text-[#8fcef5] text-sm font-medium">
            {project.short}
          </p>
          <p className="font-['Inter'] text-[#5a9abf] text-sm font-light leading-relaxed line-clamp-2">
            {project.details}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-3 py-1 text-[#8fcef5] text-[11px] font-medium tracking-wide font-['Space_Grotesk'] uppercase"
              style={{ border: "1px solid rgba(90,154,191,0.2)", background: "#080E1E" }}
            >
              {t}
            </span>
          ))}
        </div>

        <a
          href={project.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-[#00C9A7] font-semibold text-sm font-['Space_Grotesk'] hover:translate-x-2 transition-transform duration-300"
        >
          View Code →
        </a>
      </div>
    </article>
  );
}

export default function Projects() {
  const navigate = useNavigate();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#080E1E] min-h-screen text-[#dde2f9]">
      <Header />

      <main className="pt-32 pb-24 px-8 max-w-7xl mx-auto">

        <div className="vertical-accent pl-6 mb-16">
          <span className="block mb-2 text-xs font-bold tracking-[0.2em] uppercase text-[#00C9A7] font-['Space_Grotesk']">
            All Projects
          </span>
          <h1
            className="font-['Space_Grotesk'] text-white font-bold"
            style={{ fontSize: "48px", lineHeight: "1.1", letterSpacing: "-0.02em" }}
          >
            Things I've Built
          </h1>
          <p className="font-['Inter'] text-[#8fcef5] text-lg font-light max-w-2xl mt-4">
            End-to-end ML systems built to ship — not just to score well on paper.
          </p>
        </div>

        <div className="space-y-8">
          {allProjects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>

        <div className="mt-24">
          <button
            onClick={() => {
              navigate("/");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 text-[#00C9A7] font-bold text-sm uppercase tracking-widest font-['Space_Grotesk'] hover:opacity-70 transition-opacity"
          >
            ← Back to Home
          </button>
        </div>

      </main>

      <Footer />
    </div>
  );
}