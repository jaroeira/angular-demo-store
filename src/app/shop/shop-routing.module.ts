import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopShellComponent } from './layout/shop-shell/shop-shell.component';

// Page Components
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductDatailComponent } from './pages/product-datail/product-datail.component';

const routes: Routes = [
  {
    path: '',
    component: ShopShellComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'product-datail', component: ProductDatailComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopRoutingModule {}
