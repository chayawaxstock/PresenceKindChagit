import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ChildService } from 'src/app/shared/services/child.service';

@Component({
  selector: 'app-register-parent',
  templateUrl: './register-parent.component.html',
  styleUrls: ['./register-parent.component.scss']
})
export class RegisterParentComponent implements OnInit {
  @Input()
  newParent: FormGroup ; 
  constructor(private fb: FormBuilder,public childService:ChildService) { }

  
 

  ngOnInit() {
    
  
  }
}
