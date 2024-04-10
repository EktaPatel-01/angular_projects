import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddSketchComponent } from './add-sketch/add-sketch.component';
import { DeleteSketchComponent } from './delete-sketch/delete-sketch.component';
import { ShowSketchComponent } from './show-sketch/show-sketch.component';
import { ShowAllSketchComponent } from './show-all-sketch/show-all-sketch.component';
import { ModifySketchComponent } from './modify-sketch/modify-sketch.component';
import { FormsModule } from '@angular/forms';
import { MainPageComponent } from './main-page/main-page.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AddSketchComponent,
    DeleteSketchComponent,
    ShowSketchComponent,
    ShowAllSketchComponent,
    ModifySketchComponent,
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    HttpClientModule
  ],
  exports:[
    AddSketchComponent,
    DeleteSketchComponent,
    ShowSketchComponent,
    ShowAllSketchComponent,
    ModifySketchComponent,
    MainPageComponent

  ]
})
export class SketchModule { }
