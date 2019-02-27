import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeacherService } from 'src/app/shared/services/teacher.service';
import Swal from 'sweetalert2'
import { AccountService } from 'src/app/shared/services/account.service';
import { ChildService } from 'src/app/shared/services/child.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,
     private teacherService: TeacherService,
     public accountService:AccountService,
     public childService:ChildService) { }
  email: string;
  password: string;

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
          if(data["teacherId"]!=null)
          {
             this.teacherService.currectTeacher = data;
             this.router.navigate(['home'])
          }
          else{
            this.childService.currectParents=data;
            this.router.navigate(['homeParent'])
          }
         
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

  registerTeacher(){
    this.router.navigate(['register']);
  }
  registerChild()
  {
    this.router.navigate(['registerChild']);
  }

}
