import { Component, OnInit, ViewContainerRef, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { CodeComponent } from '../../../../shared/components/code/code.component';
import { ParagraphComponent } from '../../components/paragraph/paragraph.component';
import { ngForArticle } from '@mocks';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  image: string;
  content: string[];
  componentRef: any;

  @ViewChild('articleContainer', { read: ViewContainerRef }) container: ViewContainerRef;

  constructor(private resolver: ComponentFactoryResolver) {
    this.image = ngForArticle.image;
    this.content = ngForArticle.content;
  }

  ngOnInit() { }

  ngAfterViewInit() {
    this.content.filter((p, i) => i > 0).map(indent => this.createComponent(indent));
  }

  private createComponent(content: string) {
    const isCode = content.includes('</code>');
    const component = isCode ? CodeComponent : ParagraphComponent;
    const newContent = isCode ? content.replace('<code>', '').replace('</code>', '') : content;
    const factory = this.resolver.resolveComponentFactory(component);
    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.language = 'javascript';
    this.componentRef.instance.content = newContent;
  }

  public getPureText(textWithHtml: string): string {
    return textWithHtml.replace(/<.*?>/g, '');
  }

}
