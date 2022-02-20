function fazGet(url) {
    let request = new XMLHttpRequest();
    request.open('GET', url, false);
    request.send();
    return request.responseText;
}

function fazPost(url) {
    let request = new XMLHttpRequest();
    request.open('POST', url, false);
    request.send();
    return request.responseText;
    
}

function main() {
    var clientID = 'lcd1hd8vqo6q6vzjtdigizti92mydh';
    let token = JSON.parse(getToken()).access_token;
    console.log(getToken());
    fazPost(`https://id.twitch.tv/oauth2/revoke?client_id=lcd1hd8vqo6q6vzjtdigizti92mydh&token=${token}`);
    let data = fazGet(`https://api.twitch.tv/helix/users?${token}&${clientID}`);
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