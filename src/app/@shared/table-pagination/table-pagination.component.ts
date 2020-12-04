import { IResultData } from './../../@core/interfaces/result-data.interface';
import { USERS_LIST_QUERY } from '@graphql/operations/query/user';
import { TablePaginationService } from './table-pagination.service';
import { Component, Input, OnInit } from '@angular/core';
import { DocumentNode } from 'graphql';

@Component({
  selector: 'app-table-pagination',
  templateUrl: './table-pagination.component.html',
  styleUrls: ['./table-pagination.component.scss']
})
export class TablePaginationComponent implements OnInit {

  /**
   * Pasando la información del componente padre 'users' mediante @Input()
   */
  @Input() query: DocumentNode = USERS_LIST_QUERY;
  @Input() context: object;
  @Input() itemsPage = 20;
  @Input() include = true;
  @Input() resultData: IResultData;

  constructor(private service: TablePaginationService) { }

  ngOnInit(): void {
    if (this.query === undefined) {
      throw new Error('Query is indefined, please add');
    }
    this.loadData();
  }

  // tslint:disable-next-line: typedef
  loadData() {
    this.service.getCollectionData(this.query, {include: this.include}, {}).subscribe(
      result => {
        console.log(result);
      }
    );
  }

}
