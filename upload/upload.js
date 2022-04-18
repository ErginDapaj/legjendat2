const realFileBtn = document.querySelector("#file");
const customBtn = document.querySelector("#custom");
const customTxt = document.querySelector("#custom-text");

customBtn.addEventListener("click", function() {
    realFileBtn.click();
});

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