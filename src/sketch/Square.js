import Draggable from './Draggable';

class Square {
  constructor({ x = 100, y = 100, w = 50, h = 50, canvas }) {

    this.canvas = canvas;
    this.x = x + canvas.sketch.random(-20, 20);
    this.y = y + canvas.sketch.random(-20, 20);
    this.w = w;
    this.h = h;
    this.offsetX = null;
    this.offsetY = null;

    this.dragging = false;
    this.rollover = false;
    
    canvas.sketch.draw = () => {

      const { mouseX, mouseY } = canvas.sketch;

      if (mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.h) {
        this.rollover = true;
      } 
      else {
        this.rollover = false;
      }

        // Adjust location if being dragged
      if (this.dragging) {
        this.x = mouseX + this.offsetX;
        this.y = mouseY + this.offsetY;
      }

      canvas.sketch.stroke(0);
      // Different fill based on state
      if (this.dragging) {
        // canvas.sketch.fill (50);
      } else if (this.rollover) {
        // canvas.sketch.fill(100);
      } else {
        // canvas.sketch.fill(175, 200);
      }
      canvas.sketch.background(0);
      canvas.sketch.rect(this.x, this.y, this.w, this.h);
    };
    
    canvas.sketch.mousePressed = () => {

      const { mouseX, mouseY } = canvas.sketch;

      if (mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.h) {
        this.dragging = true;
        // If so, keep track of relative location of click to corner of rectangle
        this.offsetX = this.x - mouseX;
        this.offsetY = this.y - mouseY;
      }
    }

    canvas.sketch.mouseReleased = () => this.dragging = false;

    canvas.sketch.redraw();
  }

  moveLeft(speed=1) {
    this.x -= speed;
    this.canvas.sketch.redraw();
  }

  moveRight(speed=1) {
    this.x += speed;
    this.canvas.sketch.redraw();
  }
}

export default Square;
