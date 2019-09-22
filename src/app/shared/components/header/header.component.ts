import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FontService } from '@services';
import { DocumentEventsService } from 'src/app/core/services/document-events.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

  public previousScrollTop = 0;
  public hideHeader = false;

  constructor(
    private cdr: ChangeDetectorRef,
    private documentEventsService: DocumentEventsService,
    private fontService: FontService
  ) { }

  ngOnInit() {
    this.documentEventsService.windowScroll$.subscribe(this.toggleHeader.bind(this));
  }

  private toggleHeader(y: number): void {
    const oldState = this.hideHeader;
    const newState = y > 50 ? y > this.previousScrollTop : false;

    this.hideHeader = newState;
    this.previousScrollTop = y;

    if (oldState !== newState) {
      this.cdr.detectChanges();
    }
  }

  public onFontSelected(font: string) {
    this.fontService.setGoogleFont(font);
  }

}
