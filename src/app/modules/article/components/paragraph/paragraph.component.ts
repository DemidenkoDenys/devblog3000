import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.scss']
})
export class ParagraphComponent implements OnInit {

  @ViewChild('dataContainer') dataContainer: ElementRef;

  language: string;
  content: string;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.dataContainer.nativeElement.innerHTML = this.content;
  }

}
