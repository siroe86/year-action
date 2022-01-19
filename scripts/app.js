const upBtn = document.querySelector('.up-button'),
    downBtn = document.querySelector('.down-button'),
    sideBar = document.querySelector('.sidebar'),
    mainSlide = document.querySelector('.main-slide'),
    slidesCount = mainSlide.querySelectorAll('.slide').length;

let activeSlideIndex = 0;

sideBar.style.top = `-${(slidesCount - 1) * 100}vh`;

upBtn.addEventListener('click', () => {
    changeSlide('up');
});

downBtn.addEventListener('click', () => {
    changeSlide('down');
});

const container = document.querySelector('.container');

function changeSlide(direction) {
    if (direction === 'down') {
        activeSlideIndex++;
        clearActiveClasses();
        if (activeSlideIndex === slidesCount) {
            activeSlideIndex = 0;
        }
    } else if (direction === 'up') {
        activeSlideIndex--;
        clearActiveClasses();
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesCount - 1;
        }
    }

    const height = container.clientHeight;

    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;
    sideBar.style.transform = `translateY(${activeSlideIndex * height}px)`;
}

// add inner slides in content

const slides = document.querySelectorAll('.box');

for (const slide of slides) {
    slide.addEventListener('click', () => {
        clearActiveClasses();

        slide.classList.add('active');
    });
}

function clearActiveClasses() {
    slides.forEach((item) => {
        item.classList.remove('active');
    });
}

const body = document.querySelector('body');
const {width} = body.getBoundingClientRect();
const mobile = document.querySelector('.to-mobile');

if (width < 1500) {
    mobile.style.opacity = '1';
}