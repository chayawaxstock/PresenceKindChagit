import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registerTeacher',
  templateUrl: './registerTeacher.component.html',
  styleUrls: ['./registerTeacher.component.scss']
})
export class RegisterTeacherComponent implements OnInit {

  showSpinner = false;
  username: string;
  password: string;

  registerForm: FormGroup;
  submitted = false;
  formGroup: FormGroup;
  obj: typeof Object = Object;


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      phone:[''],
      tell:[''],
      age:[0],
      kindergartenId:[],
      areaId:[],
      confirmPassword: ['', Validators.required]
    }, {
        //validator: MustMatch('password', 'confirmPassword')
      });
  }
  
}
