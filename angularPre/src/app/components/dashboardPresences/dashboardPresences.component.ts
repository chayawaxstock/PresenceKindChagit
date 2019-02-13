import { Component, OnInit } from '@angular/core';
import { KindergartenChild } from 'src/app/shared/models/kindergartenChild';
import { Child } from 'src/app/shared/models/child';
import { TeacherService } from 'src/app/shared/services/teacher.service';

@Component({
  selector: 'app-dashboardPresences',
  templateUrl: './dashboardPresences.component.html',
  styleUrls: ['./dashboardPresences.component.scss']
})
export class DashboardPresencesComponent implements OnInit {

  children:Child[]=[];
  
  constructor(public teacherService:TeacherService) { }

  ngOnInit() {
this.teacherService.getChildren(this.teacherService.currectTeacher.teacherId).subscribe(data=>{
  debugger;
  this.children=data;
})
  }

}
