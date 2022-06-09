import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopShellComponent } from './layout/shop-shell/shop-shell.component';

// Page Components
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: ShopShellComponent,
    children: [{ path: '', component: HomeComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopRoutingModule {}
