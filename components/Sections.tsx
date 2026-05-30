import {
  services,
  whyChoose,
  ctaBanner,
  schedule,
  afterTraining,
  badges,
  testimonials,
  blogPosts,
} from "@/data/siteData";

export default function Sections() {
  return (
    <main>
      {/* Services */}
      <section className="py-16 bg-white" id="services">
        <div className="container">
          <h2 className="font-montserrat text-3xl text-dark text-center mb-8">
            Services We Offer
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((s) => (
              <div
                key={s.title}
                className="border border-gray-200 rounded-lg p-6 text-center shadow-sm"
              >
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="font-montserrat text-xl text-teal mb-2">
                  {s.title}
                </h3>
                <p className="text-gray-600">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-12 bg-gray-100" id="why-choose">
        <div className="container">
          <h2 className="font-montserrat text-3xl text-dark text-center mb-6">
            Why Choose Kim
          </h2>
          <ul className="list-disc list-inside max-w-2xl mx-auto space-y-2 text-gray-800">
            {whyChoose.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-12 bg-green text-white text-center" id="cta">
        <div className="container">
          <p className="font-montserrat text-xl">{ctaBanner.text}</p>
        </div>
      </section>

      {/* Schedule */}
      <section className="py-16 bg-white" id="schedule">
        <div className="container">
          <h2 className="font-montserrat text-3xl text-dark text-center mb-8">
            Schedule & Upcoming Classes
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {schedule.map((item) => (
              <div
                key={item.date}
                className="border border-gray-200 rounded p-4 text-center shadow-sm"
              >
                <div className="font-montserrat text-teal mb-1">
                  {item.date}
                </div>
                <div className="font-semibold">{item.title}</div>
                <div className="text-sm text-gray-600">{item.time}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* After Training */}
      <section className="py-12 bg-gray-100" id="after-training">
        <div className="container">
          <h2 className="font-montserrat text-3xl text-dark text-center mb-6">
            After Our Training
          </h2>
          <ul className="list-disc list-inside max-w-2xl mx-auto space-y-2 text-gray-800">
            {afterTraining.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Badges */}
      <section className="py-12 bg-white" id="badges">
        <div className="container flex flex-wrap justify-center gap-8">
          {badges.map((b) => (
            <img
              key={b.alt}
              src={b.src}
              alt={b.alt}
              className="h-12 object-contain"
            />
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-100" id="testimonials">
        <div className="container">
          <h2 className="font-montserrat text-3xl text-dark text-center mb-8">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center"
              >
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-16 h-16 rounded-full mb-4"
                />
                <p className="italic text-gray-600 mb-2">\"{t.text}\"</p>
                <span className="font-montserrat text-teal">{t.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="py-16 bg-white" id="blog">
        <div className="container">
          <h2 className="font-montserrat text-3xl text-dark text-center mb-8">
            Blog
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((p) => (
              <article
                key={p.id}
                className="border border-gray-200 rounded overflow-hidden shadow-sm"
              >
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-montserrat text-xl text-teal mb-2">
                    {p.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">
                    {p.excerpt}
                  </p>
                  <span className="text-xs text-gray-500">{p.date}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
