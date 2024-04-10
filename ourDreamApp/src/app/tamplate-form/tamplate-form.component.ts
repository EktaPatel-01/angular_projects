import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tamplate-form',
  templateUrl: './tamplate-form.component.html',
  styleUrls: ['./tamplate-form.component.css']
})
export class TamplateFormComponent {
  @ViewChild('f') 
  courseForm!: NgForm ;
  
  onSubmit(form: NgForm) {
    console.log("Course Name is : " + form.value.courseName);
    console.log("Course Desc is : " + form.value.courseDesc);
    console.log("Course Amount is : " + form.value.courseAmount);    

    console.log('1>form : ',form);
    console.log('2>courseForm : ',this.courseForm);
  }
    onClear() {
      // Now that we have access to the form via the 'ViewChild', we can access the form and clear it.
      this.courseForm.reset();
      }
    
      onDelete() {
      }
    
      ngOnDestroy() {    
      }
}
