import { Component } from '@angular/core';
import { NovelServiceService } from '../novel-service.service';
import { Novel } from '../Novel';

@Component({
  selector: 'app-add-novel',
  templateUrl: './add-novel.component.html',
  styleUrls: ['./add-novel.component.css']
})
export class AddNovelComponent {
    constructor(private srvs:NovelServiceService){}
    novel=new Novel();

    localAddBook(){
      this.srvs.addNovel(this.novel).subscribe(
        res =>{
          console.log(res)
          alert("Novel added successfully...");
        
        },
        err =>{
          console.log(err.error.message);
          alert("Book Id is already present...");
        
        }
      )
    }
}
