$(document).ready(function(){
	$("#search-form").submit(function(event) {
		event.preventDefault();
		search();
	});
});

function search(){
	var listing = Handlebars.compile($('#listing').html());
	var query = $("#searchbar").val();
	$('#content').html("<img id='loading' src='/images/loading.gif'>");
	var url = "http://www.omdbapi.com/?s=" + query + "&callback=?";
	$.getJSON(url, function(data){
		$('#content').html('<h1>Results</h1>');
		for(i = 0; i < data.Search.length; i++){
			var html = listing({
				title : data.Search[i].Title,
				type : data.Search[i].Type,
				year : data.Search[i].Year,
				id : data.Search[i].imdbID
			});
			$('#content').append(html);
		}
	});
}
function getMovie(id){
	$('#content').html('');
	var movie = Handlebars.compile($('#movie').html());
	var url = "http://www.omdbapi.com/?i=" + id + "&plot=full&tomatoes=true&apikey=9ab132ab&callback=?";
	$.getJSON(url, function(data){
		console.log(data);
		var html = movie(data);
		$('#content').append(html);
	});
}