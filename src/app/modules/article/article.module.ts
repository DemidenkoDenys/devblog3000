import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@modules/shared';
import { ArticleRoutingModule } from './article-routing.module';
import { ArticleComponent } from './containers/article/article.component';
import { ParagraphComponent } from './components/paragraph/paragraph.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ArticleRoutingModule,
  ],
  providers: [
  ],
  declarations: [
    ArticleComponent,
    ParagraphComponent,
  ],
  entryComponents: [
    ParagraphComponent,
  ],
})
export class ArticleModule { }
