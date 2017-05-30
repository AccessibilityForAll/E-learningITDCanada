
$( document ).ready(function() { 
    //function sub-menu
    var triggerMenu = $(".main-menu li:nth-child(3) a");
    var containerSubMenu = $(".containerSubMenu")
    triggerMenu.addClass("triggermenu");
    triggerMenu.append("<i class='material-icons'>keyboard_arrow_down</i>")

    //Add class when user put the mouse over triggerMenu
    triggerMenu.on('mouseover',function(){
        containerSubMenu.addClass("marginTop0") 
    })
   
     containerSubMenu.on('mouseleave',function(){
        setTimeout(function(){
         containerSubMenu.removeClass("marginTop0")
     }, 3000);  
    }) 

     //Sub-menu-mobile
     var triggerSubMenuMobile = $(".subMenuMobileTrigger");
     var containerSubMenuMobile = $(".overflow-mobile ul");
     var marginItem = $(".marginItem");

     triggerSubMenuMobile.on("click",function(){
        containerSubMenuMobile.toggleClass("marginTop0");
        marginItem.toggleClass("marginTopNeg10px");
     });

     //function sub-menu-mobile

     var triggerMenuMobile = $(".triggerMenuMobile");
     var containerMenuMobile = $("#sub-menu-mobile .section");

     triggerMenuMobile.on('click',function(){
        containerSubMenuMobile.removeClass("marginTop0");
        marginItem.addClass("marginTopNeg10px");
        containerMenuMobile.toggleClass("marginTop0");
     })
});