var tab_list = [
    "Foldverse",
    "Projects",
    "Music"
];

if(document.location.href.includes("foldverse/preview.html") == false) {
    nav_rep();
}

var pre_path;
function nav_rep() {
    pre_path = "../../";
    if(window.location.href.endsWith('index.html')) {
        pre_path = "";
    }

    var target = document.getElementById('nav_target');

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

window.httpGet = function(theUrl) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", theUrl, false); // false for synchronous request
    xhr.send(null);
    return xhr.responseText;
}

window.goTo = function(href) {
    window.location.href = href;
}