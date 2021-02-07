const proyectos = document.querySelector('.proyecto').addEventListener('click', cargarJSON);
// const skillsSection = document.getElementById('skillSec').addEventListener('DOMContentLoaded', cargarSkills);

function cargarJSON() {
    fetch('proyectos.json')
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
            html += '<button id="btnX" class="btn btn-primary animate__animated animate__zoomIn animate__slower	3s">⇑</button><br>' //<img class="img-fluid rounded" src="../assets/img/right-up-arrow.png"/>
            document.getElementById('resultado').innerHTML = html;
            const quitar = document.getElementById('btnX').addEventListener('click', quitarProyectos);

            function quitarProyectos() {
                document.getElementById('resultado').innerHTML = '';                
            }
        })
        .catch(error => console.log(error))
}
//Muestra el nombre del skill al pasarle por encima con el mouse
// function cargarSkills() {
//     fetch('skills.json')
//         .then(res => res.json())
//         .then(data => {
//             let html = '';
//             data.forEach(skill => {
//                 console.log(skill.name)
//                 html += `
//                     <p>${skill.name}</p>
//                     <img class="img-fluid rounded mb-5 html" src=${skill.img}" alt="html">
//                 `
//             })
//             document.querySelector('skillSec').innerHTML = html;
//         })
//         .catch(error => console.log(error))
// }