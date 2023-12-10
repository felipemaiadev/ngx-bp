import { Component, OnInit } from "@angular/core";
import * as XLSX from 'xlsx';
import { MatTableDataSource } from '@angular/material/table';


@Component({
    selector:'tx-form-coprod',
    templateUrl: './form-coprod.component.html',
    styleUrls: ['./form-coprod.component.sass']
})
export class FormCoprodComponent implements OnInit{

  filepath: string
  opts: XLSX.ParsingOptions = {
    type:'array'
  }
  file: any;
  arrayBuffer:any
  emissions: void;
  filelist: any[];

    constructor(){}

    ngOnInit(): void {
      console.log("Method not implemented.");
    }

   onChange($event){
    this.file= $event.target.files[0];     
    let fileReader = new FileReader();    
    fileReader.readAsArrayBuffer(this.file);     
    fileReader.onload = (e) => {    
        this.arrayBuffer = fileReader.result;    
        var data = new Uint8Array(this.arrayBuffer);    
        var arr = new Array();    
        for(var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);    
        var bstr = arr.join("");    
        var workbook = XLSX.read(bstr, {type:"binary"});    
        var first_sheet_name = workbook.SheetNames[0];    
        var worksheet = workbook.Sheets[first_sheet_name];    
        console.log(XLSX.utils.sheet_to_json(worksheet,{raw:true}));    
          var arraylist = XLSX.utils.sheet_to_json(worksheet,{raw:true});     
              this.filelist = [];    
              console.log(this.filelist)    
    }
  }
}