var checked=0;
function toggle()
{
    checked=!checked;
    if(checked==true)
    {
        document.querySelector(".nav-bar-left").style.left="50vw";
    }
    else
    {
        document.querySelector(".nav-bar-left").style.left="-50vw";
    }
}

window.onload = function()
{
    document.querySelector(".container").style.opacity = "100";
}

document.querySelector(".nav-bar").innerHTML+= '\
    <div class="nav-button">\
        <div class="line"></div>\
        <div class="line"></div>\
        <div class="line"></div>\
    </div>\
    <ul class="nav-bar-left">\
        <li id="home-tab" class="nav-bar-link"><a href="/">HOME</a> </li>\
        <li id="work-tab" class="nav-bar-link"> <a href="/work">WORK</a> </li>\
        <li id="blog-tab" class="nav-bar-link"> <a href="/blog">BLOG</a></li>\
        <li id="about-tab" class="nav-bar-link"> <a href="/about">ABOUT</a></li>\
        <li id="contact-tab" class="nav-bar-link"> <a href="/contact">CONTACT</a></li>\
    </ul>\
    <div class="nav-bar-right">\
    <div class="nav-bar-name"><a href="https://mahirlabibdihan.github.io"></a></div>\
    </div>';

document.querySelector(".nav-button").addEventListener("click",toggle);