import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TemplateComponent } from './template.component';
import { ReactiveComponent } from './reactive.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveBuilderComponent } from './reactive-builder.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    ReactiveComponent,
    ReactiveBuilderComponent
  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
