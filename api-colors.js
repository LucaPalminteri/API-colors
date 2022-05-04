const colorInput = document.getElementById('color-input')
const selectInput = document.getElementById('color-select')
const btnInput = document.getElementById('color-btn')
const root = document.getElementById('root')

let color = ''
let scheme = ''

btnInput.addEventListener('click', function(e) {
    color = colorInput.value.slice(1)
    if(root.hasChildNodes()){
        root.replaceChildren()
    }
    scheme = selectInput.value.toLowerCase()
    getColor(color,scheme)
})



function getColor(color = 'ffffff', mode = 'triad') {
    fetch(`https://www.thecolorapi.com/scheme?hex=${color}&mode=${mode}&count=6`)
        .then(res => res.json())
        .then(data => {
            data.colors.forEach( x => {
                //root.removeChild(aux)
                let aux = document.createElement('div')
                aux.style.position = 'relative'
                aux.style.height = '100%'
                aux.style.width = '200px'
                aux.style.backgroundColor = `${x.hex.value}`
                let footer = document.createElement('div')
                footer.textContent = `${x.hex.value}`
                footer.style.position = 'absolute'
                footer.style.bottom = '0'
                footer.style.width = '100%'
                footer.style.backgroundColor = '#FFFFFF'
                footer.style.padding = '20px 0'
                footer.style.textAlign = 'center'
                aux.appendChild(footer)
                root.appendChild(aux)
            })
        })

}
