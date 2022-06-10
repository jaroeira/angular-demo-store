import { NgModule } from '@angular/core';
import { ShopRoutingModule } from './shop-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// Components
import { ShopShellComponent } from './layout/shop-shell/shop-shell.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductDatailComponent } from './pages/product-datail/product-datail.component';

@NgModule({
  declarations: [
    ShopShellComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    ProductDatailComponent,
  ],
  imports: [ShopRoutingModule, SharedModule, FontAwesomeModule],
})
export class ShopModule {}
