<?php
  // localhost/myshop/dangnhap.php
  $json = file_get_contents('php://input');
  $obj = json_decode($json, TRUE);
  $un = $obj["un"];
  $pa = $obj["pa"];
  require("dbCon.php");
  $qr = " SELECT * FROM users
          WHERE Username = '$un'
          AND Password = '$pa'
        ";
  $rows = mysql_query($qr);
  if( mysql_num_rows($rows)==1 ){
    echo json_encode(1);
  }else{
    echo json_encode(0);
  }

 ?>
