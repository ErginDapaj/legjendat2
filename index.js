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

const likebtn = document.getElementById('like-buton');
const input1 = document.getElementById('input1');
const zemra = document.getElementById('heart');

likebtn.addEventListener('click', () => {
    if (zemra.classList.contains('clicked')) {
        input1.value = parseInt(input1.value) - 1;
    } else {
        input1.value = parseInt(input1.value) + 1;
    }
})


const btn = document.getElementById('like-buton');
const heart = document.getElementById('heart');

btn.addEventListener('click', () => {
    if (heart.classList.contains('clicked')) {
        heart.classList.remove('clicked');
    } else {
        heart.classList.add('clicked');
    }
})

//FOTOT HAHAHAHAH
fetch('./fotot.json')
    .then(response => response.json())
    .then(data => {
        console.log(data.fotot.length)
        for (let i = 0; i < data.fotot.length; i++) {
            console.log(data.fotot[i].url);
            console.log(i)
            let div1 = document.createElement('div');
            div1.id = [i];
            div1.className = 'settings'

            let div2 = document.createElement('div');
            div2.className = 'project'
            div2.id = 'div2'

            let img = document.createElement('img');
            img.src = data.fotot[i].url
            img.alt = data.fotot[i].likes
            img.className = 'image'

            let div3 = document.createElement('div');
            div3.className = 'grid'
            div3.id = 'grid'
            let button = document.createElement('button');
            button.className = "full-img"
            document.getElementById('row').appendChild(div1);
            document.getElementById([i]).appendChild(div2);
            document.getElementById('div2').appendChild(img);
            document.getElementById('div2').appendChild(div3);
            document.getElementById('grid').appendChild(button);

        }

    })
    .catch(error => console.log(error));