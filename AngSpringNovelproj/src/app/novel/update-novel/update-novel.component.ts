import { Component } from '@angular/core';
import { NovelServiceService } from '../novel-service.service';
import { Novel } from '../Novel';

@Component({
  selector: 'app-update-novel',
  templateUrl: './update-novel.component.html',
  styleUrls: ['./update-novel.component.css']
})
export class UpdateNovelComponent {

    constructor(private srvc:NovelServiceService){}


    novel=new Novel();
    updateNovel(){
      this.srvc.updateNovel(this.novel).subscribe(
        res=>{
          console.log(res)
        },
        err=>{
          console.log(err)
        }
      )
    }

}
