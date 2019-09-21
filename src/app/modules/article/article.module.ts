import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleRoutingModule } from './article-routing.module';
import { ArticleComponent } from './containers/article/article.component';

@NgModule({
  imports: [
    CommonModule,
    ArticleRoutingModule
  ],
  declarations: [
    ArticleComponent
  ]
})
export class ArticleModule { }
