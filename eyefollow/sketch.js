function setup() {
    createCanvas(644, 902);
    face = loadImage("./face.png");
    eyes = loadImage("./eye.png");
    clickPoints = [];
    currentPoint = 0;
  }
  
  function mouseClicked() {
    element = {'x': mouseX, 'y': mouseY};
    clickPoints.push(element);
    x = document.getElementById("canvas");
    x.crossEyed = True;
  }
  
  function draw() {
    background(255);
    xDir = (mouseX - width/2)/10;
    yDir = (mouseY - height/2)/10;
    image(eyes,xDir,yDir);
    image(face,0,0);
    //console.log(clickPoints);
    // if (clickPoints.length > 0) {
    //   console.log(clickPoints.length);
    // }
    
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  function mouseClicked() {
    element = {'x': mouseX, 'y': mouseY};
    clickPoints.push(element);
    x = document.getElementById("canvas");
    x.innerHTML = String.raw`<iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    
    noLoop();
    remove();
  }