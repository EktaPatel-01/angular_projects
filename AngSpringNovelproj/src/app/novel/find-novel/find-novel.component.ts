import { Component } from '@angular/core';
import { NovelServiceService } from '../novel-service.service';
import { Novel } from '../Novel';

@Component({
  selector: 'app-find-novel',
  templateUrl: './find-novel.component.html',
  styleUrls: ['./find-novel.component.css']
})
export class FindNovelComponent {
    constructor(private srvc:NovelServiceService){}
    novelId!:number;
    novel=new Novel();
    LocalFindNovel(){
      this.srvc.findNovel(this.novelId).subscribe(
        res=>{
          this.novel=res;
          
        },
        err=>{
          console.log(err);
        }
      )
    }
}
