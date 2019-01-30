import { Area } from './area';
import { Belonging } from './belonging';
import { Layer } from './layer';
import { Kind } from './kind';
import { Language } from './language';
import { KindergartenChild } from './kindergartenChild';
import { Teacher } from './teacher';

export class Kindergarten {

    kindergartenId:number;
    name:string;
    tell:string;
    code:string;
    areaId:number;
    Area:Area=new Area();   
    address:string;
    belongingId:number;
    belonging:Belonging=new Belonging();
    fromAge:number;
    tillAge:number;
    layerId:number;
    layer:Layer=new Layer();//שכבת גיל
    kindId:number;
    kind:Kind=new Kind();
    languageId:number;
    language:Language=new Language();
    fromHour:Date;
    tillHour:Date;
    kindergartenChildren:KindergartenChild[]=[];
    teachers:Teacher[]=[];

}
