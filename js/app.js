const proyectos = document.querySelector('.proyecto').addEventListener('click', cargarJSON);

function cargarJSON() {
    fetch('proyectos.json')
        .then(res => res.json())
        .then(data => {
            let html = '';
            data.forEach(proyecto => {
                html += `
                        <br><a href="${proyecto.link}" target="_blank">${proyecto.nombre}</a><br>
                        `
            })
            html += '<button id="btnX" class="btn btn-primary">⇑</button><br>' //<img class="img-fluid rounded" src="../assets/img/right-up-arrow.png"/>
            document.getElementById('resultado').innerHTML = html;
            const quitar = document.getElementById('btnX').addEventListener('click', quitarProyectos);

            function quitarProyectos() {
                document.getElementById('resultado').innerHTML = '';
                console.log('probando');
            }
        })
        .catch(error => console.log(error))
}
//Muestra el nombre del skill al pasarle por encima con el mouse
function showSkillName() {
    let skill = document.querySelector('.skill')
}