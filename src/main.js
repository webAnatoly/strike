import './main.scss';
import card2init from './components/card_2/card_2';
import initCloseModal from './components/modal/modal';
import RangeSlider from './components/inputs/range-slider/range-slider';

function main() {
  console.log('test my build');
  card2init();
  initCloseModal();
  const rangeSlider = new RangeSlider();
  rangeSlider.init({
    sliderContainer: document.getElementById('rangeSliderContainerOne'),
  });
}

document.addEventListener('DOMContentLoaded', main);
