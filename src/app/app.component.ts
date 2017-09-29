import { Component } from '@angular/core';

@Component({
  selector: 'ng4-root',
  template: `
    <p>
      app Works!
    </p>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'ng4';
}
