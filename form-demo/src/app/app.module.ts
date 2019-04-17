import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormDemoComponent} from './form-demo/form-demo.component';
import { AppComponent } from './app.component';
import {   //Importare le funzionalità nella nostra applicazione
 FormsModule,
 ReactiveFormsModule
} from '@angular/forms';



@NgModule({
  declarations: [

    AppComponent,
    FormDemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule , //Anche qui
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



