<?php
$json = file_get_contents('php://input');
$obj = json_decode($json, TRUE);

$us= $obj["us"];

require "dbCon.php";

$mang = array();
$qr = "SELECT * FROM users WHERE Username='$us' ";
$users = mysql_query($qr);
$row = mysql_fetch_array($users);
array_push($mang,new Info_User( $row["idUser"] ,$row["Username"], $row["HoTen"],$row["Email"],$row["DienThoai"],$row["DiaChi"]) );
echo json_encode($mang);

?>
