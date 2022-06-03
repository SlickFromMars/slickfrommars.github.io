var data = JSON.parse(httpGet("https://raw.githubusercontent.com/SlickFromMars/slickfrommars.github.io/main/meta/foldverse.json"));

function foldverse_rep() {
    target = document.getElementById("MasterContainer");

    let keys = Object.keys(data.main_page);
    keys.forEach(function(section) {
        let myData = data.main_page[section];

        let comment = document.createComment("Section: " + myData.title);
        target.appendChild(comment);

        let container = document.createElement("div");
        container.classList.add("ContentContainer");

        let title = document.createElement("h2");
        title.innerHTML = myData.title;
        title.classList.add("ContentTitle");
        container.appendChild(title);

        let row_container = document.createElement("div");
        row_container.classList.add("ContentRowContainer");

        myData.contents.forEach(function(item) {
            let comm2 = document.createComment(item);
            row_container.appendChild(comm2);

            let rep_hold = document.createElement("a");
            rep_hold.classList.add("rep_" + myData.format);
            if(data.preview[item].href != undefined) {
                rep_hold.href = data.preview[item].href;
            } else {
                rep_hold.href = "preview.html#" + item;
            }

            let rep = document.createElement("img");
            rep.id = item;
            let myPath = "../../resources/"
            if(myData.format == "poster") {
                myPath += "posters/" + item + ".webp"
            } else {
                myPath += "showcase/" + item + ".webp"
            }
            rep.src = myPath;

            rep_hold.appendChild(rep);
            row_container.appendChild(rep_hold);
        })

        container.appendChild(row_container);

        target.appendChild(container);
    })
} 

function preview_rep() {
    let content = window.location.hash.substring(1).replace(" ", "_");
    document.title = data.preview[content].title;

    let target = document.getElementById("MainContainer");

    if(data.preview[content].logo != undefined) {

    } else {

    }
}

function httpGet(theUrl)
{
    var xhr = new XMLHttpRequest();
    xhr.open("GET", theUrl, false); // false for synchronous request
    xhr.send(null);
    return xhr.responseText;
}