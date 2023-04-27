const form = document.getElementById("form")
const selectedColor = document.getElementById("color")
const scheme = document.getElementById("scheme")
const selectedCount = document.getElementById("count")
const submitBtn = document.getElementById("submit")
const palette = document.getElementById("palette")

// ⬇️ EVENT LISTENERS ⬇️

// listen for form submissions
form.addEventListener("submit", function(e) {
    e.preventDefault()
    console.log(selectedColor.value, scheme.value)
    sendColorInfo()
})

palette.addEventListener("click", function(e) {
    // const hexes = document.querySelectorAll(".color-hex")
    console.log(e.target)

})

// ⬇️ EVENT HANDLERS ⬇️

function sendColorInfo() {
    let hex = selectedColor.value.slice(-6)
    let count = selectedCount.value
    console.log("hex", hex)
    console.log("count", count)

    fetch(`https://www.thecolorapi.com/scheme?hex=${hex}&mode=${scheme.value}&count=${count}&format=json`)
        .then(res => res.json())
        .then(data => showPalette(data))
}

// ⬇️ RENDER THE APP ⬇️

function showPalette(data) {
    const colorsArray = data.colors
    console.log(colorsArray)

    palette.innerHTML = `
        <div class="color color-header background">
            <div>Closest name</div>
            <div>Hex code</div>
        </div>
    `

    colorsArray.forEach(function(color) {
        palette.innerHTML += `
            <div class="color pick" data-hex="${color.hex.value} style="background-color: ${color.hex.value};">
                <div class="color-name">${color.name.value}</div>
                <div class="color-hex"">${color.hex.value}</div>
            </div>
        `
    })
}