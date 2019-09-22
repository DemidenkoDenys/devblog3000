import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrismModule } from '@ngx-prism/core';
import { ClipboardModule } from 'ngx-clipboard';
import { CodeComponent } from './components/code/code.component';

@NgModule({
  imports: [
    CommonModule,
    PrismModule,
    ClipboardModule,
  ],
  declarations: [
    CodeComponent
  ],
  exports: [
    CodeComponent
  ]
})
export class SharedModule { }
