import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home',  loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule) },
    { path: 'demo1', loadChildren: () => import('./pages/demo/1/page.module').then(m => m.Demo1PageModule) },
    { path: 'demo2', loadChildren: () => import('./pages/demo/2/page.module').then(m => m.Demo2PageModule) }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
