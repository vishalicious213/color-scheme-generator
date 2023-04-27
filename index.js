const form = document.getElementById("form")
const color = document.getElementById("color")
const scheme = document.getElementById("scheme")
const submitBtn = document.getElementById("submit")

// ⬇️ EVENT LISTENERS ⬇️

// listen for form submissions
form.addEventListener("submit", function(e) {
    e.preventDefault()
    console.log("submitted")
})