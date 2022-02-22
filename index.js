function fazGet(url, clientId, token) {
    let request = new XMLHttpRequest();
    request.open('GET', url, false);
    request.setRequestHeader('Client-ID', clientId)
    request.setRequestHeader('Authorization', `OAuth  ${token}`)

    request.send();
    return request.responseText;
}

function fazPost(url, token) {
    let request = new XMLHttpRequest();
    request.open('POST', url, false);
    request.setRequestHeader('Authorization', `Bearer ${token}`)
    request.send();
    return request.responseText;
    
}

function main() {
    var clientID = 'lcd1hd8vqo6q6vzjtdigizti92mydh';
    let token = JSON.parse(getToken()).access_token;
    console.log(JSON.parse(getToken()));
    let data = fazGet(`https://api.twitch.tv/kraken/user`, clientID, token);
    let usuarios = JSON.parse(data);
    console.log(usuarios);
    return usuarios;
}

function getToken() {
    var clientID = 'lcd1hd8vqo6q6vzjtdigizti92mydh',
    clientSecret = '2ayrjsehor3rnev1fuqheorrehpb1n';
    let url = `https://id.twitch.tv/oauth2/token?client_id=${clientID}&client_secret=${clientSecret}&grant_type=client_credentials&scope=user:read:email%20user_read`;

    let request = new XMLHttpRequest();
    request.open('POST', url, false);
    request.send();
    return request.responseText;
}