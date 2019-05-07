import { Component, OnInit, Input } from '@angular/core';
import { Child } from 'src/app/shared/models/child';
import { MatDialog } from '@angular/material';
import { ModelPassTeacherComponent } from '../model-pass-teacher/model-pass-teacher.component';
import { ChildService } from 'src/app/shared/services/child.service';
import { TeacherService } from 'src/app/shared/services/teacher.service';

@Component({
  selector: 'app-precencesImageChild',
  templateUrl: './precencesImageChild.component.html',
  styleUrls: ['./precencesImageChild.component.scss']
})
export class PrecencesImageChildComponent implements OnInit {

   @Input()
   child:Child=new Child();
  // @Input()
  // child: string;
  isclick: boolean = false;
  timer:any;
  imageToShow: string | ArrayBuffer;
  isImageLoading: boolean;
  constructor(public dialog: MatDialog,public childService:ChildService,
    public teacherService:TeacherService) { }

  ngOnInit() {
   //this.getImageFromService();
this.childService.checkPresence(this.child.childId).subscribe(data=>{
  
  let myDiv = document.getElementById('image');
  myDiv.style.borderStyle="solid";
  if(data==3)
  {
    myDiv.style.borderColor = 'red';
  }
  else if(data==2)
  {
    myDiv.style.borderColor = 'white';
    myDiv.style.borderStyle = "none";
  }
  
  else {

    myDiv.style.borderColor = 'greenyellow';
    myDiv.style.borderStyle = "solid";
  }
  debugger;
})

  }

  clickImage(divElement) {
    if (this.isclick == true) {
         debugger;
      const dialogRef = this.dialog.open(ModelPassTeacherComponent, {

      });
      dialogRef.afterClosed().subscribe(result => {
        if (result == true) {
          this.childService.deletePresence(this.child.childId).subscribe(data=>{

          })
          divElement.style.borderColor = 'white';
          divElement.style.borderStyle = "none";
          this.isclick = false;
        }
        else alert("error");
      });
      return;
    }
    this.isclick = true;
    this.childService.addPrecence(this.teacherService.currectTeacher.kindergartenId,this.child.childId).subscribe(data=>{
      alert(data);
    })
    divElement.style.borderColor = 'greenyellow';
    divElement.style.borderStyle = "solid";
  }


  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      debugger;
       this.imageToShow = reader.result;
    }, false);
 
    if (image) {
       reader.readAsDataURL(image);
    }
 }
 
 getImageFromService() {
   debugger;
   this.isImageLoading = true;
   this.childService.getImage(this.child.image).subscribe(data => {
    debugger;
     this.createImageFromBlob(data);
     this.isImageLoading = false;
   }, error => {
     this.isImageLoading = false;
     console.log(error);
   });
 }



}
