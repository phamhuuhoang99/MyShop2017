-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jun 27, 2017 at 03:39 PM
-- Server version: 10.1.21-MariaDB
-- PHP Version: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `myshop`
--

-- --------------------------------------------------------

--
-- Table structure for table `donhang`
--

CREATE TABLE `donhang` (
  `idDonHang` int(5) NOT NULL,
  `idUser` int(5) NOT NULL,
  `Username` varchar(100) NOT NULL,
  `idSP` int(5) NOT NULL,
  `TenSanPham` varchar(255) NOT NULL,
  `Gia` int(11) NOT NULL,
  `Size` int(5) NOT NULL,
  `idThuocTinh` int(5) NOT NULL,
  `ThoiDiemDatHang` datetime NOT NULL,
  `TenNguoiNhan` varchar(100) NOT NULL,
  `Email` varchar(255) NOT NULL,
  `DienThoai` varchar(255) NOT NULL,
  `DiaChi` varchar(255) NOT NULL,
  `TinhTrang` int(11) NOT NULL DEFAULT '0',
  `GhiChu` varchar(255) NOT NULL,
  `SoLuong` int(5) NOT NULL DEFAULT '0',
  `DonGia` int(11) NOT NULL DEFAULT '0',
  `TongTien` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `donhang`
--

INSERT INTO `donhang` (`idDonHang`, `idUser`, `Username`, `idSP`, `TenSanPham`, `Gia`, `Size`, `idThuocTinh`, `ThoiDiemDatHang`, `TenNguoiNhan`, `Email`, `DienThoai`, `DiaChi`, `TinhTrang`, `GhiChu`, `SoLuong`, `DonGia`, `TongTien`) VALUES
(34, 0, '', 2, 'Áo thun nam tay ngắn \r\nATD-22-1', 0, 30, 0, '2017-06-27 13:38:02', 'Nguyễn Thế Thoại', 'thethoainguyenn@gmail.com', '0978329245', 'Bình Tân, TP.HCM', 0, '', 1, 240000, 240000),
(35, 0, '', 1, 'Áo thun nam tay ngắn \r\nATD-27-1', 0, 30, 0, '2017-06-27 13:38:02', 'Nguyễn Thế Thoại', 'thethoainguyenn@gmail.com', '0978329245', 'Bình Tân, TP.HCM', 0, '', 4, 240000, 960000),
(36, 0, 'thethoainguyennn', 4, 'Áo thun nam tay ngắn \r\nAP-2362N', 0, 33, 0, '2017-06-27 13:39:45', 'Nguyễn Thế Thoại', 'thethoainguyenn@gmail.com', '0978329245', 'Bình Tân, TP.HCM', 0, '', 1, 190000, 190000),
(37, 0, '', 5, 'Áo thun nam tay ngắn \r\nAP-2258N', 0, 31, 0, '2017-06-27 13:41:45', 'Gd', 'Sss', 'Ddd', 'Ssssss', 0, '', 1, 270000, 270000),
(38, 0, 'KhachVangLai', 1, 'Áo thun nam tay ngắn \r\nATD-27-1', 0, 30, 0, '2017-06-27 13:43:28', 'SSS', 'Ssss', 'Sad', 'Ffffff', 0, '', 2, 240000, 480000),
(39, 0, 'KhachVangLai', 11, 'Quần jeans QJT - 50', 0, 37, 0, '2017-06-27 13:45:29', 'Thought this ', 'Thoaithoai@gmail.com', '1111111', 'Bt', 0, '', 1, 500000, 500000),
(40, 0, 'KhachVangLai', 7, 'Áo sơ mi QCR-33', 0, 32, 0, '2017-06-27 13:45:29', 'Thought this ', 'Thoaithoai@gmail.com', '1111111', 'Bt', 0, '', 4, 320000, 1280000),
(41, 0, 'Thoaithoai', 7, 'Áo sơ mi QCR-33', 0, 32, 0, '2017-06-27 13:47:02', 'Thought this ', 'Thoaithoai@gmail.com', '1111111', 'Bt', 0, '', 4, 320000, 1280000),
(42, 0, 'Thoaithoai', 11, 'Quần jeans QJT - 50', 0, 37, 0, '2017-06-27 13:47:02', 'Thought this ', 'Thoaithoai@gmail.com', '1111111', 'Bt', 0, '', 1, 500000, 500000),
(43, 0, 'Thoaithoai', 2, 'Áo thun nam tay ngắn \r\nATD-22-1', 0, 30, 0, '2017-06-27 13:47:02', 'Thought this ', 'Thoaithoai@gmail.com', '1111111', 'Bt', 0, '', 1, 240000, 240000),
(44, 0, 'Thoaithoai', 4, 'Áo thun nam tay ngắn \r\nAP-2362N', 0, 33, 0, '2017-06-27 13:51:04', 'Thought this ', 'Thoaithoai@gmail.com', '1111111', 'Bt', 0, '', 1, 190000, 190000),
(45, 0, 'Thoaithoai', 5, 'Áo thun nam tay ngắn \r\nAP-2258N', 0, 31, 0, '2017-06-27 13:51:04', 'Thought this ', 'Thoaithoai@gmail.com', '1111111', 'Bt', 0, '', 1, 270000, 270000);

-- --------------------------------------------------------

--
-- Table structure for table `loaisanpham`
--

CREATE TABLE `loaisanpham` (
  `idLoai` int(5) NOT NULL,
  `TenLoai` varchar(50) NOT NULL,
  `AnHien` int(11) NOT NULL DEFAULT '1',
  `urlHinh` varchar(100) NOT NULL,
  `MoTa` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `loaisanpham`
--

INSERT INTO `loaisanpham` (`idLoai`, `TenLoai`, `AnHien`, `urlHinh`, `MoTa`) VALUES
(1, 'Áo thun tay ngắn', 1, 'aothuntayngan.jpg', 'Mang phong cách thể thao và tuyệt vời cho mùa hè này, hẳn là sẽ rất thú vị cho những người trẻ trung và năng động'),
(2, 'Áo sơ mi', 1, 'aosomi.jpg', 'Mang phong cách thể thao và tuyệt vời cho mùa hè này, hẳn là sẽ rất thú vị cho những người trẻ trung và năng động'),
(3, 'Quần jeans', 1, 'jeans.jpg', 'Mang phong cách thể thao và tuyệt vời cho mùa hè này, hẳn là sẽ rất thú vị cho những người trẻ trung và năng động'),
(4, 'Áo khoát', 1, 'aokhoat.jpg', 'Mang phong cách thể thao và tuyệt vời cho mùa hè này, hẳn là sẽ rất thú vị cho những người trẻ trung và năng động');

-- --------------------------------------------------------

--
-- Table structure for table `sanpham`
--

CREATE TABLE `sanpham` (
  `idSP` int(5) NOT NULL,
  `idLoai` int(5) NOT NULL,
  `TenSanPham` varchar(100) NOT NULL,
  `MoTa` varchar(255) NOT NULL,
  `NgayCapNhat` date NOT NULL,
  `Gia` int(11) NOT NULL,
  `KhuyenMai` int(11) NOT NULL DEFAULT '0',
  `SoLanMua` int(5) NOT NULL DEFAULT '0',
  `Top` int(11) NOT NULL DEFAULT '0',
  `Hot` int(5) NOT NULL DEFAULT '0',
  `urlHinh` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `sanpham`
--

INSERT INTO `sanpham` (`idSP`, `idLoai`, `TenSanPham`, `MoTa`, `NgayCapNhat`, `Gia`, `KhuyenMai`, `SoLanMua`, `Top`, `Hot`, `urlHinh`) VALUES
(1, 1, 'Áo thun nam tay ngắn \r\nATD-27-1', '', '2017-04-24', 240000, 0, 0, 0, 1, 'atd.jpg'),
(2, 1, 'Áo thun nam tay ngắn \r\nATD-22-1', '', '2017-04-23', 240000, 0, 0, 0, 1, 'atd22.jpg'),
(3, 1, 'Áo thun nam tay ngắn \r\nATD-23-1', '', '2017-04-23', 190000, 0, 0, 0, 0, 'atd23.jpg'),
(4, 1, 'Áo thun nam tay ngắn \r\nAP-2362N', '', '2017-04-18', 190000, 0, 3, 1, 0, 'AP2362N.jpg'),
(5, 1, 'Áo thun nam tay ngắn \r\nAP-2258N', '', '2017-04-18', 270000, 0, 7, 1, 0, 'AP2258N.jpg'),
(6, 2, 'Áo sơ mi QCR-32', 'Chất liệu 100% thun cotton mềm mại, thoáng mát và mang lại nhiều tính năng vượt trội: Thấm hút ẩm tốt, Không co rút….', '2017-04-20', 320000, 0, 2, 1, 0, 'QCR32.jpg'),
(7, 2, 'Áo sơ mi QCR-33', 'Chất liệu 100% thun cotton mềm mại, thoáng mát và mang lại nhiều tính năng vượt trội: Thấm hút ẩm tốt, Không co rút….', '2017-04-19', 320000, 0, 1, 1, 0, 'QCR33.jpg'),
(8, 2, 'Áo sơ mi QCR - 34', 'Chất liệu 100% thun cotton mềm mại, thoáng mát và mang lại nhiều tính năng vượt trội: Thấm hút ẩm tốt, Không co rút….', '2017-04-19', 320000, 1, 1, 0, 0, 'QCR34.jpg'),
(9, 2, 'Áo sơ mi QCR35', 'Chất liệu 100% thun cotton mềm mại, thoáng mát và mang lại nhiều tính năng vượt trội: Thấm hút ẩm tốt, Không co rút….', '2017-04-20', 300000, 1, 4, 0, 0, 'QCR35.jpg'),
(10, 2, 'Áo sơ mi QCR-32', 'Chất liệu 100% thun cotton mềm mại, thoáng mát và mang lại nhiều tính năng vượt trội: Thấm hút ẩm tốt, Không co rút….', '2017-04-19', 300000, 1, 3, 0, 0, 'QCR36.jpg'),
(11, 3, 'Quần jeans QJT - 50', '', '2017-04-10', 500000, 0, 12, 1, 0, 'QJT50.jpg'),
(12, 3, 'Quần jeans QJD - 49', '', '2017-04-10', 490000, 1, 12, 1, 0, 'QJD49.jpg'),
(13, 3, 'Quần jeans QJT-51', '', '2017-04-10', 499000, 0, 30, 0, 0, 'QJT51.jpg'),
(14, 3, 'Quần jeans QJT - 40', '', '2017-04-10', 500000, 0, 50, 0, 0, 'QJT40.jpg'),
(15, 3, 'Quần jeans QJT-60', '', '2017-04-10', 500000, 0, 14, 0, 0, 'QJT60.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `sanpham_hinh`
--

CREATE TABLE `sanpham_hinh` (
  `idHinh` int(5) NOT NULL,
  `idSP` int(5) NOT NULL,
  `urlHinh` varchar(20) NOT NULL,
  `STT` int(5) NOT NULL,
  `AnHien` int(5) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `sanpham_hinh`
--

INSERT INTO `sanpham_hinh` (`idHinh`, `idSP`, `urlHinh`, `STT`, `AnHien`) VALUES
(1, 1, 'atd1.jpg', 1, 1),
(2, 1, 'atd2.jpg', 2, 1),
(3, 1, 'atd3.jpg', 3, 1),
(4, 1, 'atd4.jpg', 4, 1),
(5, 2, 'atd221.jpg', 1, 1),
(6, 2, 'atd222.jpg', 1, 1),
(7, 3, 'atd231.jpg', 1, 1),
(8, 4, 'AP2362N1.jpg', 1, 1),
(9, 5, 'AP2258N1.jpg', 1, 1),
(10, 5, 'AP2258N2.jpg', 1, 1),
(11, 5, 'AP2258N3.jpg', 1, 1),
(12, 7, 'QCR331.jpg', 1, 1),
(13, 7, 'QCR332.jpg', 1, 1),
(14, 11, 'QJT501.jpg', 1, 1),
(15, 11, 'QJT502.jpg', 1, 1),
(16, 11, 'QJT503.jpg', 1, 1),
(17, 12, 'QJD491.jpg', 1, 1),
(18, 12, 'QJD492.jpg', 1, 1),
(19, 12, 'QJD493.jpg', 1, 1),
(20, 13, 'QJT511.jpg', 1, 1),
(21, 13, 'QJT512.jpg', 1, 1),
(22, 13, 'QJT513.jpg', 1, 1),
(23, 14, 'QJT401.jpg', 1, 1),
(24, 14, 'QJT402.jpg', 1, 1),
(25, 15, 'QJT601.jpg', 1, 1),
(26, 15, 'QJT602.jpg', 1, 1),
(27, 6, 'QCR332.jpg', 0, 1),
(28, 5, 'QCR331.jpg', 0, 1);

-- --------------------------------------------------------

--
-- Table structure for table `sanpham_thuoctinh`
--

CREATE TABLE `sanpham_thuoctinh` (
  `idThuocTinh` int(5) NOT NULL,
  `idSP` int(5) NOT NULL,
  `Size` int(5) NOT NULL,
  `MauSac` varchar(100) NOT NULL DEFAULT '',
  `NgayCapNhat` date NOT NULL,
  `TrinhTrang` int(5) NOT NULL DEFAULT '1',
  `SoLuong` int(11) NOT NULL DEFAULT '20',
  `ChinhSachVanChuyen` varchar(255) NOT NULL DEFAULT 'Free ship trong khu vực TP.Hồ Chí Minh. Trong trường hợp ngoài nội thành sẽ có chính sách vận chuyển riêng'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `sanpham_thuoctinh`
--

INSERT INTO `sanpham_thuoctinh` (`idThuocTinh`, `idSP`, `Size`, `MauSac`, `NgayCapNhat`, `TrinhTrang`, `SoLuong`, `ChinhSachVanChuyen`) VALUES
(1, 1, 30, '', '2017-04-10', 1, 10, 'Free ship trong khu vực TP.Hồ Chí Minh. Trong trường hợp ngoài nội thành sẽ có chính sách vận chuyển riêng'),
(2, 1, 31, '', '2017-04-10', 1, 20, 'Free ship trong khu vực TP.Hồ Chí Minh. Trong trường hợp ngoài nội thành sẽ có chính sách vận chuyển riêng'),
(3, 1, 32, '', '2017-04-10', 1, 10, 'Free ship trong khu vực TP.Hồ Chí Minh. Trong trường hợp ngoài nội thành sẽ có chính sách vận chuyển riêng'),
(4, 1, 33, '', '2017-04-02', 1, 13, 'Free ship trong khu vực TP.Hồ Chí Minh. Trong trường hợp ngoài nội thành sẽ có chính sách vận chuyển riêng'),
(5, 1, 40, '', '2017-04-10', 1, 15, 'Free ship trong khu vực TP.Hồ Chí Minh. Trong trường hợp ngoài nội thành sẽ có chính sách vận chuyển riêng'),
(6, 2, 30, '', '2017-04-10', 0, 8, 'Free ship trong khu vực TP.Hồ Chí Minh. Trong trường hợp ngoài nội thành sẽ có chính sách vận chuyển riêng'),
(7, 2, 31, '', '2017-04-10', 1, 5, 'Free ship trong khu vực TP.Hồ Chí Minh. Trong trường hợp ngoài nội thành sẽ có chính sách vận chuyển riêng'),
(8, 2, 32, '', '2017-04-10', 3, 20, 'Free ship trong khu vực TP.Hồ Chí Minh. Trong trường hợp ngoài nội thành sẽ có chính sách vận chuyển riêng'),
(9, 2, 33, '', '2017-04-10', 1, 29, 'Free ship trong khu vực TP.Hồ Chí Minh. Trong trường hợp ngoài nội thành sẽ có chính sách vận chuyển riêng'),
(10, 3, 32, '', '2017-04-10', 1, 1, 'Free ship trong khu vực TP.Hồ Chí Minh. Trong trường hợp ngoài nội thành sẽ có chính sách vận chuyển riêng'),
(11, 3, 33, '', '2017-04-10', 1, 3, 'Free ship trong khu vực TP.Hồ Chí Minh. Trong trường hợp ngoài nội thành sẽ có chính sách vận chuyển riêng'),
(12, 3, 35, '', '2017-04-10', 1, 5, 'Free ship trong khu vực TP.Hồ Chí Minh. Trong trường hợp ngoài nội thành sẽ có chính sách vận chuyển riêng'),
(13, 3, 36, '', '2017-04-10', 1, 8, 'Free ship trong khu vực TP.Hồ Chí Minh. Trong trường hợp ngoài nội thành sẽ có chính sách vận chuyển riêng'),
(14, 4, 33, '', '2017-04-10', 1, 10, 'Free ship trong khu vực TP.Hồ Chí Minh. Trong trường hợp ngoài nội thành sẽ có chính sách vận chuyển riêng'),
(15, 4, 34, '', '2017-04-10', 0, 0, 'Free ship trong khu vực TP.Hồ Chí Minh. Trong trường hợp ngoài nội thành sẽ có chính sách vận chuyển riêng'),
(16, 4, 38, '', '2017-04-10', 1, 2, 'Free ship trong khu vực TP.Hồ Chí Minh. Trong trường hợp ngoài nội thành sẽ có chính sách vận chuyển riêng'),
(17, 4, 39, '', '2017-04-10', 1, 100, 'Free ship trong khu vực TP.Hồ Chí Minh. Trong trường hợp ngoài nội thành sẽ có chính sách vận chuyển riêng'),
(18, 4, 40, '', '2017-04-10', 1, 200, 'Free ship trong khu vực TP.Hồ Chí Minh. Trong trường hợp ngoài nội thành sẽ có chính sách vận chuyển riêng'),
(19, 6, 33, '', '2017-04-10', 1, 10, 'Free ship trong khu vực TP.Hồ Chí Minh. Trong trường hợp ngoài nội thành sẽ có chính sách vận chuyển riêng'),
(20, 6, 34, '', '2017-04-10', 1, 13, 'Free ship trong khu vực TP.Hồ Chí Minh. Trong trường hợp ngoài nội thành sẽ có chính sách vận chuyển riêng'),
(21, 7, 32, '', '2017-04-10', 1, 11, 'Free ship trong khu vực TP.Hồ Chí Minh. Trong trường hợp ngoài nội thành sẽ có chính sách vận chuyển riêng'),
(22, 7, 33, '', '2017-04-10', 1, 12, 'Free ship trong khu vực TP.Hồ Chí Minh. Trong trường hợp ngoài nội thành sẽ có chính sách vận chuyển riêng'),
(23, 8, 35, '', '2017-04-10', 1, 14, 'Free ship trong khu vực TP.Hồ Chí Minh. Trong trường hợp ngoài nội thành sẽ có chính sách vận chuyển riêng'),
(24, 8, 36, '', '2017-04-10', 1, 20, 'Free ship trong khu vực TP.Hồ Chí Minh. Trong trường hợp ngoài nội thành sẽ có chính sách vận chuyển riêng'),
(25, 9, 32, '', '2017-04-10', 1, 0, 'Free ship trong khu vực TP.Hồ Chí Minh. Trong trường hợp ngoài nội thành sẽ có chính sách vận chuyển riêng'),
(26, 9, 33, '', '2017-04-10', 1, 10, 'Free ship trong khu vực TP.Hồ Chí Minh. Trong trường hợp ngoài nội thành sẽ có chính sách vận chuyển riêng'),
(27, 9, 34, '', '2017-04-10', 1, 4, 'Free ship trong khu vực TP.Hồ Chí Minh. Trong trường hợp ngoài nội thành sẽ có chính sách vận chuyển riêng'),
(29, 10, 32, '', '2017-04-10', 1, 12, 'Free ship trong khu vực TP.Hồ Chí Minh. Trong trường hợp ngoài nội thành sẽ có chính sách vận chuyển riêng'),
(30, 10, 33, '', '2017-04-10', 1, 13, 'Free ship trong khu vực TP.Hồ Chí Minh. Trong trường hợp ngoài nội thành sẽ có chính sách vận chuyển riêng'),
(31, 11, 37, '', '2017-04-10', 1, 25, 'Free ship trong khu vực TP.Hồ Chí Minh. Trong trường hợp ngoài nội thành sẽ có chính sách vận chuyển riêng'),
(32, 11, 38, '', '2017-04-10', 1, 22, 'Free ship trong khu vực TP.Hồ Chí Minh. Trong trường hợp ngoài nội thành sẽ có chính sách vận chuyển riêng'),
(34, 12, 39, '', '2017-04-10', 1, 10, 'Free ship trong khu vực TP.Hồ Chí Minh. Trong trường hợp ngoài nội thành sẽ có chính sách vận chuyển riêng'),
(35, 13, 35, '', '2017-04-10', 1, 5, 'Free ship trong khu vực TP.Hồ Chí Minh. Trong trường hợp ngoài nội thành sẽ có chính sách vận chuyển riêng'),
(36, 13, 36, '', '2017-04-11', 1, 3, 'Free ship trong khu vực TP.Hồ Chí Minh. Trong trường hợp ngoài nội thành sẽ có chính sách vận chuyển riêng'),
(37, 13, 37, '', '2017-04-10', 1, 4, 'Free ship trong khu vực TP.Hồ Chí Minh. Trong trường hợp ngoài nội thành sẽ có chính sách vận chuyển riêng'),
(38, 13, 38, '', '2017-04-10', 1, 6, 'Free ship trong khu vực TP.Hồ Chí Minh. Trong trường hợp ngoài nội thành sẽ có chính sách vận chuyển riêng'),
(39, 14, 35, '', '2017-04-10', 1, 0, 'Free ship trong khu vực TP.Hồ Chí Minh. Trong trường hợp ngoài nội thành sẽ có chính sách vận chuyển riêng'),
(40, 14, 36, '', '2017-04-10', 1, 5, 'Free ship trong khu vực TP.Hồ Chí Minh. Trong trường hợp ngoài nội thành sẽ có chính sách vận chuyển riêng'),
(41, 15, 37, '', '2017-04-10', 1, 4, 'Free ship trong khu vực TP.Hồ Chí Minh. Trong trường hợp ngoài nội thành sẽ có chính sách vận chuyển riêng'),
(42, 15, 38, '', '2017-04-10', 1, 3, 'Free ship trong khu vực TP.Hồ Chí Minh. Trong trường hợp ngoài nội thành sẽ có chính sách vận chuyển riêng'),
(43, 5, 31, '', '2017-06-06', 1, 20, 'Free ship trong khu vực TP.Hồ Chí Minh. Trong trường hợp ngoài nội thành sẽ có chính sách vận chuyển riêng'),
(44, 5, 35, '', '0000-00-00', 1, 20, 'Free ship trong khu vực TP.Hồ Chí Minh. Trong trường hợp ngoài nội thành sẽ có chính sách vận chuyển riêng');

-- --------------------------------------------------------

--
-- Table structure for table `slide_hinhanh`
--

CREATE TABLE `slide_hinhanh` (
  `idSlide` int(5) NOT NULL,
  `urlHinh` varchar(20) NOT NULL,
  `STT` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `slide_hinhanh`
--

INSERT INTO `slide_hinhanh` (`idSlide`, `urlHinh`, `STT`) VALUES
(1, '01storyhome.jpg', 1),
(2, '02storyhome.jpeg', 2),
(3, '03storyhome.jpeg', 3),
(4, '04storyhome.jpeg', 4);

-- --------------------------------------------------------

--
-- Table structure for table `tinthoitrang`
--

CREATE TABLE `tinthoitrang` (
  `idTin` int(5) NOT NULL,
  `TieuDeTin` varchar(255) NOT NULL,
  `ChiTietTin` varchar(255) NOT NULL,
  `NgayCapNhat` date NOT NULL,
  `urlHinh` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `tinthoitrang_hinh`
--

CREATE TABLE `tinthoitrang_hinh` (
  `idHinh` int(5) NOT NULL,
  `idTin` int(5) NOT NULL,
  `urlHinh` varchar(20) NOT NULL,
  `STT` int(5) NOT NULL,
  `AnHien` int(5) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `donhang`
--
ALTER TABLE `donhang`
  ADD PRIMARY KEY (`idDonHang`);

--
-- Indexes for table `loaisanpham`
--
ALTER TABLE `loaisanpham`
  ADD PRIMARY KEY (`idLoai`);

--
-- Indexes for table `sanpham`
--
ALTER TABLE `sanpham`
  ADD PRIMARY KEY (`idSP`);

--
-- Indexes for table `sanpham_hinh`
--
ALTER TABLE `sanpham_hinh`
  ADD PRIMARY KEY (`idHinh`);

--
-- Indexes for table `sanpham_thuoctinh`
--
ALTER TABLE `sanpham_thuoctinh`
  ADD PRIMARY KEY (`idThuocTinh`);

--
-- Indexes for table `slide_hinhanh`
--
ALTER TABLE `slide_hinhanh`
  ADD PRIMARY KEY (`idSlide`);

--
-- Indexes for table `tinthoitrang`
--
ALTER TABLE `tinthoitrang`
  ADD PRIMARY KEY (`idTin`);

--
-- Indexes for table `tinthoitrang_hinh`
--
ALTER TABLE `tinthoitrang_hinh`
  ADD PRIMARY KEY (`idHinh`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `donhang`
--
ALTER TABLE `donhang`
  MODIFY `idDonHang` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;
--
-- AUTO_INCREMENT for table `loaisanpham`
--
ALTER TABLE `loaisanpham`
  MODIFY `idLoai` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `sanpham`
--
ALTER TABLE `sanpham`
  MODIFY `idSP` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
--
-- AUTO_INCREMENT for table `sanpham_hinh`
--
ALTER TABLE `sanpham_hinh`
  MODIFY `idHinh` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;
--
-- AUTO_INCREMENT for table `sanpham_thuoctinh`
--
ALTER TABLE `sanpham_thuoctinh`
  MODIFY `idThuocTinh` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;
--
-- AUTO_INCREMENT for table `slide_hinhanh`
--
ALTER TABLE `slide_hinhanh`
  MODIFY `idSlide` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `tinthoitrang`
--
ALTER TABLE `tinthoitrang`
  MODIFY `idTin` int(5) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `tinthoitrang_hinh`
--
ALTER TABLE `tinthoitrang_hinh`
  MODIFY `idHinh` int(5) NOT NULL AUTO_INCREMENT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
