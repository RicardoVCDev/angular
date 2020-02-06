import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WorkComponent } from './work/work.component';
import { ProcessListComponent } from './work/process-list/process-list.component';
import { ProcessComponent } from './work/process-list/process/process.component';
import { VerticalMenuComponent } from './vertical-menu/vertical-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WorkComponent,
    ProcessListComponent,
    ProcessComponent,
    VerticalMenuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
