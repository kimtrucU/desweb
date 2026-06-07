"use client";

import { useState } from "react";

export default function Hero() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dogInfo, setDogInfo] = useState("");
  const [interest, setInterest] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Consultation request sent!");
  };

  return (
    <section className="hero" id="hero">
      <div className="hero-bg">
        <img src="/images/hero.png" alt="Kim with her Husky" className="hero-img" />
        <div className="hero-overlay"></div>
      </div>
      <div className="container hero-content">
        <div className="hero-text">
          <h1 className="hero-title">Expert Dog Training,<br /><span className="hero-big">AUSTIN STYLE</span></h1>
        </div>
        <div className="consult-card" id="consultation">
          <h2 className="consult-title">CUSTOMIZED<br />CONSULTATION</h2>
          <form className="consult-form" id="consultForm" noValidate onSubmit={handleSubmit}>
            <input type="text" id="f-name" className="c-inp" placeholder="Your name" value={name} onChange={e => setName(e.target.value)} required />
            <input type="email" id="f-email" className="c-inp" placeholder="Email address" value={email} onChange={e => setEmail(e.target.value)} required />
            <input type="tel" id="f-phone" className="c-inp" placeholder="Contact number" value={phone} onChange={e => setPhone(e.target.value)} required />
            <input type="text" id="f-dog" className="c-inp" placeholder="Your dog's name, age & breed" value={dogInfo} onChange={e => setDogInfo(e.target.value)} required />
            <div className="sel-wrap">
              <select id="f-interest" className="c-inp c-sel" required value={interest} onChange={e => setInterest(e.target.value)}>
                <option value="" disabled>I'm interested in...</option>
                <option value="Group Obedience">Group Obedience</option>
                <option value="Private Obedience">Private Obedience</option>
                <option value="Puppy Training">Puppy Training</option>
                <option value="Behavior Modification">Behavior Modification</option>
                <option value="Other">Other</option>
              </select>
              <svg className="sel-arr" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"/></svg>
            </div>
            <button type="submit" className="btn-request" id="btnRequest">REQUEST NOW</button>
            <p className="c-privacy">
              <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              WE DO NOT SHARE YOUR INFORMATION
            </p>
          </form>
        </div>
      </div>
      <div className="picket-fence"></div>
    </section>
  );
}
