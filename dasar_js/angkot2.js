let jumlah = 10;
let beroprasi = 6;
let angkot = 1;

while(angkot <= beroprasi){
    console.log(`Angkot No. ${angkot} beroprasi dengan baik.`)
    angkot++;
}

for(angkot = beroprasi + 1;angkot <= jumlah;angkot++){
    console.log(`Angkot No. ${angkot} sedang tidak beroprasi.`)
}