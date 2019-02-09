import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wellcome',
  templateUrl: './wellcome.component.html',
  styleUrls: ['./wellcome.component.scss']
})
export class WellcomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  enter()
  {
    this.router.navigate(['login']);
  }
  registerTeacher(){
    this.router.navigate(['register']);
  }
  registerChild()
  {
    this.router.navigate(['registerChild']);
  }
}
