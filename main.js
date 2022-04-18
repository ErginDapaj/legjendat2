const shkollat = document.querySelector(".click");
const arrow = document.getElementById("down-arrow");
const emrat = document.querySelector(".emrat");

function down() {
    if (emrat.classList.contains("baby")) {
        arrow.classList.remove("rotate");
        emrat.classList.remove("baby");
    } else {
        arrow.classList.add("rotate");
        emrat.classList.add("baby");
    }
};

shkollat.addEventListener("click", down);


const menu = document.querySelector(".menu");
const navi = document.querySelector(".navi");
const flayer = document.querySelector(".flayer");
const slayer = document.querySelector(".slayer");
const tlayer = document.querySelector(".tlayer");

function opened() {
    if (flayer.classList.contains("one")) {
        flayer.classList.remove("one");
        slayer.classList.remove("two");
        tlayer.classList.remove("three");
        navi.classList.remove("navi-move");
    } else {
        flayer.classList.add("one");
        slayer.classList.add("two");
        tlayer.classList.add("three");
        navi.classList.add("navi-move");
    }
};

menu.addEventListener("click", opened);