<?php
$json = file_get_contents("php://input");
$obj= json_decode($json,TRUE);

require("dbCon.php");

$email = $obj["email"];
$pa = $obj["pa"];
$name= $obj["name"];
$phone = $obj["phone"];
$ad = $obj["ad"];
$username= $obj["username"];

if($email!=""&& $pa!=""&&$name!=""&&$phone!=""&&$ad!=""&&$username!="")
{
  $qrr= "SELECT count(*) as sl from users
        WHERE Username='$username'
        GROUP BY Username
        ";
  $users=mysql_query($qrr);
  if(mysql_num_rows($users)==0){
    $qr = "INSERT INTO users(Email,Username,Password,HoTen,DienThoai,DiaChi) VALUES('$email','$username','$pa','$name','$phone','$ad')";
    $user = mysql_query($qr);
    if($user){
      echo json_encode('THANH_CONG');
    }
    else{
      echo json_encode('THAT_BAI');
    }
  }
  else {
    // co nguoi dang ky
    echo json_encode('THAT_BAI');
  }
}
else{
  echo json_encode('THAT_BAI');
}

?>
