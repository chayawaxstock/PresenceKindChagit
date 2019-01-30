import { Child } from './child';
import { Kindergarten } from './kindergarten';
import { PresenceChild } from './presenceChild';
import { Alert } from './alert';

export class KindergartenChild {

    kindergartenChildId:number;
    childId:number;
    kindergartenId:number;
    child:Child=new Child();
    kindergarten:Kindergarten=new Kindergarten();
    year:Date=new Date()
    timeComeFrom:Date;
    timeComeTill:Date;
    whoComeTake:string;
    presenceChilds:PresenceChild[]=[];
    alerts:Alert[]=[];
    responses:Response[]=[];
    
}
