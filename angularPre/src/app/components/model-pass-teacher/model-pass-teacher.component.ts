import { Component, OnInit, Inject } from '@angular/core';
import { TeacherService } from 'src/app/shared/services/teacher.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Kindergarten } from 'src/app/shared/models/kindergarten';

@Component({
  selector: 'app-model-pass-teacher',
  templateUrl: './model-pass-teacher.component.html',
  styleUrls: ['./model-pass-teacher.component.scss']
})
export class ModelPassTeacherComponent implements OnInit {

  email:string;
  password:string;

  constructor(
    public dialogRef: MatDialogRef<ModelPassTeacherComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Kindergarten,
    private teacherService:TeacherService) {}

  ngOnInit() {
  }

  ok()
  {
    
    if(this.teacherService.currectTeacher.password==this.password)
      this.dialogRef.close(true);
    else this.dialogRef.close(false);
  }
}
