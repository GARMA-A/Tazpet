const userName = document.querySelector('.userName');
const currentUser = localStorage.getItem('currentUserName');
document.addEventListener("DOMContentLoaded", () => {
       userName.textContent = `${currentUser ? currentUser : "Welcome"}`;
});

/*********************************/
/**Error and correct msgs **/
const errorMsg = document.querySelector('.errorMsgContainer');
const correctMsg = document.querySelector('.CorrectContainer');
const xicon1 = document.querySelector('.xicon1');
const xicon2 = document.querySelector('.xicon2');
const all = document.querySelector('.all');


/****************************/
/***Fetch Contact Data***/

       const sbmtBtn = document.querySelector('.submitBtn');

       const fullName = "entry.1822134070";
       const emailAddress = "entry.836708183";
       const PhoneNumber = "entry.1739681311";
       const titleOfTheMsg  ="entry.978430069";
       const theMsg = "entry.184655333";

       sbmtBtn.addEventListener('click', function (e) {
              e.preventDefault();
              /***********************/
              const name = document.getElementById('name').value;
              const email = document.getElementById('email').value;
              const phone = document.getElementById('phone').value;
              const title = document.getElementById('title').value;
              const message = document.getElementById('message').value;
              /****************************/
              const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSd3Ov-G5GIaU_gxohd1XZAbfcMolmomUhzgKxvGMP53s6qCDw/formResponse';
              const formData = new URLSearchParams();
              formData.append(fullName, name);  
              formData.append(emailAddress, email);
              formData.append(PhoneNumber, phone); 
              formData.append(titleOfTheMsg, title); 
              formData.append(theMsg, message); 
              /****************************/
              fetch(googleFormUrl, {
                     method: 'POST',
                     body: formData,
                     mode: 'no-cors'
              }).then(() => {
                       correctMsg.style.display = "block";
                       all.style.filter = " blur(0.5rem)";
                     name.value = "";
                     email.value = "";
                     phone.value = "";
                     title.value = "";
                     message.value ="";
                     
              }).catch(() => {
                       
                     errorMsg.style.display = "block";
                     all.style.filter = " blur(0.5rem)"; 
              });

       });


xicon1.addEventListener('click', () => {
       errorMsg.style.display = "none"; 
       all.style.filter= "blur(0rem)";
});
xicon2.addEventListener('click', () => {
         correctMsg.style.display = "none"; 
         all.style.filter= "blur(0rem)";

});