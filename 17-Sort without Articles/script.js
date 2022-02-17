const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

// Func to remove 'The', 'A' from band names so they can be sorted
function strip(bandName) {
    return bandName.replace(/^(a |the |an )/i, '').trim();
}

// Sorting Bands  using .sort()
const sortedBands = bands.sort((a, b) => strip(a) > strip(b) ? 1 : -1);

// Adding the sorted bands to HTML
document.querySelector('#bands').innerHTML = sortedBands.map(band => `<li>${band}</li>`).join('');

// const sortedBands = bands.sort(function (a, b) {
    // Striping the data in the IF statement so the data is not changed
    // One way
    // if (strip(a) > strip(b)) {
    //     return 1;
    // } else {
    //     return -1;
    // }

    // Another way
    // return strip(a) > strip(b) ? 1 : -1;

// })