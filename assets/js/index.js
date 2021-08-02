var checked=0;

function toggle()
{
    checked=!checked;
    if(checked==true)
    {
        document.querySelector(".nav-bar-left").style.left="50%";
    }
    else
    {
        document.querySelector(".nav-bar-left").style.left="-50%";
    }
}

window.onload = function()
{
    document.querySelector(".container").style.opacity = "100";
}

document.querySelector(".nav-button").addEventListener("click",toggle);