git init
git remote add origin https://github.com/trinhkhuyen/survey-card.git
git add .
git commit -m "first"
git push -u origin main


git config --global user.name "Trinh Khuyen"
git config --global user.email "Email bạn dùng trên GitHub"


Chỉ cần 3 lệnh, chạy tuần tự trong terminal VS Code:

git add .
git commit -m "update code"
git push


Giải thích:

git add . → đưa toàn bộ thay đổi vào vùng chờ.

git commit -m "update code" → ghi lại thay đổi vào lịch sử.

git push → đẩy lên GitHub (GitHub Pages tự build lại, vài chục giây sau site sẽ cập nhật).

AppSheet ID: AKfycbz5UKQFVrxaFfCMRcqQ_78itWVm7q3HirEV4vWxgo3jO_37cKT9A6tgrAdqsKCOCKsnMQ
URL: https://script.google.com/macros/s/AKfycbz5UKQFVrxaFfCMRcqQ_78itWVm7q3HirEV4vWxgo3jO_37cKT9A6tgrAdqsKCOCKsnMQ/exec


"""
fetch("https://script.google.com/macros/s/AKfycbxufNg4OijNUKeqehifdEWCn3RaPjAuZIF-Jdj-NXhAyO6jNTnEFqJP7SXpR6xYvfQ9Tg/exec", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    name: "Test User",
    email: "test@example.com",
    rating: "5",
    feedback: "Everything OK"
  })
})
  .then(r => r.text())
  .then(console.log)
  .catch(console.error);

  


  Invoke-WebRequest `
  -Uri "https://script.google.com/macros/s/AKfycbz5UKQFVrxaFfCMRcqQ_78itWVm7q3HirEV4vWxgo3jO_37cKT9A6tgrAdqsKCOCKsnMQ/exec" `
  -Method POST `
  -Headers @{"Content-Type"="application/json"} `
  -Body '{"name":"Test","email":"a@b.com","rating":"5","feedback":"ok"}'

"""