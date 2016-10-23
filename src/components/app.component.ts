declare var System;

import { Component, OnInit } from '@angular/core';


let remote = System._nodeRequire('electron').remote;
let _crypto = System._nodeRequire('crypto')
let moment = System._nodeRequire('moment')
//import * as moment from 'moment'

@Component({
  selector: 'my-app',
  templateUrl: './templates/app.component.html'
})
export class AppComponent implements OnInit { 


  constructor() {
    console.log('Moment: ', moment().format('YYYY-MM-DD'))
    let md5 = _crypto.createHash('md5').update('123455').digest('hex')
    console.log('MD5: ', md5)
  }

  ngOnInit() {}

}