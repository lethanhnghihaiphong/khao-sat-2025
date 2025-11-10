const API_URL = "https://script.google.com/macros/s/AKfycbzm1CYxekr2uzO35yh8txWB2BEAYVpYTCgvPm8EzurLTGun1sLfzcipNymy-Krso9oPeg/exec"; // thay URL của bạn
const form = document.getElementById("surveyForm");
const status = document.getElementById("status");

form.addEventListener("submit", async e => {
  e.preventDefault();
  status.textContent = "";
  const data = Object.fromEntries(new FormData(form).entries());

  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type":"application/json" },
      body: JSON.stringify(data)
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
  } catch {
    status.textContent = "Lỗi mạng hoặc API.";
    status.className = "status err";
  }
});
