let read = document.getElementById('read');
console.log(read);

let disappear = document.getElementById('disappear');
console.log(disappear);

let disappear2 = document.querySelectorAll('.notification');
console.log(disappear2);

read.addEventListener('click', function() {
    console.log("押した");
    disappear.style.display = 'none';

    for (let i = 0; i < disappear2.length; i++) {
        disappear2[i].style.display = 'none';
    }
});