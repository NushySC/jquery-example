$(function () {
	$('table:nth-of-type(2) tr:nth-child(2) td:nth-child(3)').addClass(
		'celda_destacada'
	);
});

$(function () {
	$('table:nth-of-type(1)').addClass('two');
});

//Add total
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
$(function () {
	$('img:nth-of-type(2)').attr('src', 'https://picsum.photos/200');
	$('.card').css({
		'background-color': 'azure',
		'border-color': 'cornflowerBlue',
	});

	for (i = 0; i < 3; i++) {
		$('table:nth-of-type(1) tbody').append(
			'<tr><td>' +
				i +
				'</td><td>' +
				i +
				'</td><td>' +
				i +
				'</td><td>' +
				i +
				'</td><td>'
		);
	}

	$('input').eq(0).val('Anuska');
	$(':password').attr('type', 'text').val('********');

	$('.iconized li').html(function (index, wow) {
		return wow + '--->' + index;
	});
});
//Calculadora

$('#calculadora button').on('click', function () {
	let op = $(this).val();
	let op1 = parseFloat($('#op1').val());
	let op2 = parseFloat($('#op2').val());
	let resultado;

	switch (op) {
		case '+':
			resultado = op1 + op2;
			break;
		case '-':
			resultado = op1 - op2;
			break;
		case '*':
			resultado = op1 * op2;
			break;
		case '/':
			resultado = op1 / op2;
			break;
	}

	$('#calculadora h4 span').text(resultado);
});

/* Funcionamiento del cuadrado */
$('body').on('keydown', function (e) {
	let keycode = e.which;

	switch (keycode) {
		case 37:
			$('#hijo').css('left', '-=10');
			break;
		case 38:
			$('#hijo').css('top', '-=10');
			break;
		case 39:
			$('#hijo').css('left', '+=10');
			break;
		case 40:
			$('#hijo').css('top', '+=10');
			break;
	}
});

/* Funcionamiento de la tabla */
$('tr').on('mouseenter', function () {
	let inputName = 'input#nombre';
	let value = $(inputName).val();

	$(this).is(':contains(' + value + ')')
		? $(this).addClass('contains')
		: $(this).addClass('no-contains');
});

$('tr').on('mouseleave', function () {
	$(this).prop('class', '');
});

/* Funcionamiento del menú contextual */
$('section#contextMenu').hide();

$('section#table').on('contextMenu', function (event) {
	event.preventDefault();
	if (event.which == 3) {
		console.log('SIIII');
		$('section#contextMenu').css({
			left: event.pageX,
			top: event.pageY,
		});
		$('section#contextMenu').toggle();
	}
});

$('section#contextMenu').on('mouseleave', function () {
	$(this).toggle();
});
