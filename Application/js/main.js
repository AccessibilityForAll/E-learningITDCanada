
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

	var triggerSlideContainer = $(".item-list-description li a");

	var itemSlideContainer = $(".container-list");

	triggerMenuDetailsCourse.on('click',function(){
		event.preventDefault();
		containerMenuDetails.find( "li" ).removeClass("active");
		$(this).addClass("active");
	})

	triggerSlideContainer.on('click',function(){
		event.preventDefault();
		var atrDataItem = $(this).attr("data-name-item");

		///////////////////////////////////////

		switch(atrDataItem) {
		    case "overview":
		        itemSlideContainer.find( "li" ).removeClass("displayBlock");
				$(".container-list .Overview-item").addClass("displayBlock");
		        break;
		    case "courseOutline":
		         itemSlideContainer.find( "li" ).removeClass("displayBlock");
				$(".container-list .course_outline").addClass("displayBlock");
		        break;
		    case "curricularGrade":
		         itemSlideContainer.find( "li" ).removeClass("displayBlock");
				$(".container-list .CurricularGrade").addClass("displayBlock");
		        break;
		    case "personalInformation":
		         itemSlideContainer.find( "li" ).removeClass("displayBlock");
				$(".container-list .personalInformations").addClass("displayBlock");
		        break;
		}
	})

});