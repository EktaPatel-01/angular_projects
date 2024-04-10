import { Component } from '@angular/core';
import { SketchService } from '../sketch.service';
import { Sketch } from '../Sketch';

@Component({
  selector: 'app-modify-sketch',
  templateUrl: './modify-sketch.component.html',
  styleUrls: ['./modify-sketch.component.css']
})
export class ModifySketchComponent {

  constructor(private srvs:SketchService){

  }
  sketch = new Sketch();

  localSketchModify(){
    this.srvs.modifySketch(this.sketch).subscribe(
      res=>{
        console.log(res);
        alert("Sketch Modified...");
      },
      err=>{
        console.log(err);
        alert("Sketch not modified");
      }
    )
  }
}
