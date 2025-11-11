const form = document.getElementById("surveyForm");
const status = document.getElementById("status");
const checkbox = document.getElementById("collectIp");

const API_URL = "https://script.google.com/macros/s/AKfycbz5UKQFVrxaFfCMRcqQ_78itWVm7q3HirEV4vWxgo3jO_37cKT9A6tgrAdqsKCOCKsnMQ/exec";

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  status.textContent = "Đang gửi...";

  const data = Object.fromEntries(new FormData(form).entries());

  // Nếu tick thì thêm IP
  if (checkbox.checked) {
    try {
      const res = await fetch("https://api.ipify.org?format=json");
      const j = await res.json();
      data.ip = j.ip;
    } catch {
      data.ip = "Không lấy được IP";
    }
  } else {
    data.ip = "Không thu IP";
  }

  // Gửi lên Apps Script
  try {
    await fetch(API_URL, {
      method: "POST",
      mode: "no-cors", // vẫn dùng để tránh lỗi CORS
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    status.textContent = "Đã gửi phản hồi.";
    status.className = "status ok";
    form.reset();
  } catch {
    status.textContent = "Lỗi gửi dữ liệu.";
    status.className = "status err";
  }
});
