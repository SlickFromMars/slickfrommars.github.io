var data = JSON.parse(httpGet("https://raw.githubusercontent.com/SlickFromMars/slickfrommars.github.io/main/meta/projects.json"))

function project_rep() {
    var target = document.getElementById('ProjectContainer');

    data.repos.forEach(function(repo) {
        let img_path = "../../resources/icon.webp";
        let data = dataGet(repo);
        
        let comment = document.createComment(data.html_url);
        target.appendChild(comment);

        if(data.name == "Slick-Addons")
            img_path = "../../resources/logo.webp"
        else if(data.name == "Shredded-Plugin")
            img_path = "../../resources/covers/sus.png"

        main = document.createElement("div");
        main.classList.add("container_grp");

        logo = document.createElement("img");
        logo.alt = repo;
        logo.loading = "lazy";
        logo.src = img_path;

        tex = document.createElement("div");

        title = document.createElement("h1");
        title.innerHTML = data.name.replace("-", " ");

        desc = document.createElement("h2");
        desc.innerHTML = data.description;

        view = document.createElement("button");
        view_tex = document.createElement("a");
        view_tex.innerHTML = "View On Github";
        view_tex.href = data.html_url;

        view.appendChild(view_tex);

        tex.appendChild(title);
        tex.appendChild(desc);
        tex.appendChild(view);

        main.appendChild(logo);
        main.appendChild(tex);

        target.appendChild(main);
    });
}

function render_rep() {
    var target = document.getElementById("RenderContainer");
    var col1 = document.createElement("div");
    col1.classList.add("column");
    var col2 = document.createElement("div");
    col2.classList.add("column");
    var col3 = document.createElement("div");
    col3.classList.add("column");

    var swc = -1;

    Object.keys(data.artwork).forEach(function(render) {
        if(swc == 2) {
            swc = 0;
        } else {
            swc = swc + 1;
        }
        let img_path ="../../resources/art/" + render + ".webp";

        let secondary;

        if(data.artwork[render].author != undefined) {
            secondary = document.createElement("h2");
            secondary.innerHTML = "By " + data.artwork[render].author;
        } else {
            secondary = document.createComment("no author lol");
        }

        let img = document.createElement("img");
        img.src = img_path;
        img.alt = render;
        img.loading = "lazy";
        if(swc == 0) {
            col1.appendChild(img);
            col1.appendChild(secondary);
        } else if(swc == 1) {
            col2.appendChild(img);
            col2.appendChild(secondary);
        } else {
            col3.appendChild(img);
            col3.appendChild(secondary);
        }
    })
    target.appendChild(col1);
    target.appendChild(col2);
    target.appendChild(col3);
}

function dataGet(repo) {
    return JSON.parse(httpGet("https://api.github.com/repos/SlickFromMars/" + repo));
}