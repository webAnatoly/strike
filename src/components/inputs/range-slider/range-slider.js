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
  }

  _inputHandler(e) {
    const currentValue = parseInt(e.target.value, 10);
    console.log('currentValue', currentValue);
    this._setThumbPosition(currentValue);
    this._setTrackPosition(currentValue);
    if (currentValue > 0) {
      this._showPrice(currentValue);
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

  _showPrice(value) {
    let day = parseInt(value / 100 * this.maxDays, 10);

    if (value <= 21) { day = 1; }
    if (value >= 21 && value <= 45) { day = 14; }
    if (value >= 45 && value <= 71) { day = 30; }
    if (value >= 71 && value <= 90) { day = 60; }
    if (value > 90) { day = 180; }

    const totalPrice = day * this.pricePerDay;

    this.views.price.innerHTML = `${totalPrice} / `;

    if (day === 1) {
      this.views.days.innerHTML = ` на ${day} день `;
    } else {
      this.views.days.innerHTML = ` на ${day} дней `;
    }
  }
}

export default RangeSlider;
