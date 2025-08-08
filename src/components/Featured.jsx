// src/components/Featured.jsx
import React from 'react'
import { Link } from 'react-router-dom'

const items = [
  ["Genesis 2.1 Released", "Model Update", "Aug 9, 2025"],
  ["Chikoro Safety Report", "Trust & Safety", "Aug 3, 2025"],
  ["Building Africa-first Agents", "Research", "Jul 18, 2025"],
  ["Exodus: Lightweight, Fast, Local", "Deployment", "Jul 2, 2025"],
  // ["Chikoro at EduTech Africa 2025", "Events", "Jun 13, 2025"],
  ["Fine-tuning Shona and Swahili Models", "Chikoro AI", "May 27, 2025"],
];

// simple slugify
const slugify = (title) =>
  title
    .toLowerCase()
    .replace(/[…\u2026]/g, '')           // remove ellipses
    .replace(/[^\w\s-]/g, '')            // strip non-word chars
    .trim()
    .replace(/\s+/g, '-')

export default function Featured() {
  return (
    <section id="featured" className="featured">
      <div className="container">
        <h3>Featured</h3>
        <ul className="featured-list">
          {items.map(([title, type, date]) => {
            const slug = slugify(title);
            return (
              <li key={slug}>
                <Link to={`/featured/${slug}`}>
                  <span>{title}</span>
                  <em>{type}</em>
                  <time>{date}</time>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
