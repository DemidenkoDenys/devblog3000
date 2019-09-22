import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { ArticleRoutingModule } from './article-routing.module';
import { ArticleComponent } from './containers/article/article.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ArticleRoutingModule
  ],
  declarations: [
    ArticleComponent
  ]
})
export class ArticleModule { }
