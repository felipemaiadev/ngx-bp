import { Component, OnInit } from '@angular/core';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

@Component({
  selector: 'app-display-summary',
  templateUrl: './display-summary.component.html',
  styleUrls: ['./display-summary.component.sass']
})
export class DisplaySummaryComponent implements OnInit {

  public config: PerfectScrollbarConfigInterface = {};

  public summary_data = [{zone:'sinter', value:3},{zone:'360', value:30},{zone:'SlagPit', value:18}]

  constructor() { }

  ngOnInit(): void {
  }


}
