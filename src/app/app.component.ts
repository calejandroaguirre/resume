import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { ISkill } from './entities/skills';
import { IWork } from './entities/work';
import { ICourse } from './entities/course';
import { IProfile } from './entities/profile';
import { InfoService } from './info.service';
import { IInfo } from './entities/info';

@Component({
  selector: 'rsm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  private lenguages: string[] = [
    'en',
    'es'
  ]
  info: IInfo;

  private _lenguageSelected: string;
  public get lenguageSelected(): string {
    if (!this._lenguageSelected || this._lenguageSelected === "") {
      this.lenguageSelected = this.lenguages[0];
    }
    return this._lenguageSelected;
  }
  public set lenguageSelected(v: string) {
    this._lenguageSelected = this.lenguages.filter(item => item === v)[0];
    if (this._lenguageSelected === undefined)
      this._lenguageSelected = this.lenguages[0];

    location.hash = this._lenguageSelected;
  }

  constructor(private _infoService: InfoService) { }

  ngOnInit(): void {
    this.lenguageSelected = location.hash;
    this.getInfo();
  }
  public getInfo() {
    this._infoService.getInfo(this.lenguageSelected)
      .subscribe((info) => { this.info = info });
  }

  onChangeLenguage(lenguage: string) {
    if(this.lenguageSelected !== lenguage){
      this.lenguageSelected = lenguage;
      this.getInfo();
    }
  }
}
