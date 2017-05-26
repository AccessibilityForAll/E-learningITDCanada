
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

     //function sub-menu-mobile

     var triggerMenuMobile = $(".triggerMenuMobile");
     var containerMenuMobile = $("#sub-menu-mobile .section");

     triggerMenuMobile.on('click',function(){
        containerMenuMobile.toggleClass("marginTop0");
     })

     //Sub-menu-mobile
     var triggerSubMenuMobile = $(".subMenuMobileTrigger");
     var containerSubMenuMobile = $(".overflow-mobile ul");
     var marginItem = $(".marginItem");

     triggerSubMenuMobile.on("click",function(){
        containerSubMenuMobile.toggleClass("marginTop0");
        marginItem.toggleClass("marginTopNeg10px");
     });
});