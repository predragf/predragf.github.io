window.onload = function() {

  sideLinks = document.getElementsByClassName("side-container")

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
  newsFeedAdjust()
};

function sendEmail(){
  fName = "predrag"
  lName = "filipovikj"
  domain = "gmail.com"
  myEmail = fName + "." + lName + "@" + domain;
  window.location.href = "mailto:" + myEmail;
}


function newsFeedAdjust() {
  newsFeedList = document.getElementById("news-feed-list")
  newsItems = newsFeedList.getElementsByTagName("li")
  for (let itemPos = 0; itemPos < newsItems.length; itemPos++) {
    newsItem = newsItems[itemPos]
    if (itemPos > 4) {
        newsItem.classList.toggle("hidden");
    }
  }
  if (newsItems.length > 4){
    document.getElementById("btnShowAllNews").classList.toggle("hidden")
    document.getElementById("btnHideOldNews").classList.toggle("hidden")
  } else {
    document.getElementById("btnShowAllNews").classList.add("hidden")
    document.getElementById("btnHideOldNews").classList.add("hidden")
  }
}
