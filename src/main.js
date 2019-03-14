import './main.scss';
import card2init from './components/card_2/card_2';
import initCloseModal from './components/modal/modal';
import RangeSlider from './components/inputs/range-slider/range-slider';

function main() {
  card2init();
  initCloseModal();
  const rangeSlider = new RangeSlider();

  const getData = () => {
  require.ensure(['./data/data.js'], function(require) { // data.js выделен в отдельный файл, чтобы клиент(заказчик) мог менять в нём данные
    rangeSlider.init({
        sliderContainer: document.getElementById('rangeSliderContainerOne'),
        data: require('./data/data.js'),
      });
    }, 'data');
  }
  getData();
}

document.addEventListener('DOMContentLoaded', main);
