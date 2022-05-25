var target = document.getElementById('ProjectContainer');

var data;

var repo_list = [
    'Shredded-Plugin',
    'Slick-Addons',
    'ABLE-Tech'
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

    view.appendChild(view_tex);

    tex.appendChild(title);
    tex.appendChild(desc);
    tex.appendChild(view);

    main.appendChild(logo);
    main.appendChild(tex)

    target.appendChild(main);
});

function dataGet(repo)
{
    data = JSON.parse(httpGet("https://api.github.com/repos/SlickFromMars/" + repo));
}

function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}