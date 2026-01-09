import HeroImage from "/assets/Fauzan.png";
import foto from "/assets/fauzan1.jpg";
import Tools8 from "/assets/tools/github.png";
import Instagram from "/assets/tools/Instagram.png";
import Linkedin from "/assets/tools/Linkedin.png";
import WhatsApp from "/assets/tools/WhatsApp.png";
import curicullumvitae from "/assets/fauzan.pdf";

const Image = {
  HeroImage,
};

export const file = {
  cv: curicullumvitae,
};

export const myimage = {
  image: foto,
};

export const social = [
  {
    id: 1,
    gambar: Instagram,
    link: "",
  },
  {
    id: 2,
    gambar: Linkedin,
    link: "https://www.linkedin.com/in/fauzan-ilyas-almeyda-75695928b",
  },
  { id: 3, gambar: WhatsApp, link: "" },
  { id: 4, gambar: Tools8, link: "" },
];

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Laravel from "/assets/tools/Laravel.png";
import Tools5 from "/assets/tools/bootstrap.png";
import Tools6 from "/assets/tools/js.png";
import php from "/assets/tools/php.png";
import mysql from "/assets/tools/mysql.png";
import arduino from "/assets/tools/arduino.png";
import ubuntuserver from "/assets/tools/ubuntuserver.png";
import Python from "/assets/tools/Python.png";
import c from "/assets/tools/C.png";
import Tools10 from "/assets/tools/canva.png";
import Tools11 from "/assets/tools/figma.png";
import psd from "/assets/tools/psd.png";
import html from "/assets/tools/html.png";
import cad from "/assets/tools/cad.png";
import maxsurf from "/assets/tools/maxsurf.png";
import blender from "/assets/tools/blender.png";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "VS Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: html,
    nama: "HTML",
    ket: "Language",
    dad: "100",
  },
  {
    id: 3,
    gambar: Tools8,
    nama: "Github ",
    ket: "Repository",
    dad: "200",
  },
  {
    id: 4,
    gambar: Tools5,
    nama: "Bootstrap",
    ket: "Framework",
    dad: "500",
  },
  {
    id: 5,
    gambar: Tools6,
    nama: "Javascript",
    ket: "Language",
    dad: "600",
  },
  {
    id: 6,
    gambar: c,
    nama: "C",
    ket: "Language",
    dad: "700",
  },
  {
    id: 7,
    gambar: Laravel,
    nama: "Laravel",
    ket: "Framework",
    dad: "900",
  },
  {
    id: 8,
    gambar: php,
    nama: "PHP",
    ket: "Language",
    dad: "900",
  },
  {
    id: 9,
    gambar: mysql,
    nama: "MySQL",
    ket: "Database",
    dad: "900",
  },
  {
    id: 10,
    gambar: arduino,
    nama: "Arduino",
    ket: "MicroController",
    dad: "900",
  },
  {
    id: 11,
    gambar: ubuntuserver,
    nama: "Ubuntu Server",
    ket: "Server OS",
    dad: "1000",
  },
  {
    id: 12,
    gambar: Python,
    nama: "Python",
    ket: "Language",
    dad: "1000",
  },
  {
    id: 13,
    gambar: Tools10,
    nama: "Canva",
    ket: "Design App",
    dad: "1000",
  },
  {
    id: 14,
    gambar: Tools11,
    nama: "Figma",
    ket: "Design App",
    dad: "1100",
  },
  {
    id: 15,
    gambar: psd,
    nama: "Photoshop",
    ket: "Design App",
    dad: "1100",
  },
  {
    id: 16,
    gambar: cad,
    nama: "AutoCAD",
    ket: "Manufacturering Software",
    dad: "1100",
  },
  {
    id: 17,
    gambar: blender,
    nama: "Blender",
    ket: "3D Software",
    dad: "1100",
  },
  {
    id: 18,
    gambar: maxsurf,
    nama: "Maxsurf",
    ket: "Marine Design Software",
    dad: "1100",
  },
];

import Proyek1 from "/assets/rempahrasa1.png";
import Proyek2 from "/assets/MRP.jpeg";
import Proyek3 from "/assets/geraifone.jpeg";
import Proyek4 from "/assets/proyek/proyek4.webp";
import Proyek5 from "/assets/proyek/proyek5.webp";
import Proyek6 from "/assets/proyek/proyek6.webp";

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "Website Restoran Nusantra",
    desk: "Membuat website restoran Rempah Rasa sebagai restoran kuliner nusantara. Pengguna dapat memesan dan melihat katalog menu, serta memberikan masukan/kritik. Sistem website ini terdapat admin dan pengguna sebagai level usernya. ",
    tools: ["HTML", "Boostrap", "PHP", "MySQL"],
    dad: "200",
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "Aplikasi Manajemen Gudang Pt. Roman Ceramic",
    desk: "Membangun aplikasi manajemen gudang MRP (Material Requirement Planning) agar memudahkan dan meng-integrasi proses pada studi kasus pergudangan Roman Ceramic Mojokerto dengan tujuan efisinsi. Tim Berjumlah 4 orang ",
    tools: ["Java", "JavaSwing", "MySQL"],
    dad: "300",
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "Website Toko Gadget",
    desk: "Membuat website e-commerce sederhana untuk manajemen toko gadget bernama Geraifone. Fitur pada website ini meliputi katalog produk, keranjang belanja, dan sistem pembayaran online. Terdapat level admin untuk mengelola website",
    tools: ["PHP", "Boostrap", "MySQL"],
    dad: "400",
  },
];

import g1 from "/assets/1.jpg";
import g2 from "/assets/2.JPG";
import g3 from "/assets/3.jpg";
export const pengalaman = [
  {
    id: 1,
    gambar: g1,
    nama: "PengMas IOT Kebun Bawang Nganjuk",
    desk: "Pengabdian Masyarakat membangun Sistem IOT(Internet Of Things) penyiraman otomatis dan web sederhana untuk monitoring suhu udara,suhu dan kelembaban tanah pada kebun bawang 1.5 Hektar. Berlokasi di Nganjuk Jawa Timur. Menggunakan Arduino ESP32 beserta Firebase untuk cloud database.  ",
  },
  {
    id: 2,
    gambar: g2,
    nama: "Pemateri Workshop RoboCamp Vol.2",
    desk: "Menjadi pemateri pada acara Workshop RoboCamp Vol.2 yang diselenggarakan oleh VeteranRobotics UPN Veteran Jatim. Materi mengenai Desain Perancangan dan Analisis Lambung Kapal menggunakan Maxsurf Modeller,Resistance, dan Stability. ",
  },
  {
    id: 3,
    gambar: g3,
    nama: "Kontes Kapal Indonesia 2025",
    desk: "Menjadi ketua pada salah satu sub divisi Electric Vessel, sebagai upaya dalam meningkatkan kemampuan softskill dan leadership besaerta kontribusi pada ajang nasional untuk kampus yang diselenggarakan oleh (Direktorat Pembelajaran dan Kemahasiswaan) BELMAWA. ",
  },
];
