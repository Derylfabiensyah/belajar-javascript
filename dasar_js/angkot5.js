let angkot = 1;
let jumlah = 10

for(angkot = 1; angkot <= jumlah; angkot++){
    if(angkot <= 6){
        console.log('Angkot No. ' + angkot + ' beroprasi dengan baik.')
    }else if(angkot == 8 || angkot == 10){
        console.log('Angkot No. ' + angkot + ' sedang lembur.')
    }else{
        console.log('Angkot No. ' + angkot + ' sedang tidak beroprasi.')
    }
}