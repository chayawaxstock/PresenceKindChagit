import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ChildService } from 'src/app/shared/services/child.service';
import { Child } from 'src/app/shared/models/child';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-new-child',
  templateUrl: './new-child.component.html',
  styleUrls: ['./new-child.component.scss']
})
export class NewChildComponent implements OnInit {

  newChild: FormGroup;
  newParent:FormGroup; 
  imageUrl:string;
  fileToUpload: File = null;
  isImageLoading: boolean;
  imageToShow: any;
  child:Child=new Child();

  constructor(private fb: FormBuilder,public childService:ChildService) { }

  ngOnInit() {
    
    this.newParent=this.fb.group({
      phoneMother:[],
      phoneFather:[],
      tell:[],
      anotherTell:[],
      email1:[],
      email2:[],
      nameMother:[],
      nameFather:[],
      
    });

    // childId:number;
    // area:Area=new Area();
    // parentId:number;
    // parent:Parent=new Parent();
    // kindergartenChild:KindergartenChild=new KindergartenChild();

  this.newChild=this.fb.group({
    firstName:[],
    lastName:[],
    address:[],
    areaId:[],
    bornDate:[],
    tz:[],
    image:[],
    kindergartenChild:[],
    password:[]
  });
  
  }

  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);

    //Show image preview
    var reader = new FileReader();
    reader.onload = (event:any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }

  addChild()
  {
    debugger;
     this.child=this.newChild.value;
     this.child.parent=this.newParent.value;
     this.childService.addChild(this.child).subscribe((data:number)=>{
          this.childService.uploadImage(this.fileToUpload,data).subscribe(secc=>
            {
               this.message('');
            },()=>{
               this.erorMessage(' שגיאה בעדכון התמונה');
            })
     },()=>{
            this.erorMessage('שגיאה בעדכון');
     });
  }

createImageFromBlob(image: Blob) {
   let reader = new FileReader();
   reader.addEventListener("load", () => {
      this.imageToShow = reader.result;
   }, false);

   if (image) {
      reader.readAsDataURL(image);
   }
}

getImageFromService() {
  this.isImageLoading = true;
  this.childService.getImage("").subscribe(data => {
    this.createImageFromBlob(data);
    this.isImageLoading = false;
  }, error => {
    this.isImageLoading = false;
    console.log(error);
  });
}

erorMessage(message:string)
{
  Swal.fire({
    position: 'top-end',
    type: 'error',
    title: 'אופס...!',
    text: message,
    showConfirmButton: false,
    timer: 2500
  })
}

message(message:string)
{
  Swal.fire({
    position: 'top-end',
    type: 'success',
    title: 'נוסף בהצלחה',
    text: message,
    showConfirmButton: false,
    timer: 2500
  })
}


}
