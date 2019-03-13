import './main.scss';
import card2init from './components/card_2/card_2';
import initCloseModal from './components/modal/modal';
import RangeSlider from './components/inputs/range-slider/range-slider';

function main() {
  card2init();
  initCloseModal();
  const rangeSlider = new RangeSlider();
  rangeSlider.init({
    sliderContainer: document.getElementById('rangeSliderContainerOne'),
  });

  const test = () => {
    require.ensure(['./data/data.js'], (require) => {
      const d = require('./data/data.js');

      console.log(d.default);
    }, 'data');
  }

  setTimeout(() => {
    test();
  }, 5000);
}

document.addEventListener('DOMContentLoaded', main);
