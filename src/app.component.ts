declare var System;

import { Component, OnInit } from '@angular/core';

let remote = System._nodeRequire('electron').remote;
let _crypto = System._nodeRequire('crypto')
let fs = System._nodeRequire('fs');

// let moment = System._nodeRequire('moment')
import * as moment from 'moment';
import * as _ from 'lodash';


@Component({
  selector: 'my-app',
  templateUrl: './dist/app.component.html'
})
export class AppComponent implements OnInit { 

  constructor() {
    console.log('Date [moment]: ', moment().format('YYYY-MM-DD'))
    let md5 = _crypto.createHash('md5').update('123455').digest('hex')
    console.log('MD5 [crypto]: ', md5);
      
    let d = _.dropRight([1, 2, 4]);
      
    console.log('dropRight [lodash]: ' + d);
      
    // write file
    fs.writeFile('./test.txt', 'Hello world', (err) => {
        if (err) console.log('Write file error: ' + err);
        else console.log('Write file success [./test.txt]');
    });
      
  }

  ngOnInit() {}

}