
   ```javascript
// ===============================
// SMOOTH SCROLLING
// ===============================

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});


// ===============================
// SCROLL REVEAL
// ===============================

const sections = document.querySelectorAll('.section');

const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add('show-section');
        }

    });

}, {
    threshold: 0.12
});

sections.forEach(section => {
    revealObserver.observe(section);
});


// ===============================
// ROOM MESSAGE
// ===============================

function roomMessage(message) {

    const box = document.getElementById('roomMessage');

    if (!box) return;

    box.textContent = message;

    box.classList.remove('message-pop');

    void box.offsetWidth;

    box.classList.add('message-pop');
}


// ===============================
// ROOM COMPUTER
// ===============================

function openRoomComputer() {

    const popup = document.getElementById('roomComputerPopup');

    if (!popup) return;

    popup.classList.add('computer-open');
}


function closeRoomComputer() {

    const popup = document.getElementById('roomComputerPopup');

    if (!popup) return;

    popup.classList.remove('computer-open');
}


// ===============================
// BESTIE MESSAGE
// ===============================

function bestieMessage() {

    const message = document.getElementById('bestieMessage');

    if (!message) return;

    message.textContent =
        "♡ forever grateful for all the laughs, memories, and random moments ♡";

    message.classList.remove('message-pop');

    void message.offsetWidth;

    message.classList.add('message-pop');
}


// ===============================
// LITTLE SPARKLES
// ===============================

document.addEventListener('click', function(e) {

    const sparkle = document.createElement('span');

    sparkle.className = 'click-sparkle';

    sparkle.textContent = ['✦', '✧', '♡', '⋆'][Math.floor(Math.random() * 4)];

    sparkle.style.left = e.clientX + 'px';
    sparkle.style.top = e.clientY + 'px';

    document.body.appendChild(sparkle);

    setTimeout(() => {
        sparkle.remove();
    }, 900);

});


// ===============================
// FLOATING BACKGROUND SPARKLES
// ===============================

function createSparkle() {

    const sparkle = document.createElement('span');

    sparkle.className = 'floating-sparkle';

    sparkle.textContent = ['✦', '✧', '⋆'][Math.floor(Math.random() * 3)];

    sparkle.style.left = Math.random() * 100 + 'vw';

    sparkle.style.animationDuration =
        (5 + Math.random() * 6) + 's';

    sparkle.style.fontSize =
        (8 + Math.random() * 10) + 'px';

    document.body.appendChild(sparkle);

    setTimeout(() => {
        sparkle.remove();
    }, 11000);
}


setInterval(createSparkle, 1200);


// ===============================
// CLOSE COMPUTER WITH ESC
// ===============================

document.addEventListener('keydown', function(e) {

    if (e.key === 'Escape') {
        closeRoomComputer();
    }

});


// ===============================
// IMAGE HOVER EFFECT
// ===============================

document.querySelectorAll('img').forEach(image => {

    image.addEventListener('mouseenter', () => {
        image.classList.add('image-hover');
    });

    image.addEventListener('mouseleave', () => {
        image.classList.remove('image-hover');
    });

});
```
