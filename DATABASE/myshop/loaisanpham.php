<?php
require "dbCon.php";
//http://localhost/myshop/loaisanpham.php
$mang = array();
$qr = "SELECT * FROM loaisanpham";
$loaisps = mysql_query($qr);
while($row = mysql_fetch_array($loaisps)){
  array_push($mang, new SanPham_Loai( $row["idLoai"] ,$row["TenLoai"],$row["AnHien"],$row["urlHinh"],$row["MoTa"] ));
}
echo json_encode($mang);

?>
