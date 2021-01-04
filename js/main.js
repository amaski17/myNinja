'use strict';

{
    const btn = document.getElementById('btn');
    btn.addEventListener('click', () => {
        const n = Math.random();
        if (n < 0.05) {
            btn.textContent = '大吉';
        } else if (n < 0.2) {
            btn.textContent = '吉';
        } else if (n < 0.4) {
            btn.textContent = '中吉';
        } else if (n < 0.7) {
            btn.textContent = '小吉';
        } else if (n < 0.9) {
            btn.textContent = '末吉';
        } else if (n < 0.97) {
            btn.textContent = '凶';
        } else {
            btn.textContent = '大凶';
        }
    });
}