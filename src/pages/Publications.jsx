// src/pages/Publications.jsx
import React from "react";
import { Link } from "react-router-dom";

const papers = [
  {
    title: "Improving NLP Models with Transfer Learning",
    authors: "Mohammad Alquamah Ansari, Co-author",
    venue: "ICML 2025",
    summary: "Explores transfer learning techniques for NLP.",
    link: "#"
  }
];

export default function Publications() {
  return (
    <main className="pt-24 pb-16 max-w-4xl mx-auto px-6">
      <header className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold text-indigo-600">Publications</h1>
          <p className="text-slate-600 mt-2">Peer-reviewed work and technical reports.</p>
        </div>
        <Link to="/" className="text-sm px-3 py-2 border rounded hover:bg-slate-50">Back to Home</Link>
      </header>

      <div className="space-y-6">
        {papers.map((p, i) => (
          <article key={i} className="border rounded p-6 bg-white shadow">
            <h3 className="text-xl font-semibold mb-1">{p.title}</h3>
            <p className="italic text-sm mb-2">{p.authors} — {p.venue}</p>
            <p className="text-slate-700 mb-3">{p.summary}</p>
            <a href={p.link} target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline">Read Paper</a>
          </article>
        ))}
      </div>
    </main>
  );
}
