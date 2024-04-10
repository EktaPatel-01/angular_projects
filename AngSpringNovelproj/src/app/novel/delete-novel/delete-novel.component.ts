import { Component } from '@angular/core';
import { NovelServiceService } from '../novel-service.service';

@Component({
  selector: 'app-delete-novel',
  templateUrl: './delete-novel.component.html',
  styleUrls: ['./delete-novel.component.css']
})
export class DeleteNovelComponent {

  constructor(private srvc : NovelServiceService){}

  novelId!:number;
  deleteNovel(){
    this.srvc.deleteNovel(this.novelId).subscribe(
      res=>{
        console.log(res);
        alert("Novel Deleted successfully...")
      },
      err=>{
        console.log(err.error);
        alert("Novel is not deleted...")
      }
    )
  }
}
