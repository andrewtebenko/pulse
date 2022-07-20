let slideIndex = 1;

const slides = document.querySelectorAll('.carousel__wrapper div'),
      previousButton = document.querySelector('.prev'),
      nextButton = document.querySelector('.next');

    const showSlides = n => {
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length
        }

        slides.forEach(item => item.style.display = 'none');

        slides[slideIndex - 1].style.display = 'block';
    }

    showSlides(slideIndex);

    const plusSlides = n => {
        showSlides(slideIndex += n);
    }
    
    previousButton.addEventListener('click', () => {
        plusSlides(-1);
    })

    nextButton.addEventListener('click', () => {
        plusSlides(1);
    })