$(function(){

	//load

	// $('.myValue').load('text.html',function(responseTxt, statusTxt, xhr){
	// 	 if(statusTxt == 'error'){
	// 		alert('Error:'+xhr.statusTxt);
	// 	}
	// });

	//get

	// $.get('text.html',function(data){
	// 	$('.myValue').html(data);
	// });

	//getJSON
	// $.getJSON('txt.json',function(data){
	// 	$.each(data,function(i, user){
	// 		$('#users').append('<li>'+user.email+'</li>');
	// 	})
	// });

	//ajax get
	$.ajax({
		method: 'GET',
		url: 'https://jsonplaceholder.typicode.com/posts',
		dataType: 'json'
	}).done(function(data){
		console.log(data);
		$.map(data,function(post, i){
			$('#fakeData').append('<h3>'+post.title+'</h3><p>'+post.body+'</p>');
		})
	})
});