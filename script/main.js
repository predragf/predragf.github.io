window.onload = function() {

};

function sendEmail(){
  fName = "predrag"
  lName = "filipovikj"
  domain = "gmail.com"
  myEmail = fName + "." + lName + "@" + domain;
  console.log(myEmail)
  window.location.href = "mailto:" + myEmail;
}
