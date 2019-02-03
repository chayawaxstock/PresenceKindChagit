import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeacherService } from 'src/app/shared/services/teacher.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private teacherService: TeacherService) { }
  email: string;
  password: string;

  ngOnInit() {
  }

  login(): void {
    debugger;
    this.teacherService.login(this.password, this.email).subscribe(
      data => {
        if (data == null)
        this.erorMessage("מייל או סיסמה לא תקינים");
        else {
          this.teacherService.currectTeacher = data;
          this.router.navigate(['home'])
        }
      },err=>{
        this.erorMessage("תקלה בקבלת הנתונים");
      }
    )
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

}
