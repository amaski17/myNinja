'use strict';

{
    const btn = document.getElementById('btn');
    const fortune = document.getElementById('fortune');
    const close = document.getElementById('close');
    const modal = document.getElementById('modal');
    const mask = document.getElementById('mask');
    let cnt = 0;


    close.addEventListener('click', ()=> {
        modal.classList.add('hidden');
        mask.classList.add('hidden');
    });

    mask.addEventListener('click', ()=> {
        // modal.classList.add('hidden');
        // mask.classList.add('hidden');
        close.click();
    });

    btn.addEventListener('click', () => {
        modal.classList.remove('hidden');
        mask.classList.remove('hidden');
        const n = Math.random();
        if (n < 0.05) {
            fortune.textContent = '大吉';
            fortune.style.color = "red";
        } else if (n < 0.2) {
            fortune.textContent = '吉';
            fortune.style.color = "#FF4F50";
        } else if (n < 0.4) {
            fortune.textContent = '中吉';
            fortune.style.color = "orange";
        } else if (n < 0.7) {
            fortune.textContent = '小吉';
            fortune.style.color = "green";
        } else if (n < 0.9) {
            fortune.textContent = '末吉';
            fortune.style.color = "#32CD32";
        } else if (n < 0.97) {
            fortune.textContent = '凶';
            fortune.style.color = "#0000FF";
        } else {
            fortune.textContent = '大凶';
            fortune.style.color = "#0000AA";
        }
        cnt++;
        if (cnt > 3) {
            fortune.textContent = '引きすぎです。';
            fortune.style.color = "black";
            fortune.style.fontSize = "36px";
        }
    });
}