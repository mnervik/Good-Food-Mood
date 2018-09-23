// could have used new URL(location.href).getParams.get('q') - but it is experimental as of writing this
const URL = location.href;
const QUERY = URL.split('?q=')[1];
const APP_ID = "975d15cc";
const APP_KEY = "5ca0e19abb1d5d4fa74554c4bd74ad8a";
const API = "https://api.edamam.com/search?q=" + QUERY + "&app_id=" + APP_ID + "&app_key=" + APP_KEY + "&to=12";

document.getElementById('query').value = decodeURIComponent(QUERY).replace(/\+/g, ' ');

/* Fetch Results */
fetch(API).then(function (result) {
    return result.json();
}).then(function (data) {
    buildData(data);
});

function buildData(data) {
    let wrapper = document.getElementById('search-result');
    for (let i = 0; i < data['hits'].length; i++) {
        let data_sub = data['hits'][i]['recipe'];

        let url = data_sub['url'];
        let title = data_sub['label'];
        let image = data_sub['image'];
        let calories = Math.round(data_sub['calories']);
        let ingredients = data_sub['ingredients'].length;


        wrapper.innerHTML += '<a href="' + url + '" target="_blank" class="recipe"><img src="' + image + '"><h2 class="title">'
            + title + '</h2><p class="calories">' + calories + '</p> | <p class="ingredients">' + ingredients
            + '</p><p class="btn read-more">Read More</p></a>';
    }
}