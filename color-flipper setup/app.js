const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', () =>{
    const Randomcolor = Math.floor(Math.random() * colors.length);
    console.log(Randomcolor);
    document.body.style.background = colors[Randomcolor];
    color.textContent = colors[Randomcolor];
    color.style.color = colors[Randomcolor];
})