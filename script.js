// Player data (42 players)
const players = [
  { name: "Player 1", id: 1 },
  { name: "Player 2", id: 2 },
  { name: "Player 3", id: 3 },
  { name: "Player 4", id: 4 },
  { name: "Player 5", id: 5 },
  { name: "Player 6", id: 6 },
  { name: "Player 7", id: 7 },
  { name: "Player 8", id: 8 },
  { name: "Player 9", id: 9 },
  { name: "Player 10", id: 10 },
  { name: "Player 11", id: 11 },
  { name: "Player 12", id: 12 },
  { name: "Player 13", id: 13 },
  { name: "Player 14", id: 14 },
  { name: "Player 15", id: 15 },
  { name: "Player 16", id: 16 },
  { name: "Player 17", id: 17 },
  { name: "Player 18", id: 18 },
  { name: "Player 19", id: 19 },
  { name: "Player 20", id: 20 },
  { name: "Player 21", id: 21 },
  { name: "Player 22", id: 22 },
  { name: "Player 23", id: 23 },
  { name: "Player 24", id: 24 },
  { name: "Player 25", id: 25 },
  { name: "Player 26", id: 26 },
  { name: "Player 27", id: 27 },
  { name: "Player 28", id: 28 },
  { name: "Player 29", id: 29 },
  { name: "Player 30", id: 30 },
  { name: "Player 31", id: 31 },
  { name: "Player 32", id: 32 },
  { name: "Player 33", id: 33 },
  { name: "Player 34", id: 34 },
  { name: "Player 35", id: 35 },
  { name: "Player 36", id: 36 },
  { name: "Player 37", id: 37 },
  { name: "Player 38", id: 38 },
  { name: "Player 39", id: 39 },
  { name: "Player 40", id: 40 },
  { name: "Player 41", id: 41 },
  { name: "Player 42", id: 42 },
];

// Create player cards dynamically
const tableContainer = document.getElementById("table__entry-container");

players.forEach(player => {
  const playerCard = document.createElement("div");
  playerCard.classList.add("table__entry");

  const playerImage = document.createElement("img");
  playerImage.classList.add("table__entry-img");
  playerImage.src = `assets/players/player${player.id}.png`;  // Dynamically use the player filename
  playerImage.alt = player.name;

  const playerName = document.createElement("div");
  playerName.classList.add("table__entry-text");
  playerName.innerHTML = `<strong>${player.name}</strong>`;

  playerCard.appendChild(playerImage);
  playerCard.appendChild(playerName);
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
