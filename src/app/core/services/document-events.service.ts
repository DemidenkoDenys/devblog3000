import { Injectable } from '@angular/core';
import { fromEvent } from 'rxjs';
import { distinctUntilChanged, map, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DocumentEventsService {

  public readonly windowScroll$ = fromEvent(window, 'scroll').pipe(
    map(_ => window.scrollY),
    distinctUntilChanged(),
    shareReplay(1)
  );

  constructor() { }
}
