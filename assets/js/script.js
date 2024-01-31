/* evento envío correo */
$(document).ready(function(){
    $("#enviarCorreo").click(function(){
        alert("El correo fue enviado correctamente")
    })
});

/* Cambio de color con dblclick */

$(document).ready(function(){
    $(".titulo-receta-1").dblclick(function(){
        $(this).css({
            "color": "red",
        })
    })
});

$(document).ready(function(){
    $(".titulo-receta-2").dblclick(function(){
        $(this).css({
            "color": "red",
        })
    })
});

$(document).ready(function(){
    $(".card-title").click(function(){ // al hacer clic en los titulos
        $(".card-text").toggle(); //desaparece el contenido
    });
});


/* TOOLTIP JS */
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

/* POP-OVER JS */
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
