// SECTION 1

document.getElementById('btntinhTien').onclick = function() {
    var luong = document.getElementById('luong').value;
    var ngayLam = document.getElementById('ngayLam').value;
    var ketqua = luong * ngayLam
    document.getElementById('ketQua').innerHTML = ketqua.toFixed(3) + 'VND';
}


// SECTION 2

document.getElementById('tinhSoThuc').onclick = function() {
    var soThuc1 = +document.getElementById('soThuc1').value;
    var soThuc2 = +document.getElementById('soThuc2').value;
    var soThuc3 = +document.getElementById('soThuc3').value;
    var soThuc4 = +document.getElementById('soThuc4').value;
    var soThuc5 = +document.getElementById('soThuc5').value;
    var Tong = soThuc1 + soThuc2 + soThuc3 + soThuc4 + soThuc5;
    var trungBinhSo = Tong / 5;
    document.getElementById('ketQua2').innerHTML = trungBinhSo;
}

// SECTION 3
document.getElementById('tinhUsd').onclick = function() {
    var tienUsd = document.getElementById('tienUsd').value;
    var a = 23.500;
    tienQuyDoi = tienUsd * a;
    document.getElementById('ketQua3').innerHTML = tienQuyDoi.toFixed(3) + 'VND';
}

// SECTION 4
document.getElementById('Tinh').onclick = function() {
    var chieuDai = +document.getElementById('chieuDai').value;
    var chieuRong = +document.getElementById('chieuRong').value;
    var chuVi = (chieuDai + chieuRong) * 2;
    var dienTich = chieuDai * chieuRong;
    document.getElementById('ketQua4').innerHTML = 'Chu vi là : ' + chuVi + ' - Diện tích là : ' + dienTich;
}

// SECTION 5
document.getElementById('sum').onclick = function() {
    var KySo = document.getElementById('soNhap').value;
    var hangChuc = Math.floor(KySo / 10);
    var hangDonVi = Math.floor(KySo % 10);
    var tongSoNhap = hangChuc + hangDonVi;
    document.getElementById('ketQua5').innerHTML = tongSoNhap;
}