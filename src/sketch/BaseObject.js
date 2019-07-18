
class BaseObject {
  constructor({ x = 100, y = 100, w = 100, h = 100, canvas }) {
    
    this.canvas = canvas;
    
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

  draw() {
    
    console.log(this);
    this.canvas.sketch.draw = () => {
      const { fill, mouseX, mouseY, rect, stroke } = this.canvas.sketch;

      console.log(this);
      rect(this.x, this.y, 50, 50);
      // canvas.sketch.fill(255);
      // Is mouse over object
      // if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < this.y + this.h) {
      //   rollover = true;
      // } 
      // else {
      //   rollover = false;
      // }
  
      // // Adjust location if being dragged
      // if (dragging) {
      //   x = mouseX + offsetX;
      //   y = mouseY + offsetY;
      // }

      // stroke(0);
      // // Different fill based on state
      // if (dragging) {
      //   fill (50);
      // } else if (rollover) {
      //   fill(100);
      // } else {
      //   fill(175, 200);
      // }
    }    
  }
}

export default BaseObject;
