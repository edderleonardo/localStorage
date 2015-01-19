/**
 * Created by archi on 17/01/15.
 */

//if ('localStorage' in window && window['localStorage'] !== null) {
//    alert('Genial, tenemos un navegador decente que soporta LocalStorage');
//    var storage = localStorage
//} else {
//    alert('Como seguimos utilizando un navegador viejo, Santa Claus no nos traerá nada esta Navidad'); }

$(document).ready(function (){
    $('#limpiar').click(function (){
        localStorage.removeItem('listado');
    })

    $('#lista').blur(function (){
        localStorage.setItem('listado', $('#lista').html())
    })
    if(localStorage.getItem('listado')){
        $("#mensaje").text("Desde el LocalStorage");
        $('#lista').html(localStorage.getItem('listado'));
    } else {
        $('#mensaje').text("Sin datos en el LocalStorage");
    }
})