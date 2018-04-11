import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { PageHeaderModule } from './../../shared';

import { UsersRoutingModule } from './users-routing.module';

import { DataTablesModule } from 'angular-datatables';


@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
    PageHeaderModule,
    DataTablesModule
  ],
  declarations: [UsersComponent]
})
export class UsersModule { }
