(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_1", frames: [[0,0,1080,1920]]},
		{name:"index_atlas_2", frames: [[0,0,1080,1920]]},
		{name:"index_atlas_3", frames: [[1294,480,85,238],[397,524,43,238],[87,524,77,238],[245,524,74,238],[1294,0,87,238],[0,0,1292,260],[0,524,85,238],[442,524,43,238],[166,524,77,238],[321,524,74,238],[1294,240,87,238],[0,262,1292,260]]}
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



(lib.CachedBmp_133 = function() {
	this.initialize(ss["index_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_132 = function() {
	this.initialize(ss["index_atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_131 = function() {
	this.initialize(ss["index_atlas_3"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_130 = function() {
	this.initialize(ss["index_atlas_3"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_129 = function() {
	this.initialize(ss["index_atlas_3"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_128 = function() {
	this.initialize(ss["index_atlas_3"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_127 = function() {
	this.initialize(ss["index_atlas_3"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_126 = function() {
	this.initialize(ss["index_atlas_3"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_125 = function() {
	this.initialize(ss["index_atlas_3"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_124 = function() {
	this.initialize(ss["index_atlas_3"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_123 = function() {
	this.initialize(ss["index_atlas_3"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_122 = function() {
	this.initialize(ss["index_atlas_3"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.registromdpi = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.splashmdpi = function() {
	this.initialize(ss["index_atlas_2"]);
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


// stage content:
(lib.index = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [126];
	// timeline functions:
	this.frame_126 = function() {
		var _this = this;
		/*
		Loads the URL in a new browser window.
		*/
		window.open('index2.html', '_self');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(126).call(this.frame_126).wait(3));

	// rect2
	this.gr_rect2 = new lib.gr_letras("synched",0);
	this.gr_rect2.name = "gr_rect2";
	this.gr_rect2.setTransform(347.9,1199.05);
	this.gr_rect2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.gr_rect2).wait(60).to({_off:false},0).wait(24).to({startPosition:0},0).to({x:560.55,y:1199.3},26).to({_off:true},1).wait(18));

	// rect1
	this.instance = new lib.gr_letras("synched",0);
	this.instance.setTransform(340.1,1066.55);
	this.instance._off = true;

	this.gr_rect1 = new lib.gr_letras("synched",0);
	this.gr_rect1.name = "gr_rect1";
	this.gr_rect1.setTransform(560.55,1066.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},60).to({state:[{t:this.gr_rect1}]},24).to({state:[]},27).wait(18));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(60).to({_off:false},0).to({_off:true,x:560.55},24).wait(45));

	// boton_login
	this.instance_1 = new lib.CachedBmp_127();
	this.instance_1.setTransform(564.45,1310.25,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_126();
	this.instance_2.setTransform(547.3,1310.25,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_125();
	this.instance_3.setTransform(513.1,1310.25,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_124();
	this.instance_4.setTransform(480.5,1310.25,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_123();
	this.instance_5.setTransform(441.2,1310.25,0.5,0.5);

	this.instance_6 = new lib.CachedBmp_122();
	this.instance_6.setTransform(195.45,1296.45,0.5,0.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#72AC02").s().p("EgvzAHgQiqiqAAjwQAAiRA5iGQA2iCBkhjQBkhkCBg3QCGg4CSAAMBObAAAQEqAADTDTQBkBjA2CCQA5CGAACRQAADwiqCqQiqCqjwAAMhSzAAAQjwAAiqiqg");
	this.shape.setTransform(518.4249,1361.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#66A002").s().p("EgvzAHgQiqiqAAjwQAAiRA5iGQA2iCBkhjQBkhkCBg3QCGg4CSAAMBObAAAQEqAADTDTQBkBjA2CCQA5CGAACRQAADwiqCqQiqCqjwAAMhSzAAAQjwAAiqiqg");
	this.shape_1.setTransform(518.4249,1361.475);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5B9401").s().p("EgvzAHgQiqiqAAjwQAAiRA5iGQA2iCBkhjQBkhkCBg3QCGg4CSAAMBObAAAQEqAADTDTQBkBjA2CCQA5CGAACRQAADwiqCqQiqCqjwAAMhSzAAAQjwAAiqiqg");
	this.shape_2.setTransform(518.4249,1361.475);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#508801").s().p("EgvzAHgQiqiqAAjwQAAiRA5iGQA2iCBkhjQBkhkCBg3QCGg4CSAAMBObAAAQEqAADTDTQBkBjA2CCQA5CGAACRQAADwiqCqQiqCqjwAAMhSzAAAQjwAAiqiqg");
	this.shape_3.setTransform(518.4249,1361.475);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#447C01").s().p("EgvzAHgQiqiqAAjwQAAiRA5iGQA2iCBkhjQBkhkCBg3QCGg4CSAAMBObAAAQEqAADTDTQBkBjA2CCQA5CGAACRQAADwiqCqQiqCqjwAAMhSzAAAQjwAAiqiqg");
	this.shape_4.setTransform(518.4249,1361.475);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#396F01").s().p("EgvzAHgQiqiqAAjwQAAiRA5iGQA2iCBkhjQBkhkCBg3QCGg4CSAAMBObAAAQEqAADTDTQBkBjA2CCQA5CGAACRQAADwiqCqQiqCqjwAAMhSzAAAQjwAAiqiqg");
	this.shape_5.setTransform(518.4249,1361.475);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2D6301").s().p("EgvzAHgQiqiqAAjwQAAiRA5iGQA2iCBkhjQBkhkCBg3QCGg4CSAAMBObAAAQEqAADTDTQBkBjA2CCQA5CGAACRQAADwiqCqQiqCqjwAAMhSzAAAQjwAAiqiqg");
	this.shape_6.setTransform(518.4249,1361.475);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#225701").s().p("EgvzAHgQiqiqAAjwQAAiRA5iGQA2iCBkhjQBkhkCBg3QCGg4CSAAMBObAAAQEqAADTDTQBkBjA2CCQA5CGAACRQAADwiqCqQiqCqjwAAMhSzAAAQjwAAiqiqg");
	this.shape_7.setTransform(518.4249,1361.475);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#174B00").s().p("EgvzAHgQiqiqAAjwQAAiRA5iGQA2iCBkhjQBkhkCBg3QCGg4CSAAMBObAAAQEqAADTDTQBkBjA2CCQA5CGAACRQAADwiqCqQiqCqjwAAMhSzAAAQjwAAiqiqg");
	this.shape_8.setTransform(518.4249,1361.475);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0B3F00").s().p("EgvzAHgQiqiqAAjwQAAiRA5iGQA2iCBkhjQBkhkCBg3QCGg4CSAAMBObAAAQEqAADTDTQBkBjA2CCQA5CGAACRQAADwiqCqQiqCqjwAAMhSzAAAQjwAAiqiqg");
	this.shape_9.setTransform(518.4249,1361.475);

	this.instance_7 = new lib.CachedBmp_133();
	this.instance_7.setTransform(564.45,1310.25,0.5,0.5);

	this.instance_8 = new lib.CachedBmp_132();
	this.instance_8.setTransform(547.3,1310.25,0.5,0.5);

	this.instance_9 = new lib.CachedBmp_131();
	this.instance_9.setTransform(513.1,1310.25,0.5,0.5);

	this.instance_10 = new lib.CachedBmp_130();
	this.instance_10.setTransform(480.5,1310.25,0.5,0.5);

	this.instance_11 = new lib.CachedBmp_129();
	this.instance_11.setTransform(441.2,1310.25,0.5,0.5);

	this.instance_12 = new lib.CachedBmp_128();
	this.instance_12.setTransform(195.45,1296.45,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]},110).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7}]},1).wait(8));

	// Splash_login
	this.instance_13 = new lib.gr_splash("synched",0);
	this.instance_13.setTransform(539.95,960);
	this.instance_13.alpha = 0;

	this.instance_14 = new lib.gr_login("synched",0);
	this.instance_14.setTransform(540,960);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13}]}).to({state:[{t:this.instance_13}]},29).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},29).to({state:[{t:this.instance_13},{t:this.instance_14}]},1).to({state:[{t:this.instance_13},{t:this.instance_14}]},51).to({state:[{t:this.instance_13},{t:this.instance_14}]},15).to({state:[]},1).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({x:540,alpha:1},29,cjs.Ease.quadOut).wait(1).to({startPosition:0},0).to({x:539.95,alpha:0},29).wait(1).to({startPosition:0},0).wait(51).to({startPosition:0},0).wait(15).to({startPosition:0},0).to({_off:true},1).wait(2));

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