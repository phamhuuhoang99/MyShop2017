<?php

$json = file_get_contents('php://input');
$obj = json_decode($json, TRUE);
$idSP= $obj["idSP"];
$size = $obj["size"];

require "dbCon.php";  //http://localhost/myshop/kiemtrasoluong.php POST: idThuocTinh,size

$mang = array();
$qr = "SELECT * FROM sanpham_thuoctinh WHERE idSP=$idSP AND Size=$size ";
$details = mysql_query($qr);
while($row = mysql_fetch_array($details)){
  array_push($mang, new SanPham_ThuocTinh( $row["idThuocTinh"] , $row["MauSac"],$row["Size"], $row["SoLuong"], $row["ChinhSachVanChuyen"] ) );
}
echo json_encode($mang);

?>
