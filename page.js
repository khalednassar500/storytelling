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

// ===================================================================

// Select the container and all cards
const container = document.getElementById("mobile_cards");
const cards = [...container.children];
const scroll_points = document.querySelector(".scroll_points");
const scroll_images_con = document.querySelector(".si");
const scroll_imgs = [
  "https://cdn.pixabay.com/photo/2023/05/04/14/49/ai-generated-7970305_1280.jpg",
  "https://cdn.pixabay.com/photo/2022/12/08/07/34/cosmos-7642703_1280.jpg",
  "https://cdn.pixabay.com/photo/2022/05/25/09/27/cosmos-7220130_1280.jpg",
  "https://masterpiecer-images.s3.yandex.net/12ca7c8f86da11ee80fe261105627a54:upscaled",
  "https://cdn.wionews.com/sites/default/files/2024/07/12/443192-earth-1.png",
  "https://masterpiecer-images.s3.yandex.net/f19a6a6b9fe611eeab42badf81d486ab:upscaled",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqONX-Kt1JXq1fUwh1hU3RoA0IZhSWb5KF3w&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw9VddrkXu5v4LKpF1EJ4N2J8R139RKdMILg&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBrQ8kaSserW6uOXR7nCkYJI_-p9Rch9cgIg9WnNM5rhw7JjEtH0mRSkxQM_NWDVo-Oac&usqp=CAU",
  "https://cdn.pixabay.com/photo/2023/05/04/14/49/ai-generated-7970305_1280.jpg",
  "https://masterpiecer-images.s3.yandex.net/12ca7c8f86da11ee80fe261105627a54:upscaled",
  "https://masterpiecer-images.s3.yandex.net/f19a6a6b9fe611eeab42badf81d486ab:upscaled",
  "https://cdn.pixabay.com/photo/2023/05/04/14/49/ai-generated-7970305_1280.jpg",
  "https://masterpiecer-images.s3.yandex.net/12ca7c8f86da11ee80fe261105627a54:upscaled",
  "https://masterpiecer-images.s3.yandex.net/f19a6a6b9fe611eeab42badf81d486ab:upscaled",
];
let all_text = document.querySelectorAll(".line_des");

function activeCardDesign(index, activeCard) {
  [...scroll_points.children].forEach((point) =>
    point.classList.remove("active")
  );
  scroll_points.children[index - 1].classList.add("active");

  scroll_images_con.firstElementChild.src = scroll_imgs[index - 1];
  // Optionally, add an 'active' class to the current card
  cards.forEach((card) => card.classList.remove("active"));
  activeCard.classList.add("active");
}

// Initialize the Intersection Observer
const observer = (type, threshold, i) =>
  new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        // Check if the card is fully in view
        if (entry.isIntersecting) {
          const activeCard = entry.target;
          console.log(`Active card index: ${activeCard} ${i}`);
          if (type === "cards") {
            activeCardDesign(activeCard.dataset.index, activeCard);
          } else {
            all_text[i].classList.add("active");
          }
        }
      });
    },
    {
      root: container, // The container as the scrollable parent
      threshold: threshold, // Trigger when the entire card is fully visible
    }
  );

// Observe each card and generate scroll points based on the cards number
const points_fragement = document.createDocumentFragment();

cards.forEach((card) => {
  let div = document.createElement("div");
  div.setAttribute("class", "sc");
  points_fragement.appendChild(div);
  return observer("cards", 0.25).observe(card);
});
scroll_points.appendChild(points_fragement);

all_text.forEach((text, i) => {
  return observer("text", 1, i).observe(text);
});
