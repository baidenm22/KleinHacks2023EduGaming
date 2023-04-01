{
    const sand = document.createElement('div');
    sand.className = 'sand';
    sand.style.left = Math.random() * 100 + '%';
    sand.style.animationDelay = Math.random()*10 +'s';
    sand.addEventListener('animationiteration', randomLocation);
    document.getElementById('sands').append(sand);
}
function randomLocation()
{
    this.style.top = 0;
    this.style.left = Math.random() * 100 + '%';
    this.style.borderColor = 'rgba(38, 38, 148,'+ Math.random() + ')';
}