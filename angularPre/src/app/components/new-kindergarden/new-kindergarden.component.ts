import { Component, OnInit } from '@angular/core';
import { Kindergarten } from 'src/app/shared/models/kindergarten';

@Component({
  selector: 'app-new-kindergarden',
  templateUrl: './new-kindergarden.component.html',
  styleUrls: ['./new-kindergarden.component.scss']
})
export class NewKindergardenComponent implements OnInit {

  kindergarden:Kindergarten=new Kindergarten();
  constructor() { }

  ngOnInit() {
  }

}
