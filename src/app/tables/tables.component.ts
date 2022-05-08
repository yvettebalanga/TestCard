import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
 
  dataModel:any;

  openDialogue: boolean = false;
  visibleDialog:boolean = false;
  openEditor:boolean = false;
  isEditMode:boolean = false;
  display:boolean = false;
 
  constructor() { }

  ngOnInit(): void {
    this.loadData();
    console.log(this.dataModel);

  }


  showDialog(): void {
    this.visibleDialog = true;
  }
  // deleteTable(obj: dataModel){
  //   console.log(obj.recordId);
  // }
  ediTable(){
    this.isEditMode= true;
    this.openEditor = true;
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

}
