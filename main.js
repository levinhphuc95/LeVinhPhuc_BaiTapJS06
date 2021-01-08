// Bai tap 1
document
  .getElementById("btnTinhSoNguyenDuong")
  .addEventListener("click", function () {
    var tong = 0;
    var n = 0;
    while (tong < 10000) {
      tong += n;
      n++;
    }
    document.getElementById("bt1Footer").innerHTML =
      "Số nguyên dương nhỏ nhất là " +
      (n - 1) +
      "<br />" +
      "Tổng là: " +
      (tong - n);
  });

// Bai tap 2

function tongphuongtrinh(event) {
  event.preventDefault();
  var x = +document.getElementById("txtSoX").value;
  var n = +document.getElementById("txtSoN").value;
  var tongPhuongTrinh = tinhTong(x, n);
  document.getElementById("bt2Footer").innerHTML =
    "Kết quả: " + tongPhuongTrinh;
}

function tinhTong(a, b) {
  var tong = 0;
  var luyThua = 1;
  if (a < 0 || b < 0) {
    return (tong = " Mời bạn nhập lại");
  } else {
    for (var i = 1; i <= b; i++) {
      luyThua = a ** i;
      tong += luyThua;
    }
    return tong;
  }
}

// Bai tap 3
document.getElementById("btnGiaiThua").addEventListener("click", function () {
  var n = parseFloat(document.getElementById("txtGiaiThua").value);
  var ketQua = 1;
  for (var i = 1; i <= n; i++) {
    ketQua *= i;
  }
  document.getElementById("bt3Footer").innerHTML = "Kết quả: " + ketQua;
});

// Bai tap 4

function taoTheDiv() {
  for (var i = 1; i <= 10; i++) {
    var tagDiv = document.createElement("div");

    if (i % 2 == 0) {
      tagDiv.innerHTML = "Thẻ chẵn";
      tagDiv.style.height = "30px";
      tagDiv.style.backgroundColor = "red ";
      document.getElementById("bt4Footer").appendChild(tagDiv);
    } else {
      tagDiv.innerHTML = "Thẻ lẻ";
      tagDiv.style.color = "white";
      tagDiv.style.height = "30px";
      tagDiv.style.backgroundColor = "blue";

      document.getElementById("bt4Footer").appendChild(tagDiv);
    }
  }
}
