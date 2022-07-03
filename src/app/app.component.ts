import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'tarsia';

  cookieMessage =
    'Questo sito o gli strumenti terzi da questo utilizzati si avvalgono di cookie necessari al funzionamento ed utili alle finalità illustrate nella cookie policy.';
  cookieDismiss = 'Accetta';
  cookieLinkText = 'Scopri di più';

  ngOnInit() {
    let cc = window as any;
    cc.cookieconsent.initialise({
      theme: 'classic',
      content: {
        message: this.cookieMessage,
        dismiss: this.cookieDismiss,
        link: this.cookieLinkText,
        /* href: environment.Frontend + '/dataprivacy', */
      },
    });
  }
}
