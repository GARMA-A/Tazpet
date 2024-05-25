/* select the time elements*/ 
const displayDays = document.querySelector('#displayDays');
const displayHours = document.querySelector('#displayHours');
const displayMinuts = document.querySelector('#displayMinuts');
const displaySeconds = document.querySelector('#displaySeconds');
/*****************************************/
/*****************************************/
// labelDate.textContent = new Intl.DateTimeFormat('en-GD' , option).format(now);
const displayDate = function () {
       const now = new Date();
       displayDays.innerHTML = `${now.getDate()} <span>:</span>`;
       displayHours.innerHTML = `${now.getHours().toFixed()} <span>:</span>`;
       displayMinuts.innerHTML = `${now.getMinutes()} <span>:</span>`;
       displaySeconds.innerHTML = `${now.getSeconds()} `;
};
const refreshTimer = setInterval(displayDate, 100);

/**************RANGE INPUT ******************************/
 const rangeInput = document.querySelectorAll('.inputRange input[type="range"]');
 const rangeValue = document.querySelectorAll('.rangeValue');

rangeInput.forEach((i) => i.addEventListener('input', function () {
       rangeValue.forEach((value) => value.textContent = i.value);
      
       

}));

/******************************************/

const popWindow1 = document.querySelector("#popUpWindow1");
const popWindow2 = document.querySelector("#popUpWindow2");
const popWindow3 = document.querySelector("#popUpWindow3");
/************************************/
const xicon1 = document.querySelector("#XXicon1");
const xicon2 = document.querySelector("#XXicon2");
const xicon3 = document.querySelector("#XXicon3");

/************************************/
const first4items = document.querySelectorAll('.f4i');
const secondt4items = document.querySelectorAll('.s4i');
const thirdt8items = document.querySelectorAll('.t8i');
/********************************/
const allPage = document.querySelector(".all");



const hidePopWindow1 = function () {
       popWindow1.classList.remove("showAnimate");
       popWindow1.classList.add("hideAnimate");
};

const showPopWindow1 = function () {
       popWindow1.classList.remove("hideAnimate");
       popWindow1.classList.add("showAnimate"); 
       const box = this.querySelector('.box');
       const image = box.querySelector('img');
       const src = image.src;
       /************************ */
       /*Replace The Img*/
       const imgContainer = popWindow1.querySelector('.imgContainer');
       const img = imgContainer.querySelector('img');
       img.src = src;
       /******************************* */
       /*Replace the Title*/
       const des = this.querySelector('.discription');
       const titleOfClickedItem = des.querySelector('.title');
       const titleofPopUpWindow=  popWindow1.querySelector(".titleOfImg h3");
       titleofPopUpWindow.textContent = titleOfClickedItem.textContent;
       /******************************* */
       /*Replace the price*/
       const priceOnItem = this.querySelector('.price');
       const disCountOnItem = this.querySelector('.discount');
       const priceOnPopWindow = popWindow1.querySelector('.price');
       const discountOnPopUpWindow = popWindow1.querySelector('.discount');
       priceOnPopWindow.textContent = priceOnItem.textContent;
       discountOnPopUpWindow.textContent = disCountOnItem.textContent;

};


const hidePopWindow2 = function () {
       popWindow2.classList.remove("showAnimate");
       popWindow2.classList.add("hideAnimate");
};

const showPopWindow2 = function () {
       popWindow2.classList.remove("hideAnimate");
       popWindow2.classList.add("showAnimate");
       const box = this.querySelector('.box');
       const image = box.querySelector('img');
       const src = image.src;
       /************************ */
       const imgContainer = popWindow2.querySelector('.imgContainer');
       const img = imgContainer.querySelector('img');
       img.src = src;
       /******************************* */
       /*Replace the Title*/
       const des = this.querySelector('.discription');
       const titleOfClickedItem = des.querySelector('.title');
       const titleofPopUpWindow=  popWindow2.querySelector(".titleOfImg h3");
       titleofPopUpWindow.textContent = titleOfClickedItem.textContent;
       /******************************* */
       /*Replace the price*/
       const priceOnItem = this.querySelector('.price');
       const disCountOnItem = this.querySelector('.discount');
       const priceOnPopWindow = popWindow2.querySelector('.price');
       const discountOnPopUpWindow = popWindow2.querySelector('.discount');
       priceOnPopWindow.textContent = priceOnItem.textContent;
       discountOnPopUpWindow.textContent = disCountOnItem.textContent;
       
};


const hidePopWindow3 = function () {
       popWindow3.classList.remove("showAnimate");
       popWindow3.classList.add("hideAnimate"); 
};

const showPopWindow3 = function () {
       popWindow3.classList.remove("hideAnimate");
       popWindow3.classList.add("showAnimate"); 
       /**********************/
       const box = this.querySelector('.box');
       const image = box.querySelector('img');
       const src = image.src;
       /************************ */
       const imgContainer = popWindow3.querySelector('.imgContainer');
       const img = imgContainer.querySelector('img');
       img.src = src;
       /******************************* */
       /*Replace the Title*/
       const des = this.querySelector('.discription');
       const titleOfClickedItem = des.querySelector('.title');
       const titleofPopUpWindow=  popWindow3.querySelector(".titleOfImg h3");
       titleofPopUpWindow.textContent = titleOfClickedItem.textContent;
       /******************************* */
       /*Replace the price*/
       const priceOnItem = this.querySelector('.price');
       const disCountOnItem = this.querySelector('.discount');
       const priceOnPopWindow = popWindow3.querySelector('.price');
       const discountOnPopUpWindow = popWindow3.querySelector('.discount');
       priceOnPopWindow.textContent = priceOnItem.textContent;
       discountOnPopUpWindow.textContent = disCountOnItem.textContent;
       
};
/**********************************/   
xicon1.addEventListener("click", hidePopWindow1);
xicon2.addEventListener("click", hidePopWindow2);
xicon3.addEventListener("click", hidePopWindow3);
/******************************************* */
first4items.forEach((item) => item.addEventListener('click',showPopWindow1));
secondt4items.forEach((item) => item.addEventListener('click', showPopWindow2));
thirdt8items.forEach((item) => item.addEventListener('click', showPopWindow3));
/***************************** */
/*Slider On pop Up window*/
const slider1 = document.querySelector('.rangeInpt1');
const slider2 = document.querySelector('.rangeInpt2');
const slider3 = document.querySelector('.rangeInpt3');
const value1 = document.querySelector('.value1');
const value2 = document.querySelector('.value2');
const value3 = document.querySelector('.value3');
value1.textContent = slider1.value;
value2.textContent = slider2.value;
value3.textContent = slider3.value;
slider1.addEventListener('input', (event)=>value1.textContent = event.target.value);
slider2.addEventListener('input', (event)=>value2.textContent = event.target.value);
slider3.addEventListener('input', (event)=>value3.textContent = event.target.value);
/****************************************/
/*GO to cart page*/

const btnsToCartPage = document.querySelectorAll('#BtnOfCart');

const goToCartPage = () => window.location.href = "cart.html";

btnsToCartPage.forEach((btn) => btn.addEventListener('click', goToCartPage));

/******************************************* */

const cart1 = document.querySelector('.addToCart1');
const cart2 = document.querySelector('.addToCart2');
const cart3 = document.querySelector('.addToCart3');
const correctMsg = document.querySelectorAll('.correct');



const popWindow1Data = function () {
    // Collect data as before
    const imgContainer = popWindow1.querySelector('.imgContainer');
    const imgSrc = imgContainer.querySelector('img').src;
    const titleofPopUpWindow = popWindow1.querySelector(".titleOfImg h3").textContent;
    const priceOnPopWindow = popWindow1.querySelector('.price').textContent.replace('$', '');
    const numberOfItems = value1.textContent;
    const subPrice = Number(numberOfItems) * Number(priceOnPopWindow);

    const allData = {
        imgSrc: imgSrc,
        title: titleofPopUpWindow,
        price: priceOnPopWindow,
        numberOfItems: numberOfItems,
        subPrice: subPrice
    };

  
    let existingData = localStorage.getItem('popDataArray');
    existingData = existingData ? JSON.parse(existingData) : [];

 
    existingData.push(allData);

  
    localStorage.setItem('popDataArray', JSON.stringify(existingData));
       correctMsg.forEach((el) => el.style.display = "block");
       setTimeout(() =>  correctMsg.forEach((el) => el.style.display = "none"), 1500);
  
};






const popWindow2Data = function () {

    const imgContainer = popWindow2.querySelector('.imgContainer');
    const imgSrc = imgContainer.querySelector('img').src;
    const titleofPopUpWindow = popWindow2.querySelector(".titleOfImg h3").textContent;
    const priceOnPopWindow = popWindow2.querySelector('.price').textContent.replace('$', '');
    const numberOfItems = value2.textContent;
    const subPrice = Number(numberOfItems) * Number(priceOnPopWindow);

    const allData = {
        imgSrc: imgSrc,
        title: titleofPopUpWindow,
        price: priceOnPopWindow,
        numberOfItems: numberOfItems,
        subPrice: subPrice
    };
    let existingData = localStorage.getItem('popDataArray');
    existingData = existingData ? JSON.parse(existingData) : [];
    existingData.push(allData);
    localStorage.setItem('popDataArray', JSON.stringify(existingData));
             correctMsg.forEach((el) => el.style.display = "block");
       setTimeout(() =>  correctMsg.forEach((el) => el.style.display = "none"), 1500);

};




const popWindow3Data = function () {
    // Collect data as before
    const imgContainer = popWindow3.querySelector('.imgContainer');
    const imgSrc = imgContainer.querySelector('img').src;
    const titleofPopUpWindow = popWindow3.querySelector(".titleOfImg h3").textContent;
    const priceOnPopWindow = popWindow3.querySelector('.price').textContent.replace('$', '');
    const numberOfItems = value3.textContent;
    const subPrice = Number(numberOfItems) * Number(priceOnPopWindow);

    const allData = {
        imgSrc: imgSrc,
        title: titleofPopUpWindow,
        price: priceOnPopWindow,
        numberOfItems: numberOfItems,
        subPrice: subPrice
    };
       let existingData = localStorage.getItem('popDataArray');
       existingData = existingData ? JSON.parse(existingData) : [];
       existingData.push(allData);
       localStorage.setItem('popDataArray', JSON.stringify(existingData));
       correctMsg.forEach((el) => el.style.display = "block");
       setTimeout(() =>  correctMsg.forEach((el) => el.style.display = "none"), 1500);
    
};

cart1.addEventListener('click', popWindow1Data);
cart2.addEventListener('click', popWindow2Data);
cart3.addEventListener('click', popWindow3Data);


/************************************************** */
/*** Added userName ***/

const userName = document.querySelector('.userName');
const currentUser = localStorage.getItem('currentUserName');
document.addEventListener('DOMContentLoaded', () => {
       userName.textContent = `${currentUser?currentUser:"Welcome"}`;
});
















