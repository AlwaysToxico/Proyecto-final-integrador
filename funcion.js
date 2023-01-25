/** No puse mas funciones porque no se me ocurrieron muchas */

document.getElementById('boton-mostrar').addEventListener('click', function () {
    document.getElementById('imagen-perfil').style.display = 'block';
    document.getElementById('boton-ocultar').style.display = 'block'
    document.getElementById('boton-mostrar').style.display = 'none'
});

document.getElementById('boton-ocultar').addEventListener('click', function () {
    document.getElementById('imagen-perfil').style.display = 'none';
    document.getElementById('boton-mostrar').style.display = 'block'
    document.getElementById('boton-ocultar').style.display = 'none'
});


