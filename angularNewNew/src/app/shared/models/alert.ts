import { KindergartenChild } from './kindergartenChild';

export class Alert {

    alertId:number;
    description:string;
    dateTime:Date=new Date();
    level:number=0;
    status:boolean=false;
    kindergartenChildId:number;
    kindergartenChild:KindergartenChild=new KindergartenChild();

}
