import './main.scss';
import card2init from './components/card_2/card_2.js'
import initCloseModal from './components/modal/modal.js';

document.addEventListener("DOMContentLoaded", function(event) {
  console.log('test my build');
  card2init();
  initCloseModal();
});