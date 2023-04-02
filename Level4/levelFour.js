function checkValue() {
    var input = document.getElementById("myInput").value;
    if (input == 65.936) {
      document.getElementById("result").innerHTML = "Correct! Using the artifact with the added weight, a small cubby opens, and written in the back: '04T'";
      document.getElementById("result").style.color = "green";
      document.getElementById("result").style.display = "block";
    } else {
      document.getElementById("result").innerHTML = "Incorrect, perhaps try checking the handbook for help on differentials?";
      document.getElementById("result").style.color = "red";
      document.getElementById("result").style.display = "block";
    }
  }