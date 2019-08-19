var onRequest = new XMLHttpRequest();
onRequest.open('GET', 'https://gmo99.github.io/test.json');
onRequest.onload = function() {
    var data = JSON.parse(onRequest.responseText);
    console.log(data[0]);
};
onRequest.send();
