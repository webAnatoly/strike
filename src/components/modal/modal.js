function clickHandler (e) {
  e.currentTarget.classList.add('hidden');
}

function initCloseModal() {
    // полчить все модальные окна
    const allModals = document.querySelectorAll('.modal');

    // навесить обработчик на каждую карточку
    Array.prototype.forEach.call(allModals, (modal) => {
      modal.addEventListener('click', clickHandler);
    });
}

export default initCloseModal;
