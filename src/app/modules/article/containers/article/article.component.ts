import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleComponent implements OnInit {

  language = 'javascript';
  content = `const terminal = StripeTerminal.create({
  onFetchConnectionToken: server.fetchConnectionToken,
});
const result = await terminal.discoverReaders();
const reader = result.discoveredReaders[0];
await terminal.connectReader(reader);

const item = {
  description: 'High Growth Handbook',
  amount: 2000,
  quantity: 1,
};
const cart = {
  lineItems: [item],
  currency: 'usd',
};

terminal.setReaderDisplay({ type: 'cart', cart });`;

  constructor() { }

  ngOnInit() { }

}
