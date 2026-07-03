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

const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('section#b li:nth-child(2)');

ul.insertBefore(li, li2);


const link = document.getElementsByTagName('a')[0];

sectionA.removeChild(link);

const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');

const h2Baru = document.createElement('h2');
const h2TeksBaru = document.createTextNode('Judul Baru!');

h2Baru.appendChild(h2TeksBaru);

sectionB.replaceChild(h2Baru, p4); 


pBaru.style.backgroundColor = 'salmon';
h2Baru.style.backgroundColor = 'salmon';
li.style.backgroundColor = 'salmon';
