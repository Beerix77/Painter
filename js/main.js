console.log('Hello World!');

const randomNumber = function(){

  let number = Math.floor(Math.random() * 256);
  return number;
}

const drawDot = function(locationY, locationX){
  const brushNode = document.createElement('div');

  brushNode.className = 'location';

  const brushSize = 50;
  
  // brushNode.style.backgroundColor = `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;
  brushNode.style.backgroundColor = `hsla(${hueCounter}, 100%, 50%, 0.65)`;
  hueCounter++;
  
  brushNode.style.width = brushSize + 'px';
  brushNode.style.height = brushSize + 'px';

  brushNode.style.top = (locationY - (brushSize / 2)) + 'px';
  brushNode.style.left = (locationX - (brushSize / 2)) +'px';

  document.body.appendChild(brushNode);

}



let hueCounter = 0; // will reset to 0 at 361 etc

document.addEventListener('mousemove', function(ev){

  if (ev.shiftKey){

    drawDot(ev.pageY, ev.pageX);

  }
});

