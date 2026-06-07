"use client";

export default function StickyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-dark border-t border-white/10 shadow-2xl">
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-3 py-3">
        {/* Left – contact info */}
        <div className="flex items-center gap-6 text-sm text-white/80">
          <a href="tel:5127965783" className="flex items-center gap-2 hover:text-white transition-colors">
            <svg className="w-4 h-4 text-teal" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            (512) 796‑5783
          </a>
          <span className="hidden sm:block text-white/30">|</span>
          <span className="hidden sm:flex items-center gap-2">
            <svg className="w-4 h-4 text-teal" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884zM18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            info@kimthedogtrainer.com
          </span>
        </div>

        {/* Right – CTA button */}
        <a
          href="#hero"
          className="flex-shrink-0 px-5 py-2 rounded-full bg-green text-white text-sm font-montserrat font-semibold
            hover:bg-green-dark transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-green/30"
        >
          Book Free Consultation →
        </a>
      </div>
    </div>
  );
}
