const form = document.getElementById("surveyForm");
const status = document.getElementById("status");

// API URL: link Google Apps Script đã triển khai
const API_URL = "https://script.google.com/macros/s/AKfycbz5UKQFVrxaFfCMRcqQ_78itWVm7q3HirEV4vWxgo3jO_37cKT9A6tgrAdqsKCOCKsnMQ/exec";

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  status.textContent = "Đang gửi...";
  
  const data = Object.fromEntries(new FormData(form).entries());

  try {
    await fetch(API_URL, {
      method: "POST",
      mode: "no-cors", // tránh bị CORS chặn
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    status.textContent = "Đã gửi phản hồi.";
    status.className = "status ok";
    form.reset();
  } catch (err) {
    console.error(err);
    status.textContent = "Lỗi mạng hoặc API.";
    status.className = "status err";
  }
});
