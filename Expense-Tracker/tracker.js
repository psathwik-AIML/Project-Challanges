let table = document.querySelector(".trackTable")

let transactions=JSON.parse(localStorage.getItem("mydata")) || [];

function plusButton() {

    // input fields
    let inputDate = document.querySelector("#date").value
    let inputAmount = document.querySelector("#amount").value
    let inputTransaction = document.querySelector("#transaction").value

    if (inputDate == "") {
        alert("Enter Date");
        return;
    } else if (inputAmount == "") {
        alert("Enter Amount");
        return;
    } else if (inputTransaction == "Transaction Type") {
        alert("Select Transaction Type");
        return;
    }

    // object 
    let transaction={
        date:inputDate,
        amount:inputAmount,
        type:inputTransaction
    }
    transactions.push(transaction)
    console.log(transaction)
    console.log(transactions)
    let a=JSON.stringify(transactions)
    localStorage.setItem("mydata",a)

    
    
    // creation of new row 
    let row = document.createElement("tr")
    // amount area 
    let amountCell = document.createElement("td")
    amountCell.innerHTML = inputAmount
    // transaction type area 
    let transactionCell = document.createElement("td")
    transactionCell.innerHTML = inputTransaction
    // date area 
    let dateCell = document.createElement("td")
    dateCell.innerHTML = inputDate
    // action area 
    let binCell = document.createElement("td")
    let binButton = document.createElement("button")
    let binImage = document.createElement("img")

    binButton.onclick = () => deleteRow(row)

    binImage.src = "./images/delete.svg"
    binImage.style.width = "35px"
    binImage.style.height = "35px"
    binImage.style.border = "none"
    binButton.appendChild(binImage)
    binCell.appendChild(binButton)

    row.appendChild(amountCell)
    row.appendChild(transactionCell)
    row.appendChild(dateCell);
    row.appendChild(binCell)

    table.appendChild(row)

    // cards data 
    let totalIncome = document.querySelector("#cardIncome").innerText;
    let totalExpense = document.querySelector("#cardExpense").innerText;
    let totalBalance = document.querySelector("#cardBalance").innerText;

    // total income card data 
    if (inputTransaction == "income") {
        if (totalIncome == "0") {
            document.querySelector("#cardIncome").innerText = inputAmount
        }
        else {
            document.querySelector("#cardIncome").innerText = parseInt(totalIncome) + parseInt(inputAmount);
        }
        // balance card data 
        if (totalBalance == "0") {
            document.querySelector("#cardBalance").innerText = inputAmount;
        }
        else {
            document.querySelector("#cardBalance").innerText = parseInt(totalBalance) + parseInt(inputAmount);
        }
    }
    // total expense card data 
    else if (inputTransaction == "expense") {
        if (totalExpense == "0") {
            document.querySelector("#cardExpense").innerText = inputAmount;
        }
        else {
            document.querySelector("#cardExpense").innerText = parseInt(totalExpense) + parseInt(inputAmount);
        }
        // balance card data 
        if (totalBalance == "0") {
            document.querySelector("#cardBalance").innerText = inputAmount;
        }
        else {
            document.querySelector("#cardBalance").innerText = parseInt(totalBalance) - parseInt(inputAmount);
        }
    }



}

// delete row funcrion 
function deleteRow(row) {
    row.remove()
}

function renderTable() {
    // Clear table except header
    table.innerHTML = `
        <tr id="first">
            <th>Amount</th>
            <th>Type</th>
            <th>Date</th>
            <th>Action</th>
        </tr>
    `;

    // Reset totals
    let totalIncome = 0;
    let totalExpense = 0;

    // Loop through transactions array
    transactions.forEach((tran, index) => {
        let row = document.createElement("tr");
        row.innerHTML = `
            <td>${tran.amount}</td>
            <td>${tran.type}</td>
            <td>${tran.date}</td>
            <td>
                <button onclick="deleteTransaction(${index})">
                    <img src="./images/delete.svg" width="35" height="35">
                </button>
            </td>
        `;
        table.appendChild(row);

        // Update totals
        if (tran.type === "income") totalIncome += parseInt(tran.amount);
        else totalExpense += parseInt(tran.amount);
    });

    // Update cards
    document.querySelector("#cardIncome").innerText = totalIncome;
    document.querySelector("#cardExpense").innerText = totalExpense;
    document.querySelector("#cardBalance").innerText = totalIncome - totalExpense;
}
window.onload=renderTable