import { Component, ViewEncapsulation } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule],
  selector: 'org-dugong-root',
  template: `<org-dugong-nx-welcome></org-dugong-nx-welcome>
    <router-outlet></router-outlet>`,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'admin-host';
}
