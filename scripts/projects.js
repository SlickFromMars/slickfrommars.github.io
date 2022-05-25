var target = document.getElementById('ProjectContainer');

var data;
var data2;
var latest_data;

var repo_list = [
    'Shredded-Plugin',
    'Slick-Addons'
];

repo_list.forEach(function(repo) {
    dataGet(repo)

    main = document.createElement("div");
    main.classList.add("container_grp");

    logo = document.createElement("img");
    logo.src = "../../resources/cool_icon.png"

    tex = document.createElement("div");

    title = document.createElement("h1");
    title.innerHTML = data.name.replace("-", " ");

    desc = document.createElement("h2");
    desc.innerHTML = data.description;

    view = document.createElement("button");
    view_tex = document.createElement("a");
    view_tex.innerHTML = "View On Github";
    view_tex.href = data.html_url;

    install = document.createElement("button");
    install_tex = document.createElement("a");
    install_tex.innerHTML = "Install Latest";
    install_tex.href = latest_data.zipball_url;

    view.appendChild(view_tex);
    install.appendChild(install_tex);

    tex.appendChild(title);
    tex.appendChild(desc);
    tex.appendChild(view);
    tex.appendChild(install);

    main.appendChild(logo);
    main.appendChild(tex)

    target.appendChild(main);
});

function dataGet(repo)
{
    data = JSON.parse(httpGet("https://api.github.com/repos/SlickFromMars/" + repo));
    data2 = JSON.parse(httpGet("https://api.github.com/repos/SlickFromMars/" + repo + "/releases"));
    latest_data = data2[0];
}

function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}