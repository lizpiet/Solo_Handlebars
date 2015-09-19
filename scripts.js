$(function(){

	console.log("HandleBars");

	//grab template script
	var theTemplateScript= $("#address-template").html();

	//compile th template
	var theTemplate = Handlebars.compile(theTemplateScript);

	//Define the data object
	var context ={
		"alter-ego": "Princess Slaya",
		"home-town": "Alderaan",
		"ewok-friends": "10,000,008",
		ewokFriends: [ 
      { firstName: 'Ben', lastName: 'Ewok' },
      { firstName: 'Brenna', lastName: 'Ewok' },
      { firstName: 'Evan', lastName: 'Ewok' }
    ],

    "carrie": "<button> Chewi's Buzzer </button>"

	};


	// Pass our data to the template
	var theCompiledHtml = theTemplate(context);

	//add the compiled html to the page
	$(".content-placeholder").html(theCompiledHtml);


$("carrie").on("click", function(){
    alert("The  was clicked.");
});

});

