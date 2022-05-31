var metaLink = "https://raw.githubusercontent.com/SlickFromMars/slickfrommars.github.io/main/meta/foldverse.json";

var data;

function foldverse_rep() {
    target = document.getElementById("MasterContainer");

    data = JSON.parse(httpGet(metaLink));

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
            rep_hold.href = "preview.html#" + item;

            let rep = document.createElement("img");
            rep.id = item;
            rep.src = "../../resources/showcase/" + item + ".png";

            rep_hold.appendChild(rep);
            row_container.appendChild(rep_hold);
        })

        container.appendChild(row_container);

        target.appendChild(container);
    })
}

function preview_rep() {
    let content = window.location.hash.substring(1).replace(" ", "_");
}