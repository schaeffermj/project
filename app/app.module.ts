import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { AppComponent }     from './app.component';
import { NgbModule }        from '@ng-bootstrap/ng-bootstrap';
import { NgbdTabsetConfig } from './app.tab-config';

@NgModule({
    imports:      [ BrowserModule, NgbModule.forRoot() ],
    declarations: [ AppComponent, NgbdTabsetConfig ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
