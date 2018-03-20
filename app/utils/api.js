const myHeaders = new Headers({
    'X-Auth-Token': '37b87d4b4c074813aa61080ce7fd1c9b'
});

const myInit = {
    method: 'GET',
    headers: myHeaders,
    mode: 'cors',
    cache: 'default'
};

const constructUrl = (location, id = "", filter = "") => {
    filter ? filter = `/?seasons=${filter}` : filter = "";
    console.log(filter)
    const url = `http://api.football-data.org/v1${location}/${id}${filter}`
    return url;
}

const callApi = url => {
    return fetch(url, myInit)
        .then(data => data.json())
        .catch(e => console.warn(e));
}

module.exports = {
    callApi: callApi,
    constructUrl: constructUrl
}