import { Component, OnInit } from '@angular/core';
import { DatatableService } from '../../services/datatable.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  private data:Array<any>;
  columns = [ 'id', 'firstName', 'lastName'];
  rows = [];
  constructor(public dataTableSrv: DatatableService) { 
    this.dataTableSrv.getDataTable()
    .subscribe((data) => {
     this.rows = data;
    }); 
  }
}
