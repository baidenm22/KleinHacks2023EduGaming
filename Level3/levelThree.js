function checkValue() {
    var input = document.getElementById("myInput").value;
    if (input == 317.894) {
      document.getElementById("result").innerHTML = "Correct! Slotting both pieces reveals some writing on the wall 'dAG'";
      document.getElementById("result").style.color = "green";
      document.getElementById("result").style.display = "block";
    } else {
      document.getElementById("result").innerHTML = "Incorrect, perhaps try checking the handbook for help on integrals?";
      document.getElementById("result").style.color = "red";
      document.getElementById("result").style.display = "block";
    }
  }