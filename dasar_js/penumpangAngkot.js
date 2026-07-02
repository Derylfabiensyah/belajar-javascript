let penumpang = ['deryl',undefined,'maman','agus','ibang','divo','dalisha'];

let tambahPenumpang = function(namaPenumpang, penumpang){
    if(penumpang.length === 0 ){
        penumpang.unshift(namaPenumpang);
        return penumpang;
    }else{
        for(let i = 0; i < penumpang.length; i++){
            if(penumpang[i] === undefined){
                penumpang[i] = namaPenumpang;
                return penumpang;
            }
            if(namaPenumpang === penumpang[i]){
                console.log(`penumpang atas nama ${namaPenumpang} sudah ada di dalam`)
                return penumpang;
            }
            if(i === penumpang.length - 1){
                penumpang.push(namaPenumpang);
                return penumpang;
            }
        }
        return penumpang;
    }
}

let hapusPenumpang = function(namaPenumpang, penumpang){
    if(penumpang.length === 0 ){
        console.log('Angkot masih kosong.')
        return penumpang;
    }else{
        for(let i = 0; i < penumpang.length; i++){
            if(penumpang[i] === namaPenumpang){
                penumpang[i] = undefined;
                return penumpang;
            }else if(i === penumpang.length - 1){
                console.log('Tidak ada nama penumpang tersebut didalam angkot');
                return penumpang;
            }
        }
    }
}

tambahPenumpang("aice", penumpang)
console.log(penumpang.join(" - "));