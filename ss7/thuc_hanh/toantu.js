 function toantu() {
            let a = parseFloat(document.getElementById("heigh").value);
            let b = parseFloat(document.getElementById("width").value);
            let hienThi = document.getElementById("ketQua");

            if (isNaN(a) || isNaN(b) || a <= 0 || b <= 0) {
                alert('Không hợp lệ')
                return;
            }
            
            let dienTich = a * b;

            alert("Kết quả hình chữ nhật:\n" +
                "Chu vi là: " + chuVi + "\n" +
                "Diện tích là: " + dienTich);
        }