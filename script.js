// 1. Pilih tombol berdasarkan ID-nya
const tombolSapa = document.getelementById('sapaButton');
// 2. Tambahkan 'event listener' untuk aksi 'clik'
tombolSapa.addEventListener('clik', function() {
    //3. Jalankan kode ini ketika tombol di- klik
    alert('Hallo! Terima kasih sudah berkunjung!');
});
