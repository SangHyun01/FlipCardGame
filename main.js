const icons = [
  "🐨",
  "🐨",
  "🐹",
  "🐹",
  "🐸",
  "🐸",
  "🦓",
  "🦓",
  "🐴",
  "🐴",
  "🫎",
  "🫎",
  "🐔",
  "🐔",
  "🦄",
  "🦄",
];

// 카드 무작위로 섞는 Fisher-Yates 셔플 알고리즘
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
let random_icons = shuffleArray(icons);
for (let i = 0; i < icons.length; i++) {
  let box = document.createElement("div");
  box.className = "item";
  box.innerHTML = random_icons[i];

  box.onclick = function () {
    // 현재 클릭한 박스에 boxOpen 클래스 추가
    this.classList.add("boxOpen");
    // 500ms 후에 매치 여부 확인하는 타이머
    setTimeout(function () {
      // 열려있는 카드가 2장 이상인 경우
      if (document.querySelectorAll(".boxOpen").length > 1) {
        // 첫번쨰 카드의 내용과 두번째 카드의 내용이 일치하면
        if (
          document.querySelectorAll(".boxOpen")[0].innerHTML ===
          document.querySelectorAll(".boxOpen")[1].innerHTML
          // boxMatch 클래스에 추가한 뒤 boxOpen 클래스 제거하여 초기화
        ) {
          document.querySelectorAll(".boxOpen")[0].classList.add("boxMatch");
          document.querySelectorAll(".boxOpen")[1].classList.add("boxMatch");

          document.querySelectorAll(".boxOpen")[1].classList.remove("boxOpen");
          document.querySelectorAll(".boxOpen")[0].classList.remove("boxOpen");
          // boxMatch 길이가 icons의 길이와 일치하면 게암 종료
          if (document.querySelectorAll(".boxMatch").length === icons.length) {
            alert("성공!!");
          }
          // 두 카드의 내용이 다르면 boxOpen 초기화
        } else {
          document.querySelectorAll(".boxOpen")[1].classList.remove("boxOpen");
          document.querySelectorAll(".boxOpen")[0].classList.remove("boxOpen");
        }
      }
    }, 500);
  };
  document.querySelector(".game").appendChild(box);
}
