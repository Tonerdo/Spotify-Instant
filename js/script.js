/*$(document).ready(function(){

	$('#search').on('keyup', search);
	$('#type').on('change', search);

	function search() {

		$('.results').text('');
		$('#loading').show();

		var type = $('#type').val();
		var q = $('#search').val();

		if(q == '') {
			$('#no').text('');
			$('#loading').hide();
		}

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

			$('#loading').hide();
		});
	}

});*/

var spotifyInstant = {
	searchField: $('#search'),
	typeField: $('#type'),
	resultList: $('.results'),
	numResults: $('#no'),
	loadingText: $('#loading'),
	initialize: function() {
		spotifyInstant.searchField.on('keyup', spotifyInstant.search);
		spotifyInstant.typeField.on('change', spotifyInstant.search);
	},
	search: function() {

		spotifyInstant.resultList.text('');
		spotifyInstant.loadingText.show();

		var type = spotifyInstant.typeField.val();
		var q = spotifyInstant.searchField.val();

		if(q == '') {
			spotifyInstant.numResults.text('');
			spotifyInstant.loadingText.hide();
		}

		var uri = globalVars.apiHost + '/search?q=' + q + '&limit=50&type=' + type;

		$.getJSON(uri, function(result) {
			var items = result[type + 's'].items;
			spotifyInstant.numResults.text(items.length + ' ' + type + 's found');
			for (var i = 0; i < items.length; i++) {
				spotifyInstant.resultList.append("<div class='item'>"
					+ "<img class='thumb' style='width: 64px; height: 64px;' src='" + items[i].images[2].url + "' />"
					+ "<span>" + items[i].name + "</span>"
					+ "<p></p>"
					+ "<a href='" + items[i].uri + "'><img class='play' src='images/play.png' />&nbsp;Play</a>"
					+ "</div>");
			};

			spotifyInstant.loadingText.hide();
		});

	}

};

spotifyInstant.initialize();