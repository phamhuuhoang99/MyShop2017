<?php
require "dbCon.php";

$mang = array();
$qr = "SELECT * FROM sanpham ORDER BY SoLanMua DESC LIMIT 4";
$sanphams = mysql_query($qr);
while($row = mysql_fetch_array($sanphams)){
  array_push($mang, new SanPhamHot( $row["idSP"] , $row["TenSanPham"],$row["Gia"],$row["urlHinh"]) );
}
echo json_encode($mang);

?>
