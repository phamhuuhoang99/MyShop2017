<?php
$json = file_get_contents('php://input');
$obj = json_decode($json, TRUE);
$idLoai= $obj["idLoai"];

require "dbCon.php";

$mang = array();
$qr = "SELECT * FROM sanpham WHERE idLoai =$idLoai";
$sanphams = mysql_query($qr);
while($row = mysql_fetch_array($sanphams)){
  array_push($mang, new SanPhamHot( $row["idSP"] , $row["TenSanPham"],$row["Gia"],$row["urlHinh"]) );
}
echo json_encode($mang);

?>
