import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
  openDialogue: boolean = false;
dataModel:any;





  record0:boolean=false;
  constructor() { }

  ngOnInit(): void {
    this.loadData();
    console.log(this.dataModel);

  }
  loadData () {
    this.dataModel =

    [
      {
        
        "recordId": 1,
        "code": "porva1",
        "description": "PACE",
        "nome": "PAIX"
     
      },
      {
        "recordId": 2,
        "code": "porva2",
        "description": "PACE",
        "nome": "PAIX"
        
      },
      {
        "recordId": 3,
        "code": "porva3",
        "description": "PACE",
        "nome": "PAIX"
      },
      {
        "recordId": 4,
        "code": "porva4",
        "description": "PACE",
        "nome": "PAIX"
      },
      {
        "recordId": 5,
        "code": "porva5",
        "description": "PACE",
        "nome": "PAIX"
        
      },
      {
        "recordId": 6,
        "code": "porva6",
        "description": "PACE",
        "nome": "PAIX"
      },
      {
        "recordId": 7,
        "code": "porva7",
        "description": "PACE",
        "nome": "PAIX"
      }
    
    ]
  }
  showDialog(): void {
    this.openDialogue = true;
  }
}
