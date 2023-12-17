import { Component, OnInit } from '@angular/core';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

@Component({
  selector: 'app-display-summary',
  templateUrl: './display-summary.component.html',
  styleUrls: ['./display-summary.component.sass']
})
export class DisplaySummaryComponent implements OnInit {

  public config: PerfectScrollbarConfigInterface = {};

  public summary_data = [{zone:'sinter', value:10},{zone:'360°', value:15},{zone:'SlagPit', value:18},
                         {zone:'geral', value:21},{zone:'Pit Emerg', value:27},{zone:'Alto Forno', value:29}]

  constructor() { }

  ngOnInit(): void {
  }


}
