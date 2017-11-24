(() => {
    let button = document.getElementById("testButton");
    let button2 = document.getElementById("testButton2");

    let myHeaders = new Headers({
        'X-Auth-Token': '37b87d4b4c074813aa61080ce7fd1c9b'
    });
    let myInit = {
        method: 'GET',
        headers: myHeaders,
        mode: 'cors',
        cache: 'default'
    };
    
    button.addEventListener("click", () => {
        fetch("http://api.football-data.org/v1/teams/65/players", myInit).then((response) => {
            return response.json();
        }).then((data) => {
            console.log(data);
        })
        .catch((e) => {
            console.log(e);
        });
    });

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
        let response = await fetch("http://api.football-data.org/v1/teams/1/players", myInit);
        let body = await response.json();
        let table = document.getElementsByClassName("football-data")[0];
        body.players.forEach((elem) => {
            let tableRow = document.createElement("tr");
            table.appendChild(tableRow);
            let output = ``;
            for (value in elem) {
                if (elem[value] !== null) {
                    output += `<td>${elem[value]}</td>`;
                }
            }
            output += `</tr>`;
            tableRow.innerHTML = output;
        });
}

function constructUrl() {

}