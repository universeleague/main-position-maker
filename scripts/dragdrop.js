document.addEventListener("DOMContentLoaded", function () {
  const draggableElements = document.querySelectorAll('.trainee-card');
  const dropZones = document.querySelectorAll('.drop-zone');

  // Add dragstart event to each trainee card
  draggableElements.forEach(element => {
    element.addEventListener('dragstart', (e) => {
      // Store the dragged element's id in the dataTransfer object
      e.dataTransfer.setData('text', e.target.id);
    });
  });

  // Add dragover event to each drop zone
  dropZones.forEach(zone => {
    zone.addEventListener('dragover', (e) => {
      e.preventDefault(); // Allow dropping by preventing default behavior
    });

    // Add drop event to each drop zone
    zone.addEventListener('drop', (e) => {
      e.preventDefault();
      const draggedId = e.dataTransfer.getData('text');
      const draggedElement = document.getElementById(draggedId);
      const dropZone = e.target;

      // Append the dragged element to the drop zone
      if (dropZone.classList.contains('drop-zone')) {
        dropZone.innerHTML = ''; // Clear previous drop zone content
        dropZone.appendChild(draggedElement);
      }
    });
  });
});
