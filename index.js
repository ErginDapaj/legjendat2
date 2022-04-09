// ====================== photos pop-up =======================

const buttons = document.querySelectorAll('.project');
const overlay = document.querySelector('.overlay');
const overlayImage = document.querySelector('.overlay-inner img');

function open(e) {
    overlay.classList.add('open');
    const src = e.currentTarget.querySelectorAll('img')[0].currentSrc;
    overlayImage.src = src;
}

function close() {
    overlay.classList.remove('open');
}

buttons.forEach(button => button.addEventListener('click', open));
overlay.addEventListener('click', close);

// ================== Like button class changes =======================

// const likebtn = document.getElementById('like-buton');
// const input1 = document.querySelectorAll('#input1');
// const zemra = document.getElementById('heart');

// likebtn.addEventListener('click', () => {
//     if (zemra.classList.contains('clicked')) {
//         input1.value = parseInt(input1.value) - 1;
//     } else {
//         input1.value = parseInt(input1.value) + 1;
//     }
// })


const btn = document.getElementById('like-buton');
const heart = document.getElementById('heart');

btn.addEventListener('click', () => {
    if (heart.classList.contains('clicked')) {
        heart.classList.remove('clicked');
    } else {
        heart.classList.add('clicked');
    }
})