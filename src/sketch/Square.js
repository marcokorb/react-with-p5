import Draggable from './Draggable';

class Square extends Draggable{
  constructor({ x = 100, y = 100, canvas }) {

    super();

    this.canvas = canvas;
    this.x = x;
    this.y = y;

    canvas.sketch.draw = () => {
      canvas.sketch.rect(this.x, this.y, 50, 50);
      // canvas.sketch.fill(255);
    };

    
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
