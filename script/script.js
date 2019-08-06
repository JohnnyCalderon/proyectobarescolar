$(document).ready(function() {
 
var ruta="../"
var imagenes=[]
var tagImagenes=[]

$.getJSON("json/archivo.json", function(data){
console.log(data)
  $.each(data, function(key, val){
    var img= document.createElement("img")
    // console.log(key)
    // console.log(val)

   img.src=val.rutaImg;
   img.className= 'alimentos'
   img.id=val.id
   puntos=parseInt(val.puntos, 10);
    let newElement ={
      id:val.id,
      puntos:puntos,
      rutaImg:val.rutaImg,
      name:val.name,
      sonido:val.sonido,
      categoria:val.categoria
    }

    imagenes.push(newElement)
    tagImagenes.push(img)
    
    console.log(tagImagenes)
  });
  console.log(tagImagenes.length)
  for (let i=0;i<tagImagenes.length;i++){
    if(imagenes[i].categoria=="reguladores"){
      console.log("reg")
    tagImagenes[i].className+=' reguladores'
      $("#reguladores").append(tagImagenes[i])
    }else if(imagenes[i].categoria=="dañinos"){
      console.log("da")
      tagImagenes[i].className+=' dañinos'
      $("#dañinos").append(tagImagenes[i])
    }else if(imagenes[i].categoria=="energeticos"){
      console.log("en")
      tagImagenes[i].className+=' energeticos'
      $("#energeticos").append(tagImagenes[i])
    }else if(imagenes[i].categoria=="contructores"){
      console.log("con")
      tagImagenes[i].className+=' contructores'

      $("#contructores").append(tagImagenes[i])
    }
    console.log("imganes")
    console.log(tagImagenes[i])
   
  }
  for (let i=0;i<imagenes.length;i++){
    if (imagenes[i].categoria=="dañinos") {
      $('.dañinos').removeClass('alimentos').addClass('ADañados');
  
    }
  }
  

var puntajeJuego = 0 ; 
var contadorLonchera=0
var audioElement = document.createElement('audio');

var audiohamburguesa = document.createElement('audio');
audiohamburguesa.setAttribute('src', 'audio/hamburguesa.mp3');        

var audioPizza = document.createElement('audio');
audioPizza.setAttribute('src', 'audio/pizza.mp3');    

var audioCocacola = document.createElement('audio');
audioCocacola.setAttribute('src', 'audio/cocacola.mp3'); 

var audioLeche = document.createElement('audio');
audioLeche.setAttribute('src', 'audio/leche.mp3');

var audioYogurt = document.createElement('audio');
audioYogurt.setAttribute('src', 'audio/yogurt.mp3');

var audioPlatano = document.createElement('audio');
audioPlatano.setAttribute('src', 'audio/platano.mp3');

var audioPanIntegral = document.createElement('audio');
audioPanIntegral.setAttribute('src', 'audio/panIntegral.mp3');

var audioZanahoria = document.createElement('audio');
audioZanahoria.setAttribute('src', 'audio/zanahoria.mp3');

var audioTomate = document.createElement('audio');
audioTomate.setAttribute('src', 'audio/tomate.mp3');

var audioNnaranja = document.createElement('audio');
audioNnaranja.setAttribute('src', 'audio/naranja.mp3');


var bienHecho = document.createElement('audio');
bienHecho.setAttribute('src', 'audio/bienhecho.mp3');

var malo = document.createElement('audio');
malo.setAttribute('src', 'audio/malo.mp3');

var hazArmado = document.createElement('audio');
hazArmado.setAttribute('src', 'audio/hazarmado.mp3');

var ganaste = document.createElement('audio');
ganaste.setAttribute('src', 'audio/ganaste.mp3');




$("a.external").click(function() {
  url = $(this).attr("href");
  window.open(url, '_blank');
  return false;
});


$(".alimentos").draggable({ 
  helper: 'clone' ,
  drag: function(event, ui)
    { 
      console.log($ (this).attr('id'))
       imagenes.forEach(element=>{
        
        if($(this).attr('id')==element.id){
       
        if(element.sonido== "sonidoLeche") {
          audioLeche.play();
          return
        }
        if(element.sonido == "sonidoYogurt") {
          audioYogurt.play();
          return
        }
        if(element.sonido == "sonidoPlatano") {
          audioPlatano.play();
          return
        }
        if(element.sonido == "sonidoPan") {
          audioPanIntegral.play();
          return
        }
        if(element.sonido == "sonidoZanahoria") {
          audioZanahoria.play();
          return
        }
        if(element.sonido == "sonidoTomate") {
          audioTomate.play();
          return
        }
        if(element.sonido == "sonidoNaranaja") {
          audioNnaranja.play();
          return
        }
      }
       })

    }
});



   
$(".ADañados").draggable({ 
  helper: 'clone' ,  
  drag: function(event, ui)
    { 
      console.log($ (this).attr('id'))
       imagenes.forEach(element=>{
        
        if($(this).attr('id')==element.id){
        if(element.sonido == "sonidoHambur"){
        
          audiohamburguesa.play();
          return
        }
        if(element.sonido == "sonidoPizza") {
         
          audioPizza.play();
        }
        if(element.sonido== "sonidoCola") {
          audioCocacola.play();
          return
        }
      }
       })

    }
});


$("img").hover(function(){
  $(this).css({" -webkit-filter":" drop-shadow(2px 2px 0 black) drop-shadow(-2px -2px 0 white)",
               "filter": "drop-shadow(2px 2px 0 black) drop-shadow(-2px -2px 0 white)"});
  }, function(){
  $(this).css( {" -webkit-filter":" drop-shadow(0px 0px 0 black) drop-shadow(0px 0px 0 white)",
  "filter": "drop-shadow(0px 0px 0 black) drop-shadow(0px 0px 0 white)"});
});


$(".lonchCont").droppable({
  accept:  function( draggable ){
    if (!$(this).hasClass('alimentos') || draggable.hasClass('ADañados')){
        return true;
    }
    return false;
},
  hoverClass: 'hovering',
    drop: function( ev, ui ) {
      imagenes.forEach(element=> {
        if($(ui.draggable).attr('id')==element.id){
        console.log(element.puntos)
        console.log(puntajeJuego)
        ui.draggable.detach();   
         // console.log($ (ui.draggable).attr("class"))
         console.log("contadorLonchera")
          console.log(contadorLonchera)
          if(contadorLonchera<4){
            contadorLonchera++
            if ($ (ui.draggable).hasClass("reguladores")) {
              $( ".cont3" ).append( ui.draggable /*, audioElement.play()*/ ); 
              puntajeJuego += element.puntos;
              bienHecho.play();
              return
          }
          if ($ (ui.draggable).hasClass( "dañinos") ) {
           // window.alert("Cuidado. alimento dañinos");
            $("#dañinos").append(ui.draggable)
           
          
           
           malo.play();

            return 
          }
          if ($ (ui.draggable).hasClass("contructores")) {
            $( ".cont1" ).append( ui.draggable  );
            puntajeJuego +=  element.puntos;
            return
          }
          if ($ (ui.draggable).hasClass("energeticos")) {
            $( ".cont2" ).append( ui.draggable );
            puntajeJuego += element.puntos;
            return
          }
         
         
          }else{
            let contenedor=element.categoria;
            console.log(contenedor)
            $("#"+contenedor).append( ui.draggable )
            // window.alert("lonchera llena tu puntaje es " +puntajeJuego );
            $(".puntaje2").text(puntajeJuego.toString())
              window.location.href = "ganador.html";
              hazArmado.play();
              $(".puntaje2").text(puntajeJuego.toString())
          
          }
      
      }
      })
     $(".puntaje").text(puntajeJuego.toString())
    },
    
    out: function( event, ui ) {


      imagenes.forEach(element=> {
        if($(ui.draggable).attr('id')==element.id){

     if ($ (ui.draggable).hasClass("reguladores")) {
        $("#reguladores").append(ui.draggable)
        puntajeJuego -= element.puntos;
        $(".puntaje").text(puntajeJuego.toString())
        contadorLonchera--
        return
    }
    if ($ (ui.draggable).hasClass("contructores")) {
      $("#contructores").append(ui.draggable)
      puntajeJuego -= element.puntos;
      $(".puntaje").text(puntajeJuego.toString())
      contadorLonchera--
      return
    }
    if ($ (ui.draggable).hasClass("energeticos")) {
      $("#energeticos").append(ui.draggable)
      puntajeJuego -= element.puntos;
      $(".puntaje").text(puntajeJuego.toString())
      contadorLonchera--
      return
    }





        }
      })
     

    
    }  
});

});


 

});