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

    this.nativeRange.addEventListener('input', this._inputHandler.bind(this));
    this._setThumbPosition(50);
  }

  _inputHandler(e) {
    const currentValue = parseInt(e.target.value, 10);
    this._setThumbPosition(currentValue);
    this._setTrackPosition(currentValue);
    this._showPrice(currentValue);
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
    const d = days;
    const totalPrice = d * this.pricePerDay;

    this.views.price.innerHTML = `${totalPrice} / `;
    this.views.days.innerHTML = ` на ${days} дней `;
  }
}

export default RangeSlider;
