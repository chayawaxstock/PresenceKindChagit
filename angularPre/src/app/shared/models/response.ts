import { KindergartenChild } from './kindergartenChild';

export class Response {

    responseId:number;
    kindergartenChildId:number;
    kindergartenChild:KindergartenChild=new KindergartenChild();
    header:string;
    description:string;
    dateTime:Date=new Date();
    status:boolean;
}
