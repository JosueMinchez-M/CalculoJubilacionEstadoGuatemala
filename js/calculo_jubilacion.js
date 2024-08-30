// Capturar los datos al enviar el formulario
document.getElementById('jubilacionForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    // Capturar los valores de los campos
    const nombreCompleto = document.getElementById('nombreCompleto').value;
    const nit = document.getElementById('nit').value;
    const dpi = document.getElementById('dpi').value;
    const entidadGobierno = document.getElementById('entidadGobierno').value;
    const fechaNacimiento = document.getElementById('fechaNacimiento').value;
    const direccion = document.getElementById('direccion').value;
    const edad = document.getElementById('edad').value;
    const añosLaborados = document.getElementById('añosLaborados').value;
    const mesesLaborados = document.getElementById('mesesLaborados').value;
    const promedio1 = document.getElementById('promedio1').value;
    const promedio2 = document.getElementById('promedio2').value;
    const promedio3 = document.getElementById('promedio3').value;
    const promedio4 = document.getElementById('promedio4').value;
    const promedio5 = document.getElementById('promedio5').value;

    // Mostrar los valores en la consola
    console.log("Nombre Completo: ", nombreCompleto);
    console.log("NIT: ", nit);
    console.log("DPI: ", dpi);
    console.log("Entidad de Gobierno: ", entidadGobierno);
    console.log("Fecha de Nacimiento: ", fechaNacimiento);
    console.log("Dirección: ", direccion);
    console.log("Edad: ", edad);
    console.log("Años Laborados: ", añosLaborados);
    console.log("Meses Laborados: ", mesesLaborados);
    console.log("Promedio Mensual 1er Año: ", promedio1);
    console.log("Promedio Mensual 2do Año: ", promedio2);
    console.log("Promedio Mensual 3er Año: ", promedio3);
    console.log("Promedio Mensual 4to Año: ", promedio4);
    console.log("Promedio Mensual 5to Año: ", promedio5);

    let calculoPromedio = (parseFloat(promedio1) + parseFloat(promedio2) + parseFloat(promedio3) + parseFloat(promedio4) + parseFloat(promedio5))/5;
    let porcentajeEscala = 0;

    switch (añosLaborados) {
        case '10':
            porcentajeEscala = 36.90;
            break;
        case '11':
            porcentajeEscala = 39.40;
            break;
        case '12':
            porcentajeEscala = 41.90;
            break;
        case '13':
            porcentajeEscala = 44.40;
            break;
        case '14':
            porcentajeEscala = 46.90;
            break;
        case '15':
            porcentajeEscala = 49.40;
            break;
        case '16':
            porcentajeEscala = 52.20;
            break;
        case '17':
            porcentajeEscala = 55.00;
            break;
        case '18':
            porcentajeEscala = 57.80;
            break;
        case '19':
            porcentajeEscala = 60.60;
            break;
        case '20':
            porcentajeEscala = 63.40;
            break;
        case '21':
            porcentajeEscala = 66.70;
            break;
        case '22':
            porcentajeEscala = 70.00;
            break;
        case '23':
            porcentajeEscala = 73.30;
            break;
        case '24':
            porcentajeEscala = 76.60;
            break;
        case '25':
            porcentajeEscala = 79.90;
            break;
        case '26':
            porcentajeEscala = 83.20;
            break;
        case '27':
            porcentajeEscala = 87.40;
            break;
        case '28':
            porcentajeEscala = 91.60;
            break;
        case '29':
            porcentajeEscala = 95.80;
            break;
        case '30':
            porcentajeEscala = 100;
            break;
        default:
            break;
    }

    let adicionDto81_95 = 448;
    let porcentajeIncremento = 10;
    let bonoAcuerdo907_97 = 69;
    let bonoAcuerdo954_98 = 106;
    let bonoMarzo2000 = 100;
    let bonoMayo2000 = 100;
    let bonoAgosto2001 = 50;
    let bonoJulio2008 = 120;
    let porcentajePromedioConformeEscala = parseFloat(calculoPromedio)*(parseFloat(porcentajeEscala)/100);
    let IncrementoDecreto37_97 = (porcentajePromedioConformeEscala + adicionDto81_95)*(porcentajeIncremento/100);

    //Validación de que si aplica o no a la jubilación
    let decisionAplica;
    if ((edad >= 50 && añosLaborados >= 10) || añosLaborados >= 20 ) {
        decisionAplica = 'Si aplica a Jubilación';
    }else{
        decisionAplica = 'No aplica a Jubilación, tiene menos de 20 años de servicio';
    }   

    // Asigna los valores a las celdas correspondientes de la tabla
    document.getElementById('nombreCompletoId').textContent = nombreCompleto;
    document.getElementById('nitId').textContent = nit;
    document.getElementById('dpiId').textContent = dpi;
    document.getElementById('entidadGobiernoId').textContent = entidadGobierno;
    document.getElementById('fechaNacimientoId').textContent = fechaNacimiento;
    document.getElementById('direccionId').textContent = direccion;
    document.getElementById('edadId').textContent = edad;
    document.getElementById('aniosLaboradosId').textContent = añosLaborados;
    document.getElementById('aplicaId').textContent = decisionAplica;
    document.getElementById('calculoPromedioId').textContent = calculoPromedio;
    document.getElementById('porcentajePromedioConformeId').textContent = calculoPromedio + ' X ' + porcentajeEscala + '%';
    document.getElementById('adicionDto81-95').textContent = adicionDto81_95 + '.00';
    document.getElementById('10%deIncrementoDecreto37-97').textContent = '((' + calculoPromedio + '*(' + porcentajeEscala + '/' + 100 + '))+' + adicionDto81_95 + ')x' + porcentajeIncremento +'%';
    document.getElementById('bonoAcuerdo907-97').textContent = bonoAcuerdo907_97;
    document.getElementById('bonoAcuerdo954-98').textContent = bonoAcuerdo954_98;
    document.getElementById('bonoMarzo2000').textContent = bonoMarzo2000;
    document.getElementById('bonoMayo2000').textContent = bonoMayo2000;
    document.getElementById('bonoAgosto2001').textContent = bonoAgosto2001;
    document.getElementById('bonoJulio2008').textContent = bonoJulio2008;

    document.getElementById('porcentajePromedioConformeMonto').textContent = porcentajePromedioConformeEscala.toFixed(2);
    document.getElementById('adicionDto81-95Monto').textContent = adicionDto81_95.toFixed(2);
    document.getElementById('10%deIncrementoDecreto37-97Monto').textContent = IncrementoDecreto37_97.toFixed(2);
    document.getElementById('bonoAcuerdo907-97Monto').textContent = bonoAcuerdo907_97.toFixed(2);
    document.getElementById('bonoAcuerdo954-98Monto').textContent = bonoAcuerdo954_98.toFixed(2);
    document.getElementById('bonoMarzo2000Monto').textContent = bonoMarzo2000.toFixed(2);
    document.getElementById('bonoMayo2000Monto').textContent = bonoMayo2000.toFixed(2);
    document.getElementById('bonoAgosto2001Monto').textContent = bonoAgosto2001.toFixed(2);
    document.getElementById('bonoJulio2008Monto').textContent = bonoJulio2008.toFixed(2);

    let totalSumatoria = porcentajePromedioConformeEscala + adicionDto81_95 + IncrementoDecreto37_97 + bonoAcuerdo907_97 + bonoAcuerdo954_98 + + bonoMarzo2000 + bonoMayo2000 + bonoAgosto2001 + bonoJulio2008;
    let totalRecibir = totalSumatoria;
    document.getElementById('totalSumatoria').textContent = totalSumatoria.toFixed(2);

    // Validacion del monto maximo que puede recibir un jubilado
    if (totalRecibir.toFixed(2) > 5370) {
        totalRecibir = 5370;
        var elementoNotaMontoMaximo = document.getElementById("notaMontoMaximo");
        if (elementoNotaMontoMaximo.style.display === "none") {
            elementoNotaMontoMaximo.style.display = "block";
        }
    }

    document.getElementById('totalRecibir').textContent = totalRecibir.toFixed(2);

    //Si la persona que realiza la consulta, trabaja desde los 14 años tiene lógica que realice la consulta.
    if((edad - añosLaborados) >= 14){
        /* MOSTRAR LA SECCION DE LA TABLA AL PRESIONAR EL BOTON DE EVIAR INFORMACIÓN */
        var seccion = document.getElementById("tabla_informativaId");
        if (seccion.style.display === "none") {
            seccion.style.display = "block";
            // Mover el foco a la sección
            seccion.scrollIntoView({ behavior: "smooth" });
        } else {
            seccion.style.display = "none";
        }
    }else{
        var elementoNotaEdad14anios = document.getElementById("elementoNotaEdad14anios");
        if (elementoNotaEdad14anios.style.display === "none") {
            elementoNotaEdad14anios.style.display = "block";
        } else {
            elementoNotaEdad14anios.style.display = "none";
        }
    }
});