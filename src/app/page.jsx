"use client";

import { services, whyChoose, classes, afterTraining, testimonials, blogPosts } from "../data/data";
import Chatbot from "../components/Chatbot";

export default function Home() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Gửi yêu cầu tư vấn thành công! Chúng tôi sẽ liên hệ lại trong thời gian sớm nhất.");
    e.target.reset();
  };

  return (
    <main className="text-[#222]">

      {/* Hero */}
      <section className="bg-[#8cc76f] text-white py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Kim The Dog Trainer</h1>
        <p className="text-lg md:text-xl max-w-xl mx-auto">
          Huấn luyện chuyên nghiệp & spa chăm sóc sức khỏe cho thú cưng của bạn.
        </p>
        <a href="#consultation" className="mt-6 inline-block bg-[#222] hover:bg-[#8fc7d3] text-white py-2 px-6 rounded">
          Đặt lịch tư vấn
        </a>
      </section>

      {/* Consultation Form */}
      <section id="consultation" className="py-16 bg-[#8fc7d3] flex justify-center">
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
          <h2 className="text-2xl font-semibold mb-4 text-[#222]">Đặt lịch tư vấn</h2>
          <div className="grid gap-4">
            <input type="text" name="name" placeholder="Họ và tên" required className="border p-2 rounded w-full" />
            <input type="email" name="email" placeholder="Email" required className="border p-2 rounded w-full" />
            <input type="tel" name="phone" placeholder="Số điện thoại" required className="border p-2 rounded w-full" />
            <textarea name="message" placeholder="Nội dung nhu cầu" rows="4" className="border p-2 rounded w-full" />
          </div>
          <button type="submit" className="mt-4 w-full bg-[#8cc76f] hover:bg-[#8fc7d3] text-white py-2 rounded">Gửi ngay</button>
        </form>
      </section>

      {/* Services */}
      <section className="py-16 bg-white">
        <h2 className="text-center text-3xl font-bold mb-8">Dịch vụ</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto px-4">
          {services.map((s, i) => (
            <div key={i} className="border rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{s.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p>{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-16 bg-[#8fc7d3] text-white">
        <h2 className="text-center text-3xl font-bold mb-8">Tại sao chọn chúng tôi</h2>
        <ul className="max-w-3xl mx-auto list-disc list-inside space-y-2">
          {whyChoose.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Classes */}
      <section className="py-16 bg-white">
        <h2 className="text-center text-3xl font-bold mb-8">Các lớp học</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto px-4">
          {classes.map((c, i) => (
            <div key={i} className="border rounded-lg p-6 text-center hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-2">{c.name}</h3>
              <p>Thời gian: {c.duration}</p>
              <p>Giá: {c.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* After Training */}
      <section className="py-16 bg-[#8cc76f] text-white">
        <h2 className="text-center text-3xl font-bold mb-8">Sau khi huấn luyện</h2>
        <ul className="max-w-3xl mx-auto list-disc list-inside space-y-2">
          {afterTraining.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <h2 className="text-center text-3xl font-bold mb-8">Lời khách hàng nói</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto px-4">
          {testimonials.map((t, i) => (
            <div key={i} className="border-l-4 border-[#8cc76f] pl-4">
              <p className="italic mb-2">"{t.content}"</p>
              <p className="font-semibold">- {t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Blog */}
      <section className="py-16 bg-[#8fc7d3] text-white">
        <h2 className="text-center text-3xl font-bold mb-8">Blog mới nhất</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto px-4">
          {blogPosts.map((b, i) => (
            <div key={i} className="bg-white text-[#222] rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">{b.title}</h3>
              <p className="mb-4">{b.excerpt}</p>
              <a href={b.link} className="text-[#8cc76f] hover:underline">Đọc tiếp →</a>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#222] text-white py-8 text-center">
        <p>© {new Date().getFullYear()} Kim The Dog Trainer – All rights reserved.</p>
        <p className="mt-2">Địa chỉ: 123 Đường ABC, Quận 1, TP.HCM | Phone: 0909.123.456</p>
      </footer>

      {/* Floating Chatbot */}
      <Chatbot />
    </main>
  );
}
