import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ChildService } from 'src/app/shared/services/child.service';
import { Child } from 'src/app/shared/models/child';

@Component({
  selector: 'app-new-child',
  templateUrl: './new-child.component.html',
  styleUrls: ['./new-child.component.scss']
})
export class NewChildComponent implements OnInit {

  newChild: FormGroup; 
  imageUrl:string;
  fileToUpload: File = null;
  isImageLoading: boolean;
  imageToShow: any;
  child:Child=new Child();

  constructor(private fb: FormBuilder,public childService:ChildService) { }

  ngOnInit() {

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
    kindergartenChild:[]
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
     this.childService.addChild(this.child,this.fileToUpload).subscribe(data=>{
       
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


}
