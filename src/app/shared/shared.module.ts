import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './components/modal/modal.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DecodeUriPipe } from './pipes/decodeUri.pipe';

const components: any[] = [ModalComponent, DecodeUriPipe];

const modules: any[] = [
  CommonModule,
  BrowserAnimationsModule,
  FontAwesomeModule,
];

@NgModule({
  declarations: [...components],
  imports: [...modules],
  exports: [...components, ...modules],
})
export class SharedModule {}
