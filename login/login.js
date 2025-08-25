/******************************************* */

const sbmitBtn = document.querySelector('.submitBtn');
const inputUserName = document.querySelector('.userName');
const inputPassword = document.querySelector('.password');
const logOut = document.querySelector('.out');
/******************************************* */
/*******************/
const allUserEnterAccountsJson = localStorage.getItem('allUserLocalAccounts');
const allUserEnterAccounts = JSON.parse(allUserEnterAccountsJson)||[];
console.log(allUserEnterAccounts);
/*******************/
const all3HardCodedAccountsJson = localStorage.getItem('hardCodedallAccounts');
const all3HardCodedAccounts = JSON.parse(all3HardCodedAccountsJson)||[];
console.log(all3HardCodedAccounts);
/***************/

/******************************************* */
/**Functions**/
const logIn = function (e) {
        e.preventDefault();
       const interedUname = inputUserName.value.toLowerCase();
       const interedUpassword = inputPassword.value;
       const currentAccount1 = all3HardCodedAccounts.find(acc => acc.firstName === interedUname);
       const currentAccount2 = allUserEnterAccounts.find(acc => acc.firstName === interedUname);
       localStorage.setItem('currentUserName', "");
       if ((currentAccount1?.password === Number(interedUpassword))|| (currentAccount2?.password === Number(interedUpassword)))
       { 
              
               localStorage.setItem('currentUserName',(currentAccount1?.firstName||currentAccount2?.firstName) );
              window.location.href = "../success/success.html";       
       }
       else
       {
               window.location.href = "../login-failed/loginFalid.html";   
       }
};


sbmitBtn.addEventListener('click', logIn);
