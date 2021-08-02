function desplazarMe(titulo) {
    $('html, body').animate({
       scrollTop: $('#' + titulo).offset().top
    }, 1000)
 }
  
 $('#flechaArriba').click(function() {
    desplazarMe("home")
 })

 

 $('#link2').click(function() {
    desplazarMe("tienda")
 })

