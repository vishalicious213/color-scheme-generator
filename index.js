const form = document.getElementById("form")
const color = document.getElementById("color")
const scheme = document.getElementById("scheme")
const submitBtn = document.getElementById("submit")
const palette = document.getElementById("palette")

// ⬇️ EVENT LISTENERS ⬇️

// listen for form submissions
form.addEventListener("submit", function(e) {
    e.preventDefault()
    console.log(color.value, scheme.value)
    sendColorInfo()
})

// ⬇️ EVENT HANDLERS ⬇️

function sendColorInfo() {
    let hex = color.value.slice(-6)
    console.log("hex", hex)

    fetch(`https://www.thecolorapi.com/scheme?hex=${hex}&mode=${scheme.value}&format=json`)
        .then(res => res.json())
        .then(data => showPalette(data))
}

// ⬇️ RENDER THE APP ⬇️

function showPalette(data) {
    const colorsArray = data.colors
    console.log(colorsArray)

    palette.innerHTML = ""

    palette.innerHTML = `
        <div>TEST</div>
    `
}