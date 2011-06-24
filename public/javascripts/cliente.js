/*TODO PARA OTRO DÍA
var socket = new io.Socket(null, {port: 3000, rememberTransport: true});
    socket.connect();

socket.on('message', function(obj){
});
*/

function onChange() {
  voz = $('#voz').val();
  if(voz == 'árbol'){
    var interval = setInterval(function() {
      snakes.next();
      frame++;
    }, 0);
  }
}

function randHex() {
  var num = Math.round(Math.random() * 255).toString(16);
  if (num.length == 1)
    num = "0"+num;
  return num;
}

jQuery(function() {
  if (Modernizr.canvas === true)
    jQuery("#canvas-warning").hide();
  
  // Convenience
  $canvas = jQuery("#canvas");
  canvas = $canvas[0];
  context = canvas.getContext("2d");
  
  // Dimensions
  var width = $canvas.width();
  var height = $canvas.height();
  
  // Set actual canvas size to match css
  $canvas.attr("width", width);
  $canvas.attr("height", height);
  
  var frame = 0;
  
  var n = 1;
  var initialRadius = width/50;
  snakes = new SnakeCollection();
  for (var i=0 ; i<n ; i++) {
    var snake = new Snake(canvas);
    snake.x = width/2 - initialRadius + i*initialRadius*2/n;
    snake.radius = initialRadius;
    snakes.add(snake);
  }
});
