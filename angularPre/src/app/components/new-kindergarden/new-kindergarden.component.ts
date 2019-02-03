import { Component, OnInit, Input } from '@angular/core';
import { Kindergarten } from 'src/app/shared/models/kindergarten';
import { City } from 'src/app/shared/models/city';
import { HellperService } from 'src/app/shared/services/hellper.service';
import { Language } from 'src/app/shared/models/language';
import { Layer } from 'src/app/shared/models/layer';
import { Belonging } from 'src/app/shared/models/belonging';

@Component({
  selector: 'app-new-kindergarden',
  templateUrl: './new-kindergarden.component.html',
  styleUrls: ['./new-kindergarden.component.scss']
})
export class NewKindergardenComponent implements OnInit {

  @Input()
  kindergarden:Kindergarten=new Kindergarten();
  cities:City[]=[];
  languge:Language[]=[];
  layers:Layer[]=[];
  belongs:Belonging[]=[]

  city:City=new City();
  constructor(public helperService:HellperService) { }

  ngOnInit() {
    this.helperService.getAllCities().subscribe(data=>{
      this.cities=data;
    });

    this.helperService.getAllLanguge().subscribe(data=>{
      this.languge=data;
    });
  }

  changeCity(id:number)
  {
    this.city=this.cities.find(p=>p.cityId==id);
  }

}
