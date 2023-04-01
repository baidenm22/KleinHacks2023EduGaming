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

document.getElementById("answerButton").onclick = function() {

    var answer = document.getElementById("answerSpace").value;
    var answers = [20,30,40,50]
    if(answer = answers[0])
    {
     console.log("success");   
    }
}