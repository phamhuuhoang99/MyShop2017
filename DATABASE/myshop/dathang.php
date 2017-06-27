<?php
$json = file_get_contents("php://input");
$obj= json_decode($json,TRUE);

require("dbCon.php");
$Username = $obj["Username"];
$TenNguoiNhan= $obj["TenNguoiNhan"];
$Email = $obj["Email"];
$DienThoai= $obj["DienThoai"];
$DiaChi = $obj["DiaChi"];
$idSP = $obj["idSP"]; // int
$TenSanPham	 = $obj["TenSanPham"];
$SoLuong = $obj["SoLuong"]; // int
$Size = $obj["Size"]; //int
$DonGia = $obj["DonGia"]; //int
$TongTien = $obj["TongTien"]; //int
$today = date("Y-m-d H:i:s");
//--------------------------------
  $qr = "INSERT INTO donhang(Username,TenNguoiNhan,Email,DienThoai,DiaChi,idSP,TenSanPham,SoLuong,Size,DonGia,ThoiDiemDatHang,TongTien) VALUES('$Username','$TenNguoiNhan','$Email','$DienThoai','$DiaChi',$idSP,'$TenSanPham',$SoLuong,$Size,$DonGia,'$today','$TongTien')";
  $user = mysql_query($qr);

  if($user){
    echo json_encode('THANH_CONG');
  }
  else{
    echo json_encode('THAT_BAI');
  }
?>
