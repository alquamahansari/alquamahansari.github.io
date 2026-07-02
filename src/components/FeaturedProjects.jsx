// src/components/FeaturedProjects.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    tag: "Multimodal AI · CV + NLP",
    title: "AI Interview Performance Analyzer",
    image: "/images/interview-analyzer.png",
    description:
      "Multimodal pipeline combining CNN-based facial emotion recognition with NLP speech evaluation. Generates structured interview scoring, confidence metrics, and performance feedback reports.",
    tech: ["PyTorch", "CNN", "NLP", "OpenCV", "NLTK", "Streamlit"],
    repo: "https://github.com/alqamahansari/ai-interview-analyzer",
    flip: false,
  },
  {
    tag: "Production ML · MLOps",
    title: "Car Price Prediction MLOps Pipeline",
    image: "/images/car-price-prediction.png",
    description:
      "End-to-end ML pipeline with Random Forest regression, modular preprocessing, full evaluation suite (R², RMSE, MAE), Docker containerization, CI/CD automation via GitHub Actions, and Streamlit real-time inference.",
    tech: ["Scikit-learn", "Docker", "CI/CD", "Streamlit", "GitHub Actions"],
    repo: "https://github.com/alqamahansari/car-price-prediction",
    flip: true,
  },
];

function ProjectCard({ project }) {
  return (
    <div
      className="flex flex-col md:flex-row bg-[#0D2137] border border-[#5A9ABF]/20 overflow-hidden group hover:border-[#00C9A7]/40 transition-all duration-300"
    >
      {/* Image area */}
      <div
        className={
          "md:w-[50%] relative overflow-hidden bg-[#080E1E] min-h-[240px] flex items-center justify-center " +
          (project.flip ? "md:order-2" : "")
        }
      >
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 absolute inset-0"
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
                background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(0,201,167,0.08) 0%, transparent 70%)",
              }}
            />
            <span
              className="relative z-10 bg-[#00C9A7]/10 border border-[#00C9A7]/30 text-[#00C9A7] text-xs font-bold tracking-widest uppercase px-4 py-2 font-['Space_Grotesk']"
            >
              {project.tag.split("·")[0].trim()}
            </span>
          </>
        )}
      </div>

      {/* Content */}
      <div
        className={
          "md:w-[60%] p-8 md:p-12 space-y-5 flex flex-col justify-center " +
          (project.flip ? "md:order-1" : "")
        }
      >
        <span className="text-xs font-bold tracking-widest uppercase text-[#00C9A7] font-['Space_Grotesk']">
          {project.tag}
        </span>

        <h3 className="font-['Space_Grotesk'] text-white text-2xl md:text-3xl font-semibold leading-tight">
          {project.title}
        </h3>

        <p className="font-['Inter'] text-[#8fcef5] text-sm leading-relaxed font-light">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="border border-[#5A9ABF]/30 text-[#8fcef5] px-3 py-1 text-xs uppercase font-['Space_Grotesk'] font-medium tracking-wide"
            >
              {t}
            </span>
          ))}
        </div>

        <a
          href={project.repo}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-[#00C9A7] text-xs font-bold uppercase tracking-widest font-['Space_Grotesk'] hover:gap-4 transition-all duration-200 group/link"
        >
          View Code
          <span className="transition-transform duration-200 group-hover/link:translate-x-1">
            →
          </span>
        </a>
      </div>
    </div>
  );
}

export default function FeaturedProjects() {
  const navigate = useNavigate();

  return (
    <section id="projects" className="py-[100px] bg-[#040812]">
      <div className="max-w-7xl mx-auto px-8">

        <div className="vertical-accent pl-6 mb-16">
          <span className="block mb-2 text-xs font-bold tracking-[0.2em] uppercase text-[#00C9A7] font-['Space_Grotesk']">
            Projects
          </span>
          <h2 className="font-['Space_Grotesk'] text-white text-3xl font-semibold">
            Featured Engineering Work
          </h2>
        </div>

        <div className="space-y-12">
          {projects.map((p, i) => (
            <ProjectCard key={i} project={p} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={() => {
              navigate("/projects");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 text-[#00C9A7] text-xs font-bold uppercase tracking-widest font-['Space_Grotesk'] border border-[#00C9A7]/30 px-8 py-4 hover:bg-[#00C9A7]/10 transition-all duration-200 group"
          >
            View All Projects
            <span className="transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </button>
        </div>

      </div>
    </section>
  );
}