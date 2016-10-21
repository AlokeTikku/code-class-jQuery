$(document).ready(function(){

  $('.button').click(function(){

    // when i click the button, i will test each circle in order
    //to see what class they have
    //if it has class big-green, i will remove the class bog green and add the class small-red
    //otherwise, iwiill remove the class small red and add the class big green

    $('.circle').each(function(){

      if ( $(this).hasClass('big-green') ){
        $(this).removeClass ('big-green').addClass('small-red');
      } else {
        $(this).removeClass('small-red').addClass('big-green');
}
      });

    });

});
