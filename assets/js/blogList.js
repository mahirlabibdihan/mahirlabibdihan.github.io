const db = firebase.firestore();
db.settings({timeStampsInSnapshots: true});

const blogList = document.querySelector(".blogList");

//   document.getElementById("blog-add-button").addEventListener("click", addBlog);

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function updateList() {
    removeAllChildNodes(blogList);
    db.collection("c_blogs").get().then((snapshot) => {
        snapshot.docs.forEach(doc => {
            let a = document.createElement('a');
            a.href = "/blog/cprogramming/codes/" + doc.data().url;
            var link = document.createTextNode(doc.data().name);
            a.appendChild(link);
            blogList.appendChild(a);
        });
    });
}


function addBlog() {
    let Name = document.querySelector(".blog-name-input").value;
    let Url = document.querySelector(".blog-url-input").value;
    db.collection("c_blogs").doc(Name).set(
        {
            name: Name,
            url: Url
        }
    );
    let a = document.createElement('a');
    a.href = "/blog/cprogramming/codes/" + Url;
    var link = document.createTextNode(Name);
    a.appendChild(link);
    blogList.appendChild(a);
}

updateList();