import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output() navigationEvent = new EventEmitter<string>(); // create custom navigation event emitter
  navigationLink(navigationName: string) { // corresponds to the event binding that listens to the event passed from user
    this.navigationEvent.emit(navigationName);
  }
}
