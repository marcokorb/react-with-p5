import p5 from 'p5';

class Sketch{
  constructor({ renderRef }) {

    this.renderRef = renderRef;
    this.sketch = new p5(( p ) => {

      p.setup = () => {
        p.createCanvas(600, 300).parent(renderRef.current);
      };
    
      p.draw = () => {
        p.background(0);
        p.fill(255);
      };
    });
  }
}

export default Sketch;
