import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'my-first-project';

  postTexts = [
    'Hallo, mein Name ist Frederick! Ich bin hier, um neue Freunde zu treffen.',
    'Hallo zusammen, freut mich, dass Ihr hier seid!',
    'Hey, mein Name ist Susanne. Ich bin 2 Jahre alt',
    ':)',
  ];
  postImages = [
    'assets/img/hamster/1.jpg',
    'assets/img/hamster/2.jpg',
    'assets/img/hamster/3.jpg',
    'assets/img/hamster/4.jpg',
  ];

  buttonClicked() {
    alert('Hallo, wie geht es dir?');
  }
}
