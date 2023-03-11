
var SpeechRecognition;
var SpeechGrammarList;
var SpeechRecognitionEvent;
var synth;
var contadorResultados;
var enlaceAudio;

function reconocerVoz()
{	
	contenedorProyectos.innerHTML = '';
	contenedorProyectos.style.display = 'block';
	spanX.style.display = 'block';
	audioNav.pause();	
	
	divTextoProyecto.innerHTML = 'Internautas</br></br>' +
	'Autores: Vanessa Feijoo, Pablo Andrés Lopez, Juana Valeria Forero, Laura Lozano, Valentina Anzola, Katherine Clavijo, Nathalia Valdes, María Alejandra Valderrama, Valentina Peña.</br></br>' +
	'Programación Web: Alejandro Forero</br></br>' +
	'Acá, la acumulación de una serie de imágenes pertenecientes a un contexto cotidiano, que en un periodo de confinamiento terminan por convertirse en aspiraciones lejanas. Estos deseos se radicalizan de manera proporcional al tiempo que se emplea en redes sociales y en las plataformas virtuales que los estimulan. </br>' +
'¿Deseamos-hacemos- narramos o narramos-deseamos-hacemos?</br></br>' +
'¿Cómo opera el control de nuestro albedrío?'
	
	contadorResultados = 0;
	enlaceAudio = 0;
	
	if(Explorador.browser == 'Chrome')
	{
		synth = window.speechSynthesis;
			
		SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
		SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
		SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent	
		
		var divReconocimiento = cE('div', contenedorProyectos);
		divReconocimiento.style.height = window.innerHeight + 'px';
		
		reconocimientoDeVoz = new ReconocimientoDeVoz();
		reconocimientoDeVoz.contenedor = divReconocimiento;
		reconocimientoDeVoz.construirReconocimientoDeVoz();	
		
		var texto = 'Hola, cúentame ¿qué extrañas hacer?';
		
		var utterance = new SpeechSynthesisUtterance(texto)
		utterance.pitch = 5;
		utterance.volume = 0.8;
		utterance.rate = 0.4;
		utterance.lang = 'es-MX';
		
		//synth.speak(utterance);	
	}
	else
	{
		contenedorProyectos.innerHTML = 'Este proyecto sólo se puede ver en Chrome';
		
		var div = cE('div', contenedorProyectos);
		div.innerHTML = 'Este proyecto sólo se puede ver en el navegador Google Chrome';
		div.style.height = window.innerHeight + 'px';
	}
}

function construirReconocimientoDeVoz()
{
	thisRec = this;
	
	var grammar = '#JSGF V1.0';
	
	thisRec.reconocimientoObj = new SpeechRecognition();
	
	thisRec.listaGramatical = new SpeechGrammarList();
	thisRec.listaGramatical.addFromString(grammar, 1);
	
	thisRec.reconocimientoObj.grammars = thisRec.listaGramatical;
	thisRec.reconocimientoObj.continuous = false;
	thisRec.reconocimientoObj.lang = 'es';
	thisRec.reconocimientoObj.interimResults = false;
	thisRec.reconocimientoObj.maxAlternatives = 1;
	
	thisRec.reconocimientoObj.onresult = function(event)
	{
		thisRec.resultadosReconocimiento(event);
		
		contadorResultados++;
	}
	
	thisRec.reconocimientoObj.onend = function() 
	{ 
		thisRec.alterminarReconocimiento();
	}	
	
	thisRec.reconocimientoObj.onnomatch = function() 
	{ 
  		console.log('Speech not recognized'); 
	}
	
	thisRec.construirEstructuraReconocimiento();		
}


function construirEstructuraReconocimiento()
{
	var thisRec = this;
	
	thisRec.contenedor.id = 'reconocimientoContenedorGeneral';
	
	thisRec.pregunta = 'Hola, cliquea en el micrófono y cúentame ¿qué extrañas hacer durante esta época de confinamiento?';
	thisRec.textoEsperando = 'Te escucho';	
	
	thisRec.spanPregunta = cE('div', thisRec.contenedor);
	thisRec.spanPregunta.id = 'spanPreguntaNathalia';
	thisRec.spanPregunta.innerHTML = thisRec.pregunta;		
	
	var div = cE('div', thisRec.contenedor);
	
	thisRec.img = cE('img', div);
	thisRec.img.src = 'a2imagenes/microfono2.png';
	thisRec.img.id = 'microfono';
	
	thisRec.img.onclick = function()
	{
		var texto = 'Te escucho';
		
		var utterance = new SpeechSynthesisUtterance(texto)
		utterance.pitch = 5;
		utterance.volume = 0.8;
		utterance.rate = 0.4;
		utterance.lang = 'es-MX';
		
		//synth.speak(utterance);
		
		thisRec.spanPregunta.innerHTML = thisRec.textoEsperando;
		thisRec.img.className = 'prendido';
		thisRec.reconocimientoObj.start();
	}
	
	thisRec.divPalabras = cE('div', thisRec.contenedor)
	thisRec.divPalabras.innerHTML = '';
	
	thisRec.divResultados = cE('div', thisRec.contenedor)
	thisRec.divResultados.innerHTML = '';	
}


function alterminarReconocimiento()
{
	var thisRec = this;	
	
	thisRec.pregunta = 'Cliquea nuevamente y cuéntame más...'
	
	thisRec.spanPregunta.innerHTML = thisRec.pregunta;
	thisRec.img.className = 'apagado';
	
	setTimeout(function()
	{
		var texto = 'Cuéntame, ¿qué más extrañas hacer?';
		
		var utterance = new SpeechSynthesisUtterance(texto)
		utterance.pitch = 5;
		utterance.volume = 0.8;
		utterance.rate = 0.4;
		utterance.lang = 'es-MX';
		
		//synth.speak(utterance);	
	}, 1400);
}


function pegarImagen(imagen)
{
	if(window.innerWidth > 800)
	{
		var ancho = Math.floor(Math.random()*(window.innerWidth/4 - window.innerWidth/8) + window.innerWidth/8);	
		var posX = Math.floor(Math.random()*(window.innerWidth/4) + window.innerWidth/4);	
		var posY = Math.floor(Math.random()*(window.innerHeight - window.innerHeight/2) + window.innerHeight/10);
	}
	else
	{
		var ancho = Math.floor(Math.random()*(window.innerWidth/1.5 - window.innerWidth/2) + window.innerWidth/2);	
		var posX = Math.floor(Math.random()*(window.innerWidth/1.4));	
		var posY = Math.floor(Math.random()*(window.innerHeight - window.innerHeight/2) + window.innerHeight/6);		
	}
	
	
	var img = cE('img', thisRec.divResultados);
	img.className = 'collage';		
	img.src = imagen;	
	img.style.width = ancho + 'px';
	img.style.left = posX + 'px';
	img.style.top = posY + 'px';
	
	var animacion = Math.floor(Math.random() * 4);
	
	if(contadorResultados <=1)
	{
		var tiempo = 7;
	}
	else if(contadorResultados > 1 && contadorResultados <=3 )
	{
		var tiempo = Math.random()*4 + 1;
	}
	else if(contadorResultados > 3 && contadorResultados <=5 )
	{
		var tiempo = Math.random()*2;
	}
	else
	{
		var tiempo = Math.random();
	}	
	
	var rotacion = Math.floor((Math.random() * -30) + 15);
		
	img.style.transform = 'rotate(' + rotacion + 'deg)';
	
	if(animacion == 0)
	{
		img.style.animation = "rotarY " + tiempo + "s alternate infinite";
	}
	else if(animacion == 1)
	{
		img.style.animation = "rotarY " + tiempo + "s infinite";
	}
	else if(animacion == 2)
	{
		img.style.animation = "roll " + tiempo + "s alternate infinite";
	}
	else
	{
		img.style.animation = "roll " + tiempo + "s infinite";
	}
}

function resultadosReconocimiento(e)
{
	var thisRec = this;	
	
	var noOpcion = true;
	
	var respuesta = e.results[0][0].transcript;		
	
	if(respuesta.includes("acampar"))
	{
		noOpcion = false;
		pegarImagen('a2imagenes/collage/0.png');	
	}
	
	if(respuesta.includes("mar"))	
	{
		noOpcion = false;
		pegarImagen('a2imagenes/collage/64.png');
	}
	
	if(respuesta.includes("abrazar"))	
	{
		noOpcion = false;
		pegarImagen('a2imagenes/collage/77.png');		
	}
	
	if(respuesta.includes("acariciar"))	
	{
		noOpcion = false;
		pegarImagen('a2imagenes/collage/1.png');
		pegarImagen('a2imagenes/collage/77.png');
	}
	
	if(respuesta.includes("aire libre"))	
	{
		noOpcion = false;
		pegarImagen('a2imagenes/collage/14.png');
	}
	
	if(respuesta.includes("amigas"))	
	{
		noOpcion = false;
		pegarImagen('a2imagenes/collage/2.png');
	}
	
	if(respuesta.includes("amigos"))	
	{
		noOpcion = false;
		pegarImagen('a2imagenes/collage/3.png');		
		pegarImagen('a2imagenes/collage/36.png');
		pegarImagen('a2imagenes/collage/57.png');		
	}
	
	if(respuesta.includes("arboles"))	
	{
		noOpcion = false;
		pegarImagen('a2imagenes/collage/4.png');
	}
	
	if(respuesta.includes("arena"))	
	{
		noOpcion = false;
		pegarImagen('a2imagenes/collage/64.png');
	}
	
	if(respuesta.includes("asado"))	
	{
		noOpcion = false;
		pegarImagen('a2imagenes/collage/5.png');
	}
	
	if(respuesta.includes("bailar"))	
	{
		noOpcion = false;
		pegarImagen('a2imagenes/collage/6.png');		
	}	
	
	if(respuesta.includes("bar"))	
	{
		noOpcion = false;
		pegarImagen('a2imagenes/collage/7.png');
	}
	
	if(respuesta.includes("bbc"))	
	{
		noOpcion = false;
		pegarImagen('a2imagenes/collage/8.png');		
	}
	
	if(respuesta.includes("beber"))	
	{
		noOpcion = false;
		pegarImagen('a2imagenes/collage/65.png');
		pegarImagen('a2imagenes/collage/57.png');		
	}		
	
	if(respuesta.includes("besar") || respuesta.includes("beso"))	
	{
		noOpcion = false;
		pegarImagen('a2imagenes/collage/54.png');
		pegarImagen('a2imagenes/collage/77.png');		
	}
	
	if(respuesta.includes("bicicleta") ||  respuesta.includes("bici"))	
	{
		noOpcion = false;
		pegarImagen('a2imagenes/collage/9.png');		
	}
	
	if(respuesta.includes("burlar"))	
	{
		noOpcion = false;
		pegarImagen('a2imagenes/collage/10.png');
	}
	
	if(respuesta.includes("cafe"))	
	{
		noOpcion = false;
		pegarImagen('a2imagenes/collage/82.png');	
	}
	
	if(respuesta.includes("cali"))	
	{
		noOpcion = false;
		pegarImagen('a2imagenes/collage/11.png');
	}
	
	if(respuesta.includes("calle"))	
	{
		noOpcion = false;
		pegarImagen('a2imagenes/collage/12.png');
		pegarImagen('a2imagenes/collage/13.png');
	}
	
	if(respuesta.includes("caminar"))	
	{
		noOpcion = false;
		pegarImagen('a2imagenes/collage/14.png');
	}
	
	if(respuesta.includes("campo"))	
	{
		noOpcion = false;
		pegarImagen('a2imagenes/collage/15.png');
	}
	
	if(respuesta.includes("carnaval"))	
	{
		noOpcion = false;
		pegarImagen('a2imagenes/collage/16.png');
	}
	
	if(respuesta.includes("carretera"))	
	{
		noOpcion = false;
		pegarImagen('a2imagenes/collage/82.png');		
	}
	
	if(respuesta.includes("centro comercial"))	
	{
		noOpcion = false;
		pegarImagen('a2imagenes/collage/17.png');
	}	
	
	if(respuesta.includes("cerveza") || respuesta.includes("cerveceria"))	
	{
		noOpcion = false;
		pegarImagen('a2imagenes/collage/8.png');
		pegarImagen('a2imagenes/collage/19.png');		
	}	
	
	if(respuesta.includes("cicla"))	
	{
		noOpcion = false;
		pegarImagen('a2imagenes/collage/9.png');		
	}
	
	if(respuesta.includes("chocolate"))	
	{
		noOpcion = false;
		pegarImagen('a2imagenes/collage/20.png');		
	}
	
	if(respuesta.includes("cholado"))	
	{
		noOpcion = false;
		pegarImagen('a2imagenes/collage/21.png');		
	}
	
	if(respuesta.includes("cine"))	
	{
		noOpcion = false;
		pegarImagen('a2imagenes/collage/22.png');		
	}
	
	if(respuesta.includes("cocheros"))	
	{
		noOpcion = false;
		pegarImagen('a2imagenes/collage/23.png');		
	}
	
	if(respuesta.includes("comprar") || respuesta.includes("compras"))	
	{
		noOpcion = false;
		pegarImagen('a2imagenes/collage/24.png');
		pegarImagen('a2imagenes/collage/25.png');		
	}
	
	if(respuesta.includes("conciertos"))	
	{
		noOpcion = false;
		pegarImagen('a2imagenes/collage/26.png');
		pegarImagen('a2imagenes/collage/35.png');
	}
	
	if(respuesta.includes("conducir"))	
	{
		noOpcion = false;
		pegarImagen('a2imagenes/collage/46.png');	
	}
	
	if(respuesta.includes("conferencia"))	
	{
		noOpcion = false;
		pegarImagen('a2imagenes/collage/27.png');	
	}
	
	if(respuesta.includes("correr"))	
	{
		noOpcion = false;
		pegarImagen('a2imagenes/collage/79.png');	
	}
	
	if(respuesta.includes("culiar") || respuesta.includes("culear"))	
	{
		noOpcion = false;
		pegarImagen('a2imagenes/collage/37.png');	
	}
	
	if(respuesta.includes("decidir"))	
	{
		noOpcion = false;
		pegarImagen('a2imagenes/collage/29.png');	
	}
	
	if(respuesta.includes("emborracharse"))	
	{
		noOpcion = false;
		pegarImagen('a2imagenes/collage/57.png');		
	}
	
	if(respuesta.includes("empanadas"))	
	{
		noOpcion = false;
		pegarImagen('a2imagenes/collage/31.png');	
	}
	
	if(respuesta.includes("entrenar"))	
	{
		noOpcion = false;
		pegarImagen('a2imagenes/collage/32.png');	
	}
	
	if(respuesta.includes("estadio"))	
	{
		noOpcion = false;
		pegarImagen('a2imagenes/collage/34.png');	
	}
	
	if(respuesta.includes("estudiar"))	
	{
		noOpcion = false;
		pegarImagen('a2imagenes/collage/80.png');	
	}
	
	if(respuesta.includes("eucaristia"))	
	{
		noOpcion = false;
		pegarImagen('a2imagenes/collage/43.png');	
	}
	
	if(respuesta.includes("festival") || respuesta.includes("festivales"))	
	{
		noOpcion = false;
		pegarImagen('a2imagenes/collage/35.png');	
	}		
	
	if(respuesta.includes("fiesta") )	
	{
		noOpcion = false;
		pegarImagen('a2imagenes/collage/6.png');
		pegarImagen('a2imagenes/collage/36.png');		
	}
	
	if(respuesta.includes("follar"))	
	{
		noOpcion = false;
		pegarImagen('a2imagenes/collage/37.png');	
	}
	
	if(respuesta.includes("futbol"))	
	{
		noOpcion = false;
		pegarImagen('a2imagenes/collage/38.png');	
	}
	
	if(respuesta.includes("fumar"))	
	{
		noOpcion = false;
		pegarImagen('a2imagenes/collage/39.png');	
	}
	
	if(respuesta.includes("gimnasio"))	
	{
		noOpcion = false;
		pegarImagen('a2imagenes/collage/40.png');	
	}
	
	if(respuesta.includes("gritar"))	
	{
		noOpcion = false;
		pegarImagen('a2imagenes/collage/41.png');	
	}
	
	if(respuesta.includes("hablar"))	
	{
		noOpcion = false;
		pegarImagen('a2imagenes/collage/42.png');	
	}
	
	if(respuesta.includes("hamburguesa"))	
	{
		noOpcion = false;
		pegarImagen('a2imagenes/collage/70.png');	
	}
	
	if(respuesta.includes("iglesia"))	
	{
		noOpcion = false;
		pegarImagen('a2imagenes/collage/43.png');	
	}
	
	if(respuesta.includes("lasagna") || respuesta.includes("lasaña"))	
	{
		noOpcion = false;
		pegarImagen('a2imagenes/collage/44.png');	
	}
	
	if(respuesta.includes("liga"))	
	{
		noOpcion = false;
		pegarImagen('a2imagenes/collage/34.png');	
	}
	
	if(respuesta.includes("lulada"))	
	{
		noOpcion = false;
		pegarImagen('a2imagenes/collage/45.png');	
	}
	
	if(respuesta.includes("manejar"))	
	{
		noOpcion = false;
		pegarImagen('a2imagenes/collage/46.png');	
	}
	
	if(respuesta.includes("tomar"))	
	{
		noOpcion = false;
		pegarImagen('a2imagenes/collage/3.png');
		pegarImagen('a2imagenes/collage/36.png');
		pegarImagen('a2imagenes/collage/57.png');
		pegarImagen('a2imagenes/collage/78.png');		
	}		
	
	if(respuesta.includes("marchas") || respuesta.includes("marchar"))	
	{
		noOpcion = false;
		pegarImagen('a2imagenes/collage/47.png');	
	}
	
	if(respuesta.includes("mercar") || respuesta.includes("mercado"))	
	{
		noOpcion = false;
		pegarImagen('a2imagenes/collage/48.png');	
	}
	
	if(respuesta.includes("misa"))	
	{
		noOpcion = false;
		pegarImagen('a2imagenes/collage/43.png');	
	}
	
	if(respuesta.includes("monserrate"))	
	{
		noOpcion = false;
		pegarImagen('a2imagenes/collage/14.png');
	}
	
	if(respuesta.includes("montaña"))	
	{
		noOpcion = false;
		pegarImagen('a2imagenes/collage/49.png');	
		pegarImagen('a2imagenes/collage/50.png');
	}
	
	if(respuesta.includes("nadar"))	
	{
		noOpcion = false;
		pegarImagen('a2imagenes/collage/51.png');	
	}
	
	if(respuesta.includes("naturaleza"))	
	{
		noOpcion = false;
		pegarImagen('a2imagenes/collage/52.png');	
	}
	
	if(respuesta.includes("noche"))	
	{
		noOpcion = false;
		pegarImagen('a2imagenes/collage/59.png');		
	}
	
	if(respuesta.includes("novia"))	
	{
		noOpcion = false;
		pegarImagen('a2imagenes/collage/53.png');
		
	}
	
	if(respuesta.includes("novio"))	
	{
		noOpcion = false;

		pegarImagen('a2imagenes/collage/54.png');
		pegarImagen('a2imagenes/collage/77.png');	
	}
	
	
	if(respuesta.includes("oblea") || respuesta.includes("obleas"))	
	{
		noOpcion = false;
		pegarImagen('a2imagenes/collage/55.png');	
	}
	
	if(respuesta.includes("oxxo") || respuesta.includes("ocso"))	
	{
		noOpcion = false;
		pegarImagen('a2imagenes/collage/56.png');	
	}
	
	if(respuesta.includes("parchar"))	
	{
		noOpcion = false;
		pegarImagen('a2imagenes/collage/57.png');	
	}	
	
	if(respuesta.includes("parchar"))	
	{
		noOpcion = false;
		pegarImagen('a2imagenes/collage/35.png');
		pegarImagen('a2imagenes/collage/57.png');
		pegarImagen('a2imagenes/collage/3.png');
		pegarImagen('a2imagenes/collage/36.png');		
	}
	
	if(respuesta.includes("paro"))	
	{
		noOpcion = false;
		pegarImagen('a2imagenes/collage/58.png');		
	}	
	
	if(respuesta.includes("parque"))	
	{
		noOpcion = false;
		pegarImagen('a2imagenes/collage/59.png');		
	}
	
	if(respuesta.includes("paseo"))	
	{
		noOpcion = false;
		pegarImagen('a2imagenes/collage/60.png');		
	}
		
	if(respuesta.includes("partido"))	
	{
		noOpcion = false;
		pegarImagen('a2imagenes/collage/34.png');	
	}
	
	if(respuesta.includes("patineta"))	
	{
		noOpcion = false;
		pegarImagen('a2imagenes/collage/73.png');	
	}
	
	if(respuesta.includes("perreo") || respuesta.includes("perrear"))	
	{
		noOpcion = false;
		pegarImagen('a2imagenes/collage/6.png');
		pegarImagen('a2imagenes/collage/61.png');		
	}
	
	if(respuesta.includes("ping pong") || respuesta.includes("pin pon"))	
	{
		noOpcion = false;
		pegarImagen('a2imagenes/collage/62.png');	
	}
	
	if(respuesta.includes("piscina"))	
	{
		noOpcion = false;
		pegarImagen('a2imagenes/collage/63.png');	
	}
	
	if(respuesta.includes("playa"))	
	{
		noOpcion = false;
		pegarImagen('a2imagenes/collage/64.png');	
	}
	
	if(respuesta.includes("pueblo") || respuesta.includes("pueblito"))	
	{
		noOpcion = false;
		pegarImagen('a2imagenes/collage/67.png');	
	}
	
	if(respuesta.includes("reir"))	
	{
		noOpcion = false;
		pegarImagen('a2imagenes/collage/68.png');	
	}
	
	if(respuesta.includes("respirar"))	
	{
		noOpcion = false;
		pegarImagen('a2imagenes/collage/69.png');
		pegarImagen('a2imagenes/collage/14.png');	
	}
	
	if(respuesta.includes("reggaeton") || respuesta.includes("regueton"))	
	{
		noOpcion = false;
		pegarImagen('a2imagenes/collage/6.png');		
	}
		
	if(respuesta.includes("rio"))	
	{
		noOpcion = false;
		pegarImagen('a2imagenes/collage/71.png');	
	}
	
	if(respuesta.includes("rumba"))	
	{
		noOpcion = false;
		pegarImagen('a2imagenes/collage/6.png');		
	}
	
	if(respuesta.includes("vino"))	
	{
		noOpcion = false;
		pegarImagen('a2imagenes/collage/72.png');	
	}	
	
	if(respuesta.includes("sendero"))	
	{
		noOpcion = false;
		pegarImagen('a2imagenes/collage/14.png');
	}
	
	if(respuesta.includes("skate"))	
	{
		noOpcion = false;
		pegarImagen('a2imagenes/collage/73.png');	
	}
	
	if(respuesta.includes("sushi"))	
	{
		noOpcion = false;
		pegarImagen('a2imagenes/collage/74.png');	
	}
	
	if(respuesta.includes("tatuar") || respuesta.includes("tatuarse") || respuesta.includes("tatuaje"))	
	{
		noOpcion = false; 
		pegarImagen('a2imagenes/collage/75.png');	
	}
	
	if(respuesta.includes("tierra caliente"))	
	{
		noOpcion = false;
		pegarImagen('a2imagenes/collage/76.png');	
	}
	
	if(respuesta.includes("tirar"))	
	{
		noOpcion = false;
		pegarImagen('a2imagenes/collage/37.png');	
	}
	
	if(respuesta.includes("tocar"))	
	{
		noOpcion = false;
		pegarImagen('a2imagenes/collage/77.png');	
	}	
	
	if(respuesta.includes("trotar"))	
	{
		noOpcion = false;
		
		pegarImagen('a2imagenes/collage/79.png');	
	}
	
	if(respuesta.includes("universidad"))	
	{
		noOpcion = false;
		
		pegarImagen('a2imagenes/collage/80.png');	
	}	
	
	if(respuesta.includes("vacaciones"))	
	{
		noOpcion = false;
		
		pegarImagen('a2imagenes/collage/51.png');
		pegarImagen('a2imagenes/collage/60.png');
		pegarImagen('a2imagenes/collage/63.png');
		pegarImagen('a2imagenes/collage/64.png');	
	}
	
	if(respuesta.includes("varietale"))	
	{
		noOpcion = false;
		
		pegarImagen('a2imagenes/collage/81.png');	
	}
	
	if(respuesta.includes("viajar") || respuesta.includes("viaje"))	
	{
		noOpcion = false;
		
		pegarImagen('a2imagenes/collage/60.png');
		pegarImagen('a2imagenes/collage/82.png');
		pegarImagen('a2imagenes/collage/84.png');		
	}
	
	if(respuesta.includes("vitrinear"))	
	{
		noOpcion = false;
		pegarImagen('a2imagenes/collage/17.png');
	}
	
	
	if(respuesta.includes("pola"))	
	{
		noOpcion = false;
		pegarImagen('a2imagenes/collage/65.png');
		pegarImagen('a2imagenes/collage/66.png');	
	}
	
	if(respuesta.includes("marchas") || respuesta.includes("marchar"))	
	{
		noOpcion = false;
		pegarImagen('a2imagenes/collage/47.png');	
	}
	
	if(noOpcion)
	{
		alert('no entiendo lo que dices');		
	}
	else
	{
		if(enlaceAudio > 5)
		{
			enlaceAudio = 0;	
		}
		
		var audio = cE('audio', contenedorProyectos);	
		audio.src = 'a3audio/collage/' + enlaceAudio + '.mp3';
		audio.loop = true;
		audio.volume = 0.1;
		audio.play();
		
		enlaceAudio++;
	}
}

function ReconocimientoDeVoz()
{	
	this.construirReconocimientoDeVoz = construirReconocimientoDeVoz;
	
	this.listaDePalabras = [];
	
	//this.resultados = resultados;
	this.alterminarReconocimiento = alterminarReconocimiento;
	
	this.construirEstructuraReconocimiento = construirEstructuraReconocimiento;
	this.resultadosReconocimiento = resultadosReconocimiento;
}