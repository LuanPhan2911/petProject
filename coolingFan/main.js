let img = document.querySelector('.image-src');
let stop = document.querySelector('.stop');
// let Continue = document.querySelector('.continue');
let one = document.querySelector('.one');
let two = document.querySelector('.two');
let three = document.querySelector('.three');
stop.addEventListener('click', () => {
    img.style.animationPlayState = 'paused';
})

one.addEventListener('click', () => {
    img.style.animationDuration = '1s';
    img.style.animationPlayState = '';
})
two.addEventListener('click', () => {
    img.style.animationDuration = '0.5s';
    img.style.animationPlayState = '';
})
three.addEventListener('click', () => {
    img.style.animationDuration = '0.1s';
    img.style.animationPlayState = '';
})

