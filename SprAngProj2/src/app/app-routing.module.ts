import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSketchComponent } from './sketch/add-sketch/add-sketch.component';
import { ShowSketchComponent } from './sketch/show-sketch/show-sketch.component';
import { ShowAllSketchComponent } from './sketch/show-all-sketch/show-all-sketch.component';
import { ModifySketchComponent } from './sketch/modify-sketch/modify-sketch.component';
import { DeleteSketchComponent } from './sketch/delete-sketch/delete-sketch.component';

const routes: Routes = [
  {path:"",component:AddSketchComponent},
  {path:"addSketch",component:AddSketchComponent},
  {path:"showSketch",component:ShowSketchComponent},
  {path:"ShowAllSketch",component:ShowAllSketchComponent},
  {path:"modifySketch",component:ModifySketchComponent},
  {path:"deleteSketch",component:DeleteSketchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
