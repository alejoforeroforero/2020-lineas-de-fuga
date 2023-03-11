var videoLuz;

function luz()
{
	videoLuz = new VideoLuz();
	videoLuz.nZonas = 13;	
	videoLuz.construir();
	
	infoCreditosProyecto.style.display = 'block';
	
	divTextoProyecto.innerHTML = '<b>Título: </b>Luz Habitante</br></br>' +
	'<b>Autor: </b>Angel David Hurtado, Enya Alexandra Fernandez, Valeria Borda Hernandez, Martha Catalina Gómez</br></br>' +
	'Programación Web: Alejandro Forero</br></br>' +
	'<b>Técnica: </b>Video, fotografía, sonido, Html</br></br>' +
	'<b>Año:</b> 2020</br></br>' +
	'A través de la mirada…. </br>' +
'La mirada al otro…</br>' +
'La mirada a lo otro…</br>' +
'Aquello que pasamos desapercibido…</br>' +
'Lo pequeño…</br>' +
'Lo fugaz…</br>' +
'Lo existente…</br>' +
'Lo habitante…</br>' +
'El habitante continuo de los espacios, el jugador, el acompañante eterno.</br>' +
'El invisible, que nos ofrece sus constantes danzas y paisajes.</br>' +
'El día mismo, y el pequeño de la noche. </br>' +
'.</br>' +
'.</br>' +
'Este proyecto vuelve hacia la luz, hacia la mirada de todo lo que pasamos desapercibido en lo cotidiano. La sensibilidad desde el confinamiento.';		
}

function VideoLuz()
{
	this.zonas = [];
	this.cambiarFondo = true;
}

VideoLuz.prototype.construir = function()
{	
	var thisObj = this;
	
	thisObj.zonas = [];
	
	contenedorProyectos.innerHTML = '';
	contenedorProyectos.style.display = 'block';
	spanX.style.display = 'block';	
	audioNav.pause();
	
	thisObj.anchoPantalla = window.innerWidth;
	thisObj.altoPantalla = window.innerHeight;
	thisObj.contenedor = contenedorProyectos;
	
	thisObj.contenedor.innerHTML = '';
	thisObj.contenedor.style.width = thisObj.anchoPantalla + 'px';	
	thisObj.contenedor.style.height = thisObj.altoPantalla + 'px';
	
	thisObj.img = cE('img', thisObj.contenedor);
	thisObj.img.src = 'a2imagenes/luz/0.jpg';
	thisObj.img.style.width = thisObj.anchoPantalla + 'px';	
	thisObj.img.style.height = thisObj.altoPantalla + 13 + 'px';
	
	thisObj.cambiarImagen();
	
	for(var i=0; i<thisObj.nZonas; i++)
	{
		var posX = 0;
		var posY = 0;
		var ancho = 0;
		var alto = 0;
		var id = 0;
		
		if(i==0)
		{
			id = 1;
			posX = thisObj.anchoPantalla/14;
			posY = thisObj.altoPantalla/5.8;
			ancho = 5;
			alto = 14;			
		}
		else if(i==1)
		{
			id = 2;
			posX = thisObj.anchoPantalla/5.5;
			posY = thisObj.altoPantalla/6.3;
			ancho = 5;
			alto = 14;	
		}
		else if(i==2)
		{
			id = 4;
			posX = thisObj.anchoPantalla/2.3;
			posY = thisObj.altoPantalla/8;
			ancho = 7.5;
			alto = 14;	
		}
		else if(i==3)
		{
			id = 5;
			posX = thisObj.anchoPantalla/1.65;
			posY = thisObj.altoPantalla/11;
			ancho = 5.7;
			alto = 15;	
		}
		else if(i==4)
		{
			id = 6;
			posX = thisObj.anchoPantalla/1.3;
			posY = thisObj.altoPantalla/12.5;
			ancho = 7.5;
			alto = 15;	
		}
		else if(i==5)
		{
			id = 12;
			posX = thisObj.anchoPantalla/1.29;
			posY = thisObj.altoPantalla/3.9;
			ancho = 6.8;
			alto = 16;	
		}
		else if(i==6)
		{
			id = 13;
			posX = thisObj.anchoPantalla/14.5;
			posY = thisObj.altoPantalla/1.95;
			ancho = 5.2;
			alto = 14;	
		}
		else if(i==7)
		{
			id = 15;
			posX = thisObj.anchoPantalla/3.27;
			posY = thisObj.altoPantalla/1.96;
			ancho = 5.6;
			alto = 14.8;	
		}
		else if(i==8)
		{
			id = 18;
			posX = thisObj.anchoPantalla/1.29;
			posY = thisObj.altoPantalla/2;
			ancho = 7.2;
			alto = 17.7;		
		}
		else if(i==9)
		{
			id = 19;
			posX = thisObj.anchoPantalla/14;
			posY = thisObj.altoPantalla/1.52;
			ancho = 4.7;
			alto = 14;		
		}
		else if(i==10)
		{
			id = 21;
			posX = thisObj.anchoPantalla/3.27;
			posY = thisObj.altoPantalla/1.48;
			ancho = 5.7;
			alto = 15;		
		}
		else if(i==11)
		{
			id = 22;
			posX = thisObj.anchoPantalla/2.2;
			posY = thisObj.altoPantalla/1.45;
			ancho = 5.7;
			alto = 15;		
		}
		else if(i==12)
		{
			id = 24;
			posX = thisObj.anchoPantalla/1.29;
			posY = thisObj.altoPantalla/1.45;
			ancho = 7.5;
			alto = 17;		
		}
		else
		{
			alert('falta');	
		}		
		
		thisObj.agregarZona(id, posX, posY, ancho, alto);		
	};	
};

VideoLuz.prototype.cambiarImagen = function()
{
	var thisObj = this;
	
	var tiempo = Math.floor((Math.random() * 2000) + 800);
	
	if(thisObj.cambiarFondo)
	{		
		thisObj.timeout = setTimeout(function()
		{
			var nRandom = Math.floor(Math.random() * thisObj.nZonas);
			
			var imgId = thisObj.zonas[nRandom].id;
			var audio = thisObj.zonas[nRandom].audio;
			
			if(thisObj.cambiarFondo)
			{			
				thisObj.img.src = 'a2imagenes/luz/'+ imgId + '.jpg';
				
				audio.play();
				
				clearTimeout(thisObj.timeout);
				
				thisObj.cambiarImagen();
				
				thisObj.timeoutP = setTimeout(function()
				{
					thisObj.img.src = 'a2imagenes/luz/'+ 0 + '.jpg';
					
					audio.pause();
					audio.currentTime = 0;
					
					clearTimeout(thisObj.timeoutP);
					
				}, 700)							
			}
			
		}, tiempo);
	}	
}

VideoLuz.prototype.agregarZona = function(id, posX, posY, ancho, alto)
{
	var thisObj = this;
	
	var zona ={};
	
	var div = cE('div', thisObj.contenedor);
	div.className = 'zonaLuz';
	div.style.left = posX + 'px';
	div.style.top = posY + 'px';
	div.style.width = ancho + '%';
	div.style.height = alto + '%';
	
	var audio = new Audio();
	audio.src = 'a3audio/luz/' + id + '.mp3';
	
	zona.contenedor = div;
	zona.id = id;
	zona.audio = audio;
	zona.contenedor.onmouseover = function()
	{
		clearTimeout(thisObj.timeout);
		clearTimeout(thisObj.timeoutP);
		
		thisObj.cambiarFondo = false;
		thisObj.img.src = 'a2imagenes/luz/'+ zona.id + '.jpg';
		zona.contenedor.style.opacity = 1;
		zona.audio.play();
	}
	
	zona.contenedor.onmouseout = function()
	{
		thisObj.img.src = 'a2imagenes/luz/'+ 0 + '.jpg';
		
		thisObj.cambiarFondo = true;
		thisObj.cambiarImagen();
		zona.contenedor.style.opacity = 0;	
		
		zona.audio.pause();
		zona.audio.currentTime = 0;	
	}
	
	zona.contenedor.onclick = function()
	{
		thisObj.ponerVideo(zona.id);
	}
	
	thisObj.zonas.push(zona);
}

VideoLuz.prototype.ponerVideo = function(id)
{
	var thisObj = this;
	
	estaEnMenu = false;
	
	infoCreditosProyecto.style.display = 'none';
	contenedorProyectos.innerHTML = '';	
	
	var enlace = 'a4videos/luz/'+ id + '.mp4';
	
	clearTimeout(thisObj.timeout);
	clearTimeout(thisObj.timeoutP);
	
	videoLuz = null;
	
	spanX.style.display = 'none';
	
	descargaPopup.style.display = 'block';	
	
	var videoContenedor = cE('div', contenedorProyectos);
	videoContenedor.className = 'pantallaCompleta';	
	
	var video = cE('video', videoContenedor)
	video.src = enlace;
	video.loop = true;

	video.oncanplaythrough = function() 
	{
		clearTimeout(thisObj.timeout);
		clearTimeout(thisObj.timeoutP);
		descargaPopup.style.display = 'none';
		
		if(!estaEnMenu)
		{
			video.play();
		}
	};
	
	var cerrarVideoLuz = cE('span', contenedorProyectos);
	cerrarVideoLuz.innerHTML = 'x';
	cerrarVideoLuz.id = 'cerrarVideoLuz';
	cerrarVideoLuz.onclick = function()
	{
		estaEnMenu = true;
		descargaPopup.style.display = 'none';
		luz();
	}
}