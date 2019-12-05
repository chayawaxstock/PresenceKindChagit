import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
import { AccountService } from 'src/app/shared/services/account.service';
import { TeacherService } from 'src/app/shared/services/teacher.service';
import { ChildService } from 'src/app/shared/services/child.service';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email= new FormControl('');
  password = new FormControl('');
  constructor(public accountService:AccountService,
    public teacherService:TeacherService,
    public childService:ChildService,
    public router:Router ) { }

  ngOnInit() {
  }

  login(): void {
    debugger;
    this.accountService.login(this.password, this.email).subscribe(
      data => {
        if (data == null)
          this.erorMessage("מייל או סיסמה לא תקינים");
        else {
          debugger;
          if (data["teacherId"] != null) {
            this.teacherService.currectTeacher = data;
            this.router.navigate(['home'])
          }
          else {
            this.childService.currectParents = data;
            this.router.navigate(['homeParent'])
          }

        }
      }, err => {
        this.erorMessage("תקלה בקבלת הנתונים");
      }
    )
  }
  erorMessage(message: string) {
    Swal.fire({
      position: 'top-end',
      icon: 'error',
      title: 'אופס...!',
      text: message,
      showConfirmButton: false,
      timer: 2500
    })
  }

}
