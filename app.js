document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("surveyForm");
  const status = document.getElementById("status");

  const API_URL = "https://api.allorigins.win/raw?url=" + encodeURIComponent(
    "https://script.google.com/macros/s/AKfycbz5UKQFVrxaFfCMRcqQ_78itWVm7q3HirEV4vWxgo3jO_37cKT9A6tgrAdqsKCOCKsnMQ/exec"
);



  form.addEventListener("submit", async e => {
    e.preventDefault();
    status.textContent = "";
    const data = Object.fromEntries(new FormData(form).entries());

    try {
        await fetch(API_URL, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
    });
    status.textContent = "Đã gửi phản hồi.";
    status.className = "status ok";
    form.reset();


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
});
