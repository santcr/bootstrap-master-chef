
// para inicializar tooltips y popovers
$(document).ready(function(){
    $("#tooltip1").tooltip();
    $("#tooltip2").tooltip();
    $("#popover1").popover();
    $("#popover2").popover();
});

// para que el menu amburguesa se cierre despues de hacerle click a un link
$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') && $(e.target).attr('class') !== 'dropdown-toggle' ) {
        $(this).collapse('hide');
    }
});
