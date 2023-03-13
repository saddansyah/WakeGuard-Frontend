<h1 align="center">
  🚗 WakeGuard
</h1>

## 👨‍💻 Kelompok Pancasila
- Christina Angraeni Panellah - 20/456840/TK/50664 **(Ketua Kelompok)**
- Saddan Syah Akbar - 20/460566/TK/51155
- Agnes Suarna - 463589/TK/51581

<details markdown="1">
<summary><h2>1️⃣ Modul 1</h2></summary>

## Permasalahan yang Dipecahkan
### Latar Belakang
Sampai saat ini, kecelakaan lalu lintas di Indonesia masih cukup tinggi. Berdasarkan data WHO,  Indonesia  menempati  urutan  ketiga dengan  penyebab  kematian tertinggi  yang disebabkan  oleh kecelakaan  lalu  lintas. Pada  tahun  2021,  kecelakaan  lalu lintas  di Indonesia  terjadi  sebanyak  103.645  kasus dimana  meningkat sebesar 3.62%dari  tahun lalu. Banyak  faktor  yang  menyebabkan  pengendara  kendaraan  mengalami  kecelakaan. 
<br/><br/>
Salah   satunya   adalah   pengemudi   yang   mengantuk   dan   kehilangan   konsentrasinya sehingga   pengemudi   tidak   stabil   membawa   kendaraanyang   berakibat terjadinya kecelakaan lalu lintas. Keadaan ini sering disebut sebagai microsleeppengendara. Menurut Komite Nasional Keselamatan  Transportasi (KNKT), 80% penyebab kecelakaan lalu lintas di tol adalah microsleepyang dialami oleh pengendara.
<br/><br/>
Oleh karena itu, perlu adanya solusi yang dapat mencegah terjadinya kecelakaan lalu lintas yang disebabkan oleh microsleepyang dialami oleh pengendara. Berdasarkan permasalah tersebut, kami memberikansolusi berupa suatu sistem softwareyang dapat mendeteksi kondisi microsleeppengendara, sehingga jika pengendara tersebut terdeteksi mengantuk maka   akan   diberikan   peringatandengan   beberapa   tahapan   (step   by   step)sampai pengendara menyadari akan hal tersebut.
<br/><br/>
Peringatan  pertama  dalam  rentang  waktu  5-10  menit, pengendara akan  mendapatkan bunyi alarm pada handphone dan screen smartphone driver berwarna kuning. Peringatan kedua dalam  rentang  waktu  15-20  menit,pengendara  tetap  mengalami microsleepwalaupun sudah diberikan peringatan pertama maka screen smartphoneberupa menjadi merah dan tidak dapat mengakses apapun pada smartphonenya. Sehingga dapat memicu pengendara untuk    memberhentikan    kendaraannya    terlebih    dahulu    agar    dapat mengembalikan screenawal  smartphonenya.Dengandemikian,  otomatis  pengendara menyadari bahwa dia mendapatkan peringatan bahwa harus dalam keadaan sadar untuk mengendarai kendaraan.

### Rumusan Permasalahan
- Bagaimana cara mendeteksi microsleepyang terjadi pada pengendara roda empatsehingga mengurangi penyebab kecelakaan lalu lintas?

## Ide Solusi
Sistem pendeteksi kantuk pengendara menggunakan machine learningdan computer visionuntuk mengurangi risiko kecelakaan lalu lintas akibat microsleep.

| Fitur                  | Keterangan                                                                               |
| ---------------------- | ---------------------------------------------------------------------------------------- |
| Drowsiness Detection | Mendeteksi kantuk berdasarkan facial expression: mata dan mulut.                     |
| Drowsiness Alert  | Mengingatkan pengemudi untuk tetap awareterhadap jalan. Fitur alert nantinya dibagi menjadi beberapa fase. |
| Drowsiness Tips | Memberikan rekomendasi mengenai tips-tips berkendara agar tetap fokus.  |
| One-tap Call | Menu untuk menghubungi nomer-nomer penting: Polisi, Ambulans, dll untuk pertolongan pertama apabila terjadi kecelakaan |
| Simple DashboardView | Menu dashboard utama yang simple berupa jam digital atau tampilan kecepatan kendaraan agar tidak mengganggu fokus driver |

## Analisis Kompetitor

### Kompetitor 1

| \*               | \*                                        |
| ---------------- | ----------------------------------------- |
| Nama             | Drowsy Driving Alert                      |
| Jenis kompetitor | Direct                         |
| Jenis produk     | Aplikasi Pendeteksi Kantuk      |
| Target customer  | Pengemudi                       |
| Unique value     | Aplikasi memiliki menu yang lebih lengkapdan terdapat mekanisme lanjutan apabila terjadi kecelakaan bernama One-tap Call |

**Kelebihan**

- Dapat memilih jenis-jenis ringtone untuk alert 

**Kelemahan**

- Menu kurang lengkap
- Tidak ada tampilan dashboard
- Tidak ada mekanisme lanjutan apabila terjadi kecelakaan

### Kompetitor 2

| \*               | \*                                        |
| ---------------- | ----------------------------------------- |
| Nama             | Awaker Microsleep Detection                      |
| Jenis kompetitor | Direct                         |
| Jenis produk     | Aplikasi Pendeteksi Kantuk      |
| Target customer  | Pengemudi                       |
| Unique value     | Aplikasi memiliki menu yang lebih lengkapdan terdapat mekanisme lanjutan apabila terjadi kecelakaan bernama One-tap Call |

**Kelebihan**

- Terdapat driver viewagar tidak mengganggu fokus pengemudi dalam berkendara

**Kelemahan**

- Menu kurang lengkap
- Tidak ada mekanisme lanjutan apabila terjadi kecelakaan

### Kompetitor 3

| \*               | \*                                        |
| ---------------- | ----------------------------------------- |
| Nama             | DriveAlert                      |
| Jenis kompetitor | Indirect                         |
| Jenis produk     | Aplikasi Pendeteksi Kantuk      |
| Target customer  | Pengemudi                       |
| Unique value     | Aplikasi memiliki mekanisme lanjutan apabila terjadi kecelakaan bernama One-tap Call |

**Kelebihan**

- Pendeteksi kantuk pengendara berdasarkan detak jantung.
- Terdapat fitur Café and Rest Areasebagai lokasi untuk istirahat saat mengalami kantuk.

**Kelemahan**

- Tidak ada mekanisme lanjutan apabila terjadi kecelakaan
    
</details>

<details markdown="1">
<summary><h2>2️⃣ Modul 2</h2></summary>

## Tujuan 
- Mencegah terjadinya kecelakaan lalu lintas yang disebabkan oleh microsleep yang dialami oleh pengendara
- Membantu user dalam kewaspadaan mengendarai kendaraan 
- Memberikan peringatan kepada pengguna kendaraan yang mengantuk.

## Pengguna Potensial
Pengguna potensial dari produk adalah Pengemudi kendaraan  roda 4 seperti Mobil, Truk, dll dan Pengemudi kendaraan  roda 2.
Kebutuhan pengguna : 
- Fitur yang tepat. Pengguna ingin fitur yang ada pada aplikasi dapat menjadi solusi ketika mengalami microsleep.
- Keakuratan. Pengguna ingin aplikasi dapat dengan akurat mendeteksi tanda-tanda mengantuk berdasarkan facial expression dan memberikan peringatan tepat waktu.
- Kemudahan penggunaan. Pengguna ingin aplikasi mudah untuk digunakan dan tidak mengganggu saat berkendara. Aplikasi harus memiliki interface yang sederhana dan mudah dimengerti.
- Kompatibilitas. Pengguna ingin aplikasi kompatibel sehingga dapat dipasang di berbagai perangkat sehingga aplikasi dapat diakses dan mudah digunakan tanpa adanya masalah teknis.
- Keamanan dan privasi. Pengguna ingin data pribadi mereka terlindungi dengan baik dan aman sehingga tidak terjadinya penggunaan atau pencurian data.

## Diagram
### Usecase Diagram
![image](https://user-images.githubusercontent.com/73093118/223000021-b7cd6334-a93c-4e68-9c09-c81b79578bc3.png)

### Entity Relationship Diagram
![image](https://user-images.githubusercontent.com/73093118/223000084-6dd56960-094c-4a31-836a-18e44bcf9a01.png)

## Functional Requirements
| FR  | Diagram |
| ------------- | ------------- |
| FR1  | Pengemudi dapat terdeteksi kantuk dengan facial expression mata dan mulut  |
| FR2  | Pengemudi diberikan peringatan agar tetap aware terhadap jalan, yang nantinya akan terbagi menjadi beberapa fitur alert untuk fase-fase tertentu.  |
| FR3  | Pengemudi akan diberikan rekomendasi terkait tips-tips berkendara agar tetap fokus.  |
| FR4  | Pengemudi diberikan akses komunikasi yang cepat, jika sewaktu-waktu kecelakaan terjadi. Seperti nomor-nomor penting, termasuk Polisi, Ambulans, dan lainnya sebagai pertolongan pertama.  |

## Wireframing
- [Lo-Fi Wireframing](https://www.figma.com/file/aV7ggJ6RH2coW8szDVTk1L/WakeGuard---Wireframe?node-id=0%3A1&t=a3xpXmo7uHITH5mQ-1 )
- [Hi-Fi Wireframing](https://www.figma.com/file/aV7ggJ6RH2coW8szDVTk1L/WakeGuard---Wireframe?node-id=20%3A92&t=a3xpXmo7uHITH5mQ-0)

## Gantt Diagram
![image](https://user-images.githubusercontent.com/73093118/223041081-87b0bc50-4b6b-4b87-8299-b69b718360f8.png)

## Software Development Life Cycle
### Method
Agile: Kanban

### Mengapa Kanban?
- Tidak ada pembagian role khusus dalam proyek pengembangan sehingga memudahkan SDLC
- Efisiensi waktu proses pengembangan
- Terpetakan secara visual sehingga mudah dipahami

</details>