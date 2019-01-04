import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  navigationNameSelected: string;
  onNavigate(navigationName: string) {
    this.navigationNameSelected = navigationName;
  }
}
