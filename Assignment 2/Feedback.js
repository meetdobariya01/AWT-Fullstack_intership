$('button.submit').disabled = true;
function enable_submit() {
  $('button.submit').disabled = false;
  $('button.submit').addClass('not-disabled');
}


function disable_submit() {
  $('button.submit').disabled = true;
  $('button.submit').removeClass('not-disabled');
}


$('.rating').on('click', function() {
  var rating = this['value'];
  
  $('.feedback').css('display', "block");
  
  feedback_validate(rating);
  
});


$('.feedback textarea').keyup(function() {
  if ($('.feedback textarea').val().length > 3)   {
    enable_submit();
  }
});


function feedback_validate(val) {
  if (val <= 3) {
    disable_submit();
    
  } 
  else if (val > 3) {
    enable_submit();
  }
  
}
