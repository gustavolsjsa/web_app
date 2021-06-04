(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_1", frames: [[0,0,1080,1920]]},
		{name:"index_atlas_2", frames: [[0,0,1080,1920]]},
		{name:"index_atlas_3", frames: [[0,0,1080,1920]]}
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



(lib.CachedBmp_2 = function() {
	this.initialize(img.CachedBmp_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,826,2072);


(lib.CachedBmp_1 = function() {
	this.initialize(img.CachedBmp_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1614,3868);


(lib.perfil_usuariomdpi = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.registromdpi = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.splashmdpi = function() {
	this.initialize(ss["index_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.gr_splash = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.splashmdpi();
	this.instance.setTransform(-540,-960);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-540,-960,1080,1920);


(lib.gr_perfil = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.perfil_usuariomdpi();
	this.instance.setTransform(-540,-960);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-540,-960,1080,1920);


(lib.gr_login = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.registromdpi();
	this.instance.setTransform(-540,-960);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-540,-960,1080,1920);


(lib.gr_letras = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("EhUXCWAMAAAkr/MCovAAAMAAAEr/g");
	this.shape.setTransform(9.7421,-5.3516,0.2315,0.0365);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-115.2,-40.3,250,70);


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
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(-356,-864.55,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_1();
	this.instance_1.setTransform(-400,-967,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-400,-967,807,1934);


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


(lib.mc_perfil = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {menu:0,entrada:1,salida:21,usuario:44,maceta:66,ayuda:88};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _detener = this;
		_detener.stop();
		
		
		
		
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.btn_hamburguesa.on('click', function(){
		/*
		Moves the playhead to the specified frame label in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndPlay('entrada');
		});
	}
	this.frame_18 = function() {
		var _detener = this;
		_detener.stop();
		
		
		var _salida = this;
		_salida.btn_hamburguesa.on('click', function(){
		_salida.gotoAndPlay('salida');
		});
		
		
		var _usuario = this;
		_usuario.btn_usuario.on('click', function(){
		_usuario.gotoAndPlay('usuario');
		});
		
		
		var _maceta = this;
		_maceta.btn_maceta.on('click', function(){
		_maceta.gotoAndPlay('maceta');
		});
		
		
		var _ayuda = this;
		_ayuda.btn_ayuda.on('click', function(){
		_ayuda.gotoAndPlay('ayuda');
		});
	}
	this.frame_37 = function() {
		var _this = this;
		_this.gotoAndStop('menu');
	}
	this.frame_59 = function() {
		var _this = this;
		window.open('usuario.html', '_self');
	}
	this.frame_81 = function() {
		var _this = this;
		window.open('maceta.html', '_self');
	}
	this.frame_103 = function() {
		var _this = this;
		window.open('ayuda.html', '_self');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(18).call(this.frame_18).wait(19).call(this.frame_37).wait(22).call(this.frame_59).wait(22).call(this.frame_81).wait(22).call(this.frame_103).wait(2));

	// interactivo
	this.btn_hamburguesa = new lib.btn_null();
	this.btn_hamburguesa.name = "btn_hamburguesa";
	this.btn_hamburguesa.setTransform(416.05,-814.5);
	new cjs.ButtonHelper(this.btn_hamburguesa, 0, 1, 2, false, new lib.btn_null(), 3);

	this.btn_ayuda = new lib.btn_null();
	this.btn_ayuda.name = "btn_ayuda";
	this.btn_ayuda.setTransform(-181.85,-123.85,4.1783,1);
	new cjs.ButtonHelper(this.btn_ayuda, 0, 1, 2, false, new lib.btn_null(), 3);

	this.btn_maceta = new lib.btn_null();
	this.btn_maceta.name = "btn_maceta";
	this.btn_maceta.setTransform(-181.85,-526.15,4.1783,1);
	new cjs.ButtonHelper(this.btn_maceta, 0, 1, 2, false, new lib.btn_null(), 3);

	this.btn_usuario = new lib.btn_null();
	this.btn_usuario.name = "btn_usuario";
	this.btn_usuario.setTransform(-181.85,-686.2,4.1783,1);
	new cjs.ButtonHelper(this.btn_usuario, 0, 1, 2, false, new lib.btn_null(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_hamburguesa}]}).to({state:[{t:this.btn_hamburguesa},{t:this.btn_usuario},{t:this.btn_maceta},{t:this.btn_ayuda}]},17).to({state:[]},20).to({state:[{t:this.btn_hamburguesa},{t:this.btn_usuario}]},7).to({state:[]},16).to({state:[{t:this.btn_hamburguesa},{t:this.btn_usuario}]},6).to({state:[]},16).to({state:[{t:this.btn_hamburguesa},{t:this.btn_usuario}]},6).to({state:[]},16).wait(1));

	// Barra_menu
	this.instance = new lib.gr_barra("synched",0);
	this.instance.setTransform(-940,0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({x:-140},15).wait(5).to({startPosition:0},0).to({x:-940},15).to({_off:true},1).wait(7).to({_off:false,x:-140},0).to({x:-940},15).to({_off:true},1).wait(6).to({_off:false,x:-140},0).to({x:-940},15).to({_off:true},1).wait(6).to({_off:false,x:-140},0).to({x:-940},15).to({_off:true},1).wait(1));

	// Barra_gris
	this.instance_1 = new lib.gr_gris("synched",0);
	this.instance_1.setTransform(0,0,1,1,0,0,0,540,960);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({alpha:0.3906},15).wait(5).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(7).to({_off:false,alpha:0.3906},0).to({alpha:0},15).to({_off:true},1).wait(6).to({_off:false,alpha:0.3906},0).to({alpha:0},15).to({_off:true},1).wait(6).to({_off:false,alpha:0.3906},0).to({alpha:0},15).to({_off:true},1).wait(1));

	// perfil
	this.instance_2 = new lib.gr_perfil("synched",0);

	this.btn_hamburguesa_1 = new lib.btn_null();
	this.btn_hamburguesa_1.name = "btn_hamburguesa_1";
	this.btn_hamburguesa_1.setTransform(416.05,-814.5);
	new cjs.ButtonHelper(this.btn_hamburguesa_1, 0, 1, 2, false, new lib.btn_null(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_hamburguesa_1},{t:this.instance_2}]}).to({state:[{t:this.btn_hamburguesa_1},{t:this.instance_2}]},16).to({state:[{t:this.btn_hamburguesa_1},{t:this.instance_2}]},88).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1340,-967,1880,1934);


// stage content:
(lib.Plantas = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// rect2
	this.gr_rect2 = new lib.gr_letras("synched",0);
	this.gr_rect2.name = "gr_rect2";
	this.gr_rect2.setTransform(347.9,1199.05);
	this.gr_rect2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.gr_rect2).wait(38).to({_off:false},0).wait(14).to({startPosition:0},0).to({x:560.55,y:1189.3},15).to({_off:true},1).wait(1));

	// rect1
	this.instance = new lib.gr_letras("synched",0);
	this.instance.setTransform(340.1,1066.55);
	this.instance._off = true;

	this.gr_rect1 = new lib.gr_letras("synched",0);
	this.gr_rect1.name = "gr_rect1";
	this.gr_rect1.setTransform(560.55,1066.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},38).to({state:[{t:this.gr_rect1}]},14).to({state:[]},16).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(38).to({_off:false},0).to({_off:true,x:560.55},14).wait(17));

	// menu_hamburguesa
	this.instance_1 = new lib.mc_perfil();
	this.instance_1.setTransform(540,960);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(68).to({_off:false},0).wait(1));

	// Splash_login
	this.instance_2 = new lib.gr_splash("synched",0);
	this.instance_2.setTransform(539.95,960);
	this.instance_2.alpha = 0;

	this.instance_3 = new lib.gr_login("synched",0);
	this.instance_3.setTransform(540,960);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_2}]},18).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},18).to({state:[{t:this.instance_2},{t:this.instance_3}]},1).to({state:[{t:this.instance_2},{t:this.instance_3}]},29).to({state:[]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:540,alpha:1},18,cjs.Ease.quadOut).wait(1).to({startPosition:0},0).to({x:539.95,alpha:0},18).wait(1).to({startPosition:0},0).wait(29).to({startPosition:0},0).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(540,960,540,960);
// library properties:
lib.properties = {
	id: 'E2B250C286D598489CAF6B8841BE14B8',
	width: 1080,
	height: 1920,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedBmp_2.png", id:"CachedBmp_2"},
		{src:"images/CachedBmp_1.png", id:"CachedBmp_1"},
		{src:"images/index_atlas_1.png", id:"index_atlas_1"},
		{src:"images/index_atlas_2.png", id:"index_atlas_2"},
		{src:"images/index_atlas_3.png", id:"index_atlas_3"}
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
an.compositions['E2B250C286D598489CAF6B8841BE14B8'] = {
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