var nodoManager = new NodoManager();
var empezarAnimacion = false;
var contador = 0;
var tiempoMax = 900;
var tiempoMaxMoviles = 400;
var tiempoAceleracion = 140;
var velocidadPc = 42;
var velocidadMoviles = 14;

function crearNodos()
{	
	var tema = new Tema();
	tema.tema = '<b>Vigilar</b> <br> <br> '+
	'En la efervescencia de fenómenos que exceden nuestro aparente control, las formas de ejercer vigilancia se exacerban, ¿qué implicará la nueva normalidad en tanto que la frontera de lo íntimo, privado y público se desdibujan cuando el estado declara una emergencia sanitaria?';
	tema.id = 0;
	tema.color = '135, 120, 120';
	nodoManager.temas.push(tema);
	
	var tema = new Tema();
	tema.tema = '<b>Percibir </b> <br> <br> '+
'Confinarnos transforma las escalas que habitamos: las distancias devienen palmos, lo invisible se torna presencia contingente, lo inaudible resuena desde los poros, la disminución de extensión deviene intensidad sensible…';
	tema.id = 1;
	tema.color = '130, 140, 190';
	nodoManager.temas.push(tema);
	
	var tema = new Tema();
	tema.tema = '<b>Corporeidad e incorporaciones </b> <br> <br> '+
'Exploraciones entre los resquicios del confinamiento en busca de tornar porosas las fronteras de nuestro propio cuerpo…';
	tema.id = 2;
	tema.color = '90, 110, 60';
	nodoManager.temas.push(tema);
	
	ponerTemas();
}

function construirNodosCorporeidad(xPos, yPos)
{
	var texto = 'Afuera </br> Autores: Juana Valentina Rey Londoño, Nicolás Umaña Cuellar, Luis Miguel Gonzalez Rodriguez, Isabel Castellanos Buraye, Laura Daniela Mancera Rodriguez, Angie Daniela Moreno Parra, María Paula Ruiz Ortegón, Pedro Andrés Pérez Paz, Daniela Melendez Baer, Ana Heshusius Sancho, María Nathalia Molina González, Raquel Páez Guzmán, Vanessa Gonzalez Acuña, Valentina Acevedo Castro';
	crearNodo(xPos, yPos, videoAfuera, texto, 2, 1);
	
	var texto = 'Rojo </br> Autores: Juana Valentina Rey Londoño, Nicolás Umaña Cuellar, Luis Miguel Gonzalez Rodriguez, Isabel Castellanos Buraye, Laura Daniela Mancera Rodriguez, Angie Daniela Moreno Parra, María Paula Ruiz Ortegón, Pedro Andrés Pérez Paz, Daniela Melendez Baer, Ana Heshusius Sancho, María Nathalia Molina González, Raquel Páez Guzmán, Vanessa Gonzalez Acuña, Valentina Acevedo Castro';
	crearNodo(xPos, yPos, videoRojo, texto, 2, 1);
	
	var texto = 'Corporalidad del ruido blanco. </br> Autor: Alejandro Garcia Orjuela';
	//crearNodo(xPos, yPos, iframeRuidoBlanco, texto, 2, 3);
	
	var texto = 'Juan da Arrocito. </br> Autor: Sara Camila Rodríguez Sanchez';
	//crearNodo(xPos, yPos, iframeJuanDaRocito, texto, 2, 3);	
	
	var texto = 'Levantar un bosque. </br> Autor: Laura Castañeda León.';
	//crearNodo(xPos, yPos, iframeBosque, texto, 2, 3);
	
	var texto = 'Los tejidos entre los cuerpos. </br> Autor: Natalia Sofia Castillo Ramírez.';
	//crearNodo(xPos, yPos, iframeTejidosCuerpos, texto, 2, 3);
	
	var texto = 'Azucar en mi máquina. </br> Autor: Natalia Andrea Sombredero Niño.';
	//crearNodo(xPos, yPos, iframeAzucarMaquina, texto, 2, 3);
}

function construirNodosControl(xPos, yPos)
{
	var texto = 'Internautas </br> Autores: Vanessa Feijoo, Pablo Andrés Lopez, Juana Valeria Forero, Laura Lozano, Valentina Anzola, Katherine Clavijo, Nathalia Valdes, María Alejandra Valderrama, Valentina Peña.';
	if(Explorador.pc)
	{
		crearNodo(xPos, yPos, reconocerVoz, texto, 0, 1);
	}
	
	var texto = 'Del 1 al 44 (Nueva normalidad) </br> Autores: Vanessa Feijoo, Pablo Andrés Lopez, Juana Valeria Forero, Laura Lozano, Valentina Anzola, Katherine Clavijo, Carlos José Tarazona, Valentina Peña, Nathalia Valdes, María Alejandra Valderrama.';
	crearNodo(xPos, yPos, videosControl, texto, 0, 1);
	
	var texto = 'El Oráculo de los Tweets. </br> Autor: Maria José Madrigal A.';
	//crearNodo(xPos, yPos, iframeOraculo, texto, 0, 3);		
}

function construirNodosPercepcion(xPos, yPos)
{
	var texto = 'Luz Habitante </br> Autores: Angel David Hurtado, Enya Alexandra Fernandez, Valeria Borda Hernandez, Martha Catalina Gómez';
	crearNodo(xPos, yPos, luz, texto, 1, 1);
	
	var texto = 'Lo que se vierte en el espacio </br> Autores: Juan Sebastían Hernandez, Ana María Aragón, Isabella Fonseca, Enya Alexandra Fernandez';
	crearNodo(xPos, yPos, luz2, texto, 1, 1);
		
	var texto = 'Del sonido al papel. </br> Autor: Juan Nicolás Duarte';
	//crearNodo(xPos, yPos, videoJuanNicolas, texto, 1,3);
	
	var texto = 'Aislamiento Optimista. </br> Autores: Camila Dávila Pérez, Alejandro Guarín Gutiérrez, Laura Guarnizo Ferreira';
	//crearNodo(xPos, yPos, iframeAislamientoOptimista, texto, 1, 5);		
	
	var texto = 'Vida secreta en una habitación. </br> Autor: Juliana Vásquez B.';
	//crearNodo(xPos, yPos, iframeVidaSecreta, texto, 1, 3);
	
	var texto = 'Feel it, Live it. </br> Autor: Mercy Cedano.';
	//crearNodo(xPos, yPos, iframeFeelitliveit, texto, 1, 3);	
	
	var texto = 'Espacios Magnéticos: Radiestesia y Dispositivos Análogos. </br> Autor: Edward Campos';
	//crearNodo(xPos, yPos, iframeEspaciosMagneticos, texto, 1, 3);			
	
	var texto = 'Inmanencia </br> Autor: Valeria Montoya.';
	//crearNodo(xPos, yPos, iframeInmanencia, texto, 1, 3);
}

function setup() 
{
  	createCanvas(window.innerWidth, window.innerHeight/1.02);
}

function windowResized() 
{
  	resizeCanvas(window.innerWidth, window.innerHeight/1.02);
	
	contador = tiempoMax + 10;
	
	if(videoLuz)
	{
		videoLuz.construir();
	}
}

function draw() 
{		
	contador++;
	
	if(Explorador.pc)
	{	
		frameRate(velocidadPc);
	}
	else
	{
		frameRate(velocidadMoviles);
	}
	
	if(Explorador.pc)
	{	
		if(contador > tiempoMax)
		{		
			contador = 0;
			
			background('#fff');
			
			ponerTemas();
		}
	}
	else
	{
		if(contador > tiempoMaxMoviles)
		{		
			contador = 0;
			
			background('#fff');
			
			ponerTemas();
		}
	}	
	
	
	for(var i in nodoManager.temas)
	{		
		var tema = nodoManager.temas[i];					
		
		if(contador>tiempoAceleracion)
		{	
			if(tema.sumar)
			{		
				tema.xL++;	
				
			}
			else
			{
				tema.xL--;	
			}		
		}
		
		if(contador>tiempoAceleracion-20)
		{		
			var nY = Math.floor(Math.random() * 2) + 1;				
			
			if(nY > 1)
			{	
				tema.yL++;
			}
			else
			{
				tema.yL--;
			}
		}	
	}

	if(empezarAnimacion)	
	{	
		for (var i in nodoManager.nodos)
		{	
			var nodo = 	nodoManager.nodos[i];
			
			nodo.actualizarPosicion();	
		}
	}	
}
	
function ponerTemas()
{	
	var rangoX = window.innerWidth/nodoManager.temas.length;
	var rangoY = window.innerHeight - window.innerHeight/3;
	
	for(var i=0; i<nodoManager.temas.length; i++)
	{
		var tema = nodoManager.temas[i];
		
		var nSumar =  Math.floor(Math.random() * 2) + 1;
		
		tema.sumar = (nSumar > 1) ? true : false;
		
		if(tema.cambiarPosicion)
		{		
			var n = i+1;
			var xMax = rangoX*n;
			var xMin = rangoX*i;		
			
			var xPos = Math.floor(Math.random() * (window.innerWidth)) + 1;
			var yPos = Math.floor(Math.random() * (window.innerHeight)) + 1;
			
			if(xPos > window.innerWidth - 80)
			{
				xPos = window.innerWidth - 80;
			}
			
			if(xPos < 30)
			{
				xPos = 30;
			}
			
			if(yPos > window.innerHeight - window.innerHeight/4)
			{
				yPos = window.innerHeight - window.innerHeight/4;
			}
			
			if(yPos < 30)
			{
				yPos = 30;
			}
			
			tema.x = xPos;
			tema.y = yPos;
			tema.xL = xPos;
			tema.yL = yPos;
			
			tema.construirTema();
			
			if(!nodoManager.yaEstanTemas)
			{		
				if(i==0)
				{
					construirNodosControl(xPos, yPos);	
				}
				else if(i==1)
				{
					construirNodosPercepcion(xPos, yPos);	
				}
				else if(i==2)
				{
					construirNodosCorporeidad(xPos, yPos);	
				}
				
				if(i == nodoManager.temas.length-1)
				{
					nodoManager.yaEstanTemas = true;
					empezarAnimacion = true;				
				}
			}						
		}
		else
		{
			tema.xL = tema.x;
			tema.yL = tema.y;	
		}
	}	
}

function crearNodo(xPos, yPos, proyecto, texto, temaId, nIntegrantes)
{
	var xP = Math.floor(Math.random() * 60 + 60);
	var yP = Math.floor(Math.random() * 60 + 60);
	
	var nX = Math.floor(Math.random() * 2) + 1;
	var nY = Math.floor(Math.random() * 2) + 1;
	
	if(nX > 1)
	{	
		xP = xP*-1;
	}	
	
	if(nY > 1)
	{	
		yP = yP*-1;
	}
	
	var nodo = new Nodo()
	nodo.texto = texto + '</br> </br>' + '<b>Cliquea para ir al proyecto </b>';
	nodo.x = xPos + xP;
	nodo.y = yPos - yP;
	nodo.proyecto = proyecto;
	nodo.temaId = temaId;
	nodo.nIntegrantes = nIntegrantes;
	nodo.construirNodo();
	
	nodoManager.nodos.push(nodo);	
}

function NodoManager()
{
	this.nodos = [];
	this.temas = [];
}

function Tema()
{
	this.tema;
	this.id;
	this.texto;
	this.x;
	this.y;	
	this.color;
	this.cuerpo = null;
	this.construirTema = construirTema;
	this.mostrarTexto = mostrarTexto;
	this.ocultarTexto = ocultarTexto;
	this.estaMostrando = false;
	this.cambiarPosicion = true;
}

function construirTema()
{
	var thisObj = this; 
	
	if(!thisObj.cuerpo)
	{
		thisObj.cuerpo = cE('div', document.body);
	}
	thisObj.cuerpo.innerHTML = ' ';		
	thisObj.cuerpo.style.left = thisObj.x +'px' ;
	thisObj.cuerpo.style.top = thisObj.y + 'px';
	thisObj.cuerpo.className = 'tema';
	thisObj.cuerpo.style.backgroundColor = 'rgb(' + thisObj.color + ')';
	
	if(Explorador.pc)
	{	
		thisObj.cuerpo.onmouseover = function(e)
		{
			thisObj.cambiarPosicion = false;
			thisObj.mostrarTexto(e);
		}
		
		thisObj.cuerpo.onmouseout = function(e)
		{
			thisObj.cambiarPosicion = true;
			thisObj.ocultarTexto(e);	
		}	
	}
	else
	{
		thisObj.cuerpo.onclick = function(e)
		{
			thisObj.cambiarPosicion = false;
			thisObj.mostrarTexto(e);
		}
		
		thisObj.cuerpo.onmouseout = function(e)
		{
			thisObj.cambiarPosicion = true;
			thisObj.ocultarTexto(e);	
		}
		
	}
	
	
}

function mostrarTexto(e)
{
	var thisObj = this;
	
	if(!thisObj.estaMostrando)
	{
		if(Explorador.pc)
		{
			var x = e.clientX + 30;
			var y = e.clientY;	
			
			if(x > window.innerWidth/1.6)
			{
				x = x - window.innerWidth/3;
			}
			
			if(y > window.innerHeight/1.6)
			{
				y = y - window.innerHeight/6;
			}
					
			textoPopup.style.display = 'block';
			textoPopup.innerHTML = thisObj.tema;
			textoPopup.style.left = x + 'px';
			textoPopup.style.top = y + 'px';
			
			thisObj.estaMostrando = true;
		}
		else
		{
			textoPopup.style.display = 'block';
			textoPopup.innerHTML = thisObj.tema;
			textoPopup.style.left = '5px';
			textoPopup.style.top = '5px';
			textoPopup.style.maxHight = window.innerHeight/1.4 + 'px';
			textoPopup.style.width = window.innerWidth/1.4 + 'px';
			
			
			thisObj.estaMostrando = true;
			
		}
	}
}

function ocultarTexto(e)
{
	thisObj = this;
	
	textoPopup.innerHTML = '';
	textoPopup.style.display = 'none';
	
	thisObj.estaMostrando = false;
}

function Nodo()
{
	this.x;
	this.y;
	this.temaId;
	this.texto = 'Texto nodo';
	this.moverse = true;
	this.direccion;
	this.escogerDireccion = escogerDireccion;
	this.tiempo;
	this.escogerTiempo = escogerTiempo;
	this.contador = 0;
	
	this.actualizarPosicion = actualizarPosicion;
	
	this.mostrarTextoNodo = mostrarTextoNodo;
	this.ocultarTextoNodo = ocultarTextoNodo;
	
	this.construirNodo = construirNodo;	
	
	this.proyecto;	
}

function construirNodo()
{
	var thisObj = this; 
	
	var div = cE('div', document.body);
	div.innerHTML = ' ';		
	div.style.left = thisObj.x +'px' ;
	div.style.top = thisObj.y + 'px';
	div.style.width = thisObj.nIntegrantes + 11 + 'px';
	div.style.height = thisObj.nIntegrantes + 11 + 'px';
	div.className = 'nodo';	
	div.style.backgroundColor = 'rgb(' + nodoManager.temas[thisObj.temaId].color + ')';
	
	thisObj.cuerpo = div;	
	
	if(Explorador.pc)
	{	
		thisObj.cuerpo.onmouseover = function(e)
		{
			thisObj.moverse = false;
			thisObj.mostrarTextoNodo(e);
		}
		
		thisObj.cuerpo.onmouseout = function(e)
		{
			thisObj.moverse = true;
			thisObj.ocultarTextoNodo(e);
		}
		
		thisObj.cuerpo.onclick = function(e)
		{			
			contenedorProyectos.innerHTML = '';	
			contenedorProyectos.className = 'aparecer';
			infoCreditosProyecto.style.display = 'block';
			thisObj.proyecto();
			
			thisObj.moverse = false;
		}
	}
	else
	{		
		thisObj.cuerpo.onclick = function(e)
		{			
			contenedorProyectos.innerHTML = '';	
			contenedorProyectos.className = 'aparecer';
			infoCreditosProyecto.style.display = 'block';
			thisObj.proyecto();
		}		
	}
	
	thisObj.escogerDireccion();
	thisObj.escogerTiempo();
}

function mostrarTextoNodo(e)
{
	var thisObj = this;
	
	if(!thisObj.estaMostrando)
	{
		var x = e.clientX + 30;
    	var y = e.clientY;	
		
		if(x > window.innerWidth/1.6)
		{
			x = x - window.innerWidth/3;
		}
		
		if(y > window.innerHeight/1.6)
		{
			y = y - window.innerHeight/6;
		}
				
		textoPopup.style.display = 'block';
		textoPopup.innerHTML = thisObj.texto;
		textoPopup.style.left = x + 'px';
		textoPopup.style.top = y + 'px';
		
		thisObj.estaMostrando = true;
	}
}

function ocultarTextoNodo(e)
{
	thisObj = this;
	
	textoPopup.innerHTML = '';
	textoPopup.style.display = 'none';
	
	thisObj.estaMostrando = false;
}

function actualizarPosicion()
{
	var thisObj = this;
	
	if(thisObj.moverse)
	{	
		if(thisObj.direccion == 0)
		{
			thisObj.x++;
			thisObj.y--;
		}
		else if(thisObj.direccion == 1)
		{
			thisObj.x--;
			thisObj.y++;
		}
		else if(thisObj.direccion == 2)
		{
			thisObj.x = thisObj.x + 2;
			thisObj.y = thisObj.y - 1;
		}
		else if(thisObj.direccion == 3)
		{
			thisObj.x = thisObj.x -2;
			thisObj.y = thisObj.y - 1;
		}
		else if(thisObj.direccion == 4)
		{
			thisObj.x++;
		}
		else if(thisObj.direccion == 5)
		{
			thisObj.y--;
		}
		else if(thisObj.direccion == 6)
		{
			thisObj.y++;
		}
		else
		{
			thisObj.y = thisObj.y-2;
		}
		
		if(thisObj.x < 10)
		{
			thisObj.x = 10;	
		}
		else if(thisObj.x > window.innerWidth - 12)
		{
			thisObj.x = window.innerWidth - 12;
		}
		
		if(thisObj.y < 10)
		{
			thisObj.y = 10;	
		}
		else if(thisObj.y > window.innerHeight - 12)
		{
			thisObj.y = window.innerHeight - 12;	
		}
		
		thisObj.cuerpo.style.left = thisObj.x +'px' ;
		thisObj.cuerpo.style.top = thisObj.y + 'px';
		
		thisObj.contador++;
		
		if(thisObj.contador > thisObj.tiempo)
		{
			thisObj.contador = 0;
			thisObj.escogerTiempo();
			thisObj.escogerDireccion();
		}
		
		for(var i in nodoManager.temas)
		{
			var tema = nodoManager.temas[i];
			
			if(tema.id == thisObj.temaId)
			{									
				if(contador > tiempoAceleracion)
				{				
					var color = 'rgba(' + tema.color + ',0.01)'; 
				
					stroke(color);
				}
				else
				{
					stroke('rgba(12,12,12, 0.03)');
				}
				
				line(thisObj.x, thisObj.y, tema.xL + 12,tema.yL + 12);
			}
			else
			{			
				stroke('rgba(22,22,22, 0.03)');
			}
			
			if(contador > tiempoAceleracion)
			{
			
				line(thisObj.x, thisObj.y, tema.xL + 12,tema.yL + 12);
			}
		}
	}
}

function escogerDireccion()
{
	var thisObj = this;
	
	var nRandom = Math.floor(Math.random() * 6) + 1;
	
	thisObj.direccion = nRandom;
}

function escogerTiempo()
{
	var thisObj = this;
	
	var nRandom = Math.floor(Math.random() * (80 - 20)) + 20;
	
	thisObj.tiempo = nRandom;	
}

