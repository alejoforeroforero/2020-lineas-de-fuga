var introPopup;
var textoPopup;
var descargaPopup;
var contenedorNodos;
var contenedorProyectos;
var infoCreditosProyecto;
var divTextoProyecto;
var spanX;
var audioNav;
var estaEnMenu;
var videoPlayer;

function construirPc()
{
	crearContenedores();
}

function construirMoviles()
{
	alert('Este proyecto funciona sólo en computadoras');
	
	crearContenedores();	
}

function crearContenedores()
{
	descargaPopup = cE('div', document.body);
	descargaPopup.id = 'descargaPopup';
	
	var img = cE('img', descargaPopup)
	img.src = 'a2imagenes/loading.gif';
	
	introPopup = cE('div', document.body);
	introPopup.id = 'introPopup';
	
	audioNav = cE('audio', document.body);
	audioNav.id = 'audioNav';
	audioNav.loop = true;
	audioNav.src = 'a3audio/sonido.mp3?n=1';	
	
	textoPopup = cE('div', document.body);
	textoPopup.id = 'textoPopup';
	
	contenedorProyectos = cE('div', document.body);	
	contenedorProyectos.innerHTML = '';
	contenedorProyectos.id = 'contenedorProyectos';	
	
	spanX = cE('span', document.body);
	spanX.innerHTML = 'x';
	spanX.id = 'spanX';
	spanX.onclick = function()
	{
		estaEnMenu = true;
		
		contenedorProyectos.className ='desaparecer';
		
		spanX.style.display = 'none';
		descargaPopup.style.display = 'none';		
		divCreditosProyecto.style.display = 'none';	
		infoCreditosProyecto.style.display = 'none';
		divTextoProyecto.innerHTML = '';
		
		if(imagenesLuzIntervalo != null)
		{
			clearInterval(imagenesLuzIntervalo);
			imagenesLuzIntervalo = null;
		}		
		
		if(videoLuz)
		{
			if(videoLuz.timeout != null)
			{
				clearTimeout(videoLuz.timeout);
				videoLuz.timeout = null;
			}
			
			if(videoLuz.timeoutP != null)
			{
				clearTimeout(videoLuz.timeoutP);
				videoLuz.timeoutP = null;
			}
			
			videoLuz.contenedor.innerHTML ='';
			
			for(var i=0; i<videoLuz.zonas.length; i++)
			{
				var zona = 	videoLuz.zonas[i];
				zona.contenedor.style.display = 'none';
			}
			
			videoLuz.cambiarFondo = false;
			videoLuz = null;	
		}
		
		var audios = document.getElementsByTagName("audio");
		
		for(var i=0; i<audios.length; i++)
		{
			var audioObj = audios[i];
					
			audioObj.pause();
			
			audioObj.parentNode.removeChild(audioObj);	
		}		
		
		var videos = document.getElementsByTagName("video");
		
		for(var i=0; i<videos.length; i++)
		{
			var video = videos[i];
			
			video.pause();
			
			video.parentNode.removeChild(video);	
		}		
		
		setTimeout(function()
		{		
			contenedorProyectos.innerHTML = '';
			contenedorProyectos.style.display = 'none';
			
			var videos = document.getElementsByTagName("video");
			
			for(var i=0; i<videos.length; i++)
			{
				var video = videos[i];
				
				video.pause();
				
				video.parentNode.removeChild(video);	
			}
			
			var audios = document.getElementsByTagName("audio");
			
			for(var i=0; i<audios.length; i++)
			{
				var audioObj = audios[i];
						
				audioObj.pause();
				
				audioObj.parentNode.removeChild(audioObj);	
			}
			
			audioNav = cE('audio', document.body);
			audioNav.loop = true;
			audioNav.id = 'audioNav';
			audioNav.src = 'a3audio/sonido.mp3?n=1';
			
			audioNav.play();
		}, 900);
	}
	
	crearPopupInicio();
	
	divCreditosProyecto = cE('div', document.body);
	divCreditosProyecto.id = 'divCreditosProyecto';

	divTextoProyecto = cE('div', divCreditosProyecto);
	divTextoProyecto.innerHTML = 'Créditos proyecto';
	
	var div = cE('div', divCreditosProyecto);
	div.className = 'cerrar';
	
	var span = cE('span', div);		
	span.innerHTML = 'x';
	
	span.addEventListener('click', function()
	{		
		divCreditosProyecto.className = 'desaparecerIzq';
		
		setTimeout(function()
		{
			divCreditosProyecto.style.display = 'none';	
		}, 2000);
	});
	
	infoCreditosProyecto = cE('div', document.body);
	infoCreditosProyecto.id = 'infoCreditosProyecto';
	infoCreditosProyecto.innerHTML = 'i';	
	
	infoCreditosProyecto.addEventListener('click', function()
	{
		divCreditosProyecto.className = 'aparecerIzq';
		divCreditosProyecto.style.display = 'block';	
	});	
	
	
	
	/*******/
	
	var divCreditos = cE('div', document.body);
	divCreditos.id = 'divCreditos';
	
	var div = cE('div', divCreditos);
	div.innerHTML = 'Líneas de Fuga desde el confinamiento es un proceso de confabulación creativa en constante despliegue con la urgencia de crear y re-crear otras formas de sentir, dialogar, idear, aprehender en tiempos de aislamiento; <br>'+
'colaborar en procura de no confundir distanciamiento físico con distanciamiento social, <br>'+
'con la urgencia de re-componernos en comunidad cuando acecha el sinsentido existencial.';

	var div = cE('div', divCreditos);
	div.innerHTML = 'El acto de creación es un acto de resistencia, nos dice Deleuze, y lo es<br>'+
'porque interroga los órdenes dominantes que asfixian las heterogeneidades, <br>'+
'porque cuestiona en especial aquellos argumentos que nos seducen a pensarnos como individuos, sujetos divididos “por naturaleza” entre cuerpo/mente, cultura/naturaleza, humano/animal(virus), cada uno sujeto a cuidar “de sí” y “para sí”.';

	var div = cE('div', divCreditos);
	div.innerHTML = 'Crear es resistir, no contra el virus, sino contra la indiferencia, <br>'+
'finalmente, la vida es una potencia que incesantemente excede sus propias formas y manifestaciones, mezclándonos constantemente unos en otros: nuestro ADN es el resultado de una milenaria fusión y fisión de ADN viral, vegetal, animal, en un reensamblaje cooperativo de las moléculas del cosmos.';

	var div = cE('div', divCreditos);
	div.innerHTML = 'Crear es resistir, no en una batalla contra el virus,<br>'+
 'ya estamos más que agotados por la metáfora de la guerra que legitima alzarse en batalla para anular a esos Otros (terroristas, malezas, virus,…), otros modos de ser y existir, las metáforas de la guerra prolonga el ejercicio del poder de unos sobre Otros.';
 
 	var div = cE('div', divCreditos);
	div.innerHTML = 'Dejemos de pensarnos en guerra y enfoquemos nuestras movilizaciones para crear otros mundos, otras dimensiones relacionales con sus inherentes tensiones, desencuentros y por esto mismo, re-creaciones. Adoptar esta responsabilidad implica un compromiso constante por reconocernos y probar nuevas alianzas, <br>'+
'perfilar otras narraciones,<br>'+ 
'dilucidar otras sombras,<br>'+ 
'para que el exceso de luz no nos deslumbre.<br>'+
'Crear<br>'+
'para que siempre quepa Otro que sea diferente a Uno mismo.';

	var div = cE('div', divCreditos);
	div.innerHTML = '***************************';

	var div = cE('div', divCreditos);
	div.innerHTML = 'Dirección: María del Pilar Santamaría y Alejandro Forero';
	
	var div = cE('div', divCreditos);
	div.innerHTML = 'Programación Web: Alejandro Forero';
	
	var div = cE('div', divCreditos);
	div.className = 'cerrar';
	
	var span = cE('span', div);		
	span.innerHTML = 'x';
	
	span.addEventListener('click', function()
	{
		divCreditos.style.display = 'none';	
	});
	
	var infoCreditos = cE('div', document.body);
	infoCreditos.id = 'infoCreditos';
	infoCreditos.innerHTML = 'i';	
	
	infoCreditos.addEventListener('click', function()
	{
		divCreditos.style.display = 'block';	
	});	
}

function crearPopupInicio()
{
	var div = cE('div', introPopup);
	div.innerHTML = 'Líneas de Fuga desde el confinamiento (LFC) es una apuesta de creación colaborativa de los miembros de la comunidad de computación física y artes electrónicas de la Pontificia Universidad Javeriana (estudiantes y docentes-Alejandro Forero y Pilar Santamaría Motta-), es un proceso de construir y re-construir nuevos espacios relacionales en respuesta al “aislamiento preventivo” decretado por la “pandemia del COVID-19” durante el primer semestre del 2020. ';
	
	var div = cE('div', introPopup);
	div.innerHTML = 'Para visualizar este proyecto, recomendamos el navegador Googgle Chrome y hacer uso de audifonos.';
	
	var div = cE('div', introPopup);
	div.id = 'cBoton';
	
	var span = cE('span', div);
	span.innerHTML = 'ENTRAR';
	span.className = 'boton';
	span.onclick = function()
	{
		introPopup.style.display = 'none';
		crearNodos();
		audioNav.play();
	}		
}