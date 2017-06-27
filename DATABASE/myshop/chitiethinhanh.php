<?php
// hien thi chi tiet san pham

$json = file_get_contents('php://input');
$obj = json_decode($json, TRUE);
$idSP= $obj["idSP"];

require "dbCon.php"; //  http://localhost/myshop/chitiethinhanh.php  POST:idSP

$mang = array();
$qr = "SELECT * FROM sanpham_hinh WHERE idSP=$idSP";
$imgs = mysql_query($qr);
while($row = mysql_fetch_array($imgs)){
  array_push($mang, new ProductImages( $row["urlHinh"] , $row["STT"],$row["AnHien"]) );
}
echo json_encode($mang);

?>
