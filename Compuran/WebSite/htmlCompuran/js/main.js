
$( document ).ready(function() {
    //function sub-menu

    var triggerMenu = $(".triggermenu");
    var containerSubMenu = $(".containerSubMenu")

    //Add class when user put the mouse over triggerMenu
    triggerMenu.on('mouseover',function(){
        containerSubMenu.addClass("marginTop0")
    })

   
     containerSubMenu.on('mouseleave',function(){
        setTimeout(function(){
         containerSubMenu.removeClass("marginTop0")
     }, 3000);  
    })
});