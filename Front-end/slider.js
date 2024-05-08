let count = 1;
document.getElementById('radio1').checked = true;

function nextImage() {
    count++;
    if (count > 3) {
        count = 1;
    }
    document.getElementById('radio' + count).checked = true;

    console.log('Mudando para a imagem: radio' + count); // Adiciona esta linha para depuração
}

function startSlideshow() {
    if (window.innerWidth < 999) {
        setInterval(function () { nextImage()}, 5000);
    } 
}

window.addEventListener('load', startSlideshow());

