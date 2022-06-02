var tab_list = [
    "Foldverse",
    "Projects",
    "Music"
];

var repo_list = [
    'Shredded-Plugin',
    'Slick-Addons',
    'ABLE-Tech'
];

if(document.location.href.includes("foldverse/preview.html") == false) {
    nav_rep();
}

if(document.location.href.endsWith("projects/main.html")) {
    project_rep();
}

var pre_path;

function nav_rep() {
    var target = document.getElementById('nav_target');

    // make the path prefix
    pre_path = "../../";
    if(window.location.href.endsWith('index.html')) {
        pre_path = "";
    }

    // make the bar
    target.classList.add("nav_bar");
    target.innerHTML = ""

    // the logo
    var icon = document.createElement("span");
    let str_ref = "goTo('" + pre_path + "index.html" + "')";
    icon.setAttribute("onclick", str_ref);

    img = document.createElement("img");
    img.classList.add("nav_logo");
    img.src = pre_path + "resources/logo.webp";
    img.alt = "Home";

    icon.appendChild(img);

    target.appendChild(icon);

    // the buttons

    tab_list.forEach(function(tab_name) {
        let comment = document.createComment(tab_name + " Tab");
        target.appendChild(comment);
        
        tab = document.createElement("button");
        tab.classList.add("nav_tab");
        let str_ref = "goTo('" + pre_path + "pages/" + tab_name.toLowerCase() + "/main.html" + "')";
        tab.setAttribute("onclick", str_ref);

        tab_tex = document.createElement("a");
        tab_tex.innerHTML = tab_name;

        tab.appendChild(tab_tex);

        target.appendChild(tab);
    })
}

function project_rep() {
    var target = document.getElementById('ProjectContainer');

    repo_list.forEach(function(repo) {
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

function dataGet(repo)
{
    return JSON.parse(httpGet("https://api.github.com/repos/SlickFromMars/" + repo));
}

function httpGet(theUrl)
{
    var xhr = new XMLHttpRequest();
    xhr.open("GET", theUrl, false); // false for synchronous request
    xhr.send(null);
    return xhr.responseText;
}

window.goTo = function(href) {
    window.location.href = href;
}