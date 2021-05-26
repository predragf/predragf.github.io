window.onload = function() {

  sideLinks = document.getElementsByClassName("side-container")
  console.log(sideLinks)

  for (sideLink of sideLinks){
    sideLink.addEventListener('mouseleave', function(){

      bwImage = this.querySelectorAll('.bw-image')[0];
      colorImage = this.querySelectorAll('.color-image')[0];

      bwImage.classList.remove("hidden-image");
      colorImage.classList.add("hidden-image");

    })
    sideLink.addEventListener('mouseenter', function(){

      bwImage = this.querySelectorAll('.bw-image')[0];
      colorImage = this.querySelectorAll('.color-image')[0];

      colorImage.classList.remove("hidden-image");
      bwImage.classList.add("hidden-image");
    })
  }

};

function sendEmail(){
  fName = "predrag"
  lName = "filipovikj"
  domain = "gmail.com"
  myEmail = fName + "." + lName + "@" + domain;
  console.log(myEmail)
  window.location.href = "mailto:" + myEmail;
}
