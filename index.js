//FOTOT HAHAHAHAH
fetch("./fotot.json")
    .then((response) => response.json())
    .then((data) => {
        console.log(data.fotot.length);
        for (let i = 0; i < data.fotot.length; i++) {
            console.log([i]);
            let div1 = document.createElement("div");
            div1.id = [i];
            div1.className = "settings";

            let div2 = document.createElement("div");
            div2.className = "project";
            div2.id = "div" + [i];

            let img = document.createElement("img");
            img.src = data.fotot[i].url;
            img.alt = data.fotot[i].likes;
            img.className = "image";

            let div3 = document.createElement("div");
            div3.className = "grid";
            div3.id = "grid" + [i];

            let button = document.createElement("button");
            button.className = "full-img";
            button.innerText = "Full Image";

            let div4 = document.createElement("div");
            div4.className = "likes";
            div4.id = "likes" + [i];

            let button2 = document.createElement("button");
            button2.id = "like-button" + [i];
            button2.className = "like-button";

            let ii = document.createElement("i");
            ii.className = "fa-solid fa-heart";
            ii.id = "heart";

            let p = document.createElement("p");
            p.className = "num";
            p.id = "num" + [i];
            p.innerText = "Likes";

            let input = document.createElement("input");
            input.type = "number";
            input.id = "input" + [i];
            input.value = data.fotot[i].likes;
            input.name = "Likes";
            input.className = "input1";

            document.getElementById("row").appendChild(div1);
            document.getElementById([i]).appendChild(div2);
            document.getElementById("div" + [i]).appendChild(img);
            document.getElementById("div" + [i]).appendChild(div3);
            document.getElementById("grid" + [i]).appendChild(button);

            document.getElementById([i]).appendChild(div4);
            document.getElementById("likes" + [i]).appendChild(button2);
            document.getElementById("like-button" + [i]).appendChild(ii);

            document.getElementById("likes" + [i]).appendChild(p);
            document.getElementById("num" + [i]).appendChild(input);
        }
    })
    .catch((error) => console.log(error));

let div5 = document.createElement("div");
div5.className = "overlay";
div5.id = "overlay";

let div6 = document.createElement("div");
div6.className = "overlay-inner";
div6.id = "overlay-inner";

let img2 = document.createElement("img");
img2.src = "/";

let button3 = document.createElement("button");
button3.id = "close";
button3.className = "close";

let ii2 = document.createElement("i");
ii2.className = "fa-solid fa-xmark";

document.getElementById("row").appendChild(div5);
document.getElementById("overlay").appendChild(div6);
document.getElementById("overlay-inner").appendChild(img2);
document.getElementById("overlay-inner").appendChild(button3);
document.getElementById("close").appendChild(ii2);

setTimeout(function() {
    console.log("Is Working brother");

    // ====================== photos pop-up =======================
    const buttons = document.querySelectorAll(".project");
    const overlay = document.querySelector(".overlay");
    const overlayImage = document.querySelector(".overlay-inner img");

    function open(e) {
        overlay.classList.add("open");
        const src = e.currentTarget.querySelectorAll("img")[0].currentSrc;
        overlayImage.src = src;
    }

    function close() {
        overlay.classList.remove("open");
    }

    buttons.forEach((button) => button.addEventListener("click", open));
    overlay.addEventListener("click", close);

    // ================== Like button class changes =======================

    const likebtn = document.getElementById("like-buton");
    const input1 = document.getElementById("input1");
    const zemra = document.getElementById("heart");

    likebtn.addEventListener("click", () => {
        if (zemra.classList.contains("clicked")) {
            input1.value = parseInt(input1.value) - 1;
        } else {
            input1.value = parseInt(input1.value) + 1;
        }
    });

    const btn = document.getElementById("like-buton");
    const heart = document.getElementById("heart");

    btn.addEventListener("click", () => {
        if (heart.classList.contains("clicked")) {
            heart.classList.remove("clicked");
        } else {
            heart.classList.add("clicked");
        }
    });
}, 1000);