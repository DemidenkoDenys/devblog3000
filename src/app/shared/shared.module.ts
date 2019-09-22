import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafePipe } from '@pipes';
import { PrismModule } from '@ngx-prism/core';
import { ClipboardModule } from 'ngx-clipboard';
import { CodeComponent } from './components/code/code.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    PrismModule,
    ClipboardModule,
  ],
  declarations: [
    SafePipe,
    CodeComponent,
    HeaderComponent
  ],
  exports: [
    SafePipe,
    CodeComponent,
    HeaderComponent
  ],
  entryComponents: [
    CodeComponent,
  ],
})
export class SharedModule { }
