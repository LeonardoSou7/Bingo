function generateRandomNumber() {
    return Math.floor(Math.random() * 80) + 1;
}

function createTable(userName) {

    var tableContainer = document.getElementById("table-container");


    var table = document.createElement("table");


    var caption = document.createElement("caption");
    caption.textContent = "Tabela de " + userName;
    table.appendChild(caption);


    for (var i = 1; i <= 5; i++) {
        var row = document.createElement("tr");

        for (var j = 1; j <= 5; j++) {
            var cell = document.createElement("td");


            if (i === 3 && j === 3) {
                cell.textContent = "x";
            } else {
                cell.textContent = generateRandomNumber();
            }

            row.appendChild(cell);
        }

        table.appendChild(row);
    }


    tableContainer.appendChild(table);
}


var userName = prompt("Digite o seu nome:");


createTable(userName);