"use client";

import { useState } from "react";

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-12">
      {/* Email Subscribe Bar */}
      <div className="container mb-8 text-center">
        <h3 className="font-montserrat text-xl mb-4">
          Stay Updated – Subscribe to Our Newsletter
        </h3>
        <SubscribeForm />
      </div>

      {/* Main Footer */}
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-8 pb-8">
        <div>
          <h4 className="font-montserrat text-lg mb-2">Contact</h4>
          <p>Phone: (512) 796‑5783</p>
          <p>Email: info@kimthedogtrainer.com</p>
        </div>
        <div>
          <h4 className="font-montserrat text-lg mb-2">Location</h4>
          <p>1234 Doggo Street, Austin, TX</p>
        </div>
        <div>
          <h4 className="font-montserrat text-lg mb-2">Social</h4>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:text-teal">FB</a></li>
            <li><a href="#" className="hover:text-teal">IG</a></li>
            <li><a href="#" className="hover:text-teal">YT</a></li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-gray-900 py-4 text-center text-sm">
        © 2026 Kim The Dog Trainer. All Rights Reserved.
      </div>
    </footer>
  );
}

/* ---------- Subscribe form (client) ---------- */
function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const validate = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate(email)) {
      setMsg("Please enter a valid email.");
      return;
    }
    setMsg("🎉 You’ve subscribed!");
    setEmail("");
    setTimeout(() => setMsg(""), 3000);
  };

  return (
    <form className="flex justify-center max-w-md mx-auto" onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Your email"
        className="flex-1 py-2 px-4 rounded-l border-none focus:outline-none"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        type="submit"
        className="bg-teal text-white font-montserrat px-4 py-2 rounded-r hover:bg-teal-dark transition"
      >
        Subscribe
      </button>
      {msg && <p className="mt-2 text-center w-full text-sm text-white">{msg}</p>}
    </form>
  );
}
