var onRequest = new XMLHttpRequest();
onRequest.open('GET', 'https://gmo99.github.io/test.json');
onRequest.onload = function() {
    var data = JSON.parse(onRequest.responseText);
    alert(data[0]);
}
