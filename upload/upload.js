const realFileBtn = document.querySelector("#file");
const customBtn = document.querySelector("#custom");
const customTxt = document.querySelector("#custom-text");

customBtn.addEventListener("click", function() {
    realFileBtn.click();
});