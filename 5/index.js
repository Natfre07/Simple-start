let items = [];
const itemsDiv = document.getElementById('items');
const input = document.getElementById('itemInput');
const output = document.getElementById("output")
const storageKey = 'items';

function renderItems() {
    itemsDiv.innerHTML = null;

    for (const [idx, item] of Object.entries(items)) {
        const container = document.createElement('div');
        container.style.margainBottom = '10px';


        const text = document.createElement('p');
        text.style.display = 'inline';
        text.style.marginRight = '10px';
        text.textContent = item;
        const button = document.createElement('button');
        button.textContent = 'X';
        button.onclick = () => deleteItem(idx);

        container.appendChild(text);
        container.appendChild(button);
        
        itemsDiv.appendChild(container);
    }    
}

function loadItems() {
    const oldItems = localStorage.getItem(storageKey);
    if (oldItems) {
        items = JSON.parse(oldItems);
        renderItems();
    }
}


function saveItems() {
    const strItems = JSON.stringify(items);
    localStorage.setItem(storageKey, strItems);

}

function addItem() {
    const value = input.value;
    if (!value){
        output.textContent = "Please enter an item";
        setTimeout(() => { output.textContent = "" }, 2000)
        return;
    }
    items.push(value);
    renderItems();
    input.value = "";
    output.textContent = "Item added!";
    setTimeout(() => { output.textContent = "" }, 2000)
    saveItems();
}

function deleteItem(idx) {
    items.splice(idx, 1);
    renderItems();
    saveItems();
}

document.addEventListener('DOMContentLoaded', loadItems);