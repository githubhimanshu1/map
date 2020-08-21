import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { init, getReference, mymsg } from '../assets/mapmodule';
import * as $ from "jquery";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title = 'DataVizApp';

  ngOnInit() {
    this.refresh("asia");
  }
  refresh(regionName) {
    let maputility = window.document['mapUtility'];
    maputility.init("map-container", {}, regionName);
  }
}

