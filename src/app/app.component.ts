import { Component, ViewEncapsulation } from '@angular/core';
import { ISkill } from './entities/skills';
import { IWork } from './entities/work';
import { ICourse } from './entities/course';
import { IProfile } from './entities/profile';

@Component({
  selector: 'rsm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title:string = 'rsm';
  name:string = 'Carlos Alejandro Aguirre López';
  position:string = 'Software Developer';
  about:string = 'Enim placeat sunt quos in, animi inventore maxime ab sequi odio sed omnis voluptas id doloremque expedita magnam veniam eaque accusamus aliquam hic, vel repellendus ipsum. Quas ratione eaque hic!';
  phone:string = '(614)239-39-02';
  mail:string = 'calejandroaguirre@outlook.com';
  urlImage: string = 'https://www.gravatar.com/avatar/00000000000000000000000000000000?s=300';
  address: string = 'Paseos de urique #15501 Col. Paseos de Chihuahua, Chihuahua Chihuahua México';
  skills:Array<ISkill> = [
    {name:'HTML', progress:85, order:1}
    ,{name:'JS', progress:85, order:1}
    ,{name:'CSS', progress:80, order:1}
    ,{name:'C#', progress:90, order:1}
    ,{name:'VB .NET', progress:80, order:1}
    ,{name:'SQL', progress:90, order:1}
    ,{name:'T-SQL', progress:85, order:1}
    ,{name:'PL/SQL', progress:70, order:1}
    ,{name:'Angular', progress:75, order:1}
    ,{name:'Angular Js', progress:30, order:1}
    ,{name:'JQuery', progress:90, order:1}
    ,{name:'WebForms', progress:90, order:1}
    ,{name:'ASP.net MVC', progress:90, order:1}
    ,{name:'EF', progress:80, order:1}
    ,{name:'AZURE', progress:70, order:1}
    ,{name:'GIT', progress:80, order:1}
    ,{name:'TS', progress:85, order:1}
    ,{name:'JSON', progress:90, order:1}
    ,{name:'XML', progress:85, order:1}
    ,{name:'Bootstrap', progress:95, order:1}
  ];
  works: Array<IWork> = [
    {company:'GammaPartners', dateIni: new Date(2016,3,1), isCurrent: true, position:'Full-Stack', about: ''}
    ,{company:'Newton', dateIni: new Date(2015,2,1), dateEnd: new Date(2016,3,1), position:'Software Developer', about: ''}
    ,{company:'SI', dateIni: new Date(2012,11,1), dateEnd: new Date(2015,2,1), position:'Web Developer', about: ''}
    ,{company:'ICHISAL', dateIni: new Date(2012,11,1), dateEnd: new Date(2015,2,1), position:'Web Developer', about: ''}
    ,{company:'SCI', dateIni: new Date(2012,1,1), dateEnd: new Date(2012,11,1), position:'Software Developer', about: ''}
  ];
  education: Array<ICourse> = [
    {name: 'Design patterns', about: '', duration: 22, unitOfDuration: 'hrs', institute:'https://escuela.it'}
    ,{name: 'Angular Routing', about: '', duration: 5, unitOfDuration: 'hrs', institute:'https://pluralsight.com'}
    ,{name: 'Angular Reactive Forms', about: '', duration: 4, unitOfDuration: 'hrs', institute:'https://pluralsight.com'}
    ,{name: 'Angular: Getting Started', about: '', duration: 5.4, unitOfDuration: 'hrs', institute:'https://pluralsight.com'}
    ,{name: 'Ingenieria en Sistemas Computacionales', about: '', duration: 4.5, unitOfDuration: 'years', institute:'ITCHII'}
  ];
  profiles: Array<IProfile> = [
    {name: 'github', link:'https://github.com/calejandroaguirre', class:"fab fa-github"}
    ,{name: 'linkedIn', link:'https://www.linkedin.com/in/carlos-alejandro-aguirre-lopez-47794065/', class:"fab fa-linkedin-in"}
    ,{name: 'web', link:'https://calejandroaguirre.com', class:"fas fa-globe"}
  ]
}
