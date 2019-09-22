import { Injectable, Renderer2, Inject, RendererFactory2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import {
  FONT_FAMILY,
  FONT_LINK_ID,
  GOOGLE_FONT_API,
  GOOGLE_FONT_FAMILY_PARAM,
  GOOGLE_FONT_DISPLAY_SWAP,
} from '@constants';

@Injectable({
  providedIn: 'root'
})
export class FontService {

  private renderer: Renderer2;
  private fontLink: any;
  private htmlRootElement: any;

  constructor(
    rendererFactory: RendererFactory2, 
    @Inject(DOCUMENT) private _document: any,
  ) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  ngOnInit() {
    this.initELements();
  }

  private initELements() {
    this.htmlRootElement = this._document.documentElement;
    this.fontLink = this._document.getElementById(FONT_LINK_ID);
  }

  public setGoogleFont(fontName: string) {
    if (!this.htmlRootElement || !this.fontLink) {
      this.initELements();
    }
    const hrefString = GOOGLE_FONT_API + GOOGLE_FONT_FAMILY_PARAM + fontName + GOOGLE_FONT_DISPLAY_SWAP;
    this.fontLink.href = hrefString;
    this.renderer.setStyle(this.htmlRootElement, FONT_FAMILY, fontName);
  }
}
