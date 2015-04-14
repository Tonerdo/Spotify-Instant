$(document).ready(function(){

	$('#search').on('keyup', search);
	$('#type').on('change', search);

	function search() {

		$('.results').text('');

		var type = $('#type').val();
		var q = $('#search').val();

		if(q == '')
			$('#no').text('');

		var uri = globalVars.apiHost + '/search?q=' + q + '&limit=50&type=' + type;
		$.getJSON(uri, function(result) {
			var items = result[type + 's'].items;
			$('#no').text(items.length + ' ' + type + 's found');
			for (var i = 0; i < items.length; i++) {
				$('.results').append("<div class='item'>"
					+ "<img class='thumb' style='width: 64px; height: 64px;' src='" + items[i].images[2].url + "' />"
					+ "<span>" + items[i].name + "</span>"
					+ "<p></p>"
					+ "<a href='" + items[i].uri + "'><img class='play' src='images/play.png' />&nbsp;Play</a>"
					+ "</div>");
			};
		});
	}

})