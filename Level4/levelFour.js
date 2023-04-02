function checkValue() {
    var input = document.getElementById("myInput").value;
    if (input == 10) {
      document.getElementById("result").innerHTML = "Correct!";
      document.getElementById("result").style.display = "block";
    } else {
      document.getElementById("result").innerHTML = "Incorrect.";
      document.getElementById("result").style.display = "block";
    }
  }