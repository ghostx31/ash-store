const searchBar = document.getElementById('search-bar');
const searchButton = document.getElementById('search-button');
const cards = document.querySelectorAll('.card');

searchButton.addEventListener('click', () => {
  const searchValue = searchBar.value.trim().toLowerCase();

  if (searchValue !== '') {
    cards.forEach(card => {
      const title = card.querySelector('h2').textContent.trim().toLowerCase();

      if (title.includes(searchValue)) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  } else {
    cards.forEach(card => card.style.display = 'flex');
  }
});
