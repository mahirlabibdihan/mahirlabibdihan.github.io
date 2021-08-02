const footer = document.querySelector(".footer");
let socialIconsList = document.createElement('ul');
socialIconsList.classList.add("social-icons-list");

let socialIcon1 = document.createElement('li');
socialIcon1.classList.add("social-icon");
let socialIconLink1 = document.createElement('a');
socialIconLink1.href="https://twitter.com/mahirlabibdihan";
socialIconLink1.classList.add("fa");
socialIconLink1.classList.add("fa-twitter");
socialIcon1.appendChild(socialIconLink1);
socialIconsList.appendChild(socialIcon1);

let socialIcon2 = document.createElement('li');
socialIcon2.classList.add("social-icon");
let socialIconLink2 = document.createElement('a');
socialIconLink2.href="https://facebook.com/mahirlabibdihan";
socialIconLink2.classList.add("fa");
socialIconLink2.classList.add("fa-facebook");
socialIcon2.appendChild(socialIconLink2);
socialIconsList.appendChild(socialIcon2);

let socialIcon3 = document.createElement('li');
socialIcon3.classList.add("social-icon");
let socialIconLink3 = document.createElement('a');
socialIconLink3.href="https://www.linkedin.com/in/mahirlabibdihan/";
socialIconLink3.classList.add("fa");
socialIconLink3.classList.add("fa-linkedin");
socialIcon3.appendChild(socialIconLink3);
socialIconsList.appendChild(socialIcon3);

let socialIcon4 = document.createElement('li');
socialIcon4.classList.add("social-icon");
let socialIconLink4 = document.createElement('a');
socialIconLink4.href="https://www.instagram.com/di_huu/";
socialIconLink4.classList.add("fa");
socialIconLink4.classList.add("fa-instagram");
socialIcon4.appendChild(socialIconLink4);
socialIconsList.appendChild(socialIcon4);

let socialIcon5 = document.createElement('li');
socialIcon5.classList.add("social-icon");
let socialIconLink5 = document.createElement('a');
socialIconLink5.href="https://github.com/mahirlabibdihan";
socialIconLink5.classList.add("fa");
socialIconLink5.classList.add("fa-github");
socialIcon5.appendChild(socialIconLink5);
socialIconsList.appendChild(socialIcon5);

let socialIcon6 = document.createElement('li');
socialIcon6.classList.add("social-icon");
let socialIconLink6 = document.createElement('a');
socialIconLink6.href="mailto:mahirlabibdihan@gmail.com";
socialIconLink6.classList.add("fa");
socialIconLink6.classList.add("fa-envelope");
socialIcon6.appendChild(socialIconLink6);
socialIconsList.appendChild(socialIcon6);

let copyright = document.createElement('h4');
copyright.classList.add("copyright");
copyright.appendChild(document.createTextNode('© Mahir Labib Dihan All rights reserved'));

footer.appendChild(socialIconsList);
footer.appendChild(copyright);
