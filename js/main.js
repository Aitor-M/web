var engButton = document.getElementById("eng-button");
var spaButton = document.getElementById("spa-button");
var lastHash = '#eng';

function useEnglish() {
  var spa_texts = document.querySelectorAll("[spa-text]");
  // Hide spanish
  for (i = 0; i < spa_texts.length; i++) {
    spa_texts[i].style.display = "none";
    //loadDot.style.display = "none";
  }
  // Show English
  var eng_texts = document.querySelectorAll("[eng-text]");
  for (i = 0; i < eng_texts.length; i++) {
    eng_texts[i].style.display = "inline";
  }

  window.location.hash = '#eng';
  lastHash = '#eng';
  engButton.classList.add("active");
  spaButton.classList.remove("active");
}

function useSpanish() {
  var spa_texts = document.querySelectorAll("[spa-text]");
  // Hide spanish
  for (i = 0; i < spa_texts.length; i++) {
    spa_texts[i].style.display = "inline";
    //loadDot.style.display = "none";
  }
  // Show English
  var eng_texts = document.querySelectorAll("[eng-text]");
  for (i = 0; i < eng_texts.length; i++) {
    eng_texts[i].style.display = "none";
  }
  window.location.hash = '#spa';
  lastHash = '#spa';
  var button = document.getElementById("spa-button");
  spaButton.classList.add("active");
  engButton.classList.remove("active");
}

if (window.location.hash === '#eng') {
  useEnglish();
}
if (window.location.hash === '#spa') {
  useSpanish();
}

function loadDynamicContent(url) {
  $('.collapse').collapse("hide");
  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {
    
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("dynamic-content").innerHTML = this.responseText;
      //let progressBar = document.getElementById("progress-bar");
      //progressBar.style.display = "none";
      if (lastHash === '#eng') {
        useEnglish();
      }
      if (lastHash === '#spa') {
        useSpanish();
      }
    }
  };
  xhttp.onprogress = function(event) {
    //let progress = event.loaded / event.total;
    //let progressBar = document.getElementById("progress-bar");
    //progressBar.style.width = progress * 100;
    //console.log(progress);
  }
  document.getElementById("dynamic-content").innerHTML = "";
  //let progressBar = document.getElementById("progress-bar");
  //progressBar.style.display = "block";
  xhttp.open("GET", url, true);
  xhttp.send(null);
}

function loadHome() {
  loadDynamicContent("home.html");
  // Remove active from navbar buttons
  var navbar = document.getElementById("navbarResponsive");
  var navbarButtons = navbar.getElementsByClassName("btn btn-secondary");
  for (var itr = 0; itr < navbarButtons.length; itr++) {
    var currentButton = navbarButtons[itr];
    if (currentButton.classList.contains("active")) {
      currentButton.classList.remove("active");
    }
  }
}