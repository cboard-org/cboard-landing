---
title: Cboard mendukung standar papan terbuka
date: 2018-06-30
description: Pengantar openboard on Cboard
categories:
  - papan tulis
  - papan terbuka
  - open-source
image:
author_staff_member: shay
---

Kami di Cboard baru-baru ini merilis fitur baru dan keluar: dukungan openboard. Ini akan menjadi bagian penting untuk memungkinkan pengguna Cboard platform fleksibel yang mendukung berbagi dan migrasi yang mudah.

## Apa itu Format Papan Terbuka?

Open Board Format, atau singkatnya OBF, adalah spesifikasi untuk papan komunikasi AAC, yang menggambarkan data dan struktur yang diperlukan untuk mewakili papan, dari jumlah baris kisi hingga tombol, gambar, dan lainnya. Itu dibuat untuk memungkinkan papan menjadi portabel antara aplikasi dan dapat dibagikan di antara orang-orang.

## Mengapa mendukung Open Board Format?

Ketika kami belajar tentang Open Board Format, kami tidak perlu berpikir banyak, manfaatnya sudah jelas, semua orang menang, pengguna, Cboard, dan ekosistem AAC (mudah-mudahan). Pengguna dapat memigrasi papannya ke aplikasi lain dan berbagi papan dengan orang lain. Cboard dapat menggabungkan papan pihak ketiga yang tersedia untuk umum, pengguna dapat bermigrasi ke Cboard dari aplikasi lain. Jika lebih banyak papan kompatibel OBF akan dipublikasikan secara online, papan tidak akan lagi menjadi faktor kunci dalam memutuskan antara aplikasi AAC, itu akan memaksa perusahaan untuk lebih fokus pada peningkatan kualitas perangkat lunak daripada konten untuk mendapatkan keunggulan kompetitif.

## Perubahan perangkat lunak

Untuk mengimplementasikan impor OBF di Cboard, kami membuat fungsi adaptor yang mengambil objek OBF dan mengeluarkan objek yang bisa dipahami dan dirender oleh Cboard. Spesifikasi ini juga mendefinisikan cara untuk membundel papan sebagai file .OBZ yang pada dasarnya adalah satu atau lebih file .OBF yang dikompresi melalui gzip. Untuk mendukung gzip, kami perlu menambahkan dua paket `npm` `jszip` dan `jszip-utils`.

![Papan tulis](/images/app/import.png)

## Apa artinya bagi pengguna Cboard?

Saat mengekspor papan Anda di pengaturan Cboard `/ layar ekspor` , Anda sekarang akan memiliki opsi untuk mengekspor ke Format Papan Terbuka. Klik tombol `ekspor` dan pilih item menu `OpenBoard` dan simpan file. Fungsi impor belum berubah.

![Papan tulis](/images/app/export.png)

## Apa yang akan terjadi di masa depan?

Kami berharap bahwa suatu hari nanti akan ada repositori utama yang akan menawarkan papan kompatibel Format Papan Terbuka, pasar jika Anda mau, dari papan yang dibuat oleh para profesional, diurutkan berdasarkan kategori yang dinilai oleh orang-orang dan ditawarkan secara gratis.