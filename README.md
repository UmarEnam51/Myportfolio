# Myportfolio - Portfolio Website Umar

Website portofolio pribadi modern dan responsif yang dibangun menggunakan **Bootstrap 5 (Offline/Downloaded)**, terinspirasi dari konsep desain [vCard Personal Portfolio](https://github.com/codewithsadee/vcard-personal-portfolio.git).

Website ini dibuat untuk memenuhi tugas **Praktikum 5 Pemrograman Frontend / Fullstack (PFS)**.

---

## 🌟 Fitur Utama & Kriteria Praktikum

1. **Bootstrap 5 Framework**:
   - Seluruh komponen antarmuka dibangun menggunakan Bootstrap 5 versi stabil terbaru.
2. **Bootstrap Offline (Sudah Di-download)**:
   - File CSS (`assets/css/bootstrap.min.css`) dan Bundle JS (`assets/js/bootstrap.bundle.min.js`) serta Bootstrap Icons telah disimpan dan dihubungkan secara lokal (offline) tanpa ketergantungan CDN.
3. **Komponen Wajib Bootstrap**:
   - `.container` & `.container-xl`: Membungkus layout secara responsif dan rapi.
   - `.row`: Sistem grid 12 kolom untuk pembagian sidebar vCard dan main content.
   - `.navbar`: Navigasi responsif dengan `.navbar-brand`, `.navbar-toggler`, dan `.navbar-nav`.
   - `.card`: Digunakan pada profil sidebar, kartu layanan (*services*), portofolio proyek, timeline resume, dan formulir kontak.
   - `.btn`: Tombol interaktif untuk aksi, filter kategori, download CV, submit pesan, dan modal preview.
4. **Desain Responsif (Mobile-First)**:
   - Tampilan adaptif sempurna di layar Smartphone, Tablet, Laptop, hingga Desktop.
   - Pada layar mobile, detail kontak vCard dilengkapi tombol *collapse/toggle* ("Lihat Kontak Lengkap") seperti pada referensi.
5. **Navigasi Tab Dinamis**:
   - Perpindahan antar bagian (*About*, *Resume*, *Portfolio*, *Skills*, *Contact*) dengan animasi transisi yang mulus.
6. **Interaktivitas Tambahan**:
   - **Filter Proyek**: Menyaring proyek berdasarkan kategori (*All*, *Web Development*, *Graphic Design*, *Social Media*).
   - **Modal Preview**: Menampilkan pop-up detail proyek resolusi penuh saat kartu diklik.
   - **Animated Progress Bars**: Animasi persentase keahlian teknis saat membuka tab *Skills*.
   - **Formulir Kontak & Toast**: Validasi form kontak dengan notifikasi Toast Bootstrap.

---

## 📁 Struktur Direktori

```text
Portofolio PFS/
├── assets/
│   ├── css/
│   │   ├── bootstrap.min.css         # Bootstrap 5.3.3 CSS (Offline)
│   │   ├── bootstrap-icons.min.css   # Bootstrap Icons CSS (Offline)
│   │   ├── style.css                 # Custom Styling & Modern Dark Theme
│   │   └── fonts/
│   │       ├── bootstrap-icons.woff2 # Font Icon Offline
│   │       └── bootstrap-icons.woff
│   ├── js/
│   │   ├── bootstrap.bundle.min.js   # Bootstrap 5.3.3 Bundle JS (Offline)
│   │   └── main.js                   # Logika navigasi tab, filter, modal, & form
│   └── images/
│       ├── profile.jpg               # Foto profil Umar
│       ├── avatar.png                # Avatar ilustrasi
│       ├── icons/                    # Ikon SVG layanan
│       └── projects/                 # Aset gambar proyek & desain instastory
├── index.html                        # Halaman utama portofolio
└── README.md                         # Dokumentasi proyek
```

---

## 🚀 Cara Menjalankan Secara Lokal

1. **Clone repository ini**:
   ```bash
   git clone https://github.com/UmarEnam51/Myportfolio.git
   cd Myportfolio
   ```

2. **Buka langsung di browser**:
   - Klik dua kali file `index.html`, atau
   - Buka menggunakan ekstensi **Live Server** di Visual Studio Code, atau
   - Jalankan local server menggunakan Python:
     ```bash
     python -m http.server 8000
     ```
     Lalu buka `http://localhost:8000` pada browser.

---

## 👤 Profil Pembuat

- **Nama**: Umar
- **Role**: Junior Web Developer & Graphic Designer
- **GitHub**: [@UmarEnam51](https://github.com/UmarEnam51)
- **Email**: siktyone@gmail.com
- **Lokasi**: Yogyakarta, Indonesia

&copy; 2026 Umar. All rights reserved.