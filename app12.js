// const API_URL = "https://script.google.com/macros/s/AKfycbz5UKQFVrxaFfCMRcqQ_78itWVm7q3HirEV4vWxgo3jO_37cKT9A6tgrAdqsKCOCKsnMQ/exec";
const API_URL = "https://corsproxy.io/?" + encodeURIComponent(
  "https://script.google.com/macros/s/AKfycbz5UKQFVrxaFfCMRcqQ_78itWVm7q3HirEV4vWxgo3jO_37cKT9A6tgrAdqsKCOCKsnMQ/exec"
);

form.addEventListener("submit", async e => {
  e.preventDefault();
  status.textContent = "";
  const data = Object.fromEntries(new FormData(form).entries());

  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const json = await res.json();
    if (json.ok) {
      status.textContent = "Đã gửi phản hồi.";
      status.className = "status ok";
      form.reset();
    } else {
      status.textContent = "Lỗi gửi dữ liệu.";
      status.className = "status err";
    }
  } catch (err) {
    console.error(err);
    status.textContent = "Lỗi mạng hoặc API.";
    status.className = "status err";
  }
});
