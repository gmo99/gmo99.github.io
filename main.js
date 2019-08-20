var dataContainer = document.getElementById("fetch-info");
var btn = document.getElementById("btn");

btn.addEventListener("click", function() {
    var XHR = new XMLHttpRequest();
    XHR.open('GET', 'https://gmo99.github.io/test.json');
    XHR.onload = function() {
        var serverData = JSON.parse(XHR.responseText);
        renderHtml(serverData);
};
    XHR.send();
});

function renderHtml(data) {
    var htmlString = "";
    
    for (i = 0; i < data.length; i++) {
        htmlString += "<p>" + data[i].name + " is a " + data[i].species + ".<p>";
    }
    
    dataContainer.insertAdjacentHTML('beforeend', htmlString);
}
