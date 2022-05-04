const color = document.getElementById('color-input')
const select = document.getElementById('color-select')

console.log(color.value)

fetch('https://www.thecolorapi.com/scheme?hex=24B1E0&mode=triad&count=6 ')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.body.style.backgroundColor = `${data.colors[0].hex.value}`
    })