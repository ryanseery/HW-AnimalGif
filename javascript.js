	var animals = ['Falcon', 'Polar Bear', 'Monkey', 'Turtle'];
	function displayAnimalGif(){
	var animal = $(this).attr('data-name');
	var queryURL = "http://www.api.giphy/v1/gifs/random?api_key=dc6zaTOxFJmzC" + animal + "&q=animals";
	$.ajax({url: queryURL, method: 'GET'}).done(function(response) {
		$("#animalsView").html(JSON.stringify(response));
		});
	}
	function createImg(giphy){ 
		$('#animalsView').empty();

		for (var i = 0; i < animals.length; i++){
		    var a = $('<img>') 
		    a.addClass('animal'); 
		    a.attr('data-name', animals[i]); 
		    a.text(animals[i]); 
		    $('#animalsView').append(a); 
		}
	}
	$('#addAnimal').on('click', function(){
		var animal = $('#animal-input').val().trim();
		animals.push(animal);
		createImg();
		return false;
	})
	$(document).on('click', '.animal', displayAnimalGif);
	createImg();