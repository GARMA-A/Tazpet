const name = document.querySelector('.firstName');
const myStr = localStorage.getItem('currentUserName');

document.addEventListener('DOMContentLoaded', () => {
       name.textContent = `Welcome ${myStr ? myStr : "User"}`;
       
});