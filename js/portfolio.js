var portfolio = [
  {
    title: "Example text #1", 
    short: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.",
    icon: "img/esat-logo.png",
    media: '<iframe style="padding: 3px;" class="card-img-top" height="200" src="https://www.youtube.com/embed/NUBnqmg0KIA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    description: 
    'Old Town Stories is a <b>VR (Oculus Rift)</b> shooter game made with <b>Unreal Engine 4</b>. \
    We were a group of 10 students, 6 programmers and 4 artists, that \
    worked for 8 months to complete the demo which features a <b>tutorial, a story-mode and an arena</b>.\
    <p> \
      My main contributions to this project were: \
      <ul class="list-group"> \
        <li class="list-group-item"> \
          <h5>VR integration</h5>\
          <p>\
            The player\'s Pawn. VR related input and hand animations integration.\
          </p>\
        </li>\
        <li class="list-group-item">\
          <h5>VR optimization</h5>\
          <p>\
            Making sure the project had a stable 90fps was a challenge due to the realistic look of the game. Some of the \
            optimizations were: making sure there were no transparencies, level-streaming, using as simple as posible materials,\
            HLODS, static lights...\
        </li>\
        <li class="list-group-item">\
          <h5>Magnetic Shield</h5>\
          <p>\
            Shield which stops, accumulates and returns enemy bullets.\
          </p>\
        </li>\
        <li class="list-group-item">\
          <h5>VFX</h5>\
          <p>\
            Shield which stops, accumulates and returns enemy bullets.\
          </p>\
        </li>\
        <li class="list-group-item">\
          <h5>Tutorial</h5>\
          <p>\
            Event based tutorial which triggers new actions everytime the player interacts with the world.\
          </p>\
        </li>\
      </ul>\
    </p>\
    '
  }
];

var selectedProjectIndex = -1;

function loadPortfolioContent() {
  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {
    
    if (this.readyState == 4 && this.status == 200) {
      let result = "" ;//this.responseText;
      

      for (var i = 0, l = portfolio.length; i < l; i++) {
        var project = portfolio[i];
        var newProject = this.responseText;
        newProject = newProject.replace("{{ index }}", i);
        newProject = newProject.replace("{{ title }}", project.title);
        newProject = newProject.replace("{{ short }}", project.short);
        newProject = newProject.replace("{{ icon }}", project.icon);
        result += newProject;
      }

      document.getElementById("portfolio-list").innerHTML = result;
    }
  };
  document.getElementById("portfolio-list").innerHTML = "";
  //let progressBar = document.getElementById("progress-bar");
  //progressBar.style.display = "block";
  xhttp.open("GET", "portfolio-template.html", true);
  xhttp.send(null);
}

function onItemSelected(index) {
  document.getElementById("modal-title").innerHTML = portfolio[index].title;
  document.getElementById("media").innerHTML = portfolio[index].media;
  document.getElementById("description").innerHTML = portfolio[index].description;
  document.getElementById("modal-footer").innerHTML = portfolio[index].title;
}