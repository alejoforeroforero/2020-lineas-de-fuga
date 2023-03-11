
var imagenesLuz = [];
var contenedorLuzImagenes;
var contenedorLuzImagenesPantalla;
var contenedorSpanX;
var imagenesLuzIntervalo = null;
var imagenesLuzTiempo;

function luz2()
{
	contenedorProyectos.innerHTML = '';
	contenedorProyectos.style.display = 'block';
	spanX.style.display = 'block';
	audioNav.pause();	
	
	divTextoProyecto.innerHTML = 'Lo que se vierte en el espacio</br></br>' +
	'Autores: Juan Sebastían Hernandez, Ana María Aragón, Isabella Fonseca, Enya Alexandra Fernandez</br></br>' +
	'Programación Web: Alejandro Forero</br></br>' +
	'Los espacios de un entorno como nuestro hogar parecen ser constantes e invariables, hasta que nos detenemos a observarlos. Un elemento como la luz o el sonido (que con el paso del día muta constantemente) termina por afectar el aquel ambiente en el cual se vierten. </br>' +
'Este proyecto comenzó con una serie de instrucciones para realizar un registro, cuyo propósito era denotar los cambios de luz en algún espacio de nuestros hogares. A partir de estos resultados especificamente en dibujo, se reinterpretron cada una de estas imágenes, pensando  en estos gestos sonoramente.'	
	
	imagenesLuz = [];
	imagenesLuzIntervalo = null;
	imagenesLuzTiempo = 8000;
	
	contenedorLuzImagenesPantalla = cE('div', contenedorProyectos);
	contenedorLuzImagenesPantalla.id = 'contenedorLuzImagenesPantalla';
	
	contenedorSpanX = cE('span', contenedorProyectos);
	contenedorSpanX.innerHTML = 'x';
	contenedorSpanX.id = 'contenedorSpanX'
	contenedorSpanX.onclick = function()
	{
		contenedorLuzImagenesPantalla.style.display = 'none';
		contenedorSpanX.style.display = 'none';
		spanX.style.display = 'block';
		reorganizarImgLuz();
	}
	
	contenedorLuzImagenes = cE('div', contenedorProyectos);
	contenedorLuzImagenes.id = 'contenedorLuzImagenes';
	contenedorLuzImagenes.style.height = window.innerHeight + 'px';
	
	for(var i=0; i<9; i++)
	{
		var indice = i+1;	
		var luzImg = new LuzImg();
		luzImg.contenedor = contenedorLuzImagenes;
		luzImg.srcIcono = '	a2imagenes/luz2/' + indice + 'p.jpg';
		luzImg.srcImg = '	a2imagenes/luz2/' + indice + '.jpg';
		luzImg.id = 'luzImg1';
		luzImg.audioId = indice;	
		luzImg.construir();	
		
		imagenesLuz.push(luzImg);
	}
	
	setTimeout(function()
	{
		reorganizarImgLuz();
	}, 300);
}

function reorganizarImgLuz()
{	
	var indexActual = imagenesLuz.length, valorTemporal, randomIndex;
	
	while (0 !== indexActual) 
	{
		randomIndex = Math.floor(Math.random() * indexActual);
		indexActual -= 1;
	
		var valorTemporal = imagenesLuz[indexActual];
		imagenesLuz[indexActual] = imagenesLuz[randomIndex];
		imagenesLuz[randomIndex] = valorTemporal;
	}
	
	for(var i=0; i<imagenesLuz.length; i++)
	{	
		var luzImg = imagenesLuz[i];
		luzImg.ponerAudio = false;
		luzImg.ponerAudio = (i==imagenesLuz.length-1) ? true : false;	
		luzImg.poner();	
	}
	
	if(imagenesLuzIntervalo == null)
	{
		imagenesLuzIntervalo = setInterval(function()
		{
			reorganizarImgLuz();
		}, imagenesLuzTiempo);
	}
}

function LuzImg()
{
	this.img;
	this.audio;	
}

LuzImg.prototype.construir = function()
{
	thisObj = this;
	
	var rotacion = Math.floor((Math.random() * -30) + 60);		
	var posX = Math.floor(Math.random() * window.innerWidth/50);
	var posY = Math.floor(Math.random() * window.innerHeight/4);
	var ancho = Math.floor(Math.random() * window.innerWidth/8 + window.innerWidth/12);
	
	var img = cE('img', thisObj.contenedor);
	img.className = 'luzImgIcono';
	img.style.top = posY + 'px';
	img.style.left = posX + 'px';
	img.style.width = ancho + 'px';
	img.id = thisObj.id;
	img.src = thisObj.srcIcono;
	img.style.transform = 'rotate(' + -10 + 'deg)';
	
	thisObj.img = img;
	
	var audio = cE('audio', contenedorLuzImagenes);
	audio.className = 'sonido';
	audio.src = 'a3audio/luz2/' + thisObj.audioId + '.mp3';
	audio.loop = true;
	
	thisObj.audio = audio;			
}

LuzImg.prototype.poner = function()
{
	thisObj = this;
	
	var rotacion = Math.floor((Math.random() * -80) + 40);		
	var posX = Math.floor(Math.random() * window.innerWidth/50);
	var posY = Math.floor(Math.random() * window.innerHeight/4);
	var ancho = Math.floor(Math.random() * window.innerWidth/8 + window.innerWidth/12);
	
	thisObj.img.style.top = posY + 'px';
	thisObj.img.style.left = posX + 'px';
	thisObj.img.style.width = ancho + 'px';	
	thisObj.img.style.transform = 'rotate(' + rotacion + 'deg)';
	
	if(thisObj.ponerAudio)
	{
		thisObj.audio.play();	
		thisObj.img.className = 'luzImgIconoS';
		
		thisObj.img.onclick = function()
		{
			clearInterval(imagenesLuzIntervalo);
			imagenesLuzIntervalo = null;
			contenedorSpanX.style.display = 'block';			
			thisObj.pantallaComleta();
		}
	}
	else
	{
		thisObj.audio.pause();
		thisObj.img.className = 'luzImgIcono';
		thisObj.img.onclick = null;
	}
}

LuzImg.prototype.pantallaComleta = function()
{
	var thisObj = this;	
	
	thisObj.ponerAudio = false;
	contenedorLuzImagenesPantalla.innerHTML = '';
	contenedorLuzImagenesPantalla.style.display = 'block';
	contenedorSpanX.style.display = 'block';
	spanX.style.display = 'none';
	
	var img = cE('img', contenedorLuzImagenesPantalla);
	img.src = thisObj.srcImg;
	img.style.width = window.innerWidth*2.4 + 'px';
	
	thisObj.audio.currentTime = 0;
	thisObj.audio.play();
}


