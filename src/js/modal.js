const overlay = document.querySelector('.overlay'),
      modalOfConsultation = document.querySelector('#consultation'), 
      modalOfOrder = document.querySelector('#order'), 
      modalElements = document.querySelectorAll('[data-modal="consultation"]'),
      closeModal = document.querySelectorAll('[data-close]'),
      btn = document.querySelectorAll('.button_mini');

const stateOfModal = (modal, display, overlow) => {
  modal.style.display = `${display}`;
  document.body.style.overflow = `${overlow}`;
};

const overlayFunc = (element, display) => {
  element.style.display = `${display}`;
}

const openModalFunc = (elementsOfModal, element) => {
  elementsOfModal.forEach(btns => {
    btns.addEventListener('click', () => {
        stateOfModal(element, 'block', 'hidden');
        overlayFunc(overlay, 'block');
    });
  });
};

const closeModalFunc = (closeElement, element) => {
  closeElement.forEach(item => {
    item.addEventListener('click', () => {
      stateOfModal(element, 'none', '');
      overlayFunc(overlay, 'none');
    });
  })
};

overlay.addEventListener('click', (e) => {
if (e.target === overlay) {
  stateOfModal(modalOfConsultation, 'none', '');
  stateOfModal(modalOfOrder, 'none', '');
  overlayFunc(overlay, 'none');
}
});

document.addEventListener('keydown', (e) => {
if (e.code === 'Escape') {
  stateOfModal(modalOfConsultation, 'none', '');
  stateOfModal(modalOfOrder, 'none', '');
  overlayFunc(overlay, 'none');
}
});

openModalFunc(modalElements, modalOfConsultation);
openModalFunc(btn, modalOfOrder);
closeModalFunc(closeModal, modalOfConsultation);
closeModalFunc(closeModal, modalOfOrder);