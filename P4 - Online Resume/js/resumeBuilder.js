var bio = {
    "name": "John Doe",
    "role": "Web Developer",
    "contacts": {
        "mobile": "650-555-5555",
        "email": "john@example.com",
        "github": "johndoe",
        "twitter": "@johndoe",
        "location": "San Francisco"
    },
    "welcomeMessage": "Hello There !!",
    "skills": [
        "Awsomeness", "delivering things", "cyrogenic sleep", "saving the universe"
    ],
    "biopic": "images/fry.jpg"
};

bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $('#topContacts').append(formattedMobile);
    $('#topContacts').append(formattedEmail);
    $('#topContacts').append(formattedGithub);
    $('#topContacts').append(formattedTwitter);
    $('#topContacts').append(formattedLocation);
    $('#header').append(formattedPic);
    $('#header').append(formattedMsg);
    $('#header').append(HTMLskillsStart);
    $('#footerContacts').append(formattedMobile);
    $('#footerContacts').append(formattedEmail);
    $('#footerContacts').append(formattedGithub);
    $('#footerContacts').append(formattedTwitter);
    $('#footerContacts').append(formattedLocation);

    for (index = 0; index < bio.skills.length; index++) {
        var formatedskill = HTMLskills.replace("%data%", bio.skills[index]);
        $('#skills').append(formatedskill);
    }
};

//----------------------------------------------------------------------------

var education = {
    "schools": [{
            "name": "Eckard college",
            "location": "Colarado",
            "degree": "B.A.",
            "majors": ["CS"],
            "dates": "2003",
            "url": "http://example.com"
        },
        {
            "name": "Nova University",
            "location": "Florida",
            "degree": "B.Tech.",
            "majors": ["CS"],
            "dates": "2013",
            "url": "http://example.com"
        }
    ],
    "onlineCourses": [{
        "title": "JavaScript Crash Course",
        "school": "Udacity",
        "dates": "2014",
        "url": "http://www.udacity.com/course"
    }]
};

education.display = function() {
    for (obj = 0; obj < education.schools.length; obj++) {
        var school = education.schools[obj];
        var formattedname = HTMLschoolName.replace("%data%", school.name);
        var formatteddegree = HTMLschoolDegree.replace("%data%", school.degree);
        var formatteddates = HTMLschoolDates.replace("%data%", school.dates);
        var formattedlocation = HTMLschoolLocation.replace("%data%", school.location);
        var formattedmajors = HTMLschoolMajor.replace("%data%", school.majors);

        $('#education').append(HTMLschoolStart);
        $('.education-entry:last').append(formattedname + formatteddegree);
        $('.education-entry:last').append(formattedlocation);
        $('.education-entry:last').append(formatteddates);
        $('.education-entry:last').append(formattedmajors);
        $('.education-entry:last').children('a').attr("href", school.url);
    }

    for (index = 0; index < education.onlineCourses.length; index++) {
        var onlineCourse = education.onlineCourses[index];
        var formattedtitle = HTMLonlineTitle.replace("%data%", onlineCourse.title);
        var formattedschool = HTMLonlineSchool.replace("%data%", onlineCourse.school);
        var formatteddate = HTMLonlineDates.replace("%data%", onlineCourse.dates);
        var formattedHTMLonlineURL = HTMLonlineURL.replace("%data%", onlineCourse.url);

        $('#education').append(HTMLschoolStart);
        $('.education-entry:last').append(formattedtitle + formattedschool);
        $('.education-entry:last').append(formatteddate);
        $(".education-entry:last").append(formatteddate, formattedHTMLonlineURL);
    }
};

//----------------------------------------------------------------------------

var work = {
    "jobs": [{
            "employer": "Planet Express",
            "title": "Delivery Boy",
            "dates": "January 2500 - Future",
            "location": "Manhattan",
            "description": "Who moved my cheesy cheese feet cauliflower cheese. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Vivamus ut turpisNunc a enim non urna tincidunt tempor. Integer sit amet turpis. Quisque placerat cursus sapien. Cras semper tempus enim. Nulla at massa. Cras ut augue sed ligula fringilla porttitor. Phasellus ipsum diam, egestas at, consequat non, eleifend vel, est. Sed at arcu ut quam lobortis venenatis. Suspendisse feugiat sapien id magna. Donec wisi. Sed tristique. Duis orci libero, fermentum at, tincidunt a, porta ut, ipsum. Nullam nunc, Mauris ac tellus vel lectus vestibulum facilisis."
        },
        {
            "employer": "Panucci's Pizza",
            "title": "Delivery Boy",
            "dates": "Jan 1998 - Dec 1999",
            "location": "Manhattan",
            "description": "Who moved my cheesy cheese feet cauliflower cheese. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Vivamus ut turpisNunc a enim non urna tincidunt tempor. Integer sit amet turpis. Quisque placerat cursus sapien. Cras semper tempus enim. Nulla at massa. Cras ut augue sed ligula fringilla porttitor. Phasellus ipsum diam, egestas at, consequat non, eleifend vel, est. Sed at arcu ut quam lobortis venenatis."
        }
    ]
};

work.display = function() {
    for (index = 0; index < work.jobs.length; index++) {
        var job = work.jobs[index];
        var formattedemployer = HTMLworkEmployer.replace("%data%", job.employer);
        var formattedtitle = HTMLworkTitle.replace("%data%", job.title);
        var formatteddates = HTMLworkDates.replace("%data%", job.dates);
        var formattedlocation = HTMLworkLocation.replace("%data%", job.location);
        var formatteddescription = HTMLworkDescription.replace("%data%", job.description);

        $('#workExperience').append(HTMLworkStart);
        $('.work-entry:last').append(formattedemployer + formattedtitle);
        $('.work-entry:last').append(formatteddates);
        $('.work-entry:last').append(formattedlocation);
        $('.work-entry:last').append(formatteddescription);
    }
};

//---------------------------------------------------------------------------

var projects = {
    "projects": [{
        "title": "Lights n Lenses",
        "dates": "2016",
        "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Vivamus ut turpisNunc a enim non urna tincidunt tempor. Integer sit amet turpis. Below are 2 photos:",
        "images": [
            "images/bokeh.jpg",
            "images/nature.jpg"
        ]
    }]
};

projects.display = function() {
    for (project = 0; project < projects.projects.length; project++) {
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);
        /*the following line displays images*/
        projects.projects[project].images.forEach(function(image) {
            var formattedHTMLprojectImage = HTMLprojectImage.replace("%data%", image);
            $(".project-entry").append(formattedHTMLprojectImage);
        });
    }
};

//--------------------------------------------------------------------------


function inName(name) {
    name = name.trim().split(" "); //trims off the white spaces and splits first name and last name, returns an array of 2 members
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
    return name[0] + " " + name[1];
}

$('#main').append(internationalizeButton);

bio.display();
education.display();
work.display();
projects.display();

$("#mapDiv").append(googleMap);
