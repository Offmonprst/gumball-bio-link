# The Amazing World of Gumball: Elmore Bio Link

Website bio link interaktif dengan tema kartun legendaris **The Amazing World of Gumball** (TAWOG). Dibuat dengan gaya komik pop-collage Elmore, penuh stiker, efek suara kartun Web Audio API, kutipan lucu harian, dan responsif untuk semua perangkat.

## Fitur Utama

- **Desain Komik Elmore**: Menggunakan palet warna asli karakter Gumball (Cyan), Darwin (Orange), dan Anais (Pink) dengan aksen ink outline komik.
- **Pengalih Karakter Interaktif**: Ganti tema dan avatar secara langsung antara Gumball, Darwin, dan Anais.
- **Efek Suara Kartun**: Sintesis suara menggunakan Web Audio API (bisa dimatikan atau dinyalakan kapan saja).
- **Kata Mutiara Elmore**: Generator kutipan acak dari keluarga Watterson.
- **Bagikan & Salin Tautan**: Tombol bagikan dengan modal dialog dan notifikasi toast instan.
- **Aksesibilitas & Standar WCAG AA**: Kontras tinggi, navigasi keyboard penuh, dan dukungan reduced motion.
- **Bebas Ketergantungan**: Murni HTML5, CSS3, dan Vanilla JavaScript tanpa dependensi runtime pihak ketiga yang berat.

## Struktur Berkas

```
gumball-bio-link/
├── index.html       # Markup semantik dengan SVG avatar kustom
├── styles.css       # Desain kartun Elmore dengan palet WCAG AA
├── app.js          # Logika interaktif, sintesis audio, dan modal
├── DESIGN.md       # Arah gaya dan panduan desain
├── GEMINI.md       # Konfigurasi pointer antislop
└── README.md       # Dokumentasi proyek
```

## Menjalankan Secara Lokal

Cukup buka berkas `index.html` di peramban web modern apa pun, atau jalankan server lokal:

```bash
npx serve .
# atau
python3 -m http.server 8000
```
