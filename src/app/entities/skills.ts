import { IGeneral } from "./work";

export interface ISkill{
    general:IGeneral;
    details:ISkillDetail;
}
export interface ISkillDetail{
    progress:number;
    name:string;
    order:number;
}