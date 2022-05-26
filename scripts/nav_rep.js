var target = document.getElementById('nav_target');

// make the path prefix
var pre_path = "../../";
if(window.location.href.endsWith('index.html')) {
    pre_path = "";
}

// make the bar
target.classList.add("nav_bar");
target.innerHTML = ""

// the logo
var icon = document.createElement("a");
icon.href = pre_path + "index.html";

img = document.createElement("img");
img.classList.add("nav_logo");
img.src = pre_path + "resources/logo.webp";
img.alt = "Home";

icon.appendChild(img);

target.appendChild(icon);

// the buttons
var tab_list = [
    "Foldverse",
    "Projects",
    "Music"
];

tab_list.forEach(function(tab_name) {
    tab = document.createElement("button");
    tab.classList.add("nav_tab");

    tab_tex = document.createElement("a");
    tab_tex.innerHTML = tab_name;
    tab_tex.href = pre_path + "pages/" + tab_name.toLowerCase() + "/main.html";

    tab.appendChild(tab_tex);

    target.appendChild(tab);
})