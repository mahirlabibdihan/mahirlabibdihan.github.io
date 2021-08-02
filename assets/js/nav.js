function createLine(){
    let line=document.createElement('div');
    line.classList.add("line");
    return line;
}
function createNavButton(){
    let navButton = document.createElement('div');
    navButton.classList.add("nav-button");
    navButton.appendChild(createLine());
    navButton.appendChild(createLine());
    navButton.appendChild(createLine());
    return navButton;
}

function createNavBarLink(name,url){
    let navBarLink = document.createElement('li');
    navBarLink.classList.add("nav-bar-link");
    let link = document.createElement('a');
    link.href=url;
    link.appendChild(document.createTextNode(name));
    navBarLink.appendChild(link);
    return navBarLink;
}
function createNavBarLeft(){
    let navBarLeft = document.createElement('ul');
    navBarLeft.classList.add("nav-bar-left");
    navBarLeft.appendChild(createNavBarLink("HOME","/"));
    navBarLeft.appendChild(createNavBarLink("WORK","/work"));
    navBarLeft.appendChild(createNavBarLink("BLOG","/blog"));
    navBarLeft.appendChild(createNavBarLink("ABOUT","/about"));
    navBarLeft.appendChild(createNavBarLink("CONTACT","/contact"));
    return navBarLeft;
}

function createNavBarRight(){
    let navBarRight = document.createElement('div');
    navBarRight.classList.add("nav-bar-right");
    let navBarName = document.createElement('div');
    navBarName.classList.add("nav-bar-name");
    navBarName.appendChild(document.createTextNode("MAHIR LABIB DIHAN"));
    navBarRight.appendChild(navBarName);
    return navBarRight;
}
function createNavBar(){
    const navBar = document.querySelector(".nav-bar");
    navBar.appendChild(createNavButton());
    navBar.appendChild(createNavBarLeft());
    navBar.appendChild(createNavBarRight());
}

createNavBar();

