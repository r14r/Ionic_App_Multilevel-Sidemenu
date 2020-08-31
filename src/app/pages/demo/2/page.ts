import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'app-game',
    templateUrl: './page.html',
    styleUrls: ['./page.scss'],
})
export class Demo2Page implements OnInit {

    demo = '2';

    private selectedItem: any;
    private icons = [
        'flask',
        'wifi',
        'beer',
        'football',
        'basketball',
        'paper-plane',
        'american-football',
        'boat',
        'bluetooth',
        'build'
    ];
    public items: Array<{ title: string; note: string; icon: string }> = [];
    constructor() {
        console.log('Demo2Page::constructor | ');

        for (let i = 1; i < 11; i++) {
            this.items.push({
                title: 'Demo ' + this.demo + ': Item ' + i,
                note: 'Demo ' + this.demo + ': Item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }

    ngOnInit() {
        console.log('Demo2Page::ngOnInit |');
    }
}
