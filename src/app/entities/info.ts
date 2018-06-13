import { ISkill } from "./skills";
import { IWork } from "./work";
import { ICourse } from "./course";
import { IProfile } from "./profile";

export interface IInfo{
    title:string;
    name:string;
    position:string;
    about:string;
    phone:string;
    mail:string;
    urlImage:string;
    address:string;
    skills:Array<ISkill>;
    works:Array<IWork>;
    education:Array<ICourse>;
    profiles:Array<IProfile>;
}