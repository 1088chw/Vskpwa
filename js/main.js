function mysubmit () {
    
     var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("return_value").innerHTML = this.responseText;
    }
  };

  var vname = document.getElementById("id_name");
  var vPage = "hello.php?name=" + vname.value; 
  xhttp.open("GET", vPage  , true);
  xhttp.send();
}