const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn")
const color = document.querySelector(".color")

btn.addEventListener("click", () =>{
    let hexColor = `#`;
    for(i = 0; i < 6; i++){
        hexColor += hex[Randomvalue()]
    }
    
    color.textContent = hexColor;
    document.body.style.background = hexColor
    color.style.color = hexColor
})

const Randomvalue = () => {
    return Math.floor(Math.random() * hex.length)
}