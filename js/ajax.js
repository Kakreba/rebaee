function apps() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       document.getElementById("apps").innerHTML = this.response;
      }
    };
    xhttp.open("GET", "../apps/index.html", true);
    xhttp.send();
  }