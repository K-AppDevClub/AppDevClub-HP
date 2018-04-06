require('./app.scss')

var front = { player: null, next: null, prev: null };
var right = { player: null, next: null, prev: null };
var back =  { player: null, next: null, prev: null };
var left =  { player: null, next: null, prev: null };

front.next = right;
front.prev = left;
right.next = back;
right.prev = front;
back.next  = left;
back.prev  = right;
left.next  = front;
left.prev  = back;

var current = front;
var page_num = 0;

onload=function(){
  var angle = 0;
  var cube = document.getElementById("cube");

  stage = new createjs.Stage("myCanvas");
  particleSystem = new particlejs.ParticleSystem();
  stage.addChild(particleSystem.container);

  particleSystem.importFromJson(
    {
      "bgColor": "#00000",
      "width": 728,
      "height": 115,
      "emitFrequency": "100",
      "startX": 365,
      "startXVariance": 0,
      "startY": 218,
      "startYVariance": 0,
      "initialDirection": 0,
      "initialDirectionVariance": "360",
      "initialSpeed": 8.5,
      "initialSpeedVariance": 0.1,
      "friction": "0.063",
      "accelerationSpeed": 0,
      "accelerationDirection": "275.8",
      "startScale": 3,
      "startScaleVariance": 0,
      "finishScale": "2",
      "finishScaleVariance": "0",
      "lifeSpan": 29,
      "lifeSpanVariance": "27",
      "startAlpha": "1",
      "startAlphaVariance": "0",
      "finishAlpha": "0",
      "finishAlphaVariance": "0",
      "shapeIdList": [
          "blur_circle"
      ],
      "startColor": {
          "hue": 37,
          "hueVariance": 360,
          "saturation": "91",
          "saturationVariance": 0,
          "luminance": "56",
          "luminanceVariance": "16"
      },
      "blendMode": true,
      "alphaCurveType": "0",
      "VERSION": "0.1.3"
  });

  createjs.Ticker.framerate = 60;
  createjs.Ticker.timingMode = createjs.Ticker.RAF;
  createjs.Ticker.addEventListener("tick", handleTick);

  function handleTick() {
    particleSystem.update();
    stage.update();
  }

  document.getElementById("next").onclick = function() {
    page_num += 1;
    angle -= 90;
    cube.style.webkitTransform = "rotateY("+ angle +"deg)";
    current = current.next;
  };

  document.getElementById("back").onclick = function() {
    page_num -= 1;
    angle += 90;
    cube.style.webkitTransform = "rotateY("+ angle +"deg)";
    current = current.prev;
  };

  document.getElementById("panel").onclick = function() {
  };
}