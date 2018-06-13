import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IInfo } from './entities/info';

@Injectable({
  providedIn: 'root'
})
export class InfoService {
  private _infoUrl: string = 'api/info-{0}.json';
  constructor(private _http: HttpClient) { }

  getInfo(lenguage:string): Observable<IInfo>{
    return this._http.get<IInfo>(this._infoUrl.replace("{0}",lenguage));
  }
}
