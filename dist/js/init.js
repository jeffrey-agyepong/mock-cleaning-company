(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space


/*$('.hover').mouseover(function(){
  $('.caption').css('visibility','visible');
  $('.image_holder').css('opacity','0.6');
});

$('.hover').mouseout(function(){
  $('.caption').css('visibility','hidden');
  $('.image_holder').css('opacity','1');
});
*/
//Carousel
function showhide()
{
  var div = document.getElementById("post");
  div.classList.toggle('hidden');
}
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.carousel');
  var instances = M.Carousel.init(elems, options);
});

// Or with jQuery

// Material Box
$(document).ready(function(){
  $('.carousel').carousel();
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.materialboxed');
  var instances = M.Materialbox.init(elems, options);
});

// Or with jQuery

$(document).ready(function(){
  $('.materialboxed').materialbox();
});
    