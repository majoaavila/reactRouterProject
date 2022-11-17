const URL = 'https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=spain&api_key=af0e11914b71780bb59b90f01ae50cf7&format=json'

function getMusicData() {
    return fetch (`${URL}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => data.topartists.artist)
        .then(artists => artists.map(artist => {
            return {
                id: artist.mbid,
                name: artist.name,
                image: artist.image[0]['#text']
            }
            }))
}

export {getMusicData}