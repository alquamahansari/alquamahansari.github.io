// src/components/Contact.jsx
import React, { useState } from "react";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/alqamahansari",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/alqamahansari",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    label: "Twitter",
    href: "https://x.com/alqamahansari",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    label: "HuggingFace",
    href: "https://huggingface.co/alqamahansari",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <circle cx="9" cy="10" r="1" fill="currentColor" stroke="none"/>
        <circle cx="15" cy="10" r="1" fill="currentColor" stroke="none"/>
        <path d="M8.5 14.5 C9.5 16.5 14.5 16.5 15.5 14.5" strokeLinecap="round"/>
        <path d="M4 9 C3 10 3 13 4 14" strokeLinecap="round"/>
        <path d="M20 9 C21 10 21 13 20 14" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:alquamahansari@gmail.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M2 7l10 7 10-7" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent("Reaching out from your portfolio");
    const body = encodeURIComponent(
      "Hi Alqamah,\n\nName: " +
        form.name +
        "\nEmail: " +
        form.email +
        "\n\n" +
        form.message
    );
    window.location.href =
      "mailto:alquamahansari@gmail.com?subject=" + subject + "&body=" + body;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-[100px] px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-24 items-start">

        {/* ── LEFT: Info + Socials ── */}
        <div className="space-y-10">
          <div className="vertical-accent pl-6">
            <span className="block mb-2 text-xs font-bold tracking-[0.2em] uppercase text-[#00C9A7] font-['Space_Grotesk']">
              Contact
            </span>
            <h2 className="font-['Space_Grotesk'] text-white text-4xl font-bold leading-tight">
              Let's Build Something
            </h2>
          </div>

          <p className="font-['Inter'] text-[#8fcef5] text-base font-light leading-relaxed">
            I am actively seeking entry-level ML Engineering and MLOps roles.
            If you are building something meaningful with AI — let's talk.
          </p>

          {/* Email link */}
          <a
            href="mailto:alquamahansari@gmail.com"
            className="flex items-center gap-4 group"
          >
            <div className="w-11 h-11 flex items-center justify-center rounded-full border border-[#5A9ABF]/20 bg-[#0D2137] text-[#00C9A7]">
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M2 7l10 7 10-7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="font-['Inter'] text-[#8fcef5] text-sm group-hover:text-[#00C9A7] transition-colors duration-200">
              alquamahansari@gmail.com
            </span>
          </a>

          {/* Social icons */}
          <div className="space-y-4">
            <p className="text-xs font-bold tracking-widest uppercase text-slate-500 font-['Space_Grotesk']">
              Find me on
            </p>
            <div className="flex gap-3">
              {socials.filter((s) => s.label !== "Email").map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  title={s.label}
                  className="w-11 h-11 flex items-center justify-center rounded-full border border-[#5A9ABF]/20 bg-[#0D2137] text-[#5a9abf] hover:text-[#00C9A7] hover:border-[#00C9A7]/50 transition-all duration-200"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = "0 0 16px rgba(0,201,167,0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ── RIGHT: Form ── */}
        <div
          className="bg-[#0D2137] border border-[#5A9ABF]/20 p-8 md:p-10"
          style={{ boxShadow: "0 0 40px rgba(0,201,167,0.08)" }}
        >
          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 rounded-full border-2 border-[#00C9A7] flex items-center justify-center mx-auto">
                <span className="text-[#00C9A7] text-2xl">✓</span>
              </div>
              <p className="font-['Space_Grotesk'] text-white text-xl font-semibold">
                Message sent!
              </p>
              <p className="font-['Inter'] text-[#8fcef5] text-sm">
                Thanks for reaching out. I will get back to you soon.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 text-xs uppercase tracking-widest text-[#00C9A7] font-bold font-['Space_Grotesk'] hover:underline"
              >
                Send another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="block text-xs font-bold tracking-widest uppercase text-slate-400 font-['Space_Grotesk']">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full bg-[#080E1E] border border-[#5A9ABF]/20 text-white p-4 text-sm font-['Inter'] placeholder-[#5a9abf]/40 focus:border-[#00C9A7] focus:outline-none transition-colors duration-200"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-bold tracking-widest uppercase text-slate-400 font-['Space_Grotesk']">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full bg-[#080E1E] border border-[#5A9ABF]/20 text-white p-4 text-sm font-['Inter'] placeholder-[#5a9abf]/40 focus:border-[#00C9A7] focus:outline-none transition-colors duration-200"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-bold tracking-widest uppercase text-slate-400 font-['Space_Grotesk']">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about the role or project..."
                  className="w-full bg-[#080E1E] border border-[#5A9ABF]/20 text-white p-4 text-sm font-['Inter'] placeholder-[#5a9abf]/40 focus:border-[#00C9A7] focus:outline-none transition-colors duration-200 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#00C9A7] text-[#00382d] font-['Space_Grotesk'] font-bold py-4 uppercase tracking-widest text-sm hover:brightness-110 transition-all duration-200"
              >
                Send Message →
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}