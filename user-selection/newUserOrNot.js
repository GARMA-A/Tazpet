const haveAccountBtn = document.querySelector('#haveAccount');
const createAcountBtn = document.querySelector('#createAcount');
const deleteAccount = document.querySelector('#deleteAccount');
const correctDelete = document.querySelector('.CorrectContainer');
const allPage = document.querySelector('.all');
const xicon = document.querySelector('.xicon');
const logOut = document.querySelector('#logOut');

haveAccountBtn.addEventListener('click', function (e) {
       e.preventDefault();
       window.location.href = "../login/login.html";

});
createAcountBtn.addEventListener('click', function (e) {
       e.preventDefault();
       window.location.href = "../signup/newAcount.html";

});

deleteAccount.addEventListener('click', (e) => {
       e.preventDefault();
       localStorage.removeItem('allUserLocalAccounts');
       allPage.style.filter = "blur(0.5rem)";
       correctDelete.style.display = "block";
});
xicon.addEventListener('click', () => {
       allPage.style.filter = "blur(0rem)";
        correctDelete.style.display = "none";
});

const userName = document.querySelector('.userName');
const currentUser = localStorage.getItem('currentUserName');
document.addEventListener("DOMContentLoaded", () => {
       userName.textContent = `${currentUser ? currentUser : "Welcome"}`;
});
logOut.addEventListener('click', () => {
       localStorage.setItem('currentUserName', '')
       location.reload();
});

