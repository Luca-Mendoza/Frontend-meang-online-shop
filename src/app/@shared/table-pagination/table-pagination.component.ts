import { IInfoPage, IResultData } from '@core/interfaces/result-data.interface';
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
  // Almacenamos la información de la pagína
  infoPage: IInfoPage;

  constructor(private service: TablePaginationService) { }

  ngOnInit(): void {
    if (this.query === undefined) {
      throw new Error('Query is indefined, please add');
    }
    if (this.resultData === undefined) {
      throw new Error('ResultData is indefined, please add');
    }
    this.infoPage = {
      page: 1,
      pages: 1,
      total: 1,
      itemsPage: this.itemsPage
    };
    this.loadData();
  }

  // tslint:disable-next-line: typedef
  loadData() {
    const variable = {
      page: this.infoPage.pages,
      itemspPage: this.infoPage.itemsPage,
      include: this.include
    };
    this.service.getCollectionData(this.query, variable, {}).subscribe(
      result => {
        console.log(result);
      }
    );
  }

}
