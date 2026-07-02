// src/components/Hero.jsx
import React from "react";

export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 grid-bg"
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: [
            "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(0,201,167,0.12) 0%, transparent 65%)",
            "radial-gradient(ellipse 40% 30% at 20% 80%, rgba(0,100,255,0.06) 0%, transparent 60%)",
            "radial-gradient(ellipse 30% 25% at 80% 20%, rgba(0,201,167,0.05) 0%, transparent 60%)",
          ].join(", "),
        }}
      />

      <div className="relative z-10 space-y-6 max-w-4xl pt-20">

        {/* Label */}
        <span className="block text-xs font-bold tracking-[0.3em] uppercase text-[#00C9A7] font-['Space_Grotesk']">
          Machine Learning Engineer
        </span>

        {/* Name — fixed spelling */}
        <h1
          className="text-5xl md:text-7xl font-bold text-white leading-tight font-['Space_Grotesk']"
          style={{ letterSpacing: "-0.02em" }}
        >
          Mohammad Alquamah Ansari
        </h1>

        {/* Tagline */}
        <p className="text-lg md:text-xl text-[#8fcef5] max-w-2xl mx-auto font-['Inter'] font-light leading-relaxed">
          I build systems that ship to real users — end-to-end, independently,
          all the way from raw data to deployed product.
        </p>

        {/* Stack pills */}
        <div className="flex flex-wrap justify-center gap-3 py-2 font-['Inter'] text-sm text-[#5a9abf]">
          {["NLP → LLMs", "PyTorch", "Docker", "CI/CD", "End-to-End ML"].map(
            (item, i, arr) => (
              <React.Fragment key={item}>
                <span>{item}</span>
                {i < arr.length - 1 && (
                  <span className="text-[#3c4a45]">·</span>
                )}
              </React.Fragment>
            )
          )}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
          <a
            href="/Mohammad-Alquamah-Ansari-Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="bg-[#00C9A7] text-[#00382d] px-8 py-4 font-['Space_Grotesk'] font-bold uppercase tracking-widest text-sm hover:brightness-110 transition-all duration-200"
            style={{ boxShadow: "0 0 30px rgba(0,201,167,0.2)" }}
          >
            View Resume
          </a>
          <button
            onClick={() => scrollTo("contact")}
            className="border border-[#5A9ABF] text-white px-8 py-4 font-['Space_Grotesk'] font-bold uppercase tracking-widest text-sm hover:bg-[#0D2137] hover:border-[#00C9A7] transition-all duration-200"
          >
            Let's Connect
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="pt-12 flex flex-col items-center gap-2 opacity-40">
          <span className="text-xs uppercase tracking-widest text-[#5a9abf] font-['Space_Grotesk']">
            Scroll
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-[#00C9A7] to-transparent" />
        </div>

      </div>
    </section>
  );
}