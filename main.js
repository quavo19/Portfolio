const humburg = document.querySelector('.hamburger');
const closer = document.querySelector('#closer');
const popup = document.querySelector('#menupopup');
humburg.addEventListener('click', () => {
  popup.style.display = 'flex';
});
closer.addEventListener('click', () => {
  popup.style.display = 'none';
});
