import { Component, OnInit, ViewContainerRef, ViewChild, ComponentFactoryResolver, AfterViewInit } from '@angular/core';
import { CodeComponent } from '../../../../shared/components/code/code.component';
import { ParagraphComponent } from '../../components/paragraph/paragraph.component';
import { ngForArticle, simpleFactory } from '@mocks';
import { HighlightService } from 'src/app/core/services/highlight.service';

import ngForJson from '@core/mocks/articles/ngForJson.json';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit, AfterViewInit {
  image: string;
  content: string;
  componentRef: any;

  article = ngForJson;

  @ViewChild('articleContainer', { read: ViewContainerRef }) container: ViewContainerRef;

  constructor(
    private resolver: ComponentFactoryResolver,
    private highlightService: HighlightService,
  ) {
    this.image = simpleFactory.image;
    // this.content = this.article.content.map(indent => {
    //   return `<${indent.type}>${indent.text}</${indent.type}><br>`;
    // }).join('');
  }

  ngOnInit() {
    console.log(this.article.content);
  }

  ngAfterViewInit() {
    // this.content.filter((p, i) => i > 0).map(indent => this.createComponent(indent));
  }

  ngAfterViewChecked() {
    this.highlightService.highlightAll();
  }

  // private createComponent(content: string) {
  //   const isCode = content.includes('</code>');
  //   const component = isCode ? CodeComponent : ParagraphComponent;
  //   const newContent = isCode ? content.replace('<code>', '').replace('</code>', '') : content;
  //   const factory = this.resolver.resolveComponentFactory(component);
  //   this.componentRef = this.container.createComponent(factory);
  //   this.componentRef.instance.language = 'typescript';
  //   this.componentRef.instance.content = newContent;
  // }

  public getPureText(textWithHtml: string): string {
    return textWithHtml.replace(/<.*?>/g, '');
  }

}
