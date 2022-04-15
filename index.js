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

      let span = document.createElement("span");
      span.id = "like-button" + [i];
      span.className = "heart";

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
      var isMobile = false; //initiate as false
      // device detection
      if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
        isMobile = true;
        span.addEventListener("touchstart", () => {
        console.log('This start')
        let likes = parseInt(input.value);
        if (span.classList.contains("clicked")) {
          span.classList.remove("clicked");
          input.value -= 1;
        } else {
          span.classList.add("clicked");
          input.value = likes + Number(1);
        }
      });
      } else {
        console.log('This ran')
      span.addEventListener("click", () => {
        let likes = parseInt(input.value);
        if (span.classList.contains("clicked")) {
          span.classList.remove("clicked");
          input.value -= 1;
        } else {
          span.classList.add("clicked");
          input.value = likes + Number(1);
        }
      });
      }
      document.getElementById("row").appendChild(div1);
      document.getElementById([i]).appendChild(div2);
      document.getElementById("div" + [i]).appendChild(img);
      document.getElementById("div" + [i]).appendChild(div3);
      document.getElementById("grid" + [i]).appendChild(button);

      document.getElementById([i]).appendChild(div4);
      document.getElementById("likes" + [i]).appendChild(span);
      // document.getElementById("like-button" + [i]).appendChild(span);

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

setTimeout(function () {
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
}, 1000);
