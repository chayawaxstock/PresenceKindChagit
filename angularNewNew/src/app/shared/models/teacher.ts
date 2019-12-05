import { Kindergarten } from './kindergarten';
import { Area } from './area';

export class Teacher {
   
    teacherId:number;
    name:string;
    lastName:string;
    phone:string;
    tell:string;
    password:string;
    email:string;
    age:number;
    kindergartenId:number;
    kindergarten:Kindergarten=new Kindergarten();
    areaId:number;
    area:Area=new Area();

}
