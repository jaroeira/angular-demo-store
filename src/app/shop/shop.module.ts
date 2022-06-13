import { NgModule } from '@angular/core';
import { ShopRoutingModule } from './shop-routing.module';
import { SharedModule } from '../shared/shared.module';

// Components
import { ShopShellComponent } from './layout/shop-shell/shop-shell.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductDatailComponent } from './pages/product-datail/product-datail.component';
import { CategoriesMenuComponent } from './components/categories-menu/categories-menu.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProductCardComponent } from './components/product-card/product-card.component';

@NgModule({
  declarations: [
    ShopShellComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    ProductDatailComponent,
    CategoriesMenuComponent,
    NotFoundComponent,
    ProductCardComponent,
  ],
  imports: [ShopRoutingModule, SharedModule],
})
export class ShopModule {}
