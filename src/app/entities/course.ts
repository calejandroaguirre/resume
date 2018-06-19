import { IGeneral } from "./work";

export interface ICourse{
    general:IGeneral;
    details:Array<ICourseDetail>;
}

export interface ICourseDetail{
    name:string;
    about:string;
    duration:number;
    unitOfDuration:string;
    institute:string;
}