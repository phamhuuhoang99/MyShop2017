<?php
mysql_connect("localhost", "root", "");
mysql_select_db("myshop");
mysql_query("SET NAMES 'utf8'");

class SanPhamHot{
  public $idSP;
  public $TenSanPham;
  public $Gia;
  public $urlHinh;
  function SanPhamHot($i,$n,$p,$u){
    $this->idSP = $i;
    $this->TenSanPham = $n;
    $this->Gia = $p;
    $this->urlHinh = $u;
  }
}
class SlideImages{
  public $idSlide;
  public $urlHinh;
  public $STT;
  function SlideImages($i,$u,$s){
    $this->idSlide = $i;
    $this->urlHinh = $u;
    $this->STT = $s;
  }
}
class ProductImages{
  public $urlHinh;
  public $STT;
  public $AnHien;
  function ProductImages($u,$s,$h){
    $this->urlHinh = $u;
    $this->STT = $s;
    $this->AnHien = $h;
  }
}
class SanPham_ThuocTinh{
  public $idThuocTinh;
  public $MauSac;
  public $Size;
  public $SoLuong;
  public $ChinhSachVanChuyen;
  function SanPham_ThuocTinh($i,$m,$s,$sl,$csvc){
    $this->idThuocTinh = $i;
    $this->MauSac = $m;
    $this->Size = $s;
    $this->SoLuong = $sl;
    $this->ChinhSachVanChuyen = $csvc;
  }
}
class SanPham_Loai{
  public $idLoai;
  public $TenLoai;
  public $AnHien;
  public $urlHinh;
  public $MoTa;
  function SanPham_Loai($i,$t,$a,$u,$m){
    $this->idLoai = $i;
    $this->TenLoai= $t;
    $this->AnHien= $a;
    $this->urlHinh= $u;
    $this->MoTa= $m;
  }
}
class Info_User{
  public $idUser;
  public $Username;
  public $HoTen;
  public $Email;
  public $DienThoai;
  public $DiaChi;
  function Info_User($i,$u,$h,$e,$s,$d){
    $this->idUser = $i;
    $this->Username = $u;
    $this->HoTen = $h;
    $this->Email = $e;
    $this->DienThoai = $s;
    $this->DiaChi = $d;
  }
}
class SanPham_LichSu{
  public $idSP;
  public $TenSanPham;
  public $DonGia;
  public $SoLuong;
  public $TongTien;
  public $ThoiDiemDatHang;
  function SanPham_LichSu($i,$n,$p,$q,$a,$d){
    $this->idSP = $i;
    $this->TenSanPham = $n;
    $this->DonGia = $p;
    $this->SoLuong = $q;
    $this->TongTien = $a;
    $this->ThoiDiemDatHang = $d;
  }
}

?>
