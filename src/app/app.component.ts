import { Component, ViewEncapsulation, OnInit, LOCALE_ID } from '@angular/core';
import { ISkill } from './entities/skills';
import { IWork, IDetailsWork } from './entities/work';
import { ICourse } from './entities/course';
import { IProfile } from './entities/profile';
import { InfoService } from './info.service';
import { IInfo } from './entities/info';

import * as jsPDF from 'jspdf'
import { DatePipe } from '@angular/common';

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
    this.lenguageSelected = location.hash.replace("#", "");
    this.getInfo();
  }
  public getInfo(): void {
    this._infoService.getInfo(this.lenguageSelected)
      .subscribe((info) => { this.info = info });
  }

  onChangeLenguage(lenguage: string): void {
    if (this.lenguageSelected !== lenguage) {
      this.lenguageSelected = lenguage;
      this.getInfo();
    }
  }

  onSendToPrint(): void {
    window.print();
  }
  onSendToPDF(): void {
    var doc = new jsPDF();

    // We'll make our own renderer to skip this editor
    var specialElementHandlers = {
      '#editor': function (element, renderer) {
        return true;
      },
      '.controls': function (element, renderer) {
        return true;
      }
    };

    // All units are in the set measurement for the document
    // This can be changed to "pt" (points), "mm" (Default), "cm", "in"
    doc.fromHTML(window.document.getElementsByTagName("body")[0], 15, 15, {
      'width': 170,
      'elementHandlers': specialElementHandlers
    });



    // var doc = new jsPDF();
    // var source = window.document.getElementsByTagName("body")[0];

    // doc.fromHTML(
    //   source,
    //   15,
    //   15,
    //   {
    //     'width': 180//,'elementHandlers': elementHandler
    //   });

    // doc.output("dataurlnewwindow");
    // window.open("https://phantomjscloud.com/api/browser/v2/a-demo-key-with-low-quota-per-ip-address/?request={url:%22about:blank%22,renderType:%22pdf%22,content:" + document.querySelector('.container').outerHTML +"}");

    // doc.fromHTML(document.querySelector('.container').innerHTML,20,20);
    // doc.text(20, 20, 'Hello world!');
    // doc.text(20, 30, 'This is client-side Javascript, pumping out a PDF.');
    // doc.addPage();
    // doc.text(20, 20, 'Do you like that?');

    // Save the PDF
    // doc.save('Test.pdf');
    doc.output("dataurlnewwindow");
  }

  onDownloadPDF(){
    let url:string = '/assets/curriculum-{0}.pdf';
    url = url.replace('{0}',this.lenguageSelected);
    this.downloadFile(url);
  }

  downloadFile(url: string) {
    //iOS devices do not support downloading. We have to inform user about this.
    if (/(iP)/g.test(navigator.userAgent)) {
      //alert('Your device does not support files downloading. Please try again in desktop browser.');
      window.open(url, '_blank');
      return false;
    }

    //Creating new link node.
    var link = document.createElement('a');
    link.href = url;
    link.setAttribute('target', '_blank');

    if (link.download !== undefined) {
      //Set HTML5 download attribute. This will prevent file from opening if supported.
      var fileName = url.substring(url.lastIndexOf('/') + 1, url.length);
      link.download = fileName;
    }

    //Dispatching click event.
    if (document.createEvent) {
      var e = document.createEvent('MouseEvents');
      e.initEvent('click', true, true);
      link.dispatchEvent(e);
      link.remove();
      return true;
    }

    // Force file download (whether supported by server).
    if (url.indexOf('?') === -1) {
      url += '?download';
    }

    window.open(url, '_blank');
    return true;
  }

  getDateEnd(work: IDetailsWork): string {
    let result: string;
    var datePipe = new DatePipe("en-US");
    if (!work.dateEnd && work.isCurrent) {
      result = work.text ? work.text : datePipe.transform(new Date(), "MMM yyyy")
    } else {
      result = datePipe.transform(work.dateEnd, "MMM yyyy");
    }
    return result;
  }
}
