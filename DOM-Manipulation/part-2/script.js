// DOM Manipulation
// buat elemen baru
const pBaru = document.createElement('p');
const teksPBaru = document.createTextNode('Paragraf Baru');

// simpan tulisan ke dalam paragraf
pBaru.appendChild(teksPBaru);

// simpan pBaru di akhir section a
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);


const li = document.createElement('li');
const teksLiBaru = document.createTextNode('Item Baru');
li.appendChild(teksLiBaru);

const ul = document.que