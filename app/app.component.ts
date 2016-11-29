import { Component } from '@angular/core';

export class catagories {
    id: number;
    name: string;
}
export class pages {
    id: number;
    name: string;
}


const CAT: catagories[] = [
    { id: 1, name: 'Bedding' },
    { id: 2, name: 'Bath' },
    { id: 3, name: 'Rooms' },
    { id: 4, name: 'Kitchens' },
    { id: 5, name: 'Living' },
    { id: 6, name: 'Cars' },
    { id: 7, name: 'Birds' },
    { id: 8, name: 'Planes' }
];

const PGS: pages[] = [
    { id: 9, name: 'Bedding' },
    { id: 10, name: 'Bath' },
    { id: 11, name: 'Rooms' },
    { id: 12, name: 'Kitchens' },
    { id: 13, name: 'Living' },
    { id: 14, name: 'Cars' },
    { id: 15, name: 'Birds' },
    { id: 16, name: 'Planes' }
];



@Component({
    selector: 'my-app',
    templateUrl: './template/tabset-config.html',
    template: `
        
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-3 col-md-2 sidebar">
                    <h4>Catagories</h4>
                    <ul class="nav nav-sidebar">
                        <li *ngFor="let catagory of catagories">{{catagory.name}}</li>
                    </ul>
                    <h4>Pages</h4>
                    <ul class="nav nav-sidebar">
                        <li *ngFor="let page of pages">{{page.name}}</li>
                    </ul>
                </div>
                <div class="col-sm-9 offset-sm-3 col-md-10 offset-md-2 main">
                    <ngbd-tabset-config></ngbd-tabset-config>
                    <thumbs></thumbs>
                </div>
            </div>
        </div>
 `})

export class AppComponent {
    pages = PGS;
    catagories = CAT;
}
