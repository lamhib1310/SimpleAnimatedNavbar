const section = document.querySelectorAll('section');
const bubble = document.querySelector('.bubble');
const gradients = [
    "linear-gradient(to right top, #f46b45, #eea849)",
    "linear-gradient(to right top, #005c97, #363795)",
    "linear-gradient(to right top, #e53935, #e35d5b)"
];


const options = {
    threshold: 0.7
}

let observer = new IntersectionObserver(navCheck, options);

function navCheck(entries) {
    entries.forEach(entry => {
        const className = entry.target.className;


       const activeAnchor = document.querySelector("[data-page="+ CSS.escape(className) + "]");


        const gradientIndex = entry.target.getAttribute("data-index");
        const coords = activeAnchor.getBoundingClientRect();

        const directions = {
            height: coords.height,
            width: coords.width,
            top: coords.top,
            left: coords.left
        };

        if (entry.isIntersecting){
            bubble.style.setProperty('left', directions.left.toString() + 'px');
            bubble.style.setProperty('top', directions.top.toString() + 'px');
            bubble.style.setProperty('width', directions.width.toString() + 'px');
            bubble.style.setProperty('height', directions.height.toString() + 'px');
            bubble.style.background = gradients[gradientIndex];
        }
    });
}

section.forEach(section => {
    observer.observe(section);
});
    