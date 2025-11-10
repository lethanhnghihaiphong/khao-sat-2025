const SPREADSHEET_ID = '1GZQIUrYL_Rg-Cy0x9g7JjSVTQKGjV9QngI5De_GI4mA';  // ví dụ: 1GZQlUYl_Rg-...-G14mA
const SHEET_NAME = 'Sheet1';                // hoặc đổi đúng tên tab bạn dùng

function doPost(e) {
  let data = {};
  try {
    data = JSON.parse(e.postData && e.postData.contents ? e.postData.contents : '{}');
  } catch (err) {
    data = e && e.parameter ? e.parameter : {};
  }

  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sh = ss.getSheetByName(SHEET_NAME) || ss.getSheets()[0];

  sh.appendRow([
    data.name || '',
    data.email || '',
    data.rating || '',
    data.feedback || '',
    new Date()
  ]);

  return ContentService.createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doGet(e) {
  return ContentService.createTextOutput("API đang hoạt động");
}
