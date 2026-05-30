"use client";

import { useState } from "react";

export default function Hero() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [toast, setToast] = useState("");

  const validateEmail = (value: string) => /^\S+@\S+\.\S+$/.test(value);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) {
      setToast("Please fill in all fields.");
      return;
    }
    if (!validateEmail(email)) {
      setToast("Enter a valid email address.");
      return;
    }
    setToast("✅ Consultation request sent!");
    setName("");
    setEmail("");
    setMsg("");
    setTimeout(() => setToast(""), 3000);
  };

  return (
    <section className="bg-gray-100 py-20" id="hero">
      <div className="container text-center">
        <h1 className="font-montserrat text-4xl md:text-5xl text-dark mb-4">
          Transform Your Dog’s Life
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Professional training, personalized programs, and lifelong results.
        </p>

        <form
          className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md"
          onSubmit={handleSubmit}
        >
          <h2 className="font-montserrat text-2xl text-dark mb-4 text-left">
            Free Consultation
          </h2>
          <div className="mb-4 text-left">
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-600"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4 text-left">
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-600"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4 text-left">
            <label className="block text-sm font-medium mb-1">Message (optional)</label>
            <textarea
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-600"
              rows={3}
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green text-white font-montserrat py-2 rounded hover:bg-green-dark transition"
          >
            Send Request
          </button>
          {toast && (
            <div className="mt-4 text-center text-sm text-green">
              {toast}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
