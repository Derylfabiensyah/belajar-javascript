const h1 = document.querySelector('h1');
const tbl = document.getElementById('tbl');

tbl.addEventListener('click', function() {
    document.body.classList.toggle('salmon');
});

const tbl2 = document.createElement('button');
const tksTbl = document.createTextNode('tombol acak warna');

tbl2.appendChild(tksTbl);
document.body.appendChild(tbl2);

tbl2.addEventListener('click', function() {
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);

    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
});


const sMerah = document.querySelector('input[name=sMerah]');
const sHijau = document.querySelector('input[name=sHijau]');
const sBiru = document.querySelector('input[name=sBiru]');

sMerah.addEventListener('input', function() {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;

    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
})

sHijau.addEventListener('input', function() {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;

    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
})

sBiru.addEventListener('input', function() {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;

    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
})


document.addEventListener('mousemove', function(event) {
    const posX = Math.round((event.clientX / window.innerWidth) * 255);
    const posY = Math.round((event.clientY / window.innerHeight) * 255);

    document.body.style.backgroundColor = `rgb(${posX},${posY},100)`;
})