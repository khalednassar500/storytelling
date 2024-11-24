function toggleNav() {
  let navLinks = document.getElementById("nav_links");
  navLinks.classList.toggle("active");
  document.getElementById("toggle_nav_btn").innerHTML =
    navLinks.classList.contains("active") ? "×" : "≡";
}

function toggleStory() {
  document.getElementById("story_con").classList.toggle("active");
}

const totalCrads = document.getElementById("total_num");
const currentCard = document.getElementById("current_num");

(function calculateCardsNum() {
  totalCrads.innerHTML =
    document.getElementById("mobile_cards").children.length;
})();

function nextCard() {
  let nextNum = Number(currentCard.innerHTML) + 1;
  if (nextNum <= Number(totalCrads.innerHTML)) {
    console.log(nextNum);
    currentCard.innerHTML = nextNum;
    document
      .getElementById("mobile_cards")
      .children[nextNum - 1].scrollIntoView();
    document
      .getElementById("mobile_cards")
      .children[nextNum - 2].classList.remove("activeCard");
    document
      .getElementById("mobile_cards")
      .children[nextNum - 1].classList.add("activeCard");
    // document
    //   .getElementById("mobile_cards")
    //   .children[nextNum - 2].classList.toggle("togglePrevCard");
    // document
    //   .getElementById("mobile_cards")
    //   .children[nextNum - 2].classList.toggle("togglePrevCard");
    // setTimeout(() => {
    //   document
    //     .getElementById("mobile_cards")
    //     .children[nextNum - 2].classList.toggle("togglePrevCard");
    // }, 500);
  }

  // else {
  //   currentCard.innerHTML = 1;
  //   document.getElementById("mobile_cards").children[0].scrollIntoView();
  // }
}

function prevCard() {
  let nextNum = Number(currentCard.innerHTML) - 1;
  if (nextNum >= 1) {
    currentCard.innerHTML = nextNum;
    document
      .getElementById("mobile_cards")
      .children[nextNum - 1].scrollIntoView();
    document
      .getElementById("mobile_cards")
      .children[nextNum].classList.remove("activeCard");
    document
      .getElementById("mobile_cards")
      .children[nextNum - 1].classList.add("activeCard");
    // setTimeout(() => {
    //   document
    //     .getElementById("mobile_cards")
    //     .children[nextNum].classList.toggle("toggleNextCard");
    // }, 500);
  }
  // } else {
  //   currentCard.innerHTML = Number(totalCrads.innerHTML);
  //   document
  //     .getElementById("mobile_cards")
  //     .children[Number(totalCrads.innerHTML) - 1].scrollIntoView();
  // }
}
