document.addEventListener("DOMContentLoaded", function () {
    var table = document.querySelector('.table-fade-in');
    var hasTableFaded = false;

    function isInViewport(element) {
        var rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
   

    function handleScroll() {
        if (isInViewport(table) && !hasTableFaded) {
            table.classList.add('fade-in');
            hasTableFaded = true;
            window.removeEventListener('scroll', handleScroll);
        }
    }

    window.addEventListener('scroll', handleScroll);

    // Fungsi untuk mengambil data dari API
    function fetchData() {
        const apiUrl = 'https://daintree-sable.vercel.app/api';
        fetch(apiUrl) 
            .then(response => response.json())
            .then(data => {
                // Memanggil fungsi untuk menambahkan data ke tabel
                populateTable(data.data);
            })
            .catch(error => console.error('Error fetching data:', error));
    }

    // Fungsi untuk menambahkan data ke tabel
    function populateTable(data) {
    var tableBody = table.querySelector('tbody');

    // hapus data yang sama kalau ada di tabel
    tableBody.innerHTML = '';

    // buat satu baris untuk semua data anggota kelompok
    var row = tableBody.insertRow();

    data.forEach(member => {
        // tambah sel untuk setiap kolom
        var cell = row.insertCell();
        cell.innerHTML = '<img src="/img/' + member.id + '.png"/><h5><b>' + member.nama + '</b></h5><p><b>' + member.provinsi + '</b></p><p>' + member.kota + '</p><p>' + member.kecamatan + '</p><p>' + member.desa + '</p>';
    });

    // tambah kelas fade-in ke tabel setelah data ditambahkan
    table.classList.add('fade-in');
    }
   
    // panggil fungsi
    fetchData();
    handleScroll();
});