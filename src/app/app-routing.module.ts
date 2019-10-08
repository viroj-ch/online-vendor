import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent} from './product/product.component';



const routes: Routes = [
  {path: '', redirectTo:'/home', pathMatch:'full'},
  {path: 'product', component: ProductComponent},
  // {path: 'sell', component: SpecialEventsComponent},
  // {path: 'inventory', component: LoginComponent},
  // {path: 'purchase', component: RegisterComponent},
  // {path: 'report', component: RegisterComponent},
  {path: 'home', component: HomeComponent},
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
