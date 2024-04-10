import { Component } from '@angular/core';
import { SketchService } from '../sketch.service';
import { Sketch } from '../Sketch';

@Component({
  selector: 'app-show-all-sketch',
  templateUrl: './show-all-sketch.component.html',
  styleUrls: ['./show-all-sketch.component.css']
})
export class ShowAllSketchComponent {

  constructor(private srvs:SketchService){}

  sketchList:Sketch[]=[];

  localShowAllSketch(){
    this.srvs.showAllSketch().subscribe(
      res=>{
        this.sketchList=res;
        console.log(this.sketchList);

      },
      err=>{
        console.log(err);
      }
    )
  }

}
