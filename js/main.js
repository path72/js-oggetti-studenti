//###################################################### 
// DYNAMICS

$(function() {
// ********************* doc ready start ***


// initial display settings
displayInit();

// user data
var usrData = getUsrData();

// user data display
usrDisplay(usrData);

// class data
var classData = getClassData();

// user data injection
classData.push(usrData);

// class display
classDisplay(classData);

// button functions
$('#usr_add_btn').click(   function() { $('.form_box').fadeIn(200);  });
$('#usr_erase_btn').click( function() { $('.form_box').fadeOut(200); });
$('#usr_in_btn').click(    function() { formAddStudentTo(classData); });


// *********************** doc ready end ***
});

//###################################################### 
// FUNCTIONS

function formAddStudentTo(_class) {

	// form data retrieving 
	var usrName    = $('#usr_name').val();
	var usrSurname = $('#usr_surname').val();
	var usrAge     = parseInt($('#usr_age').val());

	// consistency check
	if ( usrName == '' || usrSurname == '' || isNaN(usrAge)) {

		$('.msg').html('Dati non corretti');
		$('.msg_box').fadeIn(200, function() {
			setTimeout(function() {
				$('.msg_box').fadeOut(200);
			}, 1000);
		});

	// new student management
	} else {

		// new student creation
		var newStd = {
			'nome'    : usrName,
			'cognome' : usrSurname,
			'età'     : usrAge
		};
		
		// new student injection 
		_class.push(newStd);

		// class update & display
		classDisplay(_class);
		$('.form_box').fadeOut(200);

		// form clearing
		$('#usr_name').val('');
		$('#usr_surname').val('');
		$('#usr_age').val('');

	}

}

function usrDisplay(_student) {

	for (var key in _student) {
		$('.user').append('<tr><td class="hl1">'+key+'</td><td class="hl2">'+_student[key]+'</td></tr>');
	}

}

function classDisplay(_class) {

	$('.list').html('<tr><td></td><td class="hl1">nome</td><td class="hl1">cognome</td>');
	for (var i=0; i<_class.length; i++) {
		$('.list').append('<tr><td class="hl1">studente #'+(i+1)+'</td><td class="hl2">'+_class[i]['nome']+'</td><td class="hl2">'+_class[i]['cognome']+'</td>');
	}
	
}

function getUsrData() {

	var usr = {
		'nome'    : 'Pierfrancesco',
		'cognome' : 'Favino',
		'età'     : 14
	}
	return usr; 

}

function getClassData() {

	var list = [
		{	'nome'    : 'Marco',
			'cognome' : 'Giallini',
			'età'     : 17
		},
		{	'nome'    : 'Giovanna',
			'cognome' : 'Mezzogiorno',
			'età'     : 13
		},
		{	'nome'    : 'Angela',
			'cognome' : 'Finocchiaro',
			'età'     : 13
		}
	];
	return list;

}

function displayInit() {

	$('.form_box').hide(200);
	$('.msg_box').hide(200);

};
