function setup() {
    createCanvas(600, 600);
    background("black");
  }
  
  function draw()  {
    stroke("blue");
    fill("rgb(165,1,165)");
    
    if(mouseIsPressed){
    rect(mouseX, mouseY, 20,35);
  }
    
    
  }