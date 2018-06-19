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
    interestesTitle:string;
    skills:ISkill;
    work:IWork;
    education:ICourse;
    profiles:IProfile;
}