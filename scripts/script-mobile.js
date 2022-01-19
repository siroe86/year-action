let modalBtns = document.querySelectorAll('.open'),
    modal = document.querySelectorAll('.modal');

modalBtns[0].onclick = function() {
    modal[0].style.display = 'flex';
    openedModal();
};
modalBtns[1].onclick = function() {
    modal[1].style.display = 'flex';
    openedModal();
};
modalBtns[2].onclick = function() {
    modal[2].style.display = 'flex';
    openedModal();
    setInterval(countdown, 1000);
};
modalBtns[3].onclick = function() {
    modal[3].style.display = 'flex';
    openedModal();
};
modalBtns[4].onclick = function() {
    modal[4].style.display = 'flex';
    openedModal();
};

let closeBtn = document.querySelectorAll('.close');
const scroll = document.querySelector('.scroll-box');

closeBtn.forEach((item) => {
    item.addEventListener('click', () => {
        modal.forEach((item) => {
            item.style.display = 'none';
            scroll.style.overflow = 'auto';
        });
    });
});

function openedModal() {
    scroll.style.overflow = 'hidden';
}


const daysEl = document.querySelector('#days'),
    hoursEl = document.querySelector('#hours'),
    minsEl = document.querySelector('#mins'),
    secondsEl = document.querySelector('#seconds');

let newDate = '04 Apr 2022 09:00';

function countdown() {
    const newMarathon = new Date(newDate),
        currentDate = new Date();

    const totalSeconds = (newMarathon - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 /24),
        hours = Math.floor(totalSeconds / 3600) % 24,
        mins = Math.floor(totalSeconds / 60) % 60,
        seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = `${days} дні`;
    hoursEl.innerHTML = ` ${formatTime(hours)} годин`;
    minsEl.innerHTML = ` ${formatTime(mins)} хвилин`;
    secondsEl.innerHTML = ` ${formatTime(seconds)} секунд`;
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

