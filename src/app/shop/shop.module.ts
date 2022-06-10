import { NgModule } from '@angular/core';
import { ShopRoutingModule } from './shop-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// Components
import { ShopShellComponent } from './layout/shop-shell/shop-shell.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    ShopShellComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
  ],
  imports: [ShopRoutingModule, SharedModule, FontAwesomeModule],
})
export class ShopModule {}
