function clickHandler(e) {
  let targetID;

  try {
    // получить значение id, которое я храню в аттрибуте карточки data-target
    targetID = e.currentTarget.dataset.target;
  } catch (e) {
    console.log('problem with getting dataset.target property', e);
  }

  if (targetID !== undefined) {
    // найти модальное окно с соответствующим id
    const currentModal = document.getElementById(targetID);

    // показать это модальное окно
    currentModal.classList.remove('hidden');
  }
}

function card2() {
  // полчить все карточки с классом card_2
  const allCards2 = document.querySelectorAll('.card_2__footer');

  // навесить обработчик на каждую карточку
  Array.prototype.forEach.call(allCards2, (card) => {
    card.addEventListener('click', clickHandler);
  });
}

export default card2;
