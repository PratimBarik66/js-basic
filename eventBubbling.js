const grandparent = document.getElementById('grandparent');
const parent = document.getElementById('parent');
const child = document.getElementById('child');

grandparent.addEventListener('click', (e) => {
    console.log('grandparent capture');
},{capture : true})

parent.addEventListener('click', (e) => {
    console.log('parent capture');
}, {capture : true})

child.addEventListener('click', (e) => {
    console.log('child capture');
},{capture : true})