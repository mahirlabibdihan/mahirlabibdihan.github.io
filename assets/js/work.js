function getThumbnail(name,url,img_src){
    return  '<div class="column">\n' +
            '        <a href='+url+'>\n' +
            '            <img class="cell-image" src='+img_src+' alt='+name+'>\n' +
            '        </a>\n' +
            '        <label class="cell-name">'+name+'</label>\n' +
            '    </div>';
}

function getTable(title){
    let project = document.createElement('div');
    project.classList.add('project-container');
    project.innerHTML+='<label class="table-title">'+title+'</label>';

    let table = document.createElement('div');
    table.classList.add('table');
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
    const projects = document.querySelector(".projects-container");
    projects.appendChild(getTable('GAMES'));
    projects.appendChild(getTable('APPS'));
    projects.appendChild(getTable('VISUALIZER'));
    projects.appendChild(getTable('CODES'));
}

main();