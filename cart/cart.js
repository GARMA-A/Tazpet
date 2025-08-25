

const AllProducts = document.querySelectorAll('.product');
const deleteAll = document.querySelector('#deleteAll');
const confirmBtn = document.querySelector('#confirm');
let popDataArray;

document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    const allDataArray = localStorage.getItem('popDataArray');

    if (allDataArray) {
           popDataArray = JSON.parse(allDataArray);
        
        popDataArray.forEach(popData => {
            insertProductHTML(popData, header);
        });
          
    } else {
        console.log("No data received!");
    }
});

function insertProductHTML(data, container) {
    const product = `
        <div class="product">
            <h2>${data.title}</h2>
            <h2>${data.price}$</h2>
            <h2>${data.numberOfItems}</h2>
            <h2>${data.subPrice}$</h2>
        </div>`;
    container.insertAdjacentHTML('afterbegin', product);  // Append content
};


deleteAll.addEventListener('click', () => {
       localStorage.removeItem('popDataArray');
       location.reload();
});

const userName = document.querySelector('.userName');
const currentUser = localStorage.getItem('currentUserName');
document.addEventListener("DOMContentLoaded", () => {
       userName.textContent = `${currentUser ? currentUser : "Welcome"}`;
});


