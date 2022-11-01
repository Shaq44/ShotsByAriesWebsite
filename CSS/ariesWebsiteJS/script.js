$('ul li').on('hover',  function(e){
    $('#background').removeClass().addClass($(this).attr('rel'));
    $(this).addClass('active').siblings().removeClass('active');
});