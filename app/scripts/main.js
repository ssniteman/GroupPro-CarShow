
$( ".reg-tabs" ).click(function() {
  $(".reg-form").toggle();
});

$("#submit-btn").click(function(){
	 $(".reg-form").toggle();
})




$('.reg-tabs').mouseenter(function(){
	$(this).addClass('newcolor');
});

$('.reg-tabs').mouseleave(function(){
	$(this).removeClass('newcolor');
});



$ ("#submit-btn").click(function() {
	var nameValue = $('input[name=Name]').val();
	var phoneNumber = $('input[name=Phone]').val();
	var emailValue = $('input[name=Email]').val();
	var cityValue = $('input[name=City]').val();
	var stateValue = $('input[name=State]').val();
	var zipValue = $('input[name=Zip]').val();
	var yearValue = $('input[name=Year]').val();
	var makeValue = $('input[name=Make]').val();
	var modelValue = $('input[name=Model]').val();
	var CarImage = $('input[name=Image]').val();

	if (yearValue > 1969){
      alert('Please note, The Junkyard Auto Show only allows vehicle models prior to 1970 to be exhibited. Try again in 20 years.');
      $('.reg-form').trigger("reset");
      return false;
    }
    else
    {

	var registrant = new Registrant(nameValue, phoneNumber, emailValue, cityValue, stateValue, zipValue, yearValue, makeValue, modelValue, CarImage);

	var RegistrantTemplate = _.template ($('.RegistrantTemplate').text());


	$('.registered-users').append(RegistrantTemplate({data: registrant}))

	$('.reg-form').trigger("reset");
    }	
	})




function Registrant (name, phone, email, city, state, zip, year, make, model, image) {
	this.name = name;
	this.phone = phone;
	this.email = email;
	this.city = city;
	this.state = state;
	this.year = year;
	this.make = make;
	this.model = model;
	this.image = image;
}




 // Thank you
