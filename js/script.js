$(function () {
	$('table:nth-of-type(2) tr:nth-child(2) td:nth-child(3)').addClass(
		'celda_destacada'
	);
});

$(function () {
	$('table:nth-of-type(1)').addClass('two');
});

// Add total
$(function () {
	let total = 0;
	let numElementos = 3;

	$(' table:nth-of-type(1) tbody tr').each(function (index) {
		console.log('ÍNDICE' + '----->' + index);

		let examen1 = $('tbody tr:nth-child(' + (index + 1) + ') td')
			.eq(1)
			.text();
		console.log('Fila 1' + '-->' + examen1);
		let examen2 = $('tbody tr:nth-child(' + (index + 1) + ') td')
			.eq(2)
			.text();
		console.log('Fila 2' + '-->' + examen2);
		let examen3 = $('tbody tr:nth-child(' + (index + 1) + ') td')
			.eq(3)
			.text();
		console.log('Fila 3' + '-->' + examen3);

		let total = (
			(parseFloat(examen1) + parseFloat(examen2) + parseFloat(examen3)) /
			numElementos
		).toFixed(2);

		$('tbody tr:nth-child(' + (index + 1) + ') td')
			.eq(4)
			.text(total);

		total > 5
			? $(this).css('color', 'black')
			: $(this).css({backgroundColor: '#ff000d46', color: 'red'});

		total < 5
			? $('tbody tr:nth-child(' + (index + 1) + ') td')
					.eq(4)
					.append('<i class="fas fa-times"></i>')
			: $('tbody tr:nth-child(' + (index + 1) + ') td')
					.eq(4)
					.append('');
	});
});

$(function () {
	$('.iconized li').eq(0).css({
		backgroundColor: 'lavender',
		borderRadius: 10,
	});
});
// $(function () {

// 	$('img').attr('src', './img/jquery.png');
// 	$('.card').css('background-color', 'pink');

// 	for (i = 0; i < 10; i++) {
// 		$('table tbody').append(
// 			'<tr><td>' + i + '</td><td>' + i + '</td><td>' + i + '</td></tr>'
// 		);
// 	}

// 	//$(":password").attr("type","date");
// 	$('input').eq(0).val('Pepe');
// 	$(':password').attr('type', 'text').val('MANUEL');

// 	$(':header').css({
// 		color: 'red',
// 		'background-color': 'blue',
// 		margin: '0px',
// 	});

// 	$('.iconized li').html(function (index, texto) {
// 		return texto + '--->' + index;
// 	});

// 	$('td').wrapInner('<div></div>');

// 	$('td > div').addClass('nueva_clase');
// });
