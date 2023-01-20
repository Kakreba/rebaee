function apps() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("apps").innerHTML = this.responseText;
    }
  xhttp.open("POST", "https://www.zhanyarios.ml/apps", true);
  xhttp.send();
}
