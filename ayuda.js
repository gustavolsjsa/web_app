(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"ayuda_atlas_1", frames: [[1082,0,829,800],[0,0,1080,1921]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_113 = function() {
	this.initialize(img.CachedBmp_113);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,826,2072);


(lib.CachedBmp_112 = function() {
	this.initialize(img.CachedBmp_112);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1614,3868);


(lib.CachedBmp_111 = function() {
	this.initialize(ss["ayuda_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ayudamdpi = function() {
	this.initialize(ss["ayuda_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.gr_barra_gris = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EhUXCWAMAAAkr/MCovAAAMAAAEr/g");
	this.shape.setTransform(540,960);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1080,1920);


(lib.gr_barra = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_113();
	this.instance.setTransform(-356,-864.55,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_112();
	this.instance_1.setTransform(-400,-967,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-400,-967,807,1934);


(lib.gr_ayuda = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ayudamdpi();
	this.instance.setTransform(-540,-960.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-540,-960.5,1080,1921);


(lib.gr_img_ayuda = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_111();
	this.instance.setTransform(-207.1,-200.15,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-207.1,-200.1,414.5,400);


(lib.btn_null = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0099CC").s().p("AsRH1IAAvpIYjAAIAAPpg");
	this.shape.setTransform(0,0.025);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78.5,-50,157.1,100.1);


(lib.btn_null_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC0000").s().p("ArSLTIAA2lIWlAAIAAWlg");
	this.shape_1.setTransform(72.275,72.275);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,144.6,144.6);


(lib.mc_menuinf = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {inicio_pantalla:0,cierra_camara:25,cierra_index2:51,cierra_comunidad:81,cierra_juegos:104};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _detener = this;
		_detener.stop();
		
		var _cierra_camara = this;
		_cierra_camara.btn_camara.on('click', function(){
		_cierra_camara.gotoAndPlay('cierra_camara');
		});
		
		var _cierra_index2 = this;
		_cierra_index2.btn_perfil.on('click', function(){
		_cierra_index2.gotoAndPlay('cierra_index2');
		});
		
		var _comunidad = this;
		_comunidad.btn_comunidad.on('click', function(){
		_comunidad.gotoAndPlay('cierra_comunidad');
		});
		
		var _cierra_juegos = this;
		_cierra_juegos.btn_juegos.on('click', function(){
		_cierra_juegos.gotoAndPlay('cierra_juegos');
		});
	}
	this.frame_43 = function() {
		var _camara = this;
		window.open('camara.html', '_self');
	}
	this.frame_69 = function() {
		var _index2 = this;
		window.open('index2.html', '_self');
	}
	this.frame_99 = function() {
		var _comunidad = this;
		window.open('comunidad.html', '_self');
	}
	this.frame_122 = function() {
		var _juegos = this;
		window.open('juegos.html', '_self');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(43).call(this.frame_43).wait(26).call(this.frame_69).wait(30).call(this.frame_99).wait(23).call(this.frame_122).wait(4));

	// interactivo
	this.btn_juegos = new lib.btn_null_1();
	this.btn_juegos.name = "btn_juegos";
	this.btn_juegos.setTransform(813.35,1774.05);
	new cjs.ButtonHelper(this.btn_juegos, 0, 1, 2, false, new lib.btn_null_1(), 3);

	this.btn_comunidad = new lib.btn_null_1();
	this.btn_comunidad.name = "btn_comunidad";
	this.btn_comunidad.setTransform(580.9,1775.45);
	new cjs.ButtonHelper(this.btn_comunidad, 0, 1, 2, false, new lib.btn_null_1(), 3);

	this.btn_perfil = new lib.btn_null_1();
	this.btn_perfil.name = "btn_perfil";
	this.btn_perfil.setTransform(367.85,1774.05);
	new cjs.ButtonHelper(this.btn_perfil, 0, 1, 2, false, new lib.btn_null_1(), 3);

	this.btn_camara = new lib.btn_null_1();
	this.btn_camara.name = "btn_camara";
	this.btn_camara.setTransform(224.15,1847.75,1,1,0,0,0,72.3,72.3);
	new cjs.ButtonHelper(this.btn_camara, 0, 1, 2, false, new lib.btn_null_1(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_camara},{t:this.btn_perfil},{t:this.btn_comunidad},{t:this.btn_juegos}]}).to({state:[]},15).wait(111));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,957.9,1920);


(lib.gr_gris = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.gr_barra_gris("synched",0);
	this.instance.setTransform(540,960,1,1,0,0,0,540,960);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1080,1920);


(lib.mc_hamburguesa = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {menu:0,abre_hamburguesa:1,cierra_hamburguesa:21,cierra_confUsuario:43,cierra_confMaceta:65,cierra_ayuda:87};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _detener = this;
		_detener.stop();
		
		
		var _abre_hamburguesa = this;
		_abre_hamburguesa.btn_hamburguesa.on('click', function(){
		_abre_hamburguesa.gotoAndPlay('abre_hamburguesa');
		});
	}
	this.frame_18 = function() {
		var _detener = this;
		_detener.stop();
		
		
		var _cierra_hamburguesa = this;
		_cierra_hamburguesa.btn_hamburguesa.on('click', function(){
		_cierra_hamburguesa.gotoAndPlay('cierra_hamburguesa');
		});
		
		
		var _cierra_confUsuario = this;
		_cierra_confUsuario.btn_usuario.on('click', function(){
		_cierra_confUsuario.gotoAndPlay('cierra_confUsuario');
		});
		
		
		var cierra_confMaceta = this;
		cierra_confMaceta.btn_maceta.on('click', function(){
		cierra_confMaceta.gotoAndPlay('cierra_confMaceta');
		});
		
		
		var _cierra_ayuda= this;
		_cierra_ayuda.btn_ayuda.on('click', function(){
		_cierra_ayuda.gotoAndPlay('cierra_ayuda');
		});
	}
	this.frame_37 = function() {
		var _this = this;
		_this.gotoAndStop('menu');
	}
	this.frame_58 = function() {
		var _this = this;
		window.open('confUsuario.html', '_self');
	}
	this.frame_80 = function() {
		var _this = this;
		window.open('confMaceta.html', '_self');
	}
	this.frame_102 = function() {
		var _this = this;
		window.open('ayuda.html', '_self');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(18).call(this.frame_18).wait(19).call(this.frame_37).wait(21).call(this.frame_58).wait(22).call(this.frame_80).wait(22).call(this.frame_102).wait(2));

	// interactivo
	this.btn_hamburguesa = new lib.btn_null();
	this.btn_hamburguesa.name = "btn_hamburguesa";
	this.btn_hamburguesa.setTransform(14.95,-0.35);
	new cjs.ButtonHelper(this.btn_hamburguesa, 0, 1, 2, false, new lib.btn_null(), 3);

	this.btn_ayuda = new lib.btn_null();
	this.btn_ayuda.name = "btn_ayuda";
	this.btn_ayuda.setTransform(-606.65,696.95,4.1783,1);
	new cjs.ButtonHelper(this.btn_ayuda, 0, 1, 2, false, new lib.btn_null(), 3);

	this.btn_maceta = new lib.btn_null();
	this.btn_maceta.name = "btn_maceta";
	this.btn_maceta.setTransform(-606.65,294.65,4.1783,1);
	new cjs.ButtonHelper(this.btn_maceta, 0, 1, 2, false, new lib.btn_null(), 3);

	this.btn_usuario = new lib.btn_null();
	this.btn_usuario.name = "btn_usuario";
	this.btn_usuario.setTransform(-606.65,134.6,4.1783,1);
	new cjs.ButtonHelper(this.btn_usuario, 0, 1, 2, false, new lib.btn_null(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_hamburguesa,p:{x:14.95,y:-0.35}}]}).to({state:[{t:this.btn_hamburguesa,p:{x:-8.75,y:6.3}},{t:this.btn_usuario},{t:this.btn_maceta},{t:this.btn_ayuda}]},17).to({state:[]},20).to({state:[]},6).wait(61));

	// Barra_menu
	this.instance = new lib.gr_barra("synched",0);
	this.instance.setTransform(-1360.6,811.35);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({x:-555.35,y:813.4},15).wait(5).to({startPosition:0},0).to({x:-1360.6,y:811.35},15).wait(7).to({x:-555.35,y:813.4},0).to({x:-1360.6,y:811.35},15).wait(7).to({x:-555.35,y:813.4},0).to({x:-1360.6,y:811.35},15).wait(7).to({x:-555.35,y:813.4},0).to({x:-1360.6,y:811.35},16).wait(1));

	// Barra_gris
	this.instance_1 = new lib.gr_gris("synched",0);
	this.instance_1.setTransform(-420.6,811.35,1,1,0,0,0,540,960);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({x:-415.35,y:813.4,alpha:0.3906},15).wait(5).to({startPosition:0},0).to({x:-420.6,y:811.35,alpha:0},15).wait(7).to({x:-415.35,y:813.4,alpha:0.3906},0).to({x:-420.6,y:811.35,alpha:0},15).wait(7).to({x:-415.35,y:813.4,alpha:0.3906},0).to({x:-420.6,y:811.35,alpha:0},15).wait(7).to({x:-415.35,y:813.4,alpha:0.3906},0).to({x:-420.6,y:811.35,alpha:0},16).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1760.6,-155.6,1885.3,1936);


// stage content:
(lib.ayuda = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [40];
	// timeline functions:
	this.frame_40 = function() {
		var _this = this;
		_this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(40).call(this.frame_40).wait(44));

	// menues
	this.mc_hamburguesa = new lib.mc_hamburguesa();
	this.mc_hamburguesa.name = "mc_hamburguesa";
	this.mc_hamburguesa.setTransform(954.3,149.5);

	this.mc_menuinf = new lib.mc_menuinf();
	this.mc_menuinf.name = "mc_menuinf";
	this.mc_menuinf.setTransform(541,1849,1,1,0,0,0,541,1849);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.mc_menuinf},{t:this.mc_hamburguesa}]},40).wait(44));

	// icono
	this.instance = new lib.gr_img_ayuda("synched",0);
	this.instance.setTransform(540,623.9,1,1,0,0,0,0,-0.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30).to({_off:false},0).to({y:599.9},5,cjs.Ease.cubicIn).to({y:623.9},4).to({_off:true},1).wait(44));

	// cuadro
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EggzAgCMAAAhADMBBnAAAMAAABADg");
	this.shape.setTransform(535.85,621.75);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(30).to({_off:false},0).wait(9).to({_off:true},1).wait(44));

	// ayuda
	this.instance_1 = new lib.gr_ayuda("synched",0);
	this.instance_1.setTransform(540,960);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},30).wait(54));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(540,959.5,540,961);
// library properties:
lib.properties = {
	id: '2AA9DEE352B54E3E9CCCD23B198AA17F',
	width: 1080,
	height: 1920,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedBmp_113.png", id:"CachedBmp_113"},
		{src:"images/CachedBmp_112.png", id:"CachedBmp_112"},
		{src:"images/ayuda_atlas_1.png", id:"ayuda_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['2AA9DEE352B54E3E9CCCD23B198AA17F'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;