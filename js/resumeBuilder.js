 var bio = {
	name : "Heron Chavez",
	role : "Web Developer",
    contacts : {
    	mobile: "909-203-9043",
		email: "heroncchavez@gmail.com",
        linkedIn: "linkedin.com/in/heronchavez",
        location: "Ontario, CA"
    },
    welcomeMessage: "Hello, World!", 
	skills: ["HTML", "CSS", "JavaScript"],
    biopic: "https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAcwAAAAJDgzYzQ4ZTRlLTNjOWYtNDg2Ny04NjAzLWI3NTIzYjNlZWQ1YQ.jpg",
    display: function (){

    	var formattedheaderName = HTMLheaderName.replace("%data%", this.name);
    	var formattedheaderRole = HTMLheaderRole.replace("%data%", this.role);
    	var formattedHTMLmobile = HTMLmobile.replace("%data%", this.contacts.mobile);
    	var formattedHTMLemail = HTMLemail.replace("%data%", this.contacts.email);
        var formattedHTMLlinkedIn = HTMLlinkedIn.replace("%data%", this.contacts.linkedIn);
        var formattedHTMLlocation = HTMLlocation.replace("%data%", this.contacts.location);
    	var formattedHTMLbioPic = HTMLbioPic.replace("%data%", this.biopic);
    	var formattedHTMLwelcomeMsg = HTMLwelcomeMsg.replace("%data%", this.welcomeMessage);

		$('#header').prepend(formattedheaderRole);
    	$('#header').prepend(formattedheaderName);
    	$('#topContacts').append(formattedHTMLmobile);
    	$('#topContacts').append(formattedHTMLemail);
        $('#topContacts').append(formattedHTMLlinkedIn);
    	$('#topContacts').append(formattedHTMLlocation);

    	$('#header').append(formattedHTMLbioPic);
    	$('#header').append(formattedHTMLwelcomeMsg);
    	$('#header').append(HTMLskillsStart);

    	$('#footerContacts').append(formattedHTMLmobile);
    	$('#footerContacts').append(formattedHTMLemail);
        $('#footerContacts').append(formattedHTMLlinkedIn);
    	$('#footerContacts').append(formattedHTMLlocation);


    	this.skills.forEach( function(skill) {
    		var formattedHTMLskills = HTMLskills.replace("%data%", skill);
    		$('#skills').append(formattedHTMLskills);
    	});

    }
};

var education = {
	schools: [
                {
                 	name: "California State Polytechnic University",
	                location: "Pomona, CA",
	                degree: "BS",
	                major: "Computer Information Systems",
	                dates: "2016",
	                url: ""
             	}
	],
	onlineCourses: [
					{
	                	title: "",
		                school: "",
		                dates: "",
		                url: ""
             		}
    ],
    display: function (){
    	

    	this.schools.forEach( function(school) {
    		var formattedHTMLschoolName = HTMLschoolName.replace("%data%", school.name);
    		var formattedHTMLschoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
	    	var formattedHTMLonlineDates = HTMLonlineDates.replace("%data%", school.dates);
	    	var formattedHTMLonlineURL = HTMLonlineURL.replace("%data%", school.url);
	    	var formattedHTMLschoolLocation = HTMLschoolLocation.replace("%data%", school.location);
	    	var formattedHTMLschoolMajor = HTMLschoolMajor.replace("%data%", school.major);
	    	

	    	$('#education').append(HTMLschoolStart);
	    	$('.education-entry').append(formattedHTMLschoolName + formattedHTMLschoolDegree);
	    	$('.education-entry').append(formattedHTMLonlineDates);
	    	$('.education-entry').append(formattedHTMLschoolLocation);
	    	$('.education-entry').append(formattedHTMLschoolMajor);
	    	$('.education-entry').append(formattedHTMLonlineURL);
	    	

    	});
    }
};

var work = {
	jobs: [	            
			{
				employer: "Eluka, Inc",
				title: "Web Developer Intern" ,
				location: "Pomona, CA" ,
				dates: "October 2014 - June 2015",
				description: "Participated in technical requirements, design, develop, testing, and implementation of application. Built a dynamic web application for viewing orders of manufacturer parts; infrastructure for internal use. Developed application in C#, ASP.NET, Web Services, JQuery, AJAX, SQL. "
			}
	],
    display: function (){

    	

    	$('#workExperience').append(HTMLworkStart);

    	this.jobs.forEach( function(job) {
    		var formattedHTMLworkEmployer = HTMLworkEmployer.replace('%data%', job.employer);	
    		var formattedHTMLworkTitle = HTMLworkTitle.replace('%data%', job.title);
    		var formattedHTMLworkDates = HTMLworkDates.replace('%data%', job.dates);
    		var formattedHTMLworkLocation = HTMLworkLocation.replace('%data%', job.location);
    		var formattedHTMLworkDescription = HTMLworkDescription.replace('%data%', job.description);

    		$('.work-entry').append(formattedHTMLworkEmployer + formattedHTMLworkTitle); $('.work-entry').append(formattedHTMLworkDates); $('.work-entry').append(formattedHTMLworkLocation); $('.work-entry').append(formattedHTMLworkDescription);

    	});
    	
    }
};

var projects = {
	projects: [    
                {
                    title: "Everbridge at Mission Hospital",
                    dates: "Spring 2016",
                    description: "Collaborated with a team of six to deploy to a new mass emergency notification system. Participated in daily scrums to go over and resolve issues. Conducted department interviews to gather requirements. Deployed system for 5 departments at Mission Hospital campuses successfully in short period of time.",
                    images: "images/everbridge.jpg"
                },
    			{
					title: "Alumni Networking Application",
					dates: "Winter 2016",
					description: "Collaborated with a group member to design, develop, test a social networking application. Functionalities built were account creation, friends list, search, and administration. Implemented MVC design pattern using Servlets, Java Beans and JSP.   ",
					images: "images/alumniNetwork.jpg"
				},
                {
                    title: "Biclycle E-commerce Application",
                    dates: "Winter 2016",
                    description: "Built E-commerce application with product catalog, shopping cart, checkout pages. Developed application in ASP.NET, C#, MSSQL, HTML, CSS. Built E-commerce application with product catalog, shopping cart, checkout pages. Developed application in ASP.NET, C#, MSSQL, HTML, CSS.",
                    images: "images/bikeStore.jpg"    
                }
    ],
	display: function (){

		$('#projects').append(HTMLprojectStart);

		this.projects.forEach( function(project) {

			var formattedHTMLprojectTitle = HTMLprojectTitle.replace('%data%', project.title);
			var formattedHTMLprojectDates = HTMLprojectDates.replace('%data%', project.dates);
			var formattedHTMLprojectDescription = HTMLprojectDescription.replace('%data%', project.description);
			var formattedHTMLprojectImage = HTMLprojectImage.replace('%data%', project.images);

			$('.project-entry').append(formattedHTMLprojectTitle);
			$('.project-entry').append(formattedHTMLprojectDates);
			$('.project-entry').append(formattedHTMLprojectDescription);
			$('.project-entry').append(formattedHTMLprojectImage);

		});
	}
};

bio.display();
education.display();
projects.display();
work.display();

