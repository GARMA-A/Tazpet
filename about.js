const userName = document.querySelector('.userName');
const currentUser = localStorage.getItem('currentUserName');
document.addEventListener("DOMContentLoaded", () => {
       userName.textContent = `${currentUser ? currentUser : "Welcome"}`;
});


/****************************************/
/****************/
/**Text**/

const sallers = document.querySelector('.txtc1');
const visiters = document.querySelector('.txtc2');
const sales = document.querySelector('.txtc3');
 let sallersThousand  = 0;
 let sallersDecimal  = 0;
 let visitersThousand = 0;
 let visitersDecimal = 0;
let salesThousand = 0;
let salesDecimal = 0;

sallers.textContent = "0.0K";
visiters.textContent = "0.0K";
sales.textContent = "0.0K";

setInterval(() => {
       sallersThousand++;

       sallers.textContent = `${sallersThousand + '.' + salesDecimal}K`; 


       if (salesThousand === 99)
       {
              salesThousand=0
       }



}, 10000);
setInterval(() => {
       sallersDecimal++;
       sallers.textContent = `${sallersThousand + '.' + salesDecimal}K`; 

       if (salesThousand === 99)
       {
              salesThousand=0
       }


}, 1000);
setInterval(() => {
       visitersThousand++;
       visiters.textContent = `${visitersThousand + '.' + visitersDecimal}K`; 

       if (visitersThousand === 99)
       {
              visitersThousand=0
       }


}, 7500);
setInterval(() => {
       visitersDecimal++;
       visiters.textContent = `${visitersThousand + '.' + visitersDecimal}K`;
        
       if (visitersDecimal === 99)
       {
              visitersDecimal=0
       }


}, 600);
setInterval(() => {
       salesThousand++;
       sales.textContent = `${salesThousand + '.' + salesDecimal}K`;

       if (salesThousand === 99)
       {
              salesThousand=0
       }


}, 15000);
setInterval(() => {
       salesDecimal++;
       sales.textContent = `${salesThousand + '.' + salesDecimal}K`;
       if (salesDecimal === 99)
       {
              salesDecimal=0
       }


}, 1500);





