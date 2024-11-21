console.log('Hello World!');

const randomNumber = function(){

  let number = Math.floor(Math.random() * 256);
  return number;

}; //randomNumber()

const drawDot = function(locationY, locationX){

  const brushNode = document.createElement('div');

  brushNode.className = 'location';

  const brushSize = 100;
  
  // brushNode.style.backgroundColor = `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;
  brushNode.style.backgroundColor = `hsla(${hueCounter}, 100%, 50%, 0.65)`;
  
  brushNode.style.width = brushSize + 'px';
  brushNode.style.height = brushSize + 'px';

  brushNode.style.top = (locationY - (brushSize / 2)) + 'px';
  brushNode.style.left = (locationX - (brushSize / 2)) +'px';

  document.body.appendChild(brushNode);

  hueCounter++;

}; //drawDot()


let hueCounter = 0; // will reset to 0 at 361 etc

document.addEventListener('mousemove', function(ev){

  if (ev.shiftKey){
    drawDot(ev.pageY, ev.pageX);
    console.log(ev.pageY, ev.pageX);
  }

}); //'mousemove' addEventListener()


//screensaver
// setInterval(function(){
//   drawDot(Math.random() * window.innerHeight, Math.random() * window.innerWidth);
// }, 50)


setInterval(function(){

  const allBrushes = document.querySelectorAll('.location');

  for(const brush of allBrushes){
    
     const topNum = parseInt(brush.style.top);
     brush.style.top = (topNum + 10) + 'px';

  }


  if(topNum > window.innerHeight){
    brush.remove();
  }
}, 15)