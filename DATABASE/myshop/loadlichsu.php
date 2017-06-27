<?php

$json = file_get_contents('php://input');
$obj = json_decode($json, TRUE);
$Username= $obj["un"];

require "dbCon.php";

$mang = array();
$qr = "SELECT * FROM donhang WHERE Username= '$Username'";
$sanphams = mysql_query($qr);
while($row = mysql_fetch_array($sanphams)){
  array_push($mang, new SanPham_LichSu( $row["idSP"] , $row["TenSanPham"],$row["DonGia"],$row["SoLuong"],$row["TongTien"],$row["ThoiDiemDatHang"]) );
}
echo json_encode($mang);

?>
