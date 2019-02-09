import { Component, OnInit, Input } from '@angular/core';
import { Child } from 'src/app/shared/models/child';
import { MatDialog } from '@angular/material';
import { ModelPassTeacherComponent } from '../model-pass-teacher/model-pass-teacher.component';

@Component({
  selector: 'app-precencesImageChild',
  templateUrl: './precencesImageChild.component.html',
  styleUrls: ['./precencesImageChild.component.scss']
})
export class PrecencesImageChildComponent implements OnInit {

  // @Input()
  // child:Child=new Child();
  @Input()
  child: string;
  isclick: boolean = false;
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  clickImage(divElement) {
    if (this.isclick == true) {

      const dialogRef = this.dialog.open(ModelPassTeacherComponent, {

      });
      dialogRef.afterClosed().subscribe(result => {
        debugger;
        if (result == true) {
          divElement.style.borderColor = 'white';
          divElement.style.borderStyle = "none";
          this.isclick = false;
        }
        else alert("error");
      });

      return;
    }
    this.isclick = true;
    divElement.style.borderColor = 'greenyellow';
    divElement.style.borderStyle = "solid";
  }

}
