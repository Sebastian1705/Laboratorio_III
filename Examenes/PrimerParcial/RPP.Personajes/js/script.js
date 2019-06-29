zz$(document).ready(function(){
    mostrarSpinner();
    $.get('http://localhost:3000/personajes', function(data, status){
        if(status === 'success'){
            ocultarSpinner();
            data.forEach(element => {
                createElementTr(element);
            });
        }
    })
});

//Recibe los datos de una fila
function createElementTr(data){
    let tBody = $('#tBody'),
        tr = document.createElement('tr'),
        tdImg = document.createElement('td'),
        tdName = document.createElement('td'),
        tdLastname = document.createElement('td'),
        tdEstado = document.createElement('td'),
        img = document.createElement("img");
        inputFile = document.createElement("input");

    //Imagen
    $(img).attr("src", data['foto']);
    $(img).attr("id", 'img' + data['id']);
    $(img).click(mostrarInput);
    $(inputFile).attr("type", 'file');
    $(inputFile).attr("id", 'input' + data['id']);
    $(inputFile).change()
    $(inputFile).hide();
    tdImg.appendChild(img);
    tdImg.appendChild(inputFile)
    //Nombre
    tdName.appendChild(document.createTextNode(data['nombre']));
    //Apellido
    tdLastname.appendChild(document.createTextNode(data['apellido']));
    //Estado
    tdEstado.appendChild(crearSelect(data['estado']))

    tr.appendChild(tdImg);
    tr.appendChild(tdName);
    tr.appendChild(tdLastname);
    tr.appendChild(tdEstado);

    tBody.append(tr);
}

function crearSelect(estado, id){
    let select = document.createElement('select');
     
    $(select).html("<option>Vivo</option><option>Muerto</option>");
    $(select).val(estado);
    $(select).change(modificarEstado);

    return select;
}

function modificarEstado(){
    console.log('Cambio');
}

function mostrarSpinner(){
    let spinner = $('#cont-spinner').show();
}

function ocultarSpinner(){
    let spinner = $('#cont-spinner').hide()
}

function mostrarInput(e)
{
    $(e.target.parentNode.lastChild).animate({
        width: 'toggle',
    });
}