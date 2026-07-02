// src/components/TechStack.jsx
import React from "react";

const stack = [
  {
    category: "Core AI & Modeling",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "Natural Language Processing",
      "Computer Vision",
      "Large Language Models",
      "Time-Series Modeling",
    ],
  },
  {
    category: "Tools & Frameworks",
    skills: [
      "PyTorch",
      "Scikit-learn",
      "XGBoost",
      "NumPy",
      "Pandas",
      "Streamlit",
      "Flask",
      "NLTK",
    ],
  },
  {
    category: "Engineering & Deployment",
    skills: [
      "MLOps",
      "Docker",
      "CI/CD",
      "GitHub Actions",
      "Git",
      "Python",
      "SQL",
      "Linux",
    ],
  },
];

export default function TechStack() {
  return (
    <section id="skills" className="py-[100px] bg-[#040812]">
      <div className="max-w-7xl mx-auto px-8">

        {/* Header — left aligned, matches all other sections */}
        <div className="vertical-accent pl-6 mb-16">
          <span className="block mb-2 text-xs font-bold tracking-[0.2em] uppercase text-[#00C9A7] font-['Space_Grotesk']">
            Technical Stack
          </span>
          <h2 className="font-['Space_Grotesk'] text-white text-3xl font-semibold">
            What I Build With
          </h2>
        </div>

        {/* Three columns */}
        <div className="grid md:grid-cols-3 gap-8">
          {stack.map((col, i) => (
            <div
              key={i}
              className="bg-[#0D2137] border border-[#5A9ABF]/10 p-8 space-y-6 hover:border-[#00C9A7]/30 transition-all duration-300"
            >
              <h4 className="font-['Space_Grotesk'] text-white font-bold uppercase tracking-widest text-sm border-b border-[#00C9A7]/30 pb-4">
                {col.category}
              </h4>
              <div className="flex flex-wrap gap-3">
                {col.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-[#080E1E] border border-[#5A9ABF]/20 text-[#8fcef5] text-xs font-medium font-['Inter'] hover:border-[#00C9A7]/50 hover:text-[#00C9A7] transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}