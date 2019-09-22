import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@modules/shared';
import { ArticleRoutingModule } from './article-routing.module';
import { ArticleComponent } from './containers/article/article.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ArticleRoutingModule
  ],
  providers: [
  ],
  declarations: [
    ArticleComponent
  ]
})
export class ArticleModule { }
