const proyectos = document.querySelector('.proyecto').addEventListener('click', cargarJSON);

function cargarJSON() {
    fetch('../proyectos.json')
        .then(res => res.json())
        .then(data => {
            let html = '';
            data.forEach(proyecto => {
                html += `
                        <br>
                        <li class="animate__animated animate__zoomIn animate__slower	3s">
                            <a href="${proyecto.link}" target="_blank">${proyecto.nombre}</a><br>
                            <p>${proyecto.desc}</p>
                        </li>
                        `
            })
            html += '<button id="btnX" class="btn btn-primary animate__animated animate__zoomIn animate__slower	3s"><i class="fas fa-backward"></i></button><br>' //<img class="img-fluid rounded" src="../assets/img/right-up-arrow.png"/>
            document.getElementById('resultado').innerHTML = html;
            const quitar = document.getElementById('btnX').addEventListener('click', quitarProyectos);

            function quitarProyectos() {
                document.getElementById('resultado').innerHTML = '';                
            }
        })
        .catch(error => console.log(error))
}

function cargarSkills() {
    fetch('../skills.json')
        .then(res => res.json())
        .then(data => {
            let html = '';
            data.forEach(skill => {                         
                html += `                
                    <a>${skill.name}</a>
                `
            })
            document.getElementById('result').innerHTML = html;
        })
        .catch(error => console.log(error))
}

// cargarSkills();