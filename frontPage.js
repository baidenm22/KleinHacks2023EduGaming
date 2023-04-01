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
    this.style.borderColor = 'rgba(38, 38, 148,'+ Math.random() + ')';
}