import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

function postData(urlApi, data){
    const response = fetch(urlApi, {
        method: 'pot',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response;
}

const data = {
    "title": "hola",
    "price": 1234,
    "description": "siiii",
    "categoryId": 12,
    "images": [
        "https://placeimg.com/64o/480/any"
    ]
}

postData(`${API}/products`, data)
    .then(response => response.json())
    .then(data => console.log(data));