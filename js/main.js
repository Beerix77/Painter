console.log('Hello World!');

const randomNumber = function(){

  let number = Math.floor(Math.random() * 256);
  return number;
}


let hueCounter = 0; // will reset to 0 at 361 etc

document.addEventListener('mousemove', function(ev){

  if (ev.shiftKey){

    //console.log(ev.pageX, ev.pageY);

    const brushNode = document.createElement('div');

    brushNode.className = 'location';

    const brushSize = 16;
    
    // brushNode.style.backgroundColor = `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;
    brushNode.style.backgroundColor = `hsla(${hueCounter}, 100%, 50%, 0.65)`;
    hueCounter++;
    


    brushNode.style.width = brushSize + 'px';
    brushNode.style.height = brushSize + 'px';
  

    brushNode.style.top = (ev.pageY - (brushSize / 2)) + 'px';
    brushNode.style.left = (ev.pageX - (brushSize / 2)) +'px';



    document.body.appendChild(brushNode);

  }
});

