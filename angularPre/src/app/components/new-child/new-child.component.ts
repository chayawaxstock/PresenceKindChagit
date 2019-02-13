import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ChildService } from 'src/app/shared/services/child.service';
import { Child } from 'src/app/shared/models/child';
import Swal from 'sweetalert2'
import { HellperService } from 'src/app/shared/services/hellper.service';
import { Kindergarten } from 'src/app/shared/models/kindergarten';
import { City } from 'src/app/shared/models/city';

@Component({
  selector: 'app-new-child',
  templateUrl: './new-child.component.html',
  styleUrls: ['./new-child.component.scss']
})
export class NewChildComponent implements OnInit {

  city:City=new City();
  newChild: FormGroup;
  newParent:FormGroup; 
  imageUrl:string;
  fileToUpload: File = null;
  isImageLoading: boolean;
  imageToShow: any;
  child:Child=new Child();
  cities:City[]=[];
  allKinderGardens: Kindergarten[]=[];

  constructor(private fb: FormBuilder,public childService:ChildService,
    public hellperService:HellperService) { }

  ngOnInit() {

    this.hellperService.getAllKindergarden().subscribe(data=>{
      this.allKinderGardens=data;
})

this.hellperService.getAllCities().subscribe(data=>{
  this.cities=data;
});

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

  changeCity(id:number)
  {
    this.city=this.cities.find(p=>p.cityId==id);
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
