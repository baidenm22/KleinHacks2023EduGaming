for(let i = 0; i < 100; i++)
{
    const sand = document.createElement('div');
    sand.className = 'sand';
    sand.style.left = 0;
    sand.style.animationDelay = Math.random()*10 +'s';
    sand.addEventListener('animationiteration', randomLocation);
    document.getElementById('sands').append(sand);
}
function randomLocation()
{
    this.style.top = Math.random() * 100 + '%';
    this.style.left = 0;
}

function checkString() {
  var input = document.getElementById("input-box").value;
  if (input === "CuS4CkdAG04T") {
    alert("Congratulations, you've found the location of the golden bell!! We hope you've learned some calculus along the way and seen its uses!!");
    return false;
  } else {
    alert("Incorrect :( maybe you typed it in the wrong order?");
    return false;
  }
}
  //CuS4CkdAG04T