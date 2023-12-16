const IMAGES = [
  "st-001.jpg",
  "st-002.jpg",
  "st-049.jpg",
  "st-059.jpg",
  "st-166.jpg",
  "bo-080.jpg",
];

const wrapper = document.querySelector(".wrapper");

IMAGES.forEach((image) => {
  // Create container for each card
  const container = document.createElement("div");
  container.classList.add("container");

  // Create overlay for each card
  const overlay = document.createElement("div");
  overlay.classList.add("overlay");

  // Create card for each image
  const card = document.createElement("div");
  card.classList.add("card");

  card.style.backgroundImage = `url(${image})`;

  // Append overlay and card to the container
  container.appendChild(overlay);
  container.appendChild(card);

  wrapper.appendChild(container);
});

const containers = document.querySelectorAll(".container");
const overlays = document.querySelectorAll(".overlay");

containers.forEach((container, i) => {
  const overlay = overlays[i];
  container.addEventListener("mousemove", function (e) {
    const x = e.offsetX;
    const y = e.offsetY;
    const rotateY = (-1 / 5) * x + 20;
    const rotateX = (4 / 30) * y - 20;

    overlay.style = `background-position : ${-x - y}%; filter : opacity(${
      x / 200
    }) brightness(1.2)`;

    container.style = `transform : perspective(350px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  container.addEventListener("mouseout", function () {
    overlay.style = "filter : opacity(0)";
    container.style =
      "transform : perspective(350px) rotateY(0deg) rotateX(0deg)";
  });
});
