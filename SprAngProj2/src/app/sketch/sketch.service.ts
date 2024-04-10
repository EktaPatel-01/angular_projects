import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sketch } from './Sketch';

@Injectable({
  providedIn: 'root'
})
export class SketchService {

  constructor(private httpClient:HttpClient) { }

  baseUrl="http://localhost:8080/sketch";

  addSketch(sketch:Sketch){
    return this.httpClient.post(this.baseUrl+"/addSketch",sketch,{responseType: "text"});
  }
  showSketch(sketchId:number){
    return this.httpClient.get<Sketch>(this.baseUrl+"/getSketch/"+sketchId);
  }
  showAllSketch(){
    return this.httpClient.get<Sketch[]>(this.baseUrl+"/getAllSketch");
  }
  modifySketch(sketch: Sketch){
    return this.httpClient.put(this.baseUrl+"/modifySketch",sketch);
  }
  deleteSketch(sketchId:number){
    return this.httpClient.delete(this.baseUrl+"/deleteSketch"+sketchId);
  }
}
