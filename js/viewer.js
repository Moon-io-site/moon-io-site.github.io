window.addEventListener('DOMContentLoaded', () => {
    const iframe = document.getElementById('myIframe');
    const gameName = document.getElementById('game-name');
  
    // Get data from sessionStorage
    const gameLink = sessionStorage.getItem('gameLink');
    const name = sessionStorage.getItem('gameName');
  
    // Update iframe and title
    if (gameLink && iframe) {
      iframe.src = gameLink;
      gameName.textContent = name || 'Now Playing';
    } else {
      gameName.textContent = 'No Game Selected';
    }
  });
  
