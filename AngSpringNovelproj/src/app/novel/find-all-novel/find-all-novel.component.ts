import { Component } from '@angular/core';
import { NovelServiceService } from '../novel-service.service';
import { Novel } from '../Novel';

@Component({
  selector: 'app-find-all-novel',
  templateUrl: './find-all-novel.component.html',
  styleUrls: ['./find-all-novel.component.css']
})
export class FindAllNovelComponent {
  constructor(private srvc:NovelServiceService){}

  novelList:Novel[]=[];

  LocalAllNovels(){
    this.srvc.findAllNovel().subscribe(
      res=>{
        this.novelList=res;
        console.log(this.novelList);
        
      },
      err=>{
        console.log(err);
      }
    )
  }
}
