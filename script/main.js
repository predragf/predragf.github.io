window.onload = function() {

};

function sendEmail(){
  fName = "predrag"
  lName = "filipovikj"
  domain = "google.com"
  myEmail = fName + "." + lName + "@" + domain;
  console.log(myEmail)
  window.location.href = "mailto:" + myEmail;
}
