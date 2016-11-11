import {Component} from '@angular/core';
import {NgbTabsetConfig} from '@ng-bootstrap/ng-bootstrap';

export class menus {
    id: number;
    name: string;
}

const Menu: menus[] = [
    { id: 17, name: 'home', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porttitor egestas libero, at viverra urna varius nec. Cras maximus purus ligula, a porttitor turpis placerat non. Quisque lorem elit, rhoncus vel neque vel, elementum bibendum ex. Nulla quis lectus fringilla, imperdiet orci at, convallis tortor. Aenean egestas dui sed blandit consequat. Fusce malesuada metus eu magna porttitor, at blandit mauris eleifend. Nullam sollicitudin blandit mi, et dictum nibh gravida eget. In vel placerat arcu. Praesent luctus purus et tellus semper, sit amet viverra metus egestas.' },
    { id: 18, name: 'about', content: 'Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam nec tellus dignissim, porta ligula at, lacinia magna. Vivamus finibus elit in vestibulum commodo. Morbi molestie suscipit ultricies. In tellus leo, ultricies et varius et, dictum et turpis. Donec quis felis odio. Phasellus eu facilisis lacus. Pellentesque ac quam eget lacus congue ornare eget quis neque. Mauris blandit euismod neque, a egestas tortor bibendum in. Maecenas massa ex, lacinia nec molestie vel, consectetur eu diam. Quisque dictum tortor quis commodo viverra. Duis egestas elit vitae odio ultricies eleifend. Quisque iaculis, nibh in ultricies semper, elit sapien consectetur est, at interdum neque urna quis sem. Cras odio lacus, laoreet porta metus sed, pellentesque iaculis purus. Sed sed accumsan justo, eu dictum nisl.' },
    { id: 19, name: 'take the challenge', content: 'Ut molestie lacus vitae augue mollis ultricies. Praesent eu ultrices sapien. Quisque lacinia quis diam eu mollis. Suspendisse potenti. Ut mollis semper est eget mollis. In ac tincidunt nulla. Aenean vestibulum pellentesque lacus eu tempus. Donec fringilla dictum arcu, sit amet ultricies nibh lacinia in. Maecenas interdum arcu efficitur massa cursus, non vestibulum enim posuere. Maecenas ut elementum nibh. Proin id tincidunt urna, venenatis mollis est. Sed vitae mi diam. Vestibulum eu lobortis mauris.' }

];

@Component({
    selector: 'ngbd-tabset-config',
    templateUrl: './template/tabset-config.html',
    providers: [NgbTabsetConfig] // add NgbTabsetConfig to the component providers
})

export class NgbdTabsetConfig {
    menus = Menu;
    constructor(config: NgbTabsetConfig) {
        // customize default values of tabsets used by this component tree
        config.type = 'pills';
    }
}
