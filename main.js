const shkollat = document.querySelector(".click");
const emrat = document.querySelector(".emrat")

function opened() {
    if (emrat.classList.contains("baby")) {
        emrat.classList.remove("baby");
    } else {
        emrat.classList.add("baby");
    }
};

shkollat.addEventListener("click", opened);