import { Component } from '@angular/core';
import { SketchService } from '../sketch.service';
import { Sketch } from '../Sketch';

@Component({
  selector: 'app-show-sketch',
  templateUrl: './show-sketch.component.html',
  styleUrls: ['./show-sketch.component.css']
})
export class ShowSketchComponent {

  constructor(private srvs:SketchService){}

  sketchId!:number;
  sketch: Sketch = new Sketch();

  localShowSketch(){
    this.srvs.showSketch(this.sketchId).subscribe(
      res=>{
        this.sketch = res;
      },
      err=>{
        console.log(err);
      }
    )
  }

}
