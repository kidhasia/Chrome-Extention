let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const resetBtn = document.getElementById("reset-btn")
const ulEl = document.getElementById("ul-el")

console.log(ulEl)

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    console.log(myLeads)
    inputEl.value = ""
    renderLeads()
})

resetBtn.addEventListener("click", function() {
    ulEl.textContent = ""
    myLeads = [] // Reset the myLeads array
})

inputEl.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        inputBtn.click()
    }
})

function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `<li><a href="${myLeads[i]}" target="_blank">${myLeads[i]}</a></li>`
    }
    ulEl.innerHTML = listItems
}
