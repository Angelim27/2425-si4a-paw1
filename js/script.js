document.getElementsByTagName('body')[0].style.backgroundColor = 'yellow';

// variabel
let nama = 'Ahmad';
let umur = 20;
let statusMahasiswa = true;
document.getElementById('nama').innerHTML = "Nama Saya : " + nama;
document.getElementById('umur').innerHTML = `Umur Saya : ${umur}`;

let mahasiswa=[
    "Angel", "Rissa", "Sherlyn", "Jessi"
];
mahasiswa.forEach( (mhs) => {
    document.getElementById('mahasiswa').innerHTML += `<li>${mhs}</li>`;
})

let nilai = [
    {nama: "Angel", nilai: 98},
    {nama: "Rissa", nilai: 96},
    {nama: "Sherlyn", nilai: 31},
    {nama: "Jessi", nilai: 78}
];
nilai.forEach( (data) => {
    document.getElementById('Nilai').innerHTML += `<tr>
        <td> ${data.nama} </td>
        <td> ${data.nilai} </td>
    </tr>`;
});
fetch('https://dummyjson.com/quotes') // akses ke API quotes
.then(res => res.json()) // ubah data ke json
.then(data => { // tampilkan data
    console.log(data.quotes)
    data.quotes.forEach ( (q) => {document.getElementById('quotes').innerHTML += `<li>${q.quote} - ${q.author}</li>`})
});

