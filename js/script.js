$(function () {
	var url = 'https://restcountries.eu/rest/v2/name/';
	var countriesList = $('#countries');
	// adding request to the search button
	$('#search').click(searchCountries);
	// adding search countries function with val() method - pobiera wartość wpisaną przez użytkownika i przypisuje ją do zmiennej
	function searchCountries() {
		var countryName = $('#country-name').val();
		if(!countryName.length) {
			countryName = 'Poland';
		}
		$.ajax({
			url: url + countryName,
			method: 'GET',
			success: showCountriesList
		});
	}
	// funtcion that shows countries list
	function showCountriesList(resp) {
		countriesList.empty();
		resp.forEach(function(item) {
			$('<h3>').text(item.name).appendTo(countriesList);
			$('<li>').text("Capital city: " + item.capital).appendTo(countriesList);
		});
	}
});