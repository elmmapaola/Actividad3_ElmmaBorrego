/* =========================================
   FORMULARIO INTERACTIVO - WISH COFFEE
   Validaciones con JavaScript
   ========================================= */


/* =========================================
   OBTENER ELEMENTOS DEL FORMULARIO
   ========================================= */

const formulario = document.getElementById("formulario");

const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const telefono = document.getElementById("telefono");
const edad = document.getElementById("edad");
const contrasena = document.getElementById("contrasena");
const bebida = document.getElementById("bebida");
const terminos = document.getElementById("terminos");
const grupoVisita = document.getElementById("grupoVisita");

const mensajeExito = document.getElementById("mensajeExito");


/* =========================================
   FUNCIÓN PARA MOSTRAR ERRORES
   ========================================= */

function mostrarError(campo, elementoError, mensaje) {

    elementoError.textContent = mensaje;
    campo.classList.add("campo-error");

}


/* =========================================
   FUNCIÓN PARA QUITAR ERRORES
   ========================================= */

function quitarError(campo, elementoError) {

    elementoError.textContent = "";
    campo.classList.remove("campo-error");

}


/* =========================================
   VALIDAR NOMBRE
   ========================================= */

function validarNombre() {

    const error = document.getElementById("errorNombre");

    if (nombre.value.trim() === "") {

        mostrarError(
            nombre,
            error,
            "El nombre completo es obligatorio."
        );

        return false;
    }

    if (nombre.value.trim().length < 3) {

        mostrarError(
            nombre,
            error,
            "El nombre debe contener al menos 3 caracteres."
        );

        return false;
    }

    quitarError(nombre, error);
    return true;
}


/* =========================================
   VALIDAR CORREO ELECTRÓNICO
   ========================================= */

function validarCorreo() {

    const error = document.getElementById("errorCorreo");

    /* Expresión regular para revisar el formato del correo */
    const formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (correo.value.trim() === "") {

        mostrarError(
            correo,
            error,
            "El correo electrónico es obligatorio."
        );

        return false;
    }

    if (!formatoCorreo.test(correo.value.trim())) {

        mostrarError(
            correo,
            error,
            "El correo electrónico no es válido."
        );

        return false;
    }

    quitarError(correo, error);
    return true;
}


/* =========================================
   VALIDAR TELÉFONO
   ========================================= */

function validarTelefono() {

    const error = document.getElementById("errorTelefono");

    /* El teléfono debe contener exactamente 10 números */
    const formatoTelefono = /^\d{10}$/;

    if (telefono.value.trim() === "") {

        mostrarError(
            telefono,
            error,
            "El teléfono es obligatorio."
        );

        return false;
    }

    if (!formatoTelefono.test(telefono.value.trim())) {

        mostrarError(
            telefono,
            error,
            "El teléfono debe contener exactamente 10 dígitos."
        );

        return false;
    }

    quitarError(telefono, error);
    return true;
}


/* =========================================
   VALIDAR EDAD
   ========================================= */

function validarEdad() {

    const error = document.getElementById("errorEdad");

    if (edad.value === "") {

        mostrarError(
            edad,
            error,
            "La edad es obligatoria."
        );

        return false;
    }

    if (Number(edad.value) < 1) {

        mostrarError(
            edad,
            error,
            "La edad mínima es 1 año."
        );

        return false;
    }

    if (Number(edad.value) > 120) {

        mostrarError(
            edad,
            error,
            "Ingresa una edad válida. El máximo es 120 años."
        );

        return false;
    }

    quitarError(edad, error);
    return true;
}


/* =========================================
   VALIDAR CONTRASEÑA
   ========================================= */

function validarContrasena() {

    const error = document.getElementById("errorContrasena");

    const longitudMinima = 8;
    const longitudActual = contrasena.value.length;


    /* Contraseña vacía */
    if (longitudActual === 0) {

        mostrarError(
            contrasena,
            error,
            "La contraseña es obligatoria."
        );

        return false;
    }


    /* Contraseña menor a 8 caracteres */
    if (longitudActual < longitudMinima) {

        const caracteresFaltantes =
            longitudMinima - longitudActual;


        if (caracteresFaltantes === 1) {

            mostrarError(
                contrasena,
                error,
                "La contraseña necesita 1 carácter más."
            );

        } else {

            mostrarError(
                contrasena,
                error,
                "La contraseña necesita " +
                caracteresFaltantes +
                " caracteres más."
            );

        }

        return false;
    }


    quitarError(contrasena, error);
    return true;
}


/* =========================================
   VALIDAR BEBIDA FAVORITA
   ========================================= */

function validarBebida() {

    const error = document.getElementById("errorBebida");

    if (bebida.value === "") {

        mostrarError(
            bebida,
            error,
            "Debes seleccionar tu bebida favorita."
        );

        return false;
    }

    quitarError(bebida, error);
    return true;
}


/* =========================================
   VALIDAR BOTONES DE OPCIÓN
   ========================================= */

function validarVisita() {

    const error = document.getElementById("errorVisita");

    const visitaSeleccionada =
        document.querySelector(
            'input[name="visita"]:checked'
        );


    if (!visitaSeleccionada) {

        error.textContent =
            "Debes seleccionar cómo prefieres visitar wish coffee.";

        grupoVisita.classList.add("grupo-error");

        return false;
    }


    error.textContent = "";
    grupoVisita.classList.remove("grupo-error");

    return true;
}


/* =========================================
   VALIDAR TÉRMINOS Y CONDICIONES
   ========================================= */

function validarTerminos() {

    const error = document.getElementById("errorTerminos");

    if (!terminos.checked) {

        error.textContent =
            "Debes aceptar los términos y condiciones.";

        return false;
    }

    error.textContent = "";

    return true;
}


/* =========================================
   VALIDACIONES EN TIEMPO REAL
   ========================================= */

/* Validar mientras el usuario escribe */
nombre.addEventListener("input", validarNombre);

correo.addEventListener("input", validarCorreo);

telefono.addEventListener("input", validarTelefono);

edad.addEventListener("input", validarEdad);

contrasena.addEventListener(
    "input",
    validarContrasena
);


/* Validar cuando cambia la bebida */
bebida.addEventListener(
    "change",
    validarBebida
);


/* Validar cuando se selecciona una opción */
document
    .querySelectorAll('input[name="visita"]')
    .forEach(function (opcion) {

        opcion.addEventListener(
            "change",
            validarVisita
        );

    });


/* Validar términos cuando cambia el checkbox */
terminos.addEventListener(
    "change",
    validarTerminos
);


/* =========================================
   EVITAR LETRAS EN EL TELÉFONO
   ========================================= */

telefono.addEventListener("input", function () {

    /* Elimina cualquier carácter que no sea un número */
    telefono.value =
        telefono.value.replace(/\D/g, "");

    validarTelefono();

});


/* =========================================
   EVITAR EDADES FUERA DEL RANGO
   ========================================= */

edad.addEventListener("input", function () {

    validarEdad();

});


/* =========================================
   VALIDACIÓN FINAL AL ENVIAR
   ========================================= */

formulario.addEventListener(
    "submit",
    function (evento) {

        /*
        Evita que el formulario se envíe
        automáticamente.
        */
        evento.preventDefault();


        /* Ejecutar todas las validaciones */
        const nombreCorrecto =
            validarNombre();

        const correoCorrecto =
            validarCorreo();

        const telefonoCorrecto =
            validarTelefono();

        const edadCorrecta =
            validarEdad();

        const contrasenaCorrecta =
            validarContrasena();

        const bebidaCorrecta =
            validarBebida();

        const visitaCorrecta =
            validarVisita();

        const terminosCorrectos =
            validarTerminos();


        /*
        El formulario solamente será válido
        cuando todas las condiciones se cumplan.
        */
        const formularioValido =
            nombreCorrecto &&
            correoCorrecto &&
            telefonoCorrecto &&
            edadCorrecta &&
            contrasenaCorrecta &&
            bebidaCorrecta &&
            visitaCorrecta &&
            terminosCorrectos;


        /* =====================================
           FORMULARIO CORRECTO
           ===================================== */

        if (formularioValido) {

            mensajeExito.textContent =
                "¡Registro realizado correctamente!";

            formulario.reset();


        } else {

            /*
            Si existe al menos un error,
            no se procesa el registro.
            */
            mensajeExito.textContent = "";

        }

    }
);