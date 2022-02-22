

function Contenido(datos) {
	var nom = [];
	console.log(datos);
	for(let nombre of datos.nombres){
		nom.push(
			<li>{nombre}</li>
		)
	}

  return (
        <div id="body">

			<ul>{nom}</ul>

			<button onClick={datos.anadir}>Añade</button>
			<button onClick={datos.cambia}>cambia titulo</button>
		</div>
  );
}

export default Contenido;
