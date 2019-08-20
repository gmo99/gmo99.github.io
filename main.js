var btn = document.getElementById("btn");

btn.addEventListener("click", function() {
    var XHR = new XMLHttpRequest();
    XHR.open('GET', 'https://gmo99.github.io/test.json');
    XHR.onload = function() {
        var data = JSON.parse(XHR.responseText);
        console.log(data[0]);
};
    XHR.send();
});
