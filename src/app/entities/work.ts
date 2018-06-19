export interface IWork{
    general:IGeneral;
    details:Array<IDetailsWork>;
}
export interface IGeneral{
    mainTitle:string;
}
export interface IDetailsWork{
    position:string;
    dateIni:Date;
    dateEnd?:Date;
    about:string;
    company:string;
    isCurrent?:boolean;
    text?:string;
}