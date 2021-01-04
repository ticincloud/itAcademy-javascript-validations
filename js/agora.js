var formLogin,formRegister;
$(document).ready(function() {
    $.validator.addMethod("passcheck", function (value) {
                    //return this.optional(element) || /^(?=(?:.*\d){1})(?=(?:.*[A-Z]){1})\S{8,}$/i.test(value);
                    return /^(?=(?:.*\d){1})(?=(?:.*[A-Z]){1})\S{8,}$/.test(value);
                });

    $("#formLogin").validate({
        rules: {
            inputEmail : {
                required: true,
                email: true
            },
            inputPassword: {
                required: true,
                passcheck: true  
            }
        },
        messages : {
            inputEmail: {
                required: "Camp obligatori",
                email: "format incorrecte"
            },
            inputPassword: {
                required: "Camp obligatori",
                passcheck: "Format incorrecte: Mínim 8 càracters, 1 majúscula, 1 nombre"
            }
        }
    });
    /*$('#loginModal').on('shown.bs.modal', function () {
        formLogin = document.getElementById('formLogin');
    	formLogin.classList.remove('is-invalid');
        document.getElementById('inputEmail').classList.remove('is-invalid');
        document.getElementById('inputPassword').classList.remove('is-invalid');
        formLogin.addEventListener('blur', (event) => {
	        if(event.target.value!='') event.target.classList.remove('is-invalid');
            //registerValidate();
        }, true);
        $('#inputEmail').focus();
    });*/
    $('#registerModal').on('shown.bs.modal', function () {
        formRegister = document.getElementById('formLogin');
    	formRegister.classList.remove('is-invalid');
        $('.iRegister').removeClass('is-invalid');
        formRegister.addEventListener('blur', (event) => {
	        if(event.target.value!='') event.target.classList.remove('is-invalid');
            //registerValidate();
        }, true);
        $('#inputEmail').focus();
    });
});

function registerValidate() {
	var acumErrores = 0;
	
	formRegister.classList.remove('is-invalid');
    $('.iRegister').removeClass('is-invalid');

	var inputEmail = document.getElementById('inputEmailR');
	var inputPassword = document.forms["formRegister"]["inputPasswordR"];
	var inputPassword2 = document.forms["formRegister"]["inputPassword2"];
	var inputAddress = document.forms["formRegister"]["inputAddress"];
	var inputProvince = document.forms["formRegister"]["inputProvince"];
	var inputCity = document.forms["formRegister"]["inputCity"];
	var inputZip = document.forms["formRegister"]["inputZip"];
	var gridCheck = document.forms["formRegister"]["gridCheck"];
	if(inputEmail.value == "") {
		inputEmail.classList.add("is-invalid");
		document.getElementById("errorEmailR").textContent = "Campo obligatori";
        acumErrores ++;
    }else if(!validar_email(inputEmail.value)){
		inputEmail.classList.add("is-invalid");
		document.getElementById("errorEmailR").textContent = "Email incorrecte";
		acumErrores ++;
	}

    if(inputPassword.value == "") {
		inputPassword.classList.add("is-invalid");
		document.getElementById("errorPasswordR").textContent = "Campo obligatori";
		acumErrores ++;
    }else if(!validar_password(inputPassword.value)){
		inputPassword.classList.add("is-invalid");
		document.getElementById("errorPasswordR").textContent = "format incorrecte: Mínim 8 càracters, 1 majúscula, 1 nombre";
		acumErrores ++;
	}
	
    if(inputPassword2.value == "") {
		inputPassword2.classList.add("is-invalid");
		document.getElementById("errorPassword2").textContent = "Campo obligatori";
		acumErrores ++;
    }else if(inputPassword2.value!=inputPassword.value){
		inputPassword2.classList.add("is-invalid");
		document.getElementById("errorPassword2").textContent = "el valor ha de ser igual";
		acumErrores ++;
	}
	
    if(inputAddress.value == "") {
		inputAddress.classList.add("is-invalid");
		document.getElementById("errorAddress").textContent = "Camp obligatori";
		acumErrores ++;
	}

    if(inputProvince.value == "") {
		inputProvince.classList.add("is-invalid");
		document.getElementById("errorProvince").textContent = "Camp obligatori";
		acumErrores ++;
	}
	
	if(inputCity.value == "") {
		inputCity.classList.add("is-invalid");
		document.getElementById("errorCity").textContent = "Camp obligatori";
		acumErrores ++;
	}
	
	if(inputZip.value == "" || inputZip.length!=5) {
		inputZip.classList.add("is-invalid");
		document.getElementById("errorZip").textContent = "Valor incorrecte";
		acumErrores ++;
	}
	
	if(!gridCheck.checked) {
		gridCheck.classList.add("is-invalid");
		document.getElementById("errorCheck").textContent = "Per registrar-se és obligatori Accepta les bases";
		acumErrores ++;
	}

    if (acumErrores > 0){
        return false;
    }else{
        $('#loginRegister').modal('hide');
		return true;
	}
}

function loginValidate() {
	var acumErrores = 0;
	formLogin.classList.remove('is-invalid');
    document.getElementById('inputEmail').classList.remove('is-invalid');
    document.getElementById('inputPassword').classList.remove('is-invalid');
	
	var inputEmail = document.getElementById('inputEmail');
	var inputPassword = document.forms["formLogin"]["inputPassword"];

	if(inputEmail.value == "") {
		inputEmail.classList.add("is-invalid");
		document.getElementById("errorEmail").textContent = "Camp obligatori";
        acumErrores ++;
    }else if(!validar_email(inputEmail.value)){
		inputEmail.classList.add("is-invalid");
		document.getElementById("errorEmail").textContent = "Email incorrecte";
		acumErrores ++;
	}

    if(inputPassword.value == "") {
		inputPassword.classList.add("is-invalid");
		document.getElementById("errorPassword").textContent = "Camp obligatori";
		acumErrores ++;
    }else if(!validar_password(inputPassword.value)){
		inputPassword.classList.add("is-invalid");
		document.getElementById("errorPassword").textContent = "Format incorrecte: Mínim 8 càracters, 1 majúscula, 1 nombre";
		acumErrores ++;
	}

    if (acumErrores > 0){
        return false;
    }else{
        $('#loginModal').modal('hide');
        $('#bRegister').addClass('ocult');
        $('#bLogin').addClass('ocult');
        $('#bSettings').removeClass('ocult');
        $('#bLogout').removeClass('ocult');
		return true;
	}
}



function validar_email(email) {
	var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return regex.test(email) ? true : false;
}

function validar_password(pass) {
	var regex = /^(?=(?:.*\d){1})(?=(?:.*[A-Z]){1})\S{8,}$/;
	return regex.test(pass) ? true : false;
}
