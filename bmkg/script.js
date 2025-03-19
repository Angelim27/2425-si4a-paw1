fetch("https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json")
.then(res => res.json())
.then(data => {
    console.log(data);
    // console.log(data.Infogempa.gempa.Wilayah)
    // console.log(data.Infogempa.gempa.Magnitude)
    // tidak ngaruh ke live server
    
    document.getElementById("gempabumi").innerHTML =
    `<div class="col-lg-6">
        <br><h1>${data.Infogempa.gempa.Wilayah}</h1>
        <p>Waktu : ${data.Infogempa.gempa.Tanggal} ${data.Infogempa.gempa.Jam}</p>
        <p>Magnitude : ${data.Infogempa.gempa.Magnitude}</p>
        <p>Kedalaman : ${data.Infogempa.gempa.Kedalaman}</p>
        <p>Potensi : ${data.Infogempa.gempa.Potensi}</p>
    </div>
    <div class="col-lg-4">
        <img src="https://data.bmkg.go.id/DataMKG/TEWS/${data.Infogempa.gempa.Shakemap}" />
    </div>`
})
fetch("https://data.bmkg.go.id/DataMKG/TEWS/gempadirasakan.json")
.then( res => res.json())
.then( data => {
    console.log(data);
    data.Infogempa.gempa.forEach((list)=> {
        console.log(list);
        document.getElementById("GempaBumi15").innerHTML += `
        <div class = "col-lg-4 mt-4"> 
        <div class = "card p-3"> 
            <p>Wilayah : ${list.Wilayah}</p>
            <p>Waktu : ${list.Tanggal} ${list.Jam}</p>
            <p>Magnitude : ${list.Magnitude}</p>
            <p>Kedalaman : ${list.Kedalaman}</p>
            <p>Potensi : ${list.Potensi}</p>
        </div>
        </div>
        `;
    })
})
//p-3 = membuat padding 3 agar tidak terlalu mepet