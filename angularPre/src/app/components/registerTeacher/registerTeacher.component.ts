import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { validatePassword } from 'src/app/shared/helpers';
import { Teacher } from 'src/app/shared/models/teacher';
import { Kindergarten } from 'src/app/shared/models/kindergarten';
import { HellperService } from 'src/app/shared/services/hellper.service';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { TeacherService } from 'src/app/shared/services/teacher.service';
import { MatDialog } from '@angular/material';
import { NewKindergardenComponent } from '../new-kindergarden/new-kindergarden.component';
import { City } from 'src/app/shared/models/city';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/shared/services/account.service';

@Component({
  selector: 'app-registerTeacher',
  templateUrl: './registerTeacher.component.html',
  styleUrls: ['./registerTeacher.component.scss']
})
export class RegisterTeacherComponent implements OnInit {

  currectTeacher:Teacher;
  showSpinner = false;
  confirmPassword: string;
  submitted = false;
  newTeacher:Teacher=new Teacher();
  isNewKindgarden:boolean=false;
  kindergarten:Kindergarten=new Kindergarten();
  allKinderGardens:Kindergarten[]=[];

  cities:City[]=[];
  city:City=new City();


  constructor(private hellperService:HellperService,
    public teacherService:TeacherService,
    public dialog: MatDialog,
    public router:Router) {

   }

  ngOnInit() {

    this.hellperService.getAllCities().subscribe(data=>{
      this.cities=data;
    });

    this.hellperService.getAllKindergarden().subscribe(data=>{
           this.allKinderGardens=data;
    })
  }

  changeCity(id:number)
  {
    this.city=this.cities.find(p=>p.cityId==id);
  }

  addNewTeacher()
  {
    debugger;
    
    this.teacherService.addNewTeacher(this.newTeacher).subscribe((ans)=>{
        this.teacherService.currectTeacher=ans;
     this.router.navigate(["home"]);
    },err=>{
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(NewKindergardenComponent, {
      // width: '250px',
      data: {kindergarden:this.kindergarten }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.newTeacher.kindergarten = result;
      this.newTeacher.kindergartenId=0;

    });
  }
}


