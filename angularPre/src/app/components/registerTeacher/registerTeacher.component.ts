import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { validatePassword } from 'src/app/shared/helpers';
import { Teacher } from 'src/app/shared/models/teacher';
import { Kindergarten } from 'src/app/shared/models/kindergarten';
import { HellperService } from 'src/app/shared/services/hellper.service';

@Component({
  selector: 'app-registerTeacher',
  templateUrl: './registerTeacher.component.html',
  styleUrls: ['./registerTeacher.component.scss']
})
export class RegisterTeacherComponent implements OnInit {

  showSpinner = false;
  confirmPassword: string;
  submitted = false;
  newTeacher:Teacher=new Teacher();
  isNewKindgarden:boolean=false;
  kindergarten:Kindergarten=new Kindergarten();
  allKinderGardens:Kindergarten[]=[]

  constructor(private hellperService:HellperService) {

   }

  ngOnInit() {

    this.hellperService.getAllKindergarden().subscribe(data=>{
           this.allKinderGardens=data;
    })
    // this.registerForm = this.formBuilder.group({
    //   kindergartenId:[],
    //   areaId:[],
  
  }
  
}
