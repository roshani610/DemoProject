import { Routes } from '@angular/router';
import { Page1Component } from './pages/page1/page1.component';
import { ZooComponent } from './zoo/zoo.component';

export const routes: Routes = [
    {path:'', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: ZooComponent},
    {path: '**', redirectTo: 'home'}
];
