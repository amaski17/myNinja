'use strict';

{
    const btn = document.getElementById('btn');
    const fortune = document.getElementById('fortune');
    const close = document.getElementById('close');
    const modal = document.getElementById('modal');
    const mask = document.getElementById('mask');
    let cnt = 0;

    function omikujiResult(text, color, img) {
        fortune.textContent = text;
        fortune.style.color = color;
        document.body.style.backgroundImage = 'url(../img/'+img+')';
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundAttachment = 'fixed';
        if (text == '引きすぎです。'){
            fortune.style.fontSize = "36px";
        }

        return 0;
      }

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
            omikujiResult('大吉', 'red', 'gold.jpg')
        } else if (n < 0.2) {
            omikujiResult('吉', '#FF4F50', 'rainbow.jpg')
        } else if (n < 0.4) {
            omikujiResult('中吉', 'orange', 'clover.jpg')
        } else if (n < 0.7) {
            omikujiResult('小吉', 'green', 'plant.jpg')
        } else if (n < 0.9) {
            omikujiResult('末吉', '#32CD32', 'cliff.jpg')
        } else if (n < 0.97) {
            omikujiResult('凶', '#0000FF', 'cloudy.jpg')
        } else {
            omikujiResult('大凶', '#0000AA', 'storm.jpg')
        }
        cnt++;
        if (cnt > 3) {
            omikujiResult('引きすぎです。', 'black', 'forest.jpg')
        }
    });
}