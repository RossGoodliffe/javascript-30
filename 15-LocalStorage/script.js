const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];


function addItem(e) {
    // Prevent page from reloading
    e.preventDefault();
    
    const text = (this.querySelector('[name=item]')).value;
    const item = {
        // text: text, old way
        text, //ES6 way
        done: false
    };

    items.push(item);
    populateList(items, itemsList);

    // Setting items array in LocalStorage
    localStorage.setItem('items', JSON.stringify(items));
    this.reset();
}

function populateList(plates = [], platesList) {
    platesList.innerHTML = plates.map((plate, index) => {
        return `
            <li>
            <input type="checkbox" data-index="${index}" id="item${index}" ${plate.done ? 'checked' : ''} />
                <label for="item${index}">${plate.text}</label>
            </li>
        `;
    }).join('');

}

function toggleDone(e) {
    if (!e.target.matches('input')) return; // skip unless it's an input

    const el = e.target;
    const index = el.dataset.index;

    items[index].done = !items[index].done;

    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);
}

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);

populateList(items, itemsList);
