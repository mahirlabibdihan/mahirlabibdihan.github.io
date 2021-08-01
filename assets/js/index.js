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
