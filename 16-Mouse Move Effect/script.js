
const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');

const walk = 100; // 100px

function shadow(e) {

    // const width = hero.offsetWidth;
    // const height = hero.offsetHeight;
    // ES6 for ^^ (destructering)
    const { offsetWidth: width, offsetHeight: height } = hero;
    let { offsetX: x, offsetY: y } = e;

    // Get the x & y if mouse is over a nested element
    if(this !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;

    }
    // If walk is set as 100, this will mean our range is 50 to -50
    const xWalk = Math.round((x / width * walk) - (walk / 2));
    const yWalk = Math.round((y / height * walk) - (walk / 2));

    // Setting the style to the h1
    text.style.textShadow = `${xWalk}px ${yWalk}px 0 cyan`;

}

hero.addEventListener('mousemove', shadow)