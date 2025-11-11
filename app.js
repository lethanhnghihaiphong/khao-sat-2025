document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("surveyForm");
  const status = document.getElementById("status");
  const btn = form.querySelector("button[type=submit]");
  const collectIpCheckbox = document.getElementById("collectIp");

  const API_URL = "https://script.google.com/macros/s/AKfycbz5UKQFVrxaFfCMRcqQ_78itWVm7q3HirEV4vWxgo3jO_37cKT9A6tgrAdqsKCOCKsnMQ/exec";

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    btn.disabled = true;
    status.textContent = "Đang gửi...";

    const data = Object.fromEntries(new FormData(form).entries());

    // Nếu tick checkbox thì lấy IP public
    if (collectIpCheckbox && collectIpCheckbox.checked) {
      try {
        const ipRes = await fetch("https://api.ipify.org?format=json");
        const ipJson = await ipRes.json();
        data.ip = ipJson.ip || "";
      } catch (err) {
        console.warn("Không lấy được IP:", err);
        data.ip = "";
      }
    } else {
      data.ip = ""; // hoặc không gửi trường này nếu bạn muốn
    }

    try {
      // mode: "no-cors" nếu bạn vẫn dùng cách đó để tránh CORS
      await fetch(API_URL, {
        method: "POST",
        mode: "no-cors",
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
    } finally {
      // tránh gửi liên tiếp
      setTimeout(() => { btn.disabled = false; }, 1500);
    }
  });
});
