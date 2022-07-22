import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { WarehouseTableComponent } from './warehouse-table/warehouse-table.component';
import { HeaderComponent } from './header/header.component';
import { EmployeeTableComponent } from './employee-table/employee-table.component';
import { EditWarehouseComponent } from './edit-warehouse/edit-warehouse.component';
import { ItemTableComponent } from './item-table/item-table.component';

@NgModule({
  declarations: [
    AppComponent,
    WarehouseTableComponent,
    HeaderComponent,
    EmployeeTableComponent,
    EditWarehouseComponent,
    ItemTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
