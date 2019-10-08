if (window.innerWidth < 1081) {
    console.log('M');
    particlesJS.load('main-id', 'js/particles-m.json');
} else {
    console.log('not M');
    particlesJS.load('main-id', 'js/particles.json');
}