<?php

$json = file_get_contents('php://input');
$obj = json_decode($json, TRUE);
$idSP= $obj["idSP"];

require "dbCon.php"; //   http://localhost/myshop/chitietsanpham.php  POST:idSP

$mang = array();
$qr = "SELECT * FROM sanpham_thuoctinh WHERE idSP=$idSP";
$details = mysql_query($qr);
while($row = mysql_fetch_array($details)){
  array_push($mang, new SanPham_ThuocTinh( $row["idThuocTinh"] , $row["MauSac"],$row["Size"], $row["SoLuong"], $row["ChinhSachVanChuyen"] ) );
}
echo json_encode($mang);

?>
