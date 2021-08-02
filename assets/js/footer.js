function createSocialIcon(className,url){
    let socialIcon = document.createElement('li');
    socialIcon.classList.add("social-icon");
    let socialIconLink = document.createElement('a');
    socialIconLink.href=url;
    socialIconLink.classList.add("fa");
    socialIconLink.classList.add(className);
    socialIcon.appendChild(socialIconLink);
    return socialIcon;
}

function createSocialIconsList(){
    let socialIconsList = document.createElement('ul');
    socialIconsList.classList.add("social-icons-list");

    socialIconsList.appendChild(createSocialIcon("fa-twitter","https://twitter.com/mahirlabibdihan"));
    socialIconsList.appendChild(createSocialIcon("fa-facebook","https://facebook.com/mahirlabibdihan"));
    socialIconsList.appendChild(createSocialIcon("fa-linkedin","https://linkedin.com/mahirlabibdihan"));
    socialIconsList.appendChild(createSocialIcon("fa-instagram","https://instagram.com/di_huu"));
    socialIconsList.appendChild(createSocialIcon("fa-github","https://github.com/mahirlabibdihan"));
    socialIconsList.appendChild(createSocialIcon("fa-envelope","mailto:mahirlabibdihan@gmail.com"));

    return socialIconsList;
}

function createCopyright(){
    let copyright = document.createElement('h4');
    copyright.classList.add("copyright");
    copyright.appendChild(document.createTextNode('© Mahir Labib Dihan All rights reserved'));
    return copyright;
}

const footer = document.querySelector(".footer");
footer.appendChild(createSocialIconsList());
footer.appendChild(createCopyright());
