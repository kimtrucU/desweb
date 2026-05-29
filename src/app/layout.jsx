/* layout.jsx – bố cục gốc của toàn bộ app */
import "./globals.css";

export const metadata = {
  title: "Kim The Dog Trainer – Huấn luyện & Spa thú cưng",
  description: "Trang landing chuyên nghiệp cho dịch vụ huấn luyện và spa cho chó",
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <head>
        {/* Thêm meta cho SEO */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>

      <body className="font-sans bg-white text-[#222]">
        {/* Nội dung chính */}
        {children}
        {/* Bot chat luôn ở dưới cùng của trang */
        {/* (được import trong page.jsx) */}
      </body>
    </html>
  );
}
