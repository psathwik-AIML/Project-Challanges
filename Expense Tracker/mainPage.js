// input getting from html 
// date 
let date = document.getElementById("date")
// amount 
let amount = document.getElementById("amount")

// Selection type 
let type = document.getElementById("selection")
let addButton = document.getElementById("addButton")
// getting table from html 
let table = document.querySelector("table")
// button clicking action code 
addButton.addEventListener("click", () => {
    if (amount.value === "") {
        alert("Enter amount")
        return
    }
    else if (date.value === "") {
        alert("Enter Date")
        return
    }
    else if (type.value === "Transaction") {
        alert("Please Select Transaction Type");
        return

    }

    // creation of row 
    let row = document.createElement("tr")
    // creation amount cell 
    let amountCell = document.createElement("td")
    amountCell.innerHTML = amount.value
    // creation transaction  cell 
    let transactionCell = document.createElement("td")
    transactionCell.innerHTML = type.value
    // creation date cell 
    let dateCell = document.createElement("td")
    dateCell.innerHTML = date.value
    // creation action cell 
    let actionCell = document.createElement("td")
    actionCell.innerHTML = `<i class="fa-regular fa-trash-can" style="color: #cf2020;"></i>`
    actionCell.onclick=()=>deleteRow(row)
    // adding td's to tr 
    row.appendChild(amountCell)
    row.appendChild(transactionCell)
    row.appendChild(dateCell)
    row.appendChild(actionCell)
    // adding row to table
    table.appendChild(row)

    // main logic for code 
    // total Income 
    let totalIncome = document.querySelector(".totalIncome").innerText
    // total Expense
    let totalExpense = document.querySelector(".totalExpense").innerText
    // total Balance
    let totalBalance = document.querySelector(".totalBalance").innerText

    if (type.value == "Income") {
        if (parseInt(totalIncome) === 0) {
            document.querySelector(".totalIncome").innerText = amount.value
        }
        else {
            document.querySelector(".totalIncome").innerText = parseInt(totalIncome) + parseInt(amount.value)
        }

        if (parseInt(totalBalance) === 0) {
            document.querySelector(".totalBalance").innerText = amount.value
        }
        else {
            document.querySelector(".totalBalance").innerText = parseInt(totalBalance) + parseInt(amount.value)
        }
    }
    else if (type.value == "Expense") {

        if (parseInt(totalExpense) ===0) {
            document.querySelector(".totalExpense").innerText = amount.value
        }
        else {
            document.querySelector(".totalExpense").innerText = parseInt(totalExpense) + parseInt(amount.value)

        }
        if (parseInt(totalBalance) ===0) {
            document.querySelector(".totalBalance").innerText = amount.value
        }
        else {
            document.querySelector(".totalBalance").innerText = parseInt(totalBalance) - parseInt(amount.value)
        }
    }
})


function deleteRow(row){
    row.remove()
}