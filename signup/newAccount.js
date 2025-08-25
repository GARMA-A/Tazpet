/******************************* */
const inputFirstName = document.querySelector('.firstName');
const inputSecondName = document.querySelector('.secondName');
const inputPassword = document.querySelector('.password');
const inputConfirmPassword = document.querySelector('.confirmPassword');
const sbmtBtn = document.querySelector('.submitBtn');
const errorMsg = document.querySelector('.errorMsgContainer');
const correctMsg = document.querySelector('.CorrectContainer');
const xicon1 = document.querySelector('.xicon1');
const xicon2 = document.querySelector('.xicon2');
const all = document.querySelector('.all');
/********************************************/
/*set uP the Local Storage*/
const hardCodedallAccounts = [
{
       firstName: 'girgis',
       secondName: 'emad',
       password: 1234,
       conPassword:1234
},
{
       firstName: 'abdelrahman',
       secondName: 'ahmed',
       password: 1111,
       conPassword:1111
},
{
       firstName: 'mina',
       secondName: 'tarek',
       password: 1234,
       conPassword:1234
}
];
const hardCodedallAccountsJSON = JSON.stringify(hardCodedallAccounts);
/******************************** */
localStorage.setItem('hardCodedallAccounts', hardCodedallAccountsJSON);
/******************************** */
/*************************************** */
/**Functions**/

const addAccount = function (e) {
       e.preventDefault();
       const firstNameValue =   inputFirstName.value.toLowerCase();
       const secondNameValue = inputSecondName.value.toLowerCase();
       const passwordValue = Number(inputPassword.value);
       const confirmPasswordValue = Number(inputConfirmPassword.value);
    
       if (passwordValue !== confirmPasswordValue || firstNameValue==="" || secondNameValue==="" ||passwordValue===0 || confirmPasswordValue===0|| passwordValue===NaN || confirmPasswordValue===NaN)
       {
              errorMsg.style.display = "block";
              all.style.filter = " blur(0.5rem)";      
       }
       else
       {
              let templateAccount= {
                firstName: firstNameValue,
                secondName: secondNameValue,
                password: passwordValue,
                conPassword:confirmPasswordValue
              };
              /******************************** */

              /******************************** */
              const localStoredallAccounts = localStorage.getItem('allUserLocalAccounts');
              const allAccountsUser = JSON.parse(localStoredallAccounts) || [];
              const localStoredAllHardAccounts = localStorage.getItem('hardCodedallAccounts');
              const allAccountsHard = JSON.parse(localStoredAllHardAccounts) || [];
              /******************************* */
              const existingAccount1 = allAccountsUser.find(account => account.firstName === firstNameValue && account.secondName === secondNameValue);
              const existingAccount2 = allAccountsHard.find(account => account.firstName === firstNameValue && account.secondName === secondNameValue);
              if (existingAccount1 || existingAccount2) {
                     window.location.href = "../user-exists/alreadyExist.html";  
                     templateAccount = {};
              }
              else {
                 const allUserLocalAccountsArrayOfObj =  JSON.parse(localStoredallAccounts) || []; 
                 allUserLocalAccountsArrayOfObj.push(templateAccount);
                     localStorage.setItem('allUserLocalAccounts', JSON.stringify(allUserLocalAccountsArrayOfObj));  
                     localStorage.setItem('currentUserName', "");
                     localStorage.setItem('currentUserName',(firstNameValue) );
                     window.location.href = "../success/success.html";
              }
             
       }
       
       
};

sbmtBtn.addEventListener('click',addAccount);

xicon1.addEventListener('click', () => {
       errorMsg.style.display = "none"; 
       all.style.filter= "blur(0rem)";
});
xicon2.addEventListener('click', () => {
         correctMsg.style.display = "none"; 
         all.style.filter= "blur(0rem)";

});