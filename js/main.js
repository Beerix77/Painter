console.log('Hello World!');

document.addEventListener('mousemove', function(ev){

  

  //console.log(ev.pageX, ev.pageY);

  const brushNode = document.createElement('div');

  brushNode.className = 'location';

  const brushSize = 16;
  
  brushNode.style.backgroundColor = 'red';
  brushNode.style.width = brushSize + 'px';
  brushNode.style.height = brushSize + 'px';
  brushNode.style.borderRadius = 50 + '%';

  brushNode.style.top = ev.pageY+ 'px'
  brushNode.style.left = ev.pageX + 'px'


  document.body.appendChild(brushNode);
});

