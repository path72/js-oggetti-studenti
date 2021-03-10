//###################################################### 
// DYNAMICS

$(function() {
// ********************* doc ready start ***


var studente = {
	'nome'    : 'Pierfrancesco',
	'cognome' : 'Favino',
	'età'     : 14
}

for (key in studente) {
	$('.user').append('<tr><td>'+key+'</td><td>'+studente[key]+'</td></tr>');
}

var studenti = [];

studenti[0] = {
	'nome'    : 'Marco',
	'cognome' : 'Giallini',
	'età'     : 14
}

studenti[1] = {
	'nome'    : 'Giovanna',
	'cognome' : 'Mezzogiorno',
	'età'     : 13
}

studenti[2] = {
	'nome'    : 'Angela',
	'cognome' : 'Finocchiaro',
	'età'     : 13
}

studenti.push(studente);

$('.list').append('<tr><td></td><td>nome</td><td>cognome</td>');
for (var i=0; i<studenti.length; i++) {
	$('.list').append('<tr><td>studente #'+(i+1)+'</td><td>'+studenti[i]['nome']+'</td><td>'+studenti[i]['cognome']+'</td>');
}

$('button').click(function() {
	alert('qua!');
});











// *********************** doc ready end ***
});

//###################################################### 
// FUNCTIONS


