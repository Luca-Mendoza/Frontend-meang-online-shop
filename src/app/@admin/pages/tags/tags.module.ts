import { TablePaginationModule } from '@shared/table-pagination/table-pagination.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TagsRoutingModule } from './tags-routing.module';
import { TagsComponent } from './tags.component';

@NgModule({
  declarations: [TagsComponent],
  imports: [
    CommonModule,
    TagsRoutingModule,
    TablePaginationModule
    ],
})
export class TagsModule { }
