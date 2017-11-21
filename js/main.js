(function($) {
  var c4 = $('.canvas-circle');
  c4.circleProgress({
    startAngle: -Math.PI / 2 * 1,
    value: 0.9,
    size: 50,
    lineCap: 'round',
    fill: {color: '#999'}
  });
  // Let's emulate dynamic value update
  setTimeout(function() { c4.circleProgress('value', 0.7); }, 1000);
  setTimeout(function() { c4.circleProgress('value', 1.0); }, 1100);
  setTimeout(function() { c4.circleProgress('value', 0.8); }, 2100);
})(jQuery);
$(document).ready(function () {
    $('li .toggle-list').on('click', function(event){
        event.preventDefault();
        var elementLi = $(this).closest('li');
        elementLi.toggleClass('active');
        if(elementLi.hasClass('active')){
          showDropMenu (elementLi);
        } else {
          hideDropMenu (elementLi);
        }
    });
    $('.custom-overlay').on('click', function (){
      var elementLi = $(this).closest('li');
      elementLi.removeClass('active');
      hideDropMenu (elementLi);
    });
    searchFocus();
});
function showDropMenu (element){
    $('.dropdown-holder').addClass('menu-active');
    element.siblings('.custom-overlay').show()
}
function hideDropMenu (element){
  $('.dropdown-holder').removeClass('menu-active');
  element.siblings('.custom-overlay').hide()
}
function searchFocus () {
  $('#mainSearch').on('focus', function(){
    $(this).closest('.box').addClass('input-focus');
  });
  $('#mainSearch').on('blur', function(){
    $(this).closest('.box').removeClass('input-focus');
  });
}