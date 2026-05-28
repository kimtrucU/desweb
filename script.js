document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');

  navToggle.addEventListener('click', function () {
    nav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', nav.classList.contains('open'));
  });

  const form = document.getElementById('consultForm');
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Thank you! Your consultation request has been submitted. We will contact you soon.');
    form.reset();
  });

  // Chatbot AI logic
  const chatToggle = document.getElementById('chatToggle');
  const chatbot = document.getElementById('chatbot');
  const closeChat = document.getElementById('closeChat');
  const chatInput = document.getElementById('chatInput');
  const sendBtn = document.getElementById('sendBtn');
  const chatMessages = document.getElementById('chatMessages');
  const suggestionButtons = document.querySelectorAll('.suggestion-btn');

  const defaultReply = 'Bạn có thể hỏi về dịch vụ spa, bảng giá, ưu đãi, huấn luyện chó hoặc thông tin liên hệ.';

  function addChatMessage(text, isUser) {
    const message = document.createElement('div');
    message.className = 'message ' + (isUser ? 'user-message' : 'bot-message');
    message.innerHTML = text;
    chatMessages.appendChild(message);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function getChatbotReply(text) {
    const normalized = text.toLowerCase();

    if (/\b(spa|tắm|cắt tỉa|cắt tỉa|tỉa)\b/.test(normalized)) {
      return 'Dịch vụ Spa: Chúng tôi cung cấp tắm, sấy, chăm sóc lông và cắt tỉa tạo kiểu cho thú cưng với quy trình sạch sẽ và an toàn.';
    }
    if (/\b(giá|bao nhiêu|bảng giá|chi phí)\b/.test(normalized)) {
      return 'Bảng giá Spa: Dưới 5kg 150k / cắt tỉa 300k; 5kg-10kg 250k / cắt tỉa 450k; 10kg-20kg 350k / cắt tỉa 600k. Trên 20kg giá sẽ báo sau khi kiểm tra.';
    }
    if (/\b(khuyến mãi|ưu đãi|giảm 20%|miễn phí tư vấn)\b/.test(normalized)) {
      return 'Ưu đãi: Giảm 20% cho khách hàng mới và miễn phí tư vấn lần đầu. Liên hệ ngay để giữ chỗ!';
    }
    if (/\b(huấn luyện|training|chó con|puppy)\b/.test(normalized)) {
      return 'Huấn luyện chó: Chúng tôi có chương trình Puppy Training, Group Obedience và Private Lessons để giúp thú cưng nghe lời và tự tin hơn.';
    }
    if (/\b(hung dữ|cắn|aggressive)\b/.test(normalized)) {
      return 'Behavior Modification: Chúng tôi xử lý hành vi hung dữ, cắn bằng phương pháp tích cực, an toàn và theo dõi sát sao.';
    }
    if (/\b(liên hệ|số điện thoại|phone|call|liên hệ tư vấn)\b/.test(normalized)) {
      return 'Liên hệ: (512) 796-5783. Gọi hoặc nhắn tin để được tư vấn nhanh nhất.';
    }
    if (/\b(email|e-mail|mail)\b/.test(normalized)) {
      return 'Email: info@kimthedogtrainer.com. Gửi yêu cầu và chúng tôi sẽ trả lời sớm.';
    }
    if (/\b(giờ|mở cửa|open|hours)\b/.test(normalized)) {
      return 'Giờ mở cửa: Mon - Sat 8AM - 7PM.';
    }
    return defaultReply;
  }

  function openChatbot() {
    chatbot.classList.add('open');
    chatbot.setAttribute('aria-hidden', 'false');
    chatInput.focus();
  }

  function closeChatbotPanel() {
    chatbot.classList.remove('open');
    chatbot.setAttribute('aria-hidden', 'true');
  }

  function handleUserMessage(text) {
    if (!text.trim()) {
      return;
    }
    addChatMessage(text, true);
    chatInput.value = '';
    const reply = getChatbotReply(text);
    setTimeout(() => addChatMessage(reply, false), 300);
  }

  chatToggle.addEventListener('click', openChatbot);
  closeChat.addEventListener('click', closeChatbotPanel);

  sendBtn.addEventListener('click', function () {
    handleUserMessage(chatInput.value);
  });

  chatInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleUserMessage(chatInput.value);
    }
  });

  suggestionButtons.forEach((button) => {
    button.addEventListener('click', function () {
      const text = this.textContent.trim();
      handleUserMessage(text);
    });
  });

});
