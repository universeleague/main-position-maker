// Enable dragging functionality
const playerCards = document.querySelectorAll('.player-card');
const dropZones = document.querySelectorAll('.drop-zone');

playerCards.forEach(card => {
    card.addEventListener('dragstart', e => {
        e.dataTransfer.setData('text/plain', card.id);
    });
});

dropZones.forEach(zone => {
    zone.addEventListener('dragover', e => {
        e.preventDefault();
    });

    zone.addEventListener('drop', e => {
        e.preventDefault();
        const playerId = e.dataTransfer.getData('text/plain');
        const playerCard = document.getElementById(playerId);

        // Ensure only one card per drop zone
        if (zone.children.length === 0) {
            zone.appendChild(playerCard);
        }
    });
});

// Save lineup button functionality
document.getElementById('save-button').addEventListener('click', () => {
    const lineup = {};
    dropZones.forEach(zone => {
        if (zone.children.length > 0) {
            lineup[zone.dataset.position] = zone.children[0].id;
        }
    });
    console.log(lineup);
    alert('Lineup saved! Check the console for details.');
});
