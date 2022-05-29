var metaLink = "https://raw.githubusercontent.com/SlickFromMars/slickfrommars.github.io/main/meta/foldverse.json";

function foldverse_rep() {
    target = document.getElementById("MasterContainer");

    data = JSON.parse(httpGet(metaLink));

    let keys = Object.keys(data);
    keys.forEach(function(section) {
        let myData = data[section];

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

            let rep = document.createElement("img");
            rep.classList.add("rep_" + myData.format);
            rep.src = "../../resources/showcase/" + item + ".png";

            row_container.appendChild(rep);
        })

        container.appendChild(row_container);

        target.appendChild(container);
    })
}