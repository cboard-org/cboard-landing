---
title: Fitur pemindaian dibebaskan ke komunitas
date: 2018-09-14
description: Menyediakan cara baru untuk berinteraksi antara pengguna dan aplikasi
categories:
  - papan tulis
  - kegunaan
  - aksesibilitas
  - reaksi
  - bereaksi dapat dipindai
image: /images/scanning.png
author_staff_member: tinchodipalma
---

Kami bangga mengatakan bahwa kami telah mengembangkan alat pemindaian yang terbuka untuk komunitas dan bebas untuk digunakan. Kami menyebut ini sebagai `reaksi yang dapat dipindai` dan tersedia untuk diunduh dari npm sebagai sebuah paket.

## Apa yang dapat dipindai dengan reaksi?

React-scannable menyediakan pemindai, yang berarti Komponen Bereaksi yang mengeksplorasi anak-anak mereka yang dapat dipindai (tombol, div, komponen lainnya), dan memungkinkan aplikasi untuk berinteraksi dengan mereka dengan cara baru.

React-scannable adalah paket npm yang dibangun di atas React dan JavaScript. Pengembang dapat menggunakan paket ini untuk memasukkan pemindai ke dalam proyek Bereaksi mereka.

## Apa yang bisa dilakukan pemindaian reaksi?

Setelah pemindai aktif, pemindai akan beralih ke elemen-elemen yang telah diidentifikasi sebagai dapat dipindai dan memungkinkan mereka melakukan tindakan ketika mereka fokus pada layar.

![bereaksi-scannable dalam aksi](/images/scanning.gif)

Tujuannya adalah untuk memperluas hubungan antara pengguna dan aplikasi, memungkinkan cara interaksi lainnya.

Saat posting ini ditulis, `react-scannable` memiliki dua metode interaksi: otomatis dan manual.

Metode otomatis berulang pada elemen yang dapat dipindai secara berurutan. Setelah Anda menekan tombol apa saja (atau klik pada layar) elemen yang dapat dipindai yang dipilih dipilih dan pemindai akan beralih ke elemen yang dapat dipindai di dalamnya atau mendelegasikan acara ke elemen jika tidak memiliki anak yang dapat dipindai.

Perilaku metode manual sangat berbeda. Ini berulang pada elemen yang dapat dipindai ketika pengguna menekan tombol spasi / tab dan memilihnya jika pengguna menekan tombol enter / backspace.

Bahkan jika Anda menggunakan metode otomatis atau manual, pengguna dapat menonaktifkan pemindai dengan menekan Escape empat kali.

## Papan dan bisa dipindai

Cboard menggunakan react-scannable untuk mengimplementasikan fitur pemindai hanya untuk memindai seluruh papan.

Pengguna yang menggunakan sakelar untuk berinteraksi dengan aplikasi dapat berkomunikasi seperti halnya pengguna lain.

![beralih](/images/switch.jpg)

Ini sangat penting karena memungkinkan orang cacat untuk berinteraksi dengan papan seperti biasa.

## Mengapa paket npm?

Gagasan di balik reaksi-scannable adalah terbuka untuk masyarakat, bersumber terbuka dan bebas untuk digunakan. Anda dapat mengunduh kode sumber dari [Github](https://github.com/cboard-org/react-scannable) atau paket dari [npm registry](https://www.npmjs.com/package/react-scannable).

Kami ingin orang-orang terlibat dalam hal ini, menggunakan program yang dapat dipindai di aplikasi mereka, memperluas cara aplikasi mereka berinteraksi dengan pengguna.

Kami juga mendorong orang untuk melaporkan masalah yang mereka miliki (dan mempromosikan perbaikan kepada mereka jika memungkinkan), dan tentu saja, untuk mengembangkan fitur baru (mengapa bukan strategi / metode baru).