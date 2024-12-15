// Player data (42 players)
// Player data (42 contestants with actual names)
const players = [
  { name: "Park Juwon", id: 1 },
  { name: "Kim Jiwon", id: 2 },
  { name: "Park Seoyeon", id: 3 },
  { name: "Choi Jiwon", id: 4 },
  { name: "Seo Minji", id: 5 },
  { name: "Han Soojin", id: 6 },
  { name: "Lim Jiwon", id: 7 },
  { name: "Yoo Eunseo", id: 8 },
  { name: "Lee Jiwoo", id: 9 },
  { name: "Jang Mina", id: 10 },
  { name: "Sung Minji", id: 11 },
  { name: "Moon Seojin", id: 12 },
  { name: "Hwang Seungjin", id: 13 },
  { name: "Park Minseo", id: 14 },
  { name: "Kim Eunha", id: 15 },
  { name: "Choi Yoojin", id: 16 },
  { name: "Im Chaeun", id: 17 },
  { name: "Jo Yewon", id: 18 },
  { name: "Ahn Hana", id: 19 },
  { name: "Kang Minah", id: 20 },
  { name: "Lee Haeun", id: 21 },
  { name: "Kim Soojin", id: 22 },
  { name: "Ryu Minji", id: 23 },
  { name: "Seo Yujin", id: 24 },
  { name: "Jeong Jiwon", id: 25 },
  { name: "Choi Soojin", id: 26 },
  { name: "Han Seoyeon", id: 27 },
  { name: "Kim Hana", id: 28 },
  { name: "Lee Seojin", id: 29 },
  { name: "Jang Yewon", id: 30 },
  { name: "Ahn Seoyeon", id: 31 },
  { name: "Lim Soojin", id: 32 },
  { name: "Im Soojin", id: 33 },
  { name: "Sung Sooyeon", id: 34 },
  { name: "Choi Haeun", id: 35 },
  { name: "Jang Eunha", id: 36 },
  { name: "Yoo Minji", id: 37 },
  { name: "Han Jiwon", id: 38 },
  { name: "Lim Yujin", id: 39 },
  { name: "Lee Yoojin", id: 40 },
  { name: "Park Yujin", id: 41 },
  { name: "Kim Jiwon", id: 42 },
];

// Create player cards dynamically
const tableContainer = document.getElementById("table__entry-container");

players.forEach(player => {
  const playerCard = document.createElement("div");
  playerCard.classList.add("table__entry");

  const playerImage = document.createElement("img");
  playerImage.classList.add("table__entry-img");
  playerImage.src = `assets/player${player.id}.png`;  // Dynamically use the player filename
  playerImage.alt = player.name;

  playerCard.appendChild(playerImage);
  tableContainer.appendChild(playerCard);
});

// Add drag-and-drop functionality to player cards
const playerCards = document.querySelectorAll('.table__entry');

playerCards.forEach(card => {
  card.setAttribute('draggable', true); // Make cards draggable

  card.addEventListener('dragstart', e => {
    e.dataTransfer.setData('text/plain', card.querySelector('.table__entry-img').src);
    card.style.transform = "scale(1.1)"; // Slightly enlarge card for feedback
  });

  card.addEventListener('dragend', e => {
    card.style.transform = "scale(1)"; // Reset the card size after drop
  });
});
