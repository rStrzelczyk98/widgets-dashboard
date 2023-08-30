import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridComponent } from './grid/grid.component';
import { SingleComponent } from './single/single.component';
import { WidgetTemplateComponent } from './widgets/widget-template/widget-template.component';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    SingleComponent,
    WidgetTemplateComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
