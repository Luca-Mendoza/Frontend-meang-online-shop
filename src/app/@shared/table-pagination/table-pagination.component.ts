import { IInfoPage, IResultData } from '@core/interfaces/result-data.interface';
import { TablePaginationService } from './table-pagination.service';
import { Component, Input, OnInit } from '@angular/core';
import { DocumentNode } from 'graphql';
import { map } from 'rxjs/internal/operators/map';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-table-pagination',
  templateUrl: './table-pagination.component.html',
  styleUrls: ['./table-pagination.component.scss']
})
export class TablePaginationComponent implements OnInit {

  /**
   * Pasando la información del componente padre 'users' mediante @Input()
   */
  @Input() query: DocumentNode;
  @Input() context: object;
  @Input() itemsPage = 20;
  @Input() include = true;
  @Input() resultData: IResultData;
  // Almacenamos la información de la pagína
  infoPage: IInfoPage;
  // Le damos una el valor data$ para poder mostrar su valor en el Template
  data$: Observable<any>;

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
      itemsPage: this.itemsPage,
      total: 1,
    };
    this.loadData();
  }

  // tslint:disable-next-line: typedef
  loadData() {
    const variable = {
      page: this.infoPage.page,
      itemsPage: this.infoPage.itemsPage,
      include: this.include
    };
    this.data$ = this.service.getCollectionData(this.query, variable, {}).pipe(
      map((result: any) => {
        const data = result[this.resultData.definitionKey];
        this.infoPage.pages = data.info.pages;
        this.infoPage.total = data.info.total;
        return data[this.resultData.listKey];
      })
    );
  }

  // tslint:disable-next-line: typedef
  refreshPage() {
    console.log(this.infoPage.page);
    this.loadData();
  }

}
