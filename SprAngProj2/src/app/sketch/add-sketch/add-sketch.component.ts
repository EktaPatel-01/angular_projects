import { Component } from '@angular/core';
import { SketchService } from '../sketch.service';
import { Sketch } from '../Sketch';

@Component({
  selector: 'app-add-sketch',
  templateUrl: './add-sketch.component.html',
  styleUrls: ['./add-sketch.component.css']
})
export class AddSketchComponent {

  constructor(private srvs:SketchService){}

  sketch=new Sketch();

  localAddSketch(){
    this.srvs.addSketch(this.sketch).subscribe(
      res=>{
        console.log(res)
        alert("Sketch Added Successfully..");
      },
      err=>{
        console.log(err);
        alert("Sketch Id is already present");
      }
    )
  }
  
}
