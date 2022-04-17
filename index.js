const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
    alert("Ya besame Karymita")
    alert("Te voy a cuidar y amar mucho")
    alert("❤")
    
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})