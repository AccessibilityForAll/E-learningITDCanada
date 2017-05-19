
$( document ).ready(function() {

    //Function main Menu

    var triggerMenu = $(".triggerMenuFunction");
    var menu = $("#mainMenu .section");
    var arrowDown = $(".sprite-icon-menu-down");
    var arrowUp = $(".sprite-icon-menu-up");
    var focusoutMenu = $(".subMenu-profile li:last-child a");

    triggerMenu.on('click',function(){
    	menu.toggleClass("marginTop0")
    	setTimeout(function(){ 
    		arrowDown.toggleClass("hidden-arrow");
    		arrowUp.toggleClass("displayNone")
    	}, 1000);
    })

    //Trigger event with focus
    /*triggerMenu.on('focus',function(){
    	menu.addClass("marginTop0")
    	setTimeout(function(){ 
    		arrowDown.toggleClass("hidden-arrow");
    		arrowUp.toggleClass("displayNone")
    	}, 1000);	
    })*/

    //Function Profile menu

    var triggerMenuProfile = $(".triggerProfileMenu");
    var menuProfile = $(".subMenu-profile");

    triggerMenuProfile.on('click',function(){
    	menuProfile.toggleClass("displayBlock")
    })

    // Trigger event with focus
    /*triggerMenuProfile.on('focus',function(){
    	menuProfile.addClass("displayBlock")
    })

    // Trigger event with focus
    focusoutMenu.on('focusout',function(){
    	menuProfile.removeClass("displayBlock")
    })*/

	//Function page details Course menu

	var triggerMenuDetailsCourse = $(".item-list-description li");
	var containerMenuDetails = $(".item-list-description");

	triggerMenuDetailsCourse.on('click',function(){
		event.preventDefault();
		containerMenuDetails.find( "li" ).removeClass("active");
		$(this).addClass("active");
	})

});