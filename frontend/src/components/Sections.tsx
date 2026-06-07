"use client";

import { useEffect } from "react";
import {
  services,
  whyChoose,
  ctaBanner,
  afterTraining,
  badges,
  testimonials,
  blogPosts,
} from "@/data/siteData";
import ScheduleBoard from "@/components/ScheduleBoard";

function useScrollReveal() {
  useEffect(() => {
    const targets = document.querySelectorAll(
      ".animate-on-scroll, .animate-fade"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}

export default function Sections() {
  useScrollReveal();

  return (
    <main>
      {/* Services */}
      <section className="bg-white py-16" id="services">
        <div className="container">
          <h2 className="animate-fade mb-8 text-center font-montserrat text-3xl font-extrabold text-dark">
            Services We Offer
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {services.map((s: any, i: number) => (
              <div
                key={s.title}
                className={`animate-on-scroll delay-${(i + 1) * 100} rounded-lg border border-gray-200 p-6 text-center shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md`}
              >
                <div className="mb-4 text-4xl">{s.icon}</div>
                <h3 className="mb-2 font-montserrat text-xl font-bold text-teal">
                  {s.title}
                </h3>
                <p className="text-gray-600">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="bg-gray-100 py-12" id="why-choose">
        <div className="container">
          <h2 className="animate-fade mb-6 text-center font-montserrat text-3xl font-extrabold text-dark">
            Why Choose Kim
          </h2>

          <ul className="mx-auto max-w-2xl space-y-3">
            {whyChoose.map((item: string, i: number) => (
              <li
                key={item}
                className={`animate-on-scroll delay-${(i + 1) * 100} flex items-start gap-3 text-gray-800`}
              >
                <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-teal text-xs font-bold text-white">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-green py-12 text-center text-white" id="cta">
        <div className="container">
          <p className="animate-fade font-montserrat text-xl font-bold">
            {ctaBanner.text}
          </p>
        </div>
      </section>

      {/* Schedule */}
      <section className="bg-[#e8ede8] py-20" id="schedule">
        <div className="container">
          <p className="animate-fade mb-3 text-center font-montserrat text-xs font-extrabold uppercase tracking-[0.25em] text-teal">
            Schedule
          </p>

          <h2 className="animate-fade mb-2 text-center font-montserrat text-3xl font-black text-dark md:text-4xl">
            Schedule &amp; Upcoming Classes
          </h2>

          <div className="animate-fade mx-auto mt-3 h-1 w-14 rounded-full bg-green" />

          <p className="animate-fade mx-auto mb-10 mt-5 max-w-2xl text-center text-sm leading-7 text-gray-600 md:text-base">
            Browse our class schedule, pick the perfect fit, and register in
            seconds.
          </p>

          <ScheduleBoard />
        </div>
      </section>

      {/* After Training */}
      <section className="bg-gray-50 py-16" id="after-training">
        <div className="container">
          <h2 className="animate-fade mb-2 text-center font-montserrat text-3xl font-extrabold text-dark">
            After Our Training
          </h2>

          <p className="animate-fade mx-auto mb-10 max-w-xl text-center text-sm text-gray-500">
            Your dog will come home with these amazing new skills — and a whole
            new confidence.
          </p>

          <div className="flex flex-col items-center gap-6 md:flex-row md:gap-8">
            {/* Left skills */}
            <div className="flex w-full flex-col gap-4 md:w-[30%]">
              {afterTraining.slice(0, 3).map((skill: any, i: number) => (
                <div
                  key={skill.title}
                  className={`animate-on-scroll delay-${(i + 1) * 100}
                    group flex cursor-default items-center gap-4 rounded-xl
                    border border-teal-100 bg-white/80 p-4
                    shadow-sm transition-all duration-300 ease-out
                    hover:-translate-y-1 hover:scale-[1.02]
                    hover:border-teal-300 hover:bg-white
                    hover:shadow-[0_6px_24px_rgba(45,138,158,0.15)]`}
                >
                  <div
                    className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full
                    border-2 border-green/20 bg-green/10 text-2xl transition-all duration-300
                    group-hover:scale-110 group-hover:border-green/40 group-hover:bg-green/20"
                  >
                    {skill.icon}
                  </div>

                  <div>
                    <p className="font-montserrat text-sm font-semibold leading-tight text-dark transition-colors duration-300 group-hover:text-teal">
                      {skill.title}
                    </p>
                    <p className="mt-0.5 text-xs text-gray-500">
                      {skill.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Center image */}
            <div
              className="animate-fade h-56 w-56 flex-shrink-0 overflow-hidden rounded-full
              border-4 border-green/30 shadow-xl md:h-64 md:w-64"
            >
              <img
                src="/images/after-training.jpg"
                alt="Happy trained dog"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Right skills */}
            <div className="flex w-full flex-col gap-4 md:w-[30%]">
              {afterTraining.slice(3).map((skill: any, i: number) => (
                <div
                  key={skill.title}
                  className={`animate-on-scroll delay-${(i + 1) * 100}
                    group flex cursor-default items-center gap-4 rounded-xl
                    border border-teal-100 bg-white/80 p-4
                    shadow-sm transition-all duration-300 ease-out
                    hover:-translate-y-1 hover:scale-[1.02]
                    hover:border-teal-300 hover:bg-white
                    hover:shadow-[0_6px_24px_rgba(45,138,158,0.15)]`}
                >
                  <div
                    className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full
                    border-2 border-green/20 bg-green/10 text-2xl transition-all duration-300
                    group-hover:scale-110 group-hover:border-green/40 group-hover:bg-green/20"
                  >
                    {skill.icon}
                  </div>

                  <div>
                    <p className="font-montserrat text-sm font-semibold leading-tight text-dark transition-colors duration-300 group-hover:text-teal">
                      {skill.title}
                    </p>
                    <p className="mt-0.5 text-xs text-gray-500">
                      {skill.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="animate-fade mt-10 text-center text-sm text-gray-600">
            Schedule your free consultation or give us a call&nbsp;
            <a
              href="tel:5127965783"
              className="font-semibold text-teal hover:underline"
            >
              (512) 796-5783
            </a>
          </p>
        </div>
      </section>

      {/* Badges */}
      <section className="bg-white py-12" id="badges">
        <div className="container flex flex-wrap justify-center gap-8">
          {badges.map((b: any, i: number) => (
            <img
              key={b.alt}
              src={b.src}
              alt={b.alt}
              className={`animate-on-scroll delay-${(i + 1) * 100} h-12 object-contain`}
            />
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#2d8a9e] py-16 text-white" id="testimonials">
        <div className="container">
          <h2 className="animate-fade mb-2 text-center font-montserrat text-3xl font-extrabold">
            Our Satisfied Customers
          </h2>

          <p className="animate-fade mx-auto mb-10 max-w-xl text-center text-sm text-white/80">
            We are very proud and honored to share some of the wonderful results
            our clients have experienced.
          </p>

          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {testimonials.map((t: any, i: number) => (
              <div
                key={t.name}
                className={`animate-on-scroll delay-${(i + 1) * 100} flex flex-col rounded-lg border border-white/20 bg-white/15 p-6 shadow-sm backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/20`}
              >
                <div className="mb-4 flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="h-12 w-12 rounded-full border-2 border-white/50 object-cover"
                  />
                  <div>
                    <div className="font-montserrat font-semibold text-white">
                      {t.name}
                    </div>
                    <div className="text-xs text-white/70">
                      {t.location ?? "Austin, TX"}
                    </div>
                  </div>
                </div>

                <div className="mb-3 text-yellow-300">★★★★★</div>

                <p className="text-sm leading-6 text-white/85">
                  {t.text ?? t.review ?? t.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="bg-white py-16" id="blog">
        <div className="container">
          <h2 className="animate-fade mb-8 text-center font-montserrat text-3xl font-extrabold text-dark">
            From Our Blog
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            {blogPosts.map((post: any, i: number) => (
              <article
                key={post.title}
                className={`animate-on-scroll delay-${(i + 1) * 100} overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md`}
              >
                <img
                  src={post.image ?? post.src}
                  alt={post.title}
                  className="h-40 w-full object-cover"
                />

                <div className="p-4">
                  <span className="mb-2 block font-montserrat text-xs font-bold uppercase tracking-wider text-green">
                    {post.category ?? "Training Tips"}
                  </span>

                  <h3 className="mb-2 font-montserrat text-base font-bold text-dark">
                    {post.title}
                  </h3>

                  <p className="mb-3 text-sm leading-6 text-gray-600">
                    {post.excerpt ?? post.desc ?? post.description}
                  </p>

                  <a
                    href="#"
                    className="font-montserrat text-sm font-bold text-green hover:text-green-dark"
                  >
                    Read More →
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 flex justify-center gap-2">
            <span className="h-3 w-3 rounded-full bg-green" />
            <span className="h-3 w-3 rounded-full bg-gray-300" />
            <span className="h-3 w-3 rounded-full bg-gray-300" />
          </div>
        </div>
      </section>
    </main>
  );
}