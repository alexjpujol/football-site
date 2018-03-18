(() => {
    let button2 = document.getElementById("testButton2");
    button2.addEventListener("click", handleResponse);

})();

let myHeaders = new Headers({
    'X-Auth-Token': '37b87d4b4c074813aa61080ce7fd1c9b'
});

let myInit = {
    method: 'GET',
    headers: myHeaders,
    mode: 'cors',
    cache: 'default'
};

async function handleResponse() {
        let response = await fetch("http://api.football-data.org/v1/teams/31/players", myInit);
        let body = await response.json();
        console.log(body);
        let table = document.getElementsByClassName("football-data")[0];
        body.players.forEach((elem) => {
            let tableRow = document.createElement("tr");
            table.appendChild(tableRow);
            let output = ``;
            for (value in elem) {
                if (value !== "marketValue") {
                    if (elem[value] !== null) {
                        output += `<td>${elem[value]}</td>`;
                    } else {
                        output += `<td>No Data</td>`;
                    }
                } 
            }
            output += `</tr>`;
            tableRow.innerHTML = output;
        });
}

function constructUrl() {

}