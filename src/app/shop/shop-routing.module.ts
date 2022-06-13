import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopShellComponent } from './layout/shop-shell/shop-shell.component';

// Page Components
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ProductsListComponent } from './pages/products-list/products-list.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ErrorComponent } from './pages/error/error.component';

const routes: Routes = [
  {
    path: '',
    component: ShopShellComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'products-list/:category', component: ProductsListComponent },
      { path: 'product-detail', component: ProductDetailComponent },
      { path: 'error', component: ErrorComponent },
      { path: '404', component: NotFoundComponent },
      { path: '**', redirectTo: '/404' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopRoutingModule {}
