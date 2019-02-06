import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-new-child',
  templateUrl: './new-child.component.html',
  styleUrls: ['./new-child.component.scss']
})
export class NewChildComponent implements OnInit {

  newChild: FormGroup; 
  imageUrl:string;
  fileToUpload: File = null;
  constructor(private fb: FormBuilder) { }

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


}
