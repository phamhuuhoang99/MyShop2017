<?php
require "dbCon.php";

$mang = array();
$qr = "SELECT * FROM slide_hinhanh WHERE STT=1 OR STT=2 OR STT=3";
$slides = mysql_query($qr);
while($row = mysql_fetch_array($slides)){
  array_push($mang, new SlideImages( $row["idSlide"] , $row["urlHinh"],$row["STT"]) );
}
echo json_encode($mang);

?>
