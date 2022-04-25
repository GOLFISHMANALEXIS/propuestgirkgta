const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
    alert('Tal vez sea muy pronto, si lo sientes solo dimelo')
    alert('Yo te esperaria 1000 años por estar contigo')
    alert('Pero no quiero dejar pasar mucho tiempo y que sientas que no vamos a ningun lado')
    alert('Yo te prometo que te voy cuidar y amar mucho')
    alert('❤❤')
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})