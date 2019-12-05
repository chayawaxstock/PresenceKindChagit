import { Area } from './area';
import { Parent } from './parent';
import { KindergartenChild } from './kindergartenChild';

export class Child {

    childId:number;
    firstName:string;
    lastName:string;
    password:string;
    address:string
    areaId:number;
    area:Area=new Area();
    age:number;
    bornDate:Date;
    tz:string;
    image:string;
    parentId:number;
    parent:Parent=new Parent();
    kindergartenChild:KindergartenChild=new KindergartenChild();

}
