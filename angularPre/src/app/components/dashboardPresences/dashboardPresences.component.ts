import { Component, OnInit } from '@angular/core';
import { KindergartenChild } from 'src/app/shared/models/kindergartenChild';
import { Child } from 'src/app/shared/models/child';

@Component({
  selector: 'app-dashboardPresences',
  templateUrl: './dashboardPresences.component.html',
  styleUrls: ['./dashboardPresences.component.scss']
})
export class DashboardPresencesComponent implements OnInit {

  children:Child[]=[];
  arrImage:string[]=['ddd','aaa','dsdsds'];
  constructor() { }

  ngOnInit() {
  }

}
