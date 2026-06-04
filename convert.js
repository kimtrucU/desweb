const fs = require('fs');
let html = fs.readFileSync('d:/desweb/index.html', 'utf8');

// Extract body content
let bodyMatch = html.match(/<body>([\s\S]*?)<script src=\"script.js\"><\/script>\s*<\/body>/);
if (!bodyMatch) {
  console.log('Body not found');
  process.exit(1);
}
let body = bodyMatch[1];

// Convert to JSX
body = body.replace(/class=\"/g, 'className=\"');
body = body.replace(/for=\"/g, 'htmlFor=\"');
body = body.replace(/<img([^>]*?)(?<!\/)>/g, '<img$1 />');
body = body.replace(/<input([^>]*?)(?<!\/)>/g, '<input$1 />');
body = body.replace(/<br>/g, '<br />');
body = body.replace(/<hr>/g, '<hr />');
body = body.replace(/style=\"([^\"]*)\"/g, (match, p1) => {
  return 'style={{' + p1.split(';').filter(s=>s.trim()).map(s => {
    let parts = s.split(':');
    let key = parts[0].trim().replace(/-([a-z])/g, (g) => g[1].toUpperCase());
    let value = parts[1].trim();
    return key + ': \'' + value + '\'';
  }).join(', ') + '}}';
});

// Remove comments
body = body.replace(/<!--[\s\S]*?-->/g, '');

// Self-close SVG tags
body = body.replace(/<circle([^>]*?)(?<!\/)>/g, '<circle$1 />');
body = body.replace(/<rect([^>]*?)(?<!\/)>/g, '<rect$1 />');
body = body.replace(/<ellipse([^>]*?)(?<!\/)>/g, '<ellipse$1 />');
body = body.replace(/<polyline([^>]*?)(?<!\/)>/g, '<polyline$1 />');
body = body.replace(/<path([^>]*?)(?<!\/)>/g, '<path$1 />');
body = body.replace(/<polygon([^>]*?)(?<!\/)>/g, '<polygon$1 />');

// SVG attributes camelCase
body = body.replace(/stroke-width/g, 'strokeWidth');
body = body.replace(/stroke-linecap/g, 'strokeLinecap');
body = body.replace(/stroke-linejoin/g, 'strokeLinejoin');
body = body.replace(/stroke-dasharray/g, 'strokeDasharray');

// Other React attributes
body = body.replace(/novalidate/g, 'noValidate');
body = body.replace(/ selected>/g, ' defaultValue=\"\">');
body = body.replace(/<option value=\"\" disabled defaultValue=\"\">/g, '<option value=\"\" disabled>');

// Create final JSX component
let output = `
"use client";

import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    // Basic menu toggle
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("navLinks");
    if (hamburger && navLinks) {
      hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        hamburger.classList.toggle("active");
      });
    }

    // Sticky navbar
    const navbar = document.getElementById("navbar");
    window.addEventListener("scroll", () => {
      if (window.scrollY > 40) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });
  }, []);

  return (
    <>
      ${body}
    </>
  );
}
`;

fs.writeFileSync('d:/desweb/src/app/page.tsx', output);
console.log('Conversion successful!');
