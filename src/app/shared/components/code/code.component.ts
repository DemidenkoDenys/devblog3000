import { Component, OnInit, Input, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss']
})
export class CodeComponent implements OnInit {

  @Input() language: string = '';
  @Input() content: string = '';
  
  constructor(public renderer: Renderer2) { }

  ngOnInit() {}

}
