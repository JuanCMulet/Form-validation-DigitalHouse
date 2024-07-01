const submitFunction = (event) => {
    if (!validarFormulario()) {
        event.preventDefault(); // Previene que se actualice la web
    } else {
        event.preventDefault();

        alert(
            'Name: ' + document.getElementById('name').value + '\n' +
            'Lastname: ' + document.getElementById('lastname').value + '\n' +
            'National ID: ' + document.getElementById('nationalID').value + '\n' +
            'Email: ' + document.getElementById('email').value + '\n' +
            'Age: ' + document.getElementById('age').value + '\n' +
            'Activity: ' + document.getElementById('activity').value + '\n' +
            'Education: ' + document.getElementById('education').value + '\n'
        );
    }
}

document.getElementById('form').addEventListener('submit', submitFunction); // Escucha el envío del formulario

function validarFormulario() {

    //Validación de los campos de texto.
    const camposTexto = document.querySelectorAll('input[type="text"]');
    let validacionCorrecta = true;

    camposTexto.forEach(campo => {
        let errorCampo = document.getElementById('error' + campo.id.charAt(0).toUpperCase() + campo.id.slice(1));
        if(campo.value.length == ''){
            mostrarError(errorCampo, '¡This field is required!');
            validacionCorrecta = false;
        } else if(campo.value.length > 0 && campo.value.length < 3) {
            mostrarError(errorCampo, '¡This field must have at least 3 characters!');
            validacionCorrecta = false;
        } else {
            ocultarError(errorCampo);
        }
    })

    //Validación del email.
    const email = document.getElementById('email');
    let errorEmail = document.getElementById('errorEmail');
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        ocultarError(errorEmail);
    } else {
        mostrarError(errorEmail, '¡That is not a valid email!');
        validacionCorrecta = false;
    }

    //Validación de la edad.
    const edad = document.getElementById('age');
    const errorEdad = document.getElementById('errorAge');
    if (edad.value < 18) {
        mostrarError(errorEdad, '¡You must be over the age of 18 to register!');
        validacionCorrecta = false;
    } else {
        ocultarError(errorEdad);
    }

    //Validación de la actividad.
    const actividad = document.getElementById('activity');
    const errorActividad = document.getElementById('errorActivity');
    if (actividad.value == '') {
        mostrarError(errorActividad, '¡You must select an activity!');
        validacionCorrecta = false;
    } else {
        ocultarError(errorActividad);
    }

    //Validación de la educación.
    const educacion = document.getElementById('education');
    const errorEducacion = document.getElementById('errorEducation');
    if (educacion.value == '') {
        mostrarError(errorEducacion, '¡You must select a level of education!');
        validacionCorrecta = false;
    } else {
        ocultarError(errorEducacion);
    }

    //Validación de los TyC.
    const aceptoTerminos = document.getElementById('acceptTC');
    const errorAceptoTerminos = document.getElementById('errorTC');
    if (!aceptoTerminos.checked) {
        mostrarError(errorTC, '¡You must accept the Terms and Conditions!');
        validacionCorrecta = false;
    } else {
        ocultarError(errorTC);
    }

    //Devuelve si es válido o no el formulario
    return validacionCorrecta;
}


//Modifica el texto en el div correspondiente al error y lo hace visible.
const mostrarError = (elemento, mensaje) => {
    elemento.textContent = mensaje;
    elemento.style.display = "block";
}


//Oculta el div correspondiente al error.
const ocultarError = (elemento) => {
    elemento.textContent = ''
    elemento.style.display = "none";
}