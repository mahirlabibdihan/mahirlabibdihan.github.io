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


document.querySelector(".nav-bar").innerHTML+="" +
    "<div class=\"nav-button\">\n" +
    "                    <div class=\"line\"></div>\n" +
    "                    <div class=\"line\"></div>\n" +
    "                    <div class=\"line\"></div>\n" +
    "                </div>\n" +
    "                <ul  class=\"nav-bar-left\">\n" +
    "                    <li id=\"home-tab\" class=\"nav-bar-link\">\n" +
    "                        <a href=\"/\">HOME</a>\n" +
    "                    </li>\n" +
    "                    <li id=\"work-tab\" class=\"nav-bar-link\">\n" +
    "                        <a href=\"/work\">WORK</a>\n" +
    "                    </li>\n" +
    "                    <li id=\"blog-tab\" class=\"nav-bar-link\">\n" +
    "                        <a href=\"/blog\">BLOG</a>\n" +
    "                    </li>\n" +
    "                    <li id=\"about-tab\" class=\"nav-bar-link\">\n" +
    "                        <a href=\"/about\">ABOUT</a>\n" +
    "                    </li>\n" +
    "                    <li id=\"contact-tab\" class=\"nav-bar-link\">\n" +
    "                        <a href=\"/contact\">CONTACT</a>\n" +
    "                    </li>\n" +
    "                </ul>\n" +
    "                   <div class=\"nav-bar-right\">\n" +
    "                <div class=\"nav-bar-name\"><a href=\"https://mahirlabibdihan.github.io\"></a></div>\n" +
    "            </div>" ;

document.querySelector(".nav-button").addEventListener("click",toggle);