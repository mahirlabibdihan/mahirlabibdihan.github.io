function getThumbnail(name,url,img_src){
    return  '<div class="grid-item">\n' +
            '        <a href='+url+'>\n' +
            '            <img class="grid-item-image" src='+img_src+' alt='+name+'>\n' +
            '        </a>\n' +
            '        <label class="grid-item-name">'+name+'</label>\n' +
            '    </div>';
}

function getTable(title){
    let project = document.createElement('div');
    project.classList.add('project-item');
    project.innerHTML+='<label class="grid-title">'+title+'</label>';

    let table = document.createElement('div');
    table.classList.add('grid-container');
    db.collection('work').doc('table').collection(title).get().then((snapshot) => {
        snapshot.docs.forEach(doc => {
            table.innerHTML+=getThumbnail(doc.data().name,doc.data().url,doc.data().img_src);
        });

        const loader = document.querySelector(".loader");
        loader.className += " hidden";
    });
    // table.innerHTML+=getThumbnail('DxBall','https://youtu.be/qF9f0LpCEx8','/assets/images/Dxball.jpg','dxball');


    project.appendChild(table);
    return project;
}

function main(){
    const projects = document.querySelector(".project-container");
    projects.appendChild(getTable('GAMES'));
    projects.appendChild(getTable('APPS'));
    projects.appendChild(getTable('WEBSITES'));
    projects.appendChild(getTable('VISUALIZER'));
    projects.appendChild(getTable('CODES'));

}

main();