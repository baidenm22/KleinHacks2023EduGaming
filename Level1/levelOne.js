function checkValue() {
    var input = document.getElementById("myInput").value;
    if (input == 10) {
      document.getElementById("result").innerHTML = "Correct! Although the time is 'infinite' the weight will essentially be 10 grams, <br> The inscription on this artifact reads 'CuS'";
      document.getElementById("result").style.color = "green";
      document.getElementById("result").style.display = "block";
    } else {
      document.getElementById("result").innerHTML = "Incorrect, perhaps try checking the handbook for help on limits?";
      document.getElementById("result").style.color = "red";
      document.getElementById("result").style.display = "block";
    }
  }