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

// listen for clicks on color strip
palette.addEventListener("click", function(e) {
    if (e.target.dataset.hex) {
        copyColor(e.target.dataset.hex)
    }
})

// ⬇️ EVENT HANDLERS ⬇️

// send hex code to API
function sendColorInfo() {
    let hex = selectedColor.value.slice(-6)
    let count = selectedCount.value
    console.log("hex", hex)
    console.log("count", count)

    fetch(`https://www.thecolorapi.com/scheme?hex=${hex}&mode=${scheme.value}&count=${count}&format=json`)
        .then(res => res.json())
        .then(data => showPalette(data))
}

// copy selected color's hex code to clipboard
function copyColor(hexCode) {
    const bottom = document.getElementById("bottom")
    bottom.innerText = ""

    navigator.clipboard.writeText(hexCode)
    bottom.innerText = `Copied ${hexCode} to clipboard`
    setTimeout(function() {bottom.innerText = ""}, 3000)
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
            <div class="color pick" data-hex="${color.hex.value}" style="background-color: ${color.hex.value};">
                <div class="color-name" data-hex="${color.hex.value}">${color.name.value}</div>
                <div class="color-hex" data-hex="${color.hex.value}">${color.hex.value}</div>
            </div>
        `
    })
}