let data; //deklarasi variabel data
let daftar_tamu = document.getElementById('daftar_tamu'); //ambil element

//panggil fungsi tampil
tampil();

function simpan(){
    let nama = document.getElementById('nama').value;//ambil value dai input
    let keperluan = document.getElementById('keperluan').value; //ambil balue dari input
    console.log(nama);
    let jk = document.getElementById('jk').value;
    console.log(jk);

    //cek apakaha local storage kosong
    if(localStorage.getItem('ls_bukutamu') == null){
        data = []; //buat array kosong
    } else {
        //ambil data dari local storage
        data = JSON.parse(localStorage.getItem('ls_bukutamu'));
    }
    
    data.push({nama_pengunjung: nama, perlu: keperluan, jk:jk}); //masukkan value input nama ke dalam array

    localStorage.setItem('ls_bukutamu', JSON.stringify(data)); //simpan ke local storage
}

function tampil(){
    localStorage.getItem('ls_bukutamu') == null ? data = [] : data = JSON.parse(localStorage.getItem('ls_bukutamu')); //cek apakah local storage kosong, ini yang tanpa if-else

    console.log(data.length); // tampilkan jumlah data di console

    document.getElementById('total_tamu').innerHTML = `Total Tamu : ${data.length}`;

    let total_laki=0;
    let total_perempuan=0;

    data.forEach((item) => {
        if(item.jk== 'L'){
            total_laki++;
        } else if (item.jk == 'P'){
            total_perempuan++;

        }
        daftar_tamu.innerHTML += `<li>
            ${item.nama_pengunjung} - ${item.perlu}
        </li>`
    })
    document.getElementById('tamu_laki').innerHTML = `Total Tamu Laki-Laki :  ${total_laki}`;
    document.getElementById('tamu_perempuan').innerHTML = `Total Tamu Perempuan :  ${total_perempuan}`;
}