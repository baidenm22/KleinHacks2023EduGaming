function checkValue() {
    var input = document.getElementById("myInput").value;
    if (input == 4104.41) {
      document.getElementById("result").innerHTML = "Correct! The markings in the wood line up and read '4Ck'";
      document.getElementById("result").style.color = "green";
      document.getElementById("result").style.display = "block";
    } else {
      document.getElementById("result").innerHTML = "Incorrect, perhaps try checking the handbook for help on derivatives?";
      document.getElementById("result").style.color = "red";
      document.getElementById("result").style.display = "block";
    }
  }
  