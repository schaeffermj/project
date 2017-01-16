import {Component} from '@angular/core';

export class thumbs {
    id: number;
    source:string;
}

const Thumb: thumbs[] = [
    {id: 20, source: 'http://placehold.it/150x150'},
    {id: 21, source: 'http://placehold.it/150x150'},
    {id: 22, source: 'http://placehold.it/150x150'},
    {id: 23, source: 'http://placehold.it/150x150'}
]

@Component({
    selector: 'thumbs',
    templateUrl: './template/thumbs.html',
    providers: [ThumbsConfig]
})



export class ThumbsConfig {
    thumbs = Thumb
}