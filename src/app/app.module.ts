import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import {NgOptimizedImage} from "@angular/common";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LabelListComponent } from './function/label-list/label-list.component';
import {MatIconModule} from "@angular/material/icon";
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {HttpClientModule} from "@angular/common/http";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatFormFieldModule} from "@angular/material/form-field";
import { CreateComponent } from './function/create/create.component';
import {FormsModule} from "@angular/forms";
import { ExchangeComponent } from './function/exchange/exchange.component';
import { MysqlComponent } from './function/mysql/mysql.component';
import { AboutComponent } from './function/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    LabelListComponent,
    CreateComponent,
    ExchangeComponent,
    MysqlComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
    BrowserAnimationsModule,
    MatIconModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule,
    HttpClientModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
