
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



/***************************************** Vue.js****************************************************/

/*Header*/
var vueHeader = new Vue({
  el: '#header',
  data: {

    //Up-Menu
    Community: 'Community',
    mySite: 'My Site',
    events: 'Events',
    notifications: 'Notifications',
    messages: 'Messagens',
    nameUser: 'Raphael',

    //user sub-menu
    myProfile: 'My Profile',
    myHistory: 'My History',
    myBookings: 'My Bookings',
    settings: 'Settings',
    logout: 'Logout',
    triggerMenu: 'Main Menu',

    //Main-menu
    item_menu1: 'My Course',
    item_menu2: 'Mentoring',
    item_menu3: 'My Progress',
    item_menu4: 'Forum',
    item_menu5: 'Library',

  }
})

/*Banner*/
var vueBanner = new Vue({
    el: '#timeline',

    data: {
        currentTerm: 'Term3 - IGP 220 Visual Basic.NET',
        Assignments: [
            {
                name: 'Windows Calculator',
                date: '5/15/2017'
            },
            {
                name: 'Airline Reservation',
                date: '5/20/2017'
            },
            {
                name: 'Classes Objects',
                date: '5/30/2017'
            },
            {
                name: 'Database Manipulation',
                date: '6/5/2017'
            },
            {
                name: 'Delete Record',
                date: '6/15/2017'
            },
            {
                name: 'Midterm Exam',
                date: '6/20/2017'
            },
            {
                name: 'Final Exam',
                date: '6/30/2017'
            },
        ],

        btnAccess: 'Access the course',

    }

})

/*BreadCrumbs*/
var vueBreadCrumbs = new Vue({
    el: '#breadCrumbs',
    data: {
       nextClass: 'Your next class start in:',
       nextClassTime: '23 min', 
    }
})


/*Description Term*/
var vueBreadCrumbs = new Vue({
    el: '#descriptionTerm',
    data: {
       courseString: 'Course:',
        courseDataName: 'Graphic And Web Development Diploma with Co-op',
        timeOfCourse: ' 960 hours',
        termString: 'Term:', 
        currentTerm: '3',
        endTermString: 'End Term 3:',
        endDateTerm: '6/30/2017',
    }
})

/*Available Courses*/
var vueBreadCrumbs = new Vue({
    el: '#availableCourses',
    data: {
        titleCourses: 'Available Courses of Term 3',
        moreDetailsString: 'More details',
        titleCourseData1: 'IGP210 Visual Basic.NET',
        descriptionCourseData1: 'In this course students learn how to create desktop applications using a rapid development tool - Visual Basic.Net. They will also be introduced to Object Oriented Programming.',
        btnStringButtonCourse: 'Access the course',
        availableCourseString: 'This course will be available in',
        availableCourseDate1: '7/02/2017',

    } 
})

/* Stage Foruns and Mentoring */

var vueMentoringForuns = new Vue({
    el: '#MentoringForuns',
    data: {
        titleMentoringString: 'Mentoring',
        nextClassString: 'Next Mentoring class',
        nextClassDescriptionString: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat libero id massa dictum, ac auctor turpis tristique dictum, ac auctor turpis tristique.',
        titleBookPublicString: 'Book a private Mentoring class',
        moreDetailsString: 'More details',
        currentTopicString: 'Today topic: HMTL5',
        nextClassStartString: 'Next class will start in 7 minutes.',
        descriptionMentoring: 'HTML5 has been designed to simplify many of the processes and techniques used in HTML 4, and to add significant new functionality, simply, across a, wide variety of devices.',
        titleBookPrivateString: 'Book now, study tomorrow',
        RemainingPrivateClassString: 'Remaining private classes: ',
        RemainingPrivateClassDataNumber: '23',
        descriptionPrivateClass: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat libero id massa dictum, ac auctor turpis tristique dictum, ac auctor turpis tristique.',
        textBtnPrivateClass: 'Book your private class',
    }
})

/* Footer */

var vueFooter = new Vue({
    el: '#footer',

    data: {
        menuFooter1:[
            {item: '<a href="#" title="My Course">My Course</a>'},
            {item: '<a href="#" title="Mentoring">Mentoring</a>'},
            {item: '<a href="#" title="My Progress">My Progress</a>'},
            {item: '<a href="#" title="Forum">Forum</a>'},
            {item: '<a href="#" title="Library">Library</a>'},
        ],

        menuFooter2:[
            {item: '<a href="#" title="My Course">My Profile</a>'},
            {item: '<a href="#" title="Mentoring">My History</a>'},
            {item: '<a href="#" title="My Progress">My Bookings</a>'},
            {item: '<a href="#" title="Forum">Settings</a>'},
            {item: '<a href="#" title="Library">Logout</a>'},
        ],
    }
})



/* DetailsCourse Page */

var vueDetail = new Vue({
  el: '#detais-course',
  
  data: {

    //Table Curriculum Course
    tableCurriculum: [
        {item: '<td class="fontBold colorGray">Course Breakdown</td><td class="fontBold colorGray">Topics to be covered</td>'},
        {item: '<td class="fontBold colorGray">Day 1</td><td class="fontBold colorGray ">'+
        '<span class="marginTop10px fontBold">Lecture: Introduction to Classic ASP</span>'+
        '<ul class="list-unstyled">'+
            '<li>•  Introduction to Classic ASP.</li>'+
        '</ul>'+
        '</td>'},
    ]

  }  
})
