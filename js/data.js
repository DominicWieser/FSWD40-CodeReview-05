
var convert = persons;


	for (var i=0; i < convert.length; i++) {
		var temp = convert[i];


	document.write('<div class="column">')
		document.write('<div class="left">');
			document.write('<img src="' + temp.myPhoto + '" width=\"150px\" height=\"150px\">');
		document.write('</div>');

		document.write('<div class="right">');
			document.write('<p>Name: <span class="bold">' + temp.name + '</span></p>');
			document.write('<p>Surname: <span class="bold">' + temp.surname + '</span></p>');
			document.write('<p>Age: <span class="bold">' + temp.age + '</span></p>');

			document.write('<div class="grp">');
				document.write('<input type="button" value="Like" class="like">');
				document.write('<span class="count">' + temp.likes);
					document.write(' <img src="img/like.png" alt="heart">');
				document.write('</span>');
			document.write('</div>');
		document.write('</div>');
	document.write("</div>");
	}

$('.like').on('click', function() {
	var inc = $(this).next();
	var value = parseInt(inc.text());
	value++;
	inc.text(value);
	//value.sort(function(a, b) {
	//	return b-a;
	//})
	//document.getElementsByClassName('like').innerHTML = inc.text(value);
})



	


