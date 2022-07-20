const linksOfCatalog = document.querySelectorAll('.catalog-item__link'),
      linkBack = document.querySelectorAll('.catalog-item__back'),
      catalogItemContent = document.querySelectorAll('.catalog-item__content'),
      catalogItemList = document.querySelectorAll('.catalog-item__list'),
      buttonMini = document.querySelectorAll('.button_mini'),
      modalSubtitle = document.querySelectorAll('#order .modal__description'),
      catalogSubtitle = document.querySelectorAll('.catalog-item__subtitle');
          
const toggleSlidesOfCatalog = slides => {
  slides.forEach((items, i) => {
    items.addEventListener('click', (e) => {
      e.preventDefault();
      catalogItemContent[i].classList.toggle('catalog-item__content_active');
      catalogItemList[i].classList.toggle('catalog-item__list_active');
    });
  });
}

buttonMini.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    modalSubtitle.forEach(subtitle => {
      subtitle.textContent = catalogSubtitle[i].innerText;
    });
  });
});

toggleSlidesOfCatalog(linksOfCatalog);
toggleSlidesOfCatalog(linkBack);