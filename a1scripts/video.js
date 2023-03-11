
function videoJuanNicolas()
{
	var enlace = 'a4videos/juannicolasduarte.mp4';
	
	divTextoProyecto.innerHTML = '<b>Título: </b>Del sonido al papel</br></br>' +
	'<b>Autor: </b>Juan Nicolás Duarte Luna</br></br>' +
	'<b>Técnica: </b>Tinta y papel sobre piano. Registro audiovisual</br></br>' +
	'<b>Año:</b> 2020</br></br>' +
	'Me pregunté ¿qué podía llegar a hacer una máquina cuyo fin último es producir sonido? ¿Qué podría pasar si lo acercaba a una de mis maneras, el dibujo? El sonido en términos gráficos puede traducirse más allá de blancas, corcheas y semicorcheas.';		
	ponerVideo(enlace, true)
}

function videoAfuera()
{
	var enlace = 'a4videos/afuera.mp4';
	
	divTextoProyecto.innerHTML = '<b>Título: </b>Afuera</br></br>' +
	'<b>Autor: </b>Juana Valentina Rey Londoño, Nicolás Umaña Cuellar, Luis Miguel Gonzalez Rodriguez, Isabel Castellanos Buraye, Laura Daniela Mancera Rodriguez, Angie Daniela Moreno Parra, María Paula Ruiz Ortegón, Pedro Andrés Pérez Paz, Daniela Melendez Baer, Ana Heshusius Sancho, María Nathalia Molina González, Raquel Páez Guzmán, Vanessa Gonzalez Acuña, Valentina Acevedo Castro</br></br>' +
	'<b>Técnica: </b>Video</br></br>' +
	'<b>Año:</b> 2020</br></br>' +
	'';		
	ponerVideo(enlace, true)
}

function videoRojo()
{
	var enlace = 'a4videos/rojo.mp4';
	
	divTextoProyecto.innerHTML = '<b>Título: </b>Afuera</br></br>' +
	'<b>Autor: </b>Juana Valentina Rey Londoño, Nicolás Umaña Cuellar, Luis Miguel Gonzalez Rodriguez, Isabel Castellanos Buraye, Laura Daniela Mancera Rodriguez, Angie Daniela Moreno Parra, María Paula Ruiz Ortegón, Pedro Andrés Pérez Paz, Daniela Melendez Baer, Ana Heshusius Sancho, María Nathalia Molina González, Raquel Páez Guzmán, Vanessa Gonzalez Acuña, Valentina Acevedo Castro</br></br>' +
	'<b>Técnica: </b>Video</br></br>' +
	'<b>Año:</b> 2020</br></br>' +
	'';		
	ponerVideo(enlace, true)
}


function ponerVideo(enlace, controlesDeVideo)
{
	contenedorProyectos.innerHTML = '';
	contenedorProyectos.style.display = 'block';
	spanX.style.display = 'block';
	audioNav.pause();	
	estaEnMenu = false;	
	
	var videoContenedor = cE('div', contenedorProyectos);
	videoContenedor.className = 'pantallaCompleta';
	
	var video = cE('video', videoContenedor)
	video.src = enlace;
	video.loop = true;
	
	if(Explorador.browser == 'Chrome')
	{	
		descargaPopup.style.display = 'block';

		video.oncanplaythrough = function() 
		{
			descargaPopup.style.display = 'none';
			
			if(!estaEnMenu)
			{
				video.play();
			}
		};
	}
	else
	{	
		video.play();
	}
	
	if(controlesDeVideo)
	{
		video.controls = true
	}
}