const pendulum = document.querySelector('.pendulum');
pendulum.addEventListener('mouseover', () => {
    const element = document.querySelector('.pendulum');
    element.style.animationPlayState = 'paused'
});

pendulum.addEventListener('mouseout', () => {
    const element = document.querySelector('.pendulum');
    element.style.animationPlayState = 'running'
});







// var deg = document.getElementById("deg").value;

// document.documentElement.style.setProperty('--deg-initialiser', deg);