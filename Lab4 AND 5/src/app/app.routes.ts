import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductPageComponent } from './product-page/product-page.component';

export const routes: Routes = [
    {path:'', component: HomeComponent},
    {path: "search/:searchTerm", component:HomeComponent},
    {path:'tag/:tag', component:HomeComponent},
    {path:'product/:id', component:ProductPageComponent}
];
