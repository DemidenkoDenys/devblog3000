import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleRoutingModule } from './article-routing.module';
import { ArticleComponent } from './containers/article/article.component';

import { PrismModule } from '@ngx-prism/core';

@NgModule({
  imports: [
    CommonModule,
    PrismModule,
    ArticleRoutingModule
  ],
  declarations: [
    ArticleComponent
  ]
})
export class ArticleModule { }
