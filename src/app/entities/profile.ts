import { IGeneral } from "./work";

export interface IProfile{
    general:IGeneral;
    details:IProfileDetails[]
}

export interface IProfileDetails{
    name: string;
    link:string;
    icon?:string;
    color?:string;
    class?:string;
}