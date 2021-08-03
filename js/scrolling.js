function desplazarMe(titulo) {
    $('html, body').animate({
       scrollTop: $('#' + titulo).offset().top
    }, 1000)
 }
  
 $('#arrowUp').click(function() {
    desplazarMe("home")
 })

 $('#arrowDown').click(function() {
   desplazarMe("tienda")
})


 $('#link2').click(function() {
    desplazarMe("tienda")
 })

