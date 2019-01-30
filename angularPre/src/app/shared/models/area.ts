import { City } from './city';
import { Child } from './child';

export class Area {
    
    areaId:number;
    areaName:string;
    cityId:number;
    city:City=new City();
    children:Child[]=[];
}
