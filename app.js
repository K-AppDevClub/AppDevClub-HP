require('./app.scss')
import ShuffleText from 'shuffle-text';

var front = { el: null, next: null, prev: null };
var right = { el: null, next: null, prev: null };
var back =  { el: null, next: null, prev: null };
var left =  { el: null, next: null, prev: null };
let page_num = 0;
let current = front;

front.next = right;
front.prev = left;
right.next = back;
right.prev = front;
back.next  = left;
back.prev  = right;
left.next  = front;
left.prev  = back;

const resizeCanvas = function(){
  let container = document.getElementById('canvas-container');
  let canvas = document.getElementById('myCanvas');
  canvas.width = container.clientWidth;
  canvas.height = container.clientHeight; 
}

onload=function(){
  let angle = 0;
  const cube = document.getElementById("cube");

  front.el   = document.getElementById("front");
  right.el   = document.getElementById("right");
  left.el    = document.getElementById("left");
  back.el    = document.getElementById("backk");
  current.el.classList.add('fadeInBlur');
  // const text = new ShuffleText(front);
  // text.start();
  resizeCanvas();

  const stage = new createjs.Stage("myCanvas");
  const particleSystem = new particlejs.ParticleSystem();
  const buble = { "bgColor": "#00000", "width": 728, "height": 115, "emitFrequency": "100", "startX": 365, "startXVariance": 0, "startY": 218, "startYVariance": 0, "initialDirection": 0, "initialDirectionVariance": "360", "initialSpeed": 8.5, "initialSpeedVariance": 0.1, "friction": "0.063", "accelerationSpeed": 0, "accelerationDirection": "275.8", "startScale": 3, "startScaleVariance": 0, "finishScale": "2", "finishScaleVariance": "0", "lifeSpan": 29, "lifeSpanVariance": "27", "startAlpha": "1", "startAlphaVariance": "0", "finishAlpha": "0", "finishAlphaVariance": "0", "shapeIdList": [ "blur_circle" ], "startColor": { "hue": 37, "hueVariance": 360, "saturation": "91", "saturationVariance": 0, "luminance": "56", "luminanceVariance": "16" }, "blendMode": true, "alphaCurveType": "0", "VERSION": "0.1.3" };
  const blue = { "bgColor": "#00000", "width": 728, "height": 415, "emitFrequency": 20, "startX": 365, "startXVariance": 862, "startY": 218, "startYVariance": 376, "initialDirection": 0, "initialDirectionVariance": "360", "initialSpeed": 1.0, "initialSpeedVariance": "3.7", "friction": 0.1165, "accelerationSpeed": 0, "accelerationDirection": "360", "startScale": 0.88, "startScaleVariance": "1", "finishScale": 0.18, "finishScaleVariance": 0.68, "lifeSpan": 70, "lifeSpanVariance": 80, "startAlpha": "0.5", "startAlphaVariance": "0", "finishAlpha": 0.51, "finishAlphaVariance": 0.5, "shapeIdList": [ "blur_circle", "circle" ], "startColor": { "hue": 195, "hueVariance": 21, "saturation": 70, "saturationVariance": "0", "luminance": 77, "luminanceVariance": 37 }, "blendMode": true, "alphaCurveType": "1", "VERSION": "0.1.3" } ;
  const pink = { "bgColor": "#00000", "width": 728, "height": 415, "emitFrequency": "100", "startX": 365, "startXVariance": "594", "startY": 218, "startYVariance": "222", "initialDirection": "0", "initialDirectionVariance": "360", "initialSpeed": "2", "initialSpeedVariance": "3.7", "friction": "0.038", "accelerationSpeed": "0.13", "accelerationDirection": "273.3", "startScale": "0.76", "startScaleVariance": "1", "finishScale": "0", "finishScaleVariance": "0", "lifeSpan": "50", "lifeSpanVariance": "196", "startAlpha": "1", "startAlphaVariance": "0", "finishAlpha": "0.35", "finishAlphaVariance": 0.5, "shapeIdList": [ "blur_circle" ], "startColor": { "hue": "312", "hueVariance": "55", "saturation": "71", "saturationVariance": "78", "luminance": "83", "luminanceVariance": "16" }, "blendMode": true, "alphaCurveType": "1", "VERSION": "0.1.3" };
  stage.addChild(particleSystem.container);
  particleSystem.importFromJson(blue);
  createjs.Ticker.framerate = 60;
  createjs.Ticker.timingMode = createjs.Ticker.RAF;
  createjs.Ticker.addEventListener("tick", handleTick);

  function handleTick() {
    particleSystem.update();
    stage.update();
  }

  // Event listners
  window.addEventListener('resize', function (event) {
    resizeCanvas();
  });

  document.getElementById("next").onclick = function() {
    page_num += 1;
    angle -= 90;
    current.el.classList.remove('fadeInBlur');
    current.el.classList.add('fadeOutBlur');
    current = current.next;
    current.el.classList.remove('fadeOutBlur');
    current.el.classList.add('fadeInBlur');
    scrollTo( 0,0 );
    cube.style.webkitTransform = "rotateY("+ angle +"deg)";
  };

  document.getElementById("back").onclick = function() {
    page_num -= 1;
    angle += 90;
    current.el.classList.remove('fadeInBlur');
    current.el.classList.add('fadeOutBlur');
    current = current.prev;
    current.el.classList.remove('fadeOutBlur');
    current.el.classList.add('fadeInBlur');
    scrollTo( 0,0 );
    cube.style.webkitTransform = "rotateY("+ angle +"deg)";
  };
}