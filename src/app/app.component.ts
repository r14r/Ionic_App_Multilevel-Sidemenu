import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent {
    private MODULE = 'AppComponent';

    public appMenu = [
        { name: 'Home', url: '/home', icon: 'home' },
        {
            name: 'Main 1',
            items: [
                { name: 'Sub 1.1', url: '/demo1', icon: 'grid' },
                { name: 'Sub 1.2', url: '/demo1', icon: 'grid' },
                { name: 'Sub 1.3', url: '/demo1', icon: 'grid' }
            ]
        },
        {
            name: 'Main 2',
            items: [
                { name: 'Sub 2.1', url: '/demo2', icon: 'list' },
                { name: 'Sub 2.2', url: '/demo2', icon: 'list' },
                { name: 'Sub 2.3', url: '/demo2', icon: 'list' }
            ]
        }
    ];

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar
    ) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }
    
    onClick(ev: any) {
		console.log('onClick', 'event=' + ev);
	}
}
