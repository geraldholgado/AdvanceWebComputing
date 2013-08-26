$(document).ready(function(){
	$('#movie').keypress(function(event){
		if(event.which == 13){
		var moviesearch = $('#movie').val();
		if(moviesearch == ""){
			alert("Please input the required field!");
		}
			$(function(){
			
			

			
			$('#resultleft').html("");
			$('#resultleft').append('<p class="text-info">Search Result for: ' +moviesearch+ '</p>');
			var url = 'http://api.rottentomatoes.com/api/public/v1.0/movies.json';
			$.ajax({
				url: url,
				data: {
					q: moviesearch,
					apiKey: 'd7ujzn7t8e75kf6nbmynvrbj'
				},
					dataType: 'jsonp',
					success: showMovies
			});
			function showMovies(response){
		
				$('.movie_container').html("");
				for(i=0;i<response.movies.length;i++){
					var movie = response.movies[i];
					var synop = movie.synopsis;
					if(synop == ""){
						synop = '<h3 style="text-align: center;">No Available Synopsis</h3>';
						$('.movie_container').append('<div class="movie_holder">'+'<div class="thumb">'+'<img src="' +movie.posters.thumbnail+'"/>'+'</div>'+'<div class="title">'+'<p class="movie_title">' +movie.title+ '</p>'+'<div class="synopsis">'+'<p>'+synop+'</p>'+'</div>'+'</div>'+'<div class="year">'+'<p>Year: ' +movie.year+ '</p>'+'</div>'+'</div>'+'<div class="clear">'+'</div>');
						
					}else{
					
					
					
					$('.movie_container').append('<div class="movie_holder">'+'<div class="thumb">'+'<img src="' +movie.posters.thumbnail+'"/>'+'</div>'+'<div class="title">'+'<p class="movie_title">' +movie.title+ '</p>'+'<div class="synopsis">'+'<p>'+synop+'</p>'+'</div>'+'</div>'+'<div class="year">'+'<p>Year: ' +movie.year+ '</p>'+'</div>'+'</div>'+'<div class="clear">'+'</div>');
				
				
					}
				}
					var lengthofmov = response.movies.length;
					$('#resultright').html("");
					$('#resultright').append('<p class="text-info">Total result found: '+lengthofmov+'</p>');
			}
				
			});
				/*$( '#formmovie' ).each(function(){
					this.reset();
				});*/
				moviesearch = $('#movie').val("");
	}		
		
	});
	$('#send').click(function(){
		var moviesearch = $('#movie').val();
		if(moviesearch == ""){
			alert("Please input the required field!");
		}
			$(function(){
			
			

			
			$('#resultleft').html("");
			$('#resultleft').append('<p class="text-info">Search Result for: ' +moviesearch+ '</p>');
			var url = 'http://api.rottentomatoes.com/api/public/v1.0/movies.json';
			$.ajax({
				url: url,
				data: {
					q: moviesearch,
					apiKey: 'd7ujzn7t8e75kf6nbmynvrbj'
				},
					dataType: 'jsonp',
					success: showMovies
			});
			function showMovies(response){
		
				$('.movie_container').html("");
				for(i=0;i<response.movies.length;i++){
					var movie = response.movies[i];
					var synop = movie.synopsis;
					if(synop == ""){
						synop = '<h3 style="text-align: center;">No Available Synopsis</h3>';
						$('.movie_container').append('<div class="movie_holder">'+'<div class="thumb">'+'<img src="' +movie.posters.thumbnail+'"/>'+'</div>'+'<div class="title">'+'<p class="movie_title">' +movie.title+ '</p>'+'<div class="synopsis">'+'<p>'+synop+'</p>'+'</div>'+'</div>'+'<div class="year">'+'<p>Year: ' +movie.year+ '</p>'+'</div>'+'</div>'+'<div class="clear">'+'</div>');
						
					}else{
					
					
					
					$('.movie_container').append('<div class="movie_holder">'+'<div class="thumb">'+'<img src="' +movie.posters.thumbnail+'"/>'+'</div>'+'<div class="title">'+'<p class="movie_title">' +movie.title+ '</p>'+'<div class="synopsis">'+'<p>'+synop+'</p>'+'</div>'+'</div>'+'<div class="year">'+'<p>Year: ' +movie.year+ '</p>'+'</div>'+'</div>'+'<div class="clear">'+'</div>');
				
				
					}
				}
					var lengthofmov = response.movies.length;
					$('#resultright').html("");
					$('#resultright').append('<p class="text-info">Total result found: '+lengthofmov+'</p>');
			}
				
			});
			moviesearch = $('#movie').val("");
	});
	
		
	
	
		
		
		

});

