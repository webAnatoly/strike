class RangeSlider {
  init(options) {
    this.containerRange = options.sliderContainer;
    this.nativeRange = options.sliderContainer.querySelector('input[type="range"]');
    this.halfTrack = this.containerRange.querySelector('.range-slider-container__half-bg');
    this.customThumb = this.containerRange.querySelector('.range-slider-container__custom-thumb');
    this.views = {
      price: document.querySelector('.pricing-period-money'),
      days: document.querySelector('.pricing-period-days'),
    };
    this.pricePerDay = 35; // цена за день по умолчанию
    this.maxDays = 180;

    this.nativeRange.addEventListener('input', this._inputHandler.bind(this));
    this._setThumbPosition(50);
    this._showPrice(30);
  }

  _inputHandler(e) {
    const currentValue = parseInt(e.target.value, 10);
    // нужна такая вот  шкала 1, 7, 8, 9, 10, 11, 12, 13, 14, 16, 18, 20, 22, 24, 26, 28, 30, 45, 60, 90, 180

    if (currentValue <= 5) { // 1 день
      this._setThumbPosition(0);
      this._setTrackPosition(0);
      this._showPrice(1);
    }
    if (currentValue >= 5 && currentValue <= 7) { // 7 дней
      this._setThumbPosition(5);
      this._setTrackPosition(5);
      this._showPrice(7);
    }
    if (currentValue >= 8 && currentValue <= 10) { // 8 дней
      this._setThumbPosition(8);
      this._setTrackPosition(8);
      this._showPrice(8);
    }
    if (currentValue >= 11 && currentValue <= 13) { // 9 дней
      this._setThumbPosition(11);
      this._setTrackPosition(11);
      this._showPrice(9);
    }
    if (currentValue >= 14 && currentValue <= 16) { // 10 дней
      this._setThumbPosition(14);
      this._setTrackPosition(14);
      this._showPrice(10);
    }
    if (currentValue >= 17 && currentValue <= 19) { // 11 дней
      this._setThumbPosition(17);
      this._setTrackPosition(17);
      this._showPrice(11);
    }
    if (currentValue >= 20 && currentValue <= 22) { // 12 дней
      this._setThumbPosition(20);
      this._setTrackPosition(20);
      this._showPrice(12);
    }
    if (currentValue >= 23 && currentValue <= 25) { // 13 дней
      this._setThumbPosition(23);
      this._setTrackPosition(23);
      this._showPrice(13);
    }
    if (currentValue >= 26 && currentValue <= 28) { // 14 дней
      this._setThumbPosition(26);
      this._setTrackPosition(26);
      this._showPrice(14);
    }
    if (currentValue >= 29 && currentValue <= 31) { // 16 дней
      this._setThumbPosition(29);
      this._setTrackPosition(29);
      this._showPrice(16);
    }
    if (currentValue >= 32 && currentValue <= 34) { // 18 дней
      this._setThumbPosition(32);
      this._setTrackPosition(32);
      this._showPrice(18);
    }
    if (currentValue >= 35 && currentValue <= 37) { // 20 дней
      this._setThumbPosition(35);
      this._setTrackPosition(35);
      this._showPrice(20);
    }
    if (currentValue >= 38 && currentValue <= 40) { // 22 дней
      this._setThumbPosition(38);
      this._setTrackPosition(38);
      this._showPrice(22);
    }
    if (currentValue >= 41 && currentValue <= 43) { // 24 дней
      this._setThumbPosition(41);
      this._setTrackPosition(41);
      this._showPrice(24);
    }
    if (currentValue >= 44 && currentValue <= 47) { // 26 дней
      this._setThumbPosition(44);
      this._setTrackPosition(44);
      this._showPrice(26);
    }
    if (currentValue >= 47 && currentValue <= 50) { // 28 дней
      this._setThumbPosition(47);
      this._setTrackPosition(47);
      this._showPrice(28);
    }
    if (currentValue >= 50 && currentValue <= 60) { // 30 дней
      this._setThumbPosition(50);
      this._setTrackPosition(50);
      this._showPrice(30);
    }
    if (currentValue >= 60 && currentValue <= 70) { // 45 дней
      this._setThumbPosition(60);
      this._setTrackPosition(60);
      this._showPrice(45);
    }
    if (currentValue >= 70 && currentValue <= 80) { // 60 дней
      this._setThumbPosition(72);
      this._setTrackPosition(72);
      this._showPrice(60);
    }
    if (currentValue >= 80 && currentValue <= 90) { // 90 дней
      this._setThumbPosition(85);
      this._setTrackPosition(85);
      this._showPrice(90);
    }
    if (currentValue > 90) { // 180 дней
      this._setThumbPosition(100);
      this._setTrackPosition(100);
      this._showPrice(180);
    }
  }

  _setThumbPosition(value) {
    const containerWidth = parseFloat(this.containerRange.clientWidth);
    const thumbWidth = parseFloat(this.customThumb.clientWidth);
    const left = (value / 100) * (containerWidth - thumbWidth);
    this.customThumb.style.left = `${left}px`;
  }

  _setTrackPosition(value) {
    const containerWidth = parseFloat(this.containerRange.clientWidth);
    const width = (value / 100) * (containerWidth);
    this.halfTrack.style.width = `${width}px`;
  }

  setPricePerDay(number) {
    const price = parseFloat(number);
    this.pricePerDay = price;
  }

  _showPrice(days) {
    const d = parseInt(days, 10);

    const totalPrice = d * this.pricePerDay;

    this.views.price.innerHTML = `${totalPrice} / `;

    if (d === 1) {
      this.views.days.innerHTML = ` на ${d} день `;
    } else {
      this.views.days.innerHTML = ` на ${d} дней `;
    }
    const str = `#${totalPrice}рублей / на ${d} дней`; // клиент захотел чтобы цена записывалась в аттрибут href (думаю это придется переделывать)
    this.setHref(document.getElementById('calculatorAnchor'), str);
  }

  setHref(elem, str) {
    // метод получает елемет <a> и переписывает ему аттрибут href 
    if (elem && elem.attributes.href) {
      const s = String(str);
      elem.setAttribute('href', s);
    }
  }
}

export default RangeSlider;
