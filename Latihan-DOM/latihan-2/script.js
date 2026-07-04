function getPilihanKomputer() {
    const comp = Math.random();

    if (comp < 0.34) return 'gajah';
    if (comp >= 0.34 && comp < 0.67) return 'orang';
    return 'semut';
}

function getHasil(comp, player) {
    if (player == comp) return 'SERI!';
    if (player == 'gajah') return (comp == 'orang') ? 'MENANG!' : 'KALAH!';
    if (player == 'orang') return (comp == 'gajah') ? 'KALAH!' : 'MENANG!';
    if (player == 'semut') return (comp == 'orang') ? 'KALAH!' : 'MENANG!';
}

function putar() {
    const imgKomputer = document.querySelector('.img-komputer');
    const gambar = ['gajah', 'semut', 'orang'];
    let i = 0;
    const waktuMulai = new Date().getTime();
    const interval = setInterval(function() {
        if (new Date().getTime() - waktuMulai > 1000) {
            clearInterval(interval);
            return;
        }
        imgKomputer.setAttribute('src', 'img/' + gambar[i++] + '.png');
        if (i == gambar.length) i = 0;
    }, 100);
}



const pilihan = document.querySelectorAll('li img');

pilihan.forEach(function(pil) {
    pil.addEventListener('click', function() {
        const pilihanPlayer = pil.className;
        const pilihanKomputer = getPilihanKomputer();
        const hasil = getHasil(pilihanKomputer, pilihanPlayer);

        putar();
        
        setTimeout(function() {
            const imgKomputer = document.querySelector('.img-komputer');
            imgKomputer.setAttribute('src', 'img/' + pilihanKomputer + '.png');
            
            const info = document.querySelector('.info');
            info.innerHTML = hasil;
        }, 1000);
    })
})

// pGajah.addEventListener('click', function() {
//     const pilihanPlayer = pGajah.className;
//     const pilihanKomputer = getPilihanKomputer();
//     const hasil = getHasil(pilihanKomputer, pilihanPlayer);

//     const imgKomputer = document.querySelector('.img-komputer');
//     imgKomputer.setAttribute('src', 'img/' + pilihanKomputer + '.png');

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// })