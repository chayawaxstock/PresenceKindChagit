import { Component, OnInit, Input } from '@angular/core';
import { Child } from 'src/app/shared/models/child';

@Component({
  selector: 'app-precencesImageChild',
  templateUrl: './precencesImageChild.component.html',
  styleUrls: ['./precencesImageChild.component.scss']
})
export class PrecencesImageChildComponent implements OnInit {

  // @Input()
  // child:Child=new Child();
  @Input()
  child:string;
  isclick:boolean=false;
  constructor() { }

  ngOnInit() {
  }

  clickImage(divElement)
  {
    if(this.isclick==true)
    {
      divElement.style.borderColor = 'white';
      divElement.style.borderStyle="none";  
      this.isclick=false;
      return ;
    }
    this.isclick=true;
    divElement.style.borderColor = 'greenyellow';
    divElement.style.borderStyle="solid";   
  }

}
