import { useState, useEffect } from "react";

// Các trả lời dựa trên keyword
const replies = {
  spa: "Chúng tôi cung cấp dịch vụ spa toàn diện: tắm, cắt móng, massage. Giá từ 200.000₫.",
  giá: "Giá dịch vụ huấn luyện từ 3.000.000₫, spa từ 200.000₫. Xem chi tiết ở mục Services.",
  khuyến: "Hiện đang có chương trình giảm 10% cho gói huấn luyện 2 tháng.",
  huấn: "Chúng tôi có 3 cấp độ huấn luyện: Cơ bản, Trung cấp, Nâng cao.",
  "chó con": "Chó con cần tập trung vào xã hội hoá và vệ sinh cơ bản.",
  "chó hung": "Chúng tôi có chương trình đặc biệt giúp giảm tính hung dữ.",
  liên: "Bạn có thể liên hệ qua form hoặc số điện thoại 0909.123.456.",
  email: "Địa chỉ email: contact@kimdogtrainer.com",
  "giờ mở": "Mở cửa: Thứ 2‑Thứ 6: 8:00‑20:00, Thứ 7‑CN: 9:00‑18:00",
};

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const userMsg = input.trim();
    const lower = userMsg.toLowerCase();
    const key = Object.keys(replies).find((k) => lower.includes(k));
    const botMsg = key ? replies[key] : "Xin lỗi, tôi chưa hiểu. Vui lòng hỏi lại.";
    setHistory((prev) => [...prev, { from: "user", text: userMsg }, { from: "bot", text: botMsg }]);
    setInput("");
  };

  // cuộn xuống khi có tin mới
  useEffect(() => {
    const chatBox = document.getElementById("chatbox");
    if (chatBox) chatBox.scrollTop = chatBox.scrollHeight;
  }, [history, open]);

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <button
        onClick={() => setOpen(!open)}
        className="p-3 rounded-full bg-[#8cc76f] text-white shadow-lg hover:bg-[#8fc7d3]"
      >
        {open ? "✕" : "💬"}
      </button>

      {open && (
        <div className="mt-2 w-80 bg-white rounded-lg shadow-xl flex flex-col">
          <div id="chatbox" className="h-64 overflow-y-auto p-3 space-y-2 border-b">
            {history.map((h, i) => (
              <div key={i} className={`flex ${h.from === "user" ? "justify-end" : "justify-start"}`}>
                <span
                  className={`inline-block p-2 rounded-lg ${h.from === "user" ? "bg-[#8cc76f] text-white" : "bg-gray-200 text-[#222]"}`}
                >
                  {h.text}
                </span>
              </div>
            ))}
          </div>
          <form onSubmit={sendMessage} className="flex p-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Nhập câu hỏi …"
              className="flex-1 border rounded-l-lg p-2 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-[#8cc76f] text-white px-4 rounded-r-lg hover:bg-[#8fc7d3]"
            >
              Gửi
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
