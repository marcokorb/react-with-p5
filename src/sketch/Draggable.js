import BaseObject from './BaseObject';

class Draggable extends BaseObject{
  constructor(props) {
    
    super(props);
    // this.canvas = canvas;

    // canvas.sketch.draw = () => {
    //   const { fill, mouseX, mouseY, stroke } = canvas.sketch;

    //   canvas.sketch.rect(this.x, this.y, 50, 50);
    //   // canvas.sketch.fill(255);
    //   // Is mouse over object
    //   if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < this.y + this.h) {
    //     rollover = true;
    //   } 
    //   else {
    //     rollover = false;
    //   }
  
    //   // Adjust location if being dragged
    //   if (dragging) {
    //     x = mouseX + offsetX;
    //     y = mouseY + offsetY;
    //   }

    //   stroke(0);
    //   // Different fill based on state
    //   if (dragging) {
    //     fill (50);
    //   } else if (rollover) {
    //     fill(100);
    //   } else {
    //     fill(175, 200);
    //   }
    // }    
  }
}

export default Draggable;