import { Component, OnInit, Input, Inject } from '@angular/core';
import { Kindergarten } from 'src/app/shared/models/kindergarten';
import { City } from 'src/app/shared/models/city';
import { HellperService } from 'src/app/shared/services/hellper.service';
import { Language } from 'src/app/shared/models/language';
import { Layer } from 'src/app/shared/models/layer';
import { Belonging } from 'src/app/shared/models/belonging';
import { FormGroup, FormControl } from '@angular/forms';
import { createValidatorText, createValidatorNumber, validateHour } from 'src/app/shared/helpers';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Kind } from 'src/app/shared/models/kind';

@Component({
  selector: 'app-new-kindergarden',
  templateUrl: './new-kindergarden.component.html',
  styleUrls: ['./new-kindergarden.component.scss']
})
export class NewKindergardenComponent implements OnInit {

  @Input()
  kindergarden:Kindergarten=new Kindergarten();

  formGroup: FormGroup;
  obj: typeof Object = Object;

  cities:City[]=[];
  languges:Language[]=[];
  layers:Layer[]=[];
  belongs:Belonging[]=[]
  kinds:Kind[]=[];

  city:City=new City();

  constructor(
    public dialogRef: MatDialogRef<NewKindergardenComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Kindergarten,
    public helperService:HellperService) {}

 

  ngOnInit() {

    this.helperService.getAllCities().subscribe(data=>{
      this.cities=data;
    });

    this.helperService.getAllKinds().subscribe(data=>{
      this.kinds=data;
    });

    this.helperService.getAllLanguge().subscribe(data=>{
      this.languges=data;
    });

    this.helperService.getAllLayers().subscribe(data=>{
      this.layers=data;
    });

    this.helperService.getAllBelongs().subscribe(data=>{
      this.belongs=data;
    });
  }

  changeCity(id:number)
  {
    debugger;
    this.city=this.cities.find(p=>p.cityId==id);
    this.kindergarden.areaId=0;
  }

  addKindergarden()
  {
    debugger;
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
