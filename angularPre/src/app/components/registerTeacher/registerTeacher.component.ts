import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { validatePassword } from 'src/app/shared/helpers';
import { Teacher } from 'src/app/shared/models/teacher';
import { Kindergarten } from 'src/app/shared/models/kindergarten';
import { HellperService } from 'src/app/shared/services/hellper.service';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

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
  allKinderGardens:Kindergarten[]=[];

  myControl = new FormControl();
  options: string[] = [];
  filteredOptions: Observable<string[]>;


  constructor(private hellperService:HellperService) {

   }

  ngOnInit() {

    this.hellperService.getAllKindergarden().subscribe(data=>{
           this.allKinderGardens=data;
           this.options= this.allKinderGardens.map(a => a.name);
    })
    // this.registerForm = this.formBuilder.group({
    //   kindergartenId:[],
    //   areaId:[],


    this.filteredOptions = this.myControl.valueChanges
    .pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
  
}
